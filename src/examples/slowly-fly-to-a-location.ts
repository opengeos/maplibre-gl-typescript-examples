import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const start = [-74.5, 40];
    const end = [74.5, 40];
    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: start,
        zoom: 9
    });

    let isAtStart = true;

    document.getElementById('fly').addEventListener('click', () => {
        // depending on whether we're currently at point a or b, aim for
        // point a or b
        const target = isAtStart ? end : start;

        // and now we're at the opposite point
        isAtStart = !isAtStart;

        map.flyTo({
            // These options control the ending camera position: centered at
            // the target, at zoom level 9, and north up.
            center: target,
            zoom: 9,
            bearing: 0,

            // These options control the flight curve, making it move
            // slowly and zoom out almost completely before starting
            // to pan.
            speed: 0.2, // make the flying slow
            curve: 1, // change the speed at which it zooms out

            // This can be any easing function: it takes a number between
            // 0 and 1 and returns another number between 0 and 1.
            easing (t) {
                return t;
            },

            // this animation is considered essential with respect to prefers-reduced-motion
            essential: true
        });
    });