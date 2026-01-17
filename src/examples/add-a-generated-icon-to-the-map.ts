import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json'
    });

    map.on('load', () => {
        const width = 64; // The image will be 64 pixels square
        const bytesPerPixel = 4; // Each pixel is represented by 4 bytes: red, green, blue, and alpha.
        const data = new Uint8Array(width * width * bytesPerPixel);

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < width; y++) {
                const offset = (y * width + x) * bytesPerPixel;
                data[offset + 0] = (y / width) * 255; // red
                data[offset + 1] = (x / width) * 255; // green
                data[offset + 2] = 128; // blue
                data[offset + 3] = 255; // alpha
            }
        }

        map.addImage('gradient', {width, height: width, data});

        map.addSource('point', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [0, 0]
                        }
                    }
                ]
            }
        });
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point',
            'layout': {
                'icon-image': 'gradient'
            }
        });
    });