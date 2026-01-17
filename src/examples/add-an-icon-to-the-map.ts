import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json'
    });

    map.on('load', async () => {
        image = await map.loadImage('https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png');
        map.addImage('cat', image.data);
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
                'icon-image': 'cat',
                'icon-size': 0.25
            }
        });
    });