import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: [-87.6298, 41.8781],
        zoom: 19,
        bearing: -12,
        pitch: 60,
        interactive: false
    });

    // pixels the map pans when the up or down arrow is clicked
    const deltaDistance = 100;

    // degrees the map rotates when the left or right arrow is clicked
    const deltaDegrees = 25;

    function easing(t) {
        return t * (2 - t);
    }

    map.on('load', () => {
        map.getCanvas().focus();

        map.getCanvas().addEventListener(
            'keydown',
            (e) => {
                e.preventDefault();
                if (e.which === 38) {
                    // up
                    map.panBy([0, -deltaDistance], {
                        easing
                    });
                } else if (e.which === 40) {
                    // down
                    map.panBy([0, deltaDistance], {
                        easing
                    });
                } else if (e.which === 37) {
                    // left
                    map.easeTo({
                        bearing: map.getBearing() - deltaDegrees,
                        easing
                    });
                } else if (e.which === 39) {
                    // right
                    map.easeTo({
                        bearing: map.getBearing() + deltaDegrees,
                        easing
                    });
                }
            },
            true
        );
    });