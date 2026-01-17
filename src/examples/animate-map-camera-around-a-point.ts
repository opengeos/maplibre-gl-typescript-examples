import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: [-87.62712, 41.89033],
        zoom: 15.5,
        pitch: 45
    });

    function rotateCamera(timestamp) {
        // clamp the rotation between 0 -360 degrees
        // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
        map.rotateTo((timestamp / 100) % 360, {duration: 0});
        // Request the next frame of the animation.
        requestAnimationFrame(rotateCamera);
    }

    map.on('load', () => {
        // Start the animation.
        rotateCamera(0);

        // Add 3d buildings and remove label layers to enhance the map
        const layers = map.getStyle().layers;
        for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                // remove text labels
                map.removeLayer(layers[i].id);
            }
        }
    });