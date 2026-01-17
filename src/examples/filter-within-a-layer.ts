import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const data = {};

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-117, 32],
        zoom: 0,
    });

    map.on('load', () => {
        // add a clustered GeoJSON source for a sample set of earthquakes
        map.addSource('earthquakes', {
            'type': 'geojson',
            'data':
                'https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson'
        });
        // Basic circle and symbol layers earthquakes
        map.addLayer({
            'id': 'earthquakes',
            'type': 'circle',
            'source': 'earthquakes',
            'paint': {
                'circle-color': '#ff0000'
            }
        });
    });

    document.getElementById('nav-filter').addEventListener('change', (e) => {
        let filterOnValue = ['all'];
        let operator = '==';

        switch (e.target.id) {
            /// example: `map.setFilter("earthquakes", ["any", [">", "felt", 16.0]])`
            case 'felt':
                operatorFelt = document.getElementById('operator-felt');
                felt = document.getElementById('range-felt');
                operator = operatorFelt.value;

                e.target.checked ? data.felt = Number(felt.value) : delete data['felt'];

                break;

            /// example: `map.setFilter("earthquakes", ["any", [">", "mag", 5.0]])`
            case 'mag':
                operatorMag = document.getElementById('operator-mag');
                mag = document.getElementById('range-mag');
                operator = operatorMag.value;

                e.target.checked ? data.mag = Number(mag.value) : delete data['mag'];

                break;

            /// example: `map.setFilter("earthquakes", ["any", [">", "tsunami", 0]])`
            case 'tsunami':
                tsunami = document.querySelector('input[type="radio"][name=tsunami]:checked');
                operator = '==';

                e.target.checked ? data.tsunami = Number(tsunami.value) : delete data['tsunami'];

                break;
            default:
                console.log('default');
        }

        filterOnValue = Object.keys(data);

        mapLibreFilterSpread = ['all', ...filterOnValue.map(id => [operator, id, data[id]])];
        mapLibreFilter = mapLibreFilterSpread;

        document.getElementById('filter-result').textContent = JSON.stringify(mapLibreFilter);

        map.setFilter('earthquakes', mapLibreFilter);
    });