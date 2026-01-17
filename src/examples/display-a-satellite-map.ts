import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        zoom: 9,
        center: [137.9150899566626, 36.25956997955441],
        style: {
            "version": 8,
            "sources": {
                "satellite": {
                    "type": "raster",
                    "tiles": [
                        "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"
                    ],
                    "tileSize": 256
                }
            },
            "layers": [{
                "id": "satellite",
                "type": "raster",
                "source": "satellite"
            }]
        }
    });