import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        hash: true, // <- Enable hash routing
        style: 'https://demotiles.maplibre.org/style.json',
        center: [0, 0],
        zoom: 1,
        maplibreLogo: true
    });

    // Set an interval to update the url hash in a map overlay
    const urlHash = document.getElementById('urlHash');
    setInterval(() => {
        urlHash.textContent = `URL hash: ${window.location.hash}`;
    }, 100);