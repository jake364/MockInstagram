import { LitElement, html, css } from 'lit';
import './photo-card.js';

export class PhotoGallery extends LitElement {
  static get tag() {
    return 'photo-gallery';
  }

  constructor() {
    super();
    this.photos = [];
    this.loading = true;
    this.error = '';
    this.darkMode = false;
  }

  static get properties() {
    return {
      photos: { type: Array },
      loading: { type: Boolean },
      error: { type: String },
      darkMode: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--bg-color, #fafafa);
        transition: background-color 0.3s;
      }

      :host([dark-mode]) {
        --bg-color: #000000;
        --header-bg: #000000;
        --header-text: #ffffff;
        --header-border: #262626;
      }

      :host(:not([dark-mode])) {
        --bg-color: #fafafa;
        --header-bg: #ffffff;
        --header-text: #262626;
        --header-border: #dbdbdb;
      }

      .gallery-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 0;
      }

      .gallery-header {
        position: sticky;
        top: 0;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        background-color: var(--header-bg);
        border-bottom: 1px solid var(--header-border);
      }

      h1 {
        margin: 0;
        color: var(--header-text);
        font-size: 24px;
        font-weight: 600;
      }

      .dark-mode-toggle {
        background: none;
        border: 1px solid var(--header-border);
        border-radius: 6px;
        padding: 8px 16px;
        color: var(--header-text);
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.2s;
      }

      .dark-mode-toggle:hover {
        background-color: var(--header-border);
      }

      .gallery-feed {
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .loading,
      .error {
        text-align: center;
        padding: 60px 20px;
        color: var(--header-text);
        font-size: 16px;
      }

      .error {
        color: #ed4956;
      }

      @media (max-width: 768px) {
        .gallery-container {
          max-width: 100%;
        }

        h1 {
          font-size: 20px;
        }

        .dark-mode-toggle {
          padding: 6px 12px;
          font-size: 12px;
        }
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadPhotos();
    this.loadDarkMode();
  }

  loadDarkMode() {
    const saved = localStorage.getItem('darkMode');
    this.darkMode = saved === 'true';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', this.darkMode);
  }

  async loadPhotos() {
    try {
      const response = await fetch('/api/photos');
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const data = await response.json();
      this.photos = data.data || [];
      this.loading = false;
    } catch (err) {
      console.error('Error loading photos:', err);
      this.error = 'Failed to load photos';
      this.loading = false;
    }
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading photos...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    return html`
      <div class="gallery-header">
        <h1>Photo Gallery</h1>
        <button 
          class="dark-mode-toggle" 
          @click="${this.toggleDarkMode}"
          aria-label="Toggle dark mode"
        >
          ${this.darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div class="gallery-container">
        <div class="gallery-feed">
          ${this.photos.map(photo => html`
            <photo-card .photo="${photo}" ?dark-mode="${this.darkMode}"></photo-card>
          `)}
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('darkMode')) {
      if (this.darkMode) {
        this.setAttribute('dark-mode', '');
      } else {
        this.removeAttribute('dark-mode');
      }
    }
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PhotoGallery.tag, PhotoGallery);
