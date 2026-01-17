import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// declare various easing functions.
    // easing functions mathematically describe
    // how fast a value changes during an animation.
    // each function takes a parameter t that represents
    // the progress of the animation.
    // t is in a range of 0 to 1 where 0 is the initial
    // state and 1 is the completed state.
    const easingFunctions = {
    // start slow and gradually increase speed
        easeInCubic (t) {
            return t * t * t;
        },
        // start fast with a long, slow wind-down
        easeOutQuint (t) {
            return 1 - Math.pow(1 - t, 5);
        },
        // slow start and finish with fast middle
        easeInOutCirc (t) {
            return t < 0.5 ?
                (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 :
                (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;
        },
        // fast start with a "bounce" at the end
        easeOutBounce (t) {
            const n1 = 7.5625;
            const d1 = 2.75;

            if (t < 1 / d1) {
                return n1 * t * t;
            } else if (t < 2 / d1) {
                return n1 * (t -= 1.5 / d1) * t + 0.75;
            } else if (t < 2.5 / d1) {
                return n1 * (t -= 2.25 / d1) * t + 0.9375;
            } else {
                return n1 * (t -= 2.625 / d1) * t + 0.984375;
            }
        }
    };

    // set up some helpful UX on the form
    const durationValueSpan = document.getElementById('durationValue');
    const durationInput = document.getElementById('duration');
    durationValueSpan.innerHTML = `${durationInput.value / 1000} seconds`;
    durationInput.addEventListener('change', (e) => {
        durationValueSpan.innerHTML = `${e.target.value / 1000} seconds`;
    });

    const animateLabel = document.getElementById('animateLabel');
    const animateValue = document.getElementById('animate');
    animateValue.addEventListener('change', (e) => {
        animateLabel.innerHTML = e.target.checked ? 'Yes' : 'No';
    });

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-95, 40],
        zoom: 3
    });

    map.on('load', () => {
        // add a layer to display the map's center point
        map.addSource('center', {
            'type': 'geojson',
            'data': {
                'type': 'Point',
                'coordinates': [-94, 40]
            }
        });
        map.addLayer({
            'id': 'center',
            'type': 'symbol',
            'source': 'center',
            'layout': {
                'text-field': 'Center: [-94, 40]',
                'text-font': ['Noto Sans Regular'],
                'text-offset': [0, 0.6],
                'text-anchor': 'top'
            }
        });
        map.addLayer({
            'id': 'center-circle',
            'type': 'circle',
            'source': 'center',
            'paint': {
                'circle-radius': 6,
                'circle-color': '#007cbf'
            }
        });

        const animateButton = document.getElementById('animateButton');
        animateButton.addEventListener('click', () => {
            const easingInput = document.getElementById('easing');
            const easingFn =
            easingFunctions[
                easingInput.options[easingInput.selectedIndex].value
            ];
            const duration = parseInt(durationInput.value, 10);
            const animate = animateValue.checked;
            const offsetX = parseInt(
                document.getElementById('offset-x').value,
                10
            );
            const offsetY = parseInt(
                document.getElementById('offset-y').value,
                10
            );

            const animationOptions = {
                duration,
                easing: easingFn,
                offset: [offsetX, offsetY],
                animate,
                essential: true // animation will happen even if user has `prefers-reduced-motion` setting on
            };

            // Create a random location to fly to by offsetting the map's
            // initial center point by up to 10 degrees.
            const center = [
                -95 + (Math.random() - 0.5) * 20,
                40 + (Math.random() - 0.5) * 20
            ];

            // merge animationOptions with other flyTo options
            animationOptions.center = center;

            map.flyTo(animationOptions);
            // update 'center' source and layer to show our new map center
            // compare this center point to where the camera ends up when an offset is applied
            map.getSource('center').setData({
                'type': 'Point',
                'coordinates': center
            });
            map.setLayoutProperty(
                'center',
                'text-field',
                `Center: [${
                    center[0].toFixed(1)
                }, ${
                    center[1].toFixed(1)
                }]`
            );
        });
    });