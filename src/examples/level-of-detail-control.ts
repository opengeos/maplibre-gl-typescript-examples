import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function setLodParamsFromUi() {
        map.setSourceTileLodParams(document.getElementById('max-zoom-levels-slider').value, document.getElementById('tile-count-ratio-slider').value);
        document.getElementById('max-zoom-levels-value').textContent = document.getElementById('max-zoom-levels-slider').value;
        document.getElementById('tile-count-ratio-value').textContent = document.getElementById('tile-count-ratio-slider').value;
    }
    const map = (window.map = new maplibregl.Map({
        container: 'map',
        zoom: 12,
        center: [0,0],
        pitch: 77,
        hash: true,
        style: {
            version: 8,
            sources: {
                numbers: {
                    type: 'raster',
                    url: 'https://demotiles.maplibre.org/debug-tiles/number/tiles.json',
                    tileSize: 256,
                    maxzoom: 19
                }
            },
            layers: [
                {
                    id: 'numbers',
                    type: 'raster',
                    source: 'numbers'
                }
            ]
        },
        maxZoom: 22,
        maxPitch: 85
    }));
    map.on('load', () => {
        document.getElementById('max-zoom-levels-slider').addEventListener('change', setLodParamsFromUi);
        document.getElementById('tile-count-ratio-slider').addEventListener('change', setLodParamsFromUi);
        setLodParamsFromUi();
    });