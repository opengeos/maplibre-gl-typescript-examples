import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [0, 0],
        zoom: 2,
    });

    map.on('style.load', () => {
        map.setProjection({
            type: 'globe', // Set projection to globe
        });
    });

    // To stay consistent with web mercator maps, globe is automatically enlarged when map center is nearing the poles.
    // This keeps the map center visually similar to a mercator map with the same x,y and zoom.
    // However, sometimes we want to negate this effect and keep the globe size consistent even when changing latitudes.
    // This function computes what we need to add the the target zoom level when changing latitude.
    function getZoomAdjustment(oldLatitude, newLatitude) {
        return Math.log2(Math.cos(newLatitude / 180 * Math.PI) / Math.cos(oldLatitude / 180 * Math.PI));
    }

    // Switch back and forth between zooming in and out.
    let zoomIn = false;
    const zoomDelta = 1.5;

    document.getElementById('fly').addEventListener('click', () => {
        // Fly to a random location by offsetting the point -74.50, 40
        // by up to 5 degrees.
        const center = [
            map.getCenter().lng,
            zoomIn ? 0 : 80,
        ];
        const mapZoom = map.getZoom();
        const delta = (zoomIn ? zoomDelta : -zoomDelta);
        // We want to change the map's globe size by some delta and change the center latitude at the same time,
        // thus we need to compensate for the globe enlarging effect described earlier.
        const zoom = map.getZoom() + delta + getZoomAdjustment(map.getCenter().lat, center[1]);
        map.flyTo({
            center,
            zoom,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        zoomIn = !zoomIn;
    });