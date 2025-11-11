# Photo Gallery Project

A responsive photo gallery web application built with Lit web components, featuring lazy loading, dark mode, and persistent user interactions.

## Features

- 50 photos loaded from Vercel API endpoint
- Instagram-style continuous scroll feed
- Dark mode toggle with localStorage persistence
- Lazy loading with IntersectionObserver
- Like system with count tracking
- Share functionality
- Fully responsive design
- DDD (Data-Driven Design) architecture

## Technology Stack

- Lit - Web components framework
- Vercel - Serverless API hosting
- localStorage - Client-side persistence
- OpenWC - Build tooling

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm start
```

The app will open at http://localhost:3000

## Building

```bash
npm run build
```

## Project Structure

```
├── api/
│   └── photos.js              # Vercel API endpoint (50 photos)
├── lib/
│   ├── photo-card.haxProperties.json
│   └── photo-gallery.haxProperties.json
├── photo-card.js              # Photo card component
├── photo-gallery.js           # Gallery container component
├── index.html                 # Entry point
├── package.json
├── rollup.config.js
├── vercel.json
└── web-dev-server.config.mjs
```

## API Endpoint

`GET /api/photos`

Returns 50 photos with metadata:

```json
{
  "data": [
    {
      "id": 1,
      "title": "Photo Title",
      "thumbnail": "URL",
      "fullsize": "URL",
      "dateTaken": "YYYY-MM-DD",
      "author": {
        "name": "Author Name",
        "image": "URL",
        "userSince": "YYYY-MM-DD",
        "channel": "@username"
      }
    }
  ]
}
```

## Component Features

### photo-gallery
- Fetches data from `/api/photos`
- Maps data to photo-card components
- Dark mode toggle with persistence
- Instagram-style single column feed

### photo-card
- IntersectionObserver lazy loading
- Like button with count tracking
- localStorage persistence
- Share functionality
- Proper alt text for accessibility

## Requirements Met

- Uses DDD (Data-Driven Design)
- Loads from single JSON endpoint
- HAX webcomponent tooling
- Vercel API endpoint
- Mobile responsive
- Dark mode support
- IntersectionObserver lazy loading
- localStorage for state persistence

## Browser Support

Modern browsers with ES6 support:
- Chrome/Edge 80+
- Firefox 75+
- Safari 13.1+

## License

Apache-2.0
