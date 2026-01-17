import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const center = [-77.01866, 38.888];
    const map = new maplibregl.Map({
        container: 'map',
        zoom: 4,
        center,
        pitch: 60,
        style: 'https://demotiles.maplibre.org/style.json'
    });

    new maplibregl.Marker().setLngLat(center).addTo(map);

    function toggleSidebar(id) {
        const elem = document.getElementById(id);
        const classes = elem.className.split(' ');
        const collapsed = classes.indexOf('collapsed') !== -1;

        const padding = {};

        if (collapsed) {
            // Remove the 'collapsed' class from the class list of the element, this sets it back to the expanded state.
            classes.splice(classes.indexOf('collapsed'), 1);

            padding[id] = 300; // In px, matches the width of the sidebars set in .sidebar CSS class
            map.easeTo({
                padding,
                duration: 1000 // In ms, CSS transition duration property for the sidebar matches this value
            });
        } else {
            padding[id] = 0;
            // Add the 'collapsed' class to the class list of the element
            classes.push('collapsed');

            map.easeTo({
                padding,
                duration: 1000
            });
        }

        // Update the class list on the element
        elem.className = classes.join(' ');
    }

    map.on('load', () => {
        toggleSidebar('left');
    });