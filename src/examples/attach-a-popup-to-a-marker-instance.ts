import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const monument = [-77.0353, 38.8895];
    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: monument,
        zoom: 5
    });

    // create the popup
    const popup = new maplibregl.Popup({offset: 25}).setText(
        'Construction on the Washington Monument began in 1848.'
    );

    // create DOM element for the marker
    const el = document.createElement('div');
    el.id = 'marker';

    // create the marker
    new maplibregl.Marker({element: el})
        .setLngLat(monument)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);