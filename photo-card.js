import { LitElement, html, css } from 'lit';

export class PhotoCard extends LitElement {
  static get tag() {
    return 'photo-card';
  }

  constructor() {
    super();
    this.photo = null;
    this.isVisible = false;
    this.isLiked = false;
    this.likeCount = 0;
    this.observer = null;
    this.darkMode = false;
  }

  static get properties() {
    return {
      photo: { type: Object },
      isVisible: { type: Boolean },
      isLiked: { type: Boolean },
      likeCount: { type: Number },
      darkMode: { type: Boolean, reflect: true, attribute: 'dark-mode' }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        background-color: var(--card-bg, #ffffff);
        border-bottom: 1px solid var(--border-color, #dbdbdb);
        transition: background-color 0.3s, border-color 0.3s;
      }

      :host([dark-mode]) {
        --card-bg: #000000;
        --border-color: #262626;
        --text-primary: #ffffff;
        --text-secondary: #a8a8a8;
        --button-hover: #262626;
      }

      :host(:not([dark-mode])) {
        --card-bg: #ffffff;
        --border-color: #dbdbdb;
        --text-primary: #262626;
        --text-secondary: #8e8e8e;
        --button-hover: #fafafa;
      }

      .card-header {
        display: flex;
        align-items: center;
        padding: 14px 16px;
        gap: 10px;
      }

      .author-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }

      .author-info {
        flex: 1;
      }

      .author-name {
        font-weight: 600;
        margin: 0;
        font-size: 14px;
        color: var(--text-primary);
      }

      .author-channel {
        color: var(--text-secondary);
        font-size: 12px;
        margin: 0;
      }

      .image-container {
        width: 100%;
        aspect-ratio: 1;
        background-color: var(--card-bg);
        position: relative;
        overflow: hidden;
      }

      .photo-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .loading-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
        font-size: 14px;
      }

      .card-actions {
        padding: 12px 16px;
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .action-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        font-size: 14px;
        font-weight: 600;
        color: var(--text-primary);
        transition: color 0.2s;
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .action-button:hover {
        color: var(--text-secondary);
      }

      .action-button.liked {
        color: #ed4956;
      }

      .like-count {
        font-size: 14px;
        color: var(--text-primary);
        font-weight: 600;
      }

      .card-info {
        padding: 0 16px 16px;
      }

      .photo-title {
        font-weight: 600;
        margin: 0 0 8px;
        font-size: 14px;
        color: var(--text-primary);
      }

      .photo-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: var(--text-secondary);
      }

      .photo-date {
        margin: 0;
      }

      @media (max-width: 768px) {
        .image-container {
          aspect-ratio: 4/3;
        }
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadLikeState();
    this.setupObserver();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      },
      { rootMargin: '50px' }
    );
    this.observer.observe(this);
  }

  loadLikeState() {
    if (!this.photo) return;
    const likes = JSON.parse(localStorage.getItem('photoLikes') || '{}');
    const photoData = likes[this.photo.id];
    
    if (photoData) {
      this.isLiked = photoData.liked || false;
      this.likeCount = photoData.count || 0;
    } else {
      this.isLiked = false;
      this.likeCount = Math.floor(Math.random() * 100);
    }
  }

  saveLikeState() {
    if (!this.photo) return;
    const likes = JSON.parse(localStorage.getItem('photoLikes') || '{}');
    likes[this.photo.id] = {
      liked: this.isLiked,
      count: this.likeCount
    };
    localStorage.setItem('photoLikes', JSON.stringify(likes));
  }

  handleLike() {
    if (this.isLiked) {
      this.isLiked = false;
      this.likeCount = Math.max(0, this.likeCount - 1);
    } else {
      this.isLiked = true;
      this.likeCount += 1;
    }
    this.saveLikeState();
  }

  async handleShare() {
    const shareData = {
      title: this.photo.title,
      text: `Check out: ${this.photo.title}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard');
    }
  }

  render() {
    if (!this.photo) {
      return html`<div>Loading...</div>`;
    }

    return html`
      <div class="card-header">
        <img 
          class="author-avatar" 
          src="${this.photo.author.image}" 
          alt="Profile photo of ${this.photo.author.name}"
        />
        <div class="author-info">
          <p class="author-name">${this.photo.author.name}</p>
          <p class="author-channel">${this.photo.author.channel}</p>
        </div>
      </div>

      <div class="image-container">
        ${this.isVisible
          ? html`<img 
              class="photo-image" 
              src="${this.photo.fullsize}" 
              alt="${this.photo.title} by ${this.photo.author.name}"
              loading="lazy"
            />`
          : html`<div class="loading-placeholder">Loading image...</div>`
        }
      </div>

      <div class="card-actions">
        <button 
          class="action-button ${this.isLiked ? 'liked' : ''}" 
          @click="${this.handleLike}"
          aria-label="${this.isLiked ? 'Unlike' : 'Like'} photo"
        >
          ${this.isLiked ? 'Unlike' : 'Like'}
        </button>
        <span class="like-count">${this.likeCount} likes</span>
        <button 
          class="action-button" 
          @click="${this.handleShare}"
          aria-label="Share photo"
        >
          Share
        </button>
      </div>

      <div class="card-info">
        <p class="photo-title">${this.photo.title}</p>
        <div class="photo-meta">
          <p class="photo-date">${this.photo.dateTaken}</p>
          <p class="author-channel">by ${this.photo.author.name}</p>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PhotoCard.tag, PhotoCard);
