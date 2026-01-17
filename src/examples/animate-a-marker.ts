import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [0, 0],
        zoom: 2
    });

    const marker = new maplibregl.Marker();

    function animateMarker(timestamp) {
        const radius = 20;

        // Update the data to a new position based on the animation timestamp. The
        // divisor in the expression `timestamp / 1000` controls the animation speed.
        marker.setLngLat([
            Math.cos(timestamp / 1000) * radius,
            Math.sin(timestamp / 1000) * radius
        ]);

        // Ensure it's added to the map. This is safe to call if it's already added.
        marker.addTo(map);

        // Request the next frame of the animation.
        requestAnimationFrame(animateMarker);
    }

    // Start the animation.
    requestAnimationFrame(animateMarker);