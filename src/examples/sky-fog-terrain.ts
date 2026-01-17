import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function setSkyFromUi() {
        if (!document.getElementById('sky-enabled').checked) {
            map.setSky(undefined);
            return;
        }
        map.setSky({
            'sky-color': document.getElementById('sky-color-picker').value,
            'sky-horizon-blend': +document.getElementById('sky-horizon-blend-slider').value,
            'horizon-color': document.getElementById('horizon-color-picker').value,
            'horizon-fog-blend': +document.getElementById('horizon-fog-blend-slider').value,
            'fog-color': document.getElementById('fog-color-picker').value,
            'fog-ground-blend': +document.getElementById('fog-ground-blend-slider').value
        });
    }

    const map = (window.map = new maplibregl.Map({
        container: 'map',
        zoom: 12,
        center: [11.2953, 47.5479],
        pitch: 77,
        hash: true,
        style: {
            version: 8,
            sources: {
                osm: {
                    type: 'raster',
                    tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    attribution: '&copy; OpenStreetMap Contributors',
                    maxzoom: 19
                },
                // Use a different source for terrain and hillshade layers, to improve render quality
                terrainSource: {
                    type: 'raster-dem',
                    url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
                    tileSize: 256
                },
                hillshadeSource: {
                    type: 'raster-dem',
                    url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
                    tileSize: 256
                }
            },
            layers: [
                {
                    id: 'osm',
                    type: 'raster',
                    source: 'osm'
                },
                {
                    id: 'hills',
                    type: 'hillshade',
                    source: 'hillshadeSource',
                    layout: {visibility: 'visible'},
                    paint: {'hillshade-shadow-color': '#473B24'}
                }
            ],
            terrain: {
                source: 'terrainSource',
                exaggeration: 1
            }
        },
        maxZoom: 18,
        maxPitch: 85
    }));

    map.addControl(
        new maplibregl.NavigationControl({
            visualizePitch: true,
            showZoom: true,
            showCompass: true
        })
    );


    map.addControl(
        new maplibregl.GlobeControl()
    );


    map.addControl(
        new maplibregl.TerrainControl({
            source: 'terrainSource',
            exaggeration: 1
        })
    );
    map.on('load', () => {
        document.getElementById('sky-color-picker').addEventListener('change', setSkyFromUi);
        document.getElementById('horizon-color-picker').addEventListener('change', setSkyFromUi);
        document.getElementById('fog-color-picker').addEventListener('change', setSkyFromUi);
        document.getElementById('sky-horizon-blend-slider').addEventListener('change', setSkyFromUi);
        document.getElementById('horizon-fog-blend-slider').addEventListener('change', setSkyFromUi);
        document.getElementById('fog-ground-blend-slider').addEventListener('change', setSkyFromUi);
        document.getElementById('sky-enabled').addEventListener('change', setSkyFromUi);
        setSkyFromUi();
    });