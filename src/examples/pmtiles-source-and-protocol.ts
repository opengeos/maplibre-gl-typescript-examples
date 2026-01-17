import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as pmtiles from 'pmtiles';

// add the PMTiles plugin to the maplibregl global.
    const protocol = new pmtiles.Protocol();
    maplibregl.addProtocol('pmtiles', protocol.tile);

    const PMTILES_URL = 'https://pmtiles.io/protomaps(vector)ODbL_firenze.pmtiles';

    const p = new pmtiles.PMTiles(PMTILES_URL);

    // this is so we share one instance across the JS code and the map renderer
    protocol.add(p);

    // we first fetch the header so we can get the center lon, lat of the map.
    p.getHeader().then(h => {
        const map = new maplibregl.Map({
            container: 'map',
            zoom: h.maxZoom - 2,
            center: [h.centerLon, h.centerLat],
            style: {
                version: 8,
                sources: {
                    'example_source': {
                        type: 'vector',
                        url: `pmtiles://${PMTILES_URL}`,
                        attribution: '© <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
                    }
                },
                layers: [
                    {
                        'id': 'buildings',
                        'source': 'example_source',
                        'source-layer': 'landuse',
                        'type': 'fill',
                        'paint': {
                            'fill-color': 'steelblue'
                        }
                    },
                    {
                        'id': 'roads',
                        'source': 'example_source',
                        'source-layer': 'roads',
                        'type': 'line',
                        'paint': {
                            'line-color': 'black'
                        }
                    },
                    {
                        'id': 'mask',
                        'source': 'example_source',
                        'source-layer': 'mask',
                        'type': 'fill',
                        'paint': {
                            'fill-color': 'white'
                        }
                    }
                ]
            }
        });
    });