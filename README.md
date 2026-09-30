# zenso-plugin-image

> Generic Image & Photo Display Plugin for [zenso.ink](https://zenso.ink) e-ink dashboards.

Display any dynamic photo, webcam capture, weather radar, or photo feed on your Zenso e-ink screen.

## ✨ Features

- **Any Image URL**: Supports direct URLs (`.jpg`, `.png`, `.webp`, `.svg`, etc.) or image-generating endpoints like [Picsum](https://picsum.photos) or [Unsplash Source](https://unsplash.com).
- **Immich & Self-Hosted Galleries**: Seamlessly display thumbnails or shared links from self-hosted services like Immich, Photoprism, or Nextcloud (LAN access supported).
- **Fit Options**:
  - `cover`: Fills the entire display frame (crops edges to avoid letterboxes).
  - `contain`: Preserves the complete aspect ratio centered on screen.
- **Grayscale Filter**: Optional high-contrast monochrome mode optimized for e-ink panels.
- **Offline & Private**: Rendered securely through `zenso-api`'s SSRF-guarded image pipeline with base64 conversion.

## ⚙️ Configuration

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `url` | `string` (URI) | *required* | Image URL to fetch and display |
| `fit` | `enum` (`cover`, `contain`) | `"cover"` | Layout mode: fill or letterbox |
| `grayscale` | `boolean` | `false` | Apply monochrome contrast filter for e-ink |

### Example Configurations

#### Random Photo from Picsum:
```json
{
  "url": "https://picsum.photos/800/480",
  "fit": "cover",
  "grayscale": false
}
```

#### Immich Shared Thumbnail:
```json
{
  "url": "http://192.168.1.50:2283/api/assets/YOUR_ASSET_ID/thumbnail",
  "fit": "contain",
  "grayscale": false
}
```

## 🛠️ Local Development

Install dependencies:
```bash
npm install
```

Start the Vite dev server with mock data:
```bash
npm run dev
```

Build the release archive (`plugin.zip`):
```bash
npm run build
```

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

As an official Zenso plugin, this repository serves as a permissive reference implementation for building widgets with the Zenso platform.
