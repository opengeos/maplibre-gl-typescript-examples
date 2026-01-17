import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-74.5, 40],
        zoom: 9
    });

    document.getElementById('fly').addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        map.flyTo({
            center: [
                -74.5 + (Math.random() - 0.5) * 10,
                40 + (Math.random() - 0.5) * 10
            ],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });