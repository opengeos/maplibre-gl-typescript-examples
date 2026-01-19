# MapLibre GL JS TypeScript Examples

A comprehensive collection of **129 interactive examples** demonstrating MapLibre GL JS features, converted to TypeScript.

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/p/github/opengeos/maplibre-gl-typescript-examples)
[![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?logo=stackblitz)](https://stackblitz.com/github/opengeos/maplibre-gl-typescript-examples)

![MapLibre GL JS](https://maplibre.org/img/maplibre-logo-big.svg)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/opengeos/maplibre-gl-typescript-examples
cd maplibre-gl-typescript-examples

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

This will start a local development server at `http://localhost:5173`. The landing page shows all available examples with search and filtering capabilities.

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## 📚 Examples Categories

| Category | Description |
|----------|-------------|
| **Basics** | Getting started with maps, markers, popups |
| **Layers** | Adding and styling various layer types |
| **3D** | Terrain, buildings, 3D models with Three.js |
| **Animation** | Animating markers, lines, camera movements |
| **Interaction** | Mouse events, dragging, filtering |
| **Controls** | Navigation, geolocation, fullscreen |
| **Data** | Real-time data, clustering, GeoJSON |
| **Globe** | Globe projection examples |
| **Plugins** | deck.gl, Turf.js, PMTiles, etc. |

## 🛠️ Tech Stack

- **MapLibre GL JS** - Open-source map rendering library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Three.js** - 3D graphics library
- **deck.gl** - WebGL-powered data visualization
- **Turf.js** - Geospatial analysis

## 📦 Dependencies

The examples use the following main dependencies:

```json
{
  "maplibre-gl": "^5.15.0",
  "three": "^0.169.0",
  "@babylonjs/core": "^7.0.0",
  "deck.gl": "^8.9.33",
  "@turf/turf": "^7.0.0",
  "d3": "^7.0.0",
  "pmtiles": "^3.2.0"
}
```

## 🚢 Deployment

The examples are automatically deployed to GitHub Pages on push to the main branch.

### Manual Deployment

1. Build the project: `npm run build`
2. The `dist/` folder contains the static files
3. Deploy to any static hosting service

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- [MapLibre GL JS Documentation](https://maplibre.org/maplibre-gl-js/docs/)
- [MapLibre Style Specification](https://maplibre.org/maplibre-style-spec/)
- [MapLibre GitHub](https://github.com/maplibre/maplibre-gl-js)

## 💡 Credits

This project is inspired by the [MapLibre GL JS Examples](https://github.com/maplibre/maplibre-gl-js/tree/main/test/examples). Credit to the MapLibre team for their great work.