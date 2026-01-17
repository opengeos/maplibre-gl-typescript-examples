import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
        center: [179, 0], // starting position [lng, lat]
        zoom: 0.01 // starting zoom
    });

    const renderOptions = document.getElementById('menu');
    const inputs = renderOptions.getElementsByTagName('input');

    function switchRenderOption(option) {
        const status = option.target.id;
        map.setRenderWorldCopies(status === 'true');
        map.panTo(map.getCenter());
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchRenderOption;
    }