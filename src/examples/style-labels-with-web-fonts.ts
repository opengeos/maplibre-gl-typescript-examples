import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

document.fonts.load("24px 'Rampart One'");
    const map = new maplibregl.Map({
        container: 'map',
        zoom: 9,
        center: [137.9150899566626, 36.25956997955441],
        style: {
            "version": 8,
            "sources": {
                "satellite": {
                    "type": "raster",
                    "tiles": [
                        "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg"
                    ],
                    "tileSize": 256
                },
                "places": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {
                                    "name": "Azumino"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [137.9054972, 36.3044083]
                                }
                            },
                            {
                                "type": "Feature",
                                "properties": {
                                    "name": "Matsumoto"
                                },
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [137.9687141, 36.2382047]
                                }
                            }
                        ]
                    }
                }
            },
            "layers": [
                {
                    "id": "satellite",
                    "type": "raster",
                    "source": "satellite"
                },
                {
                    "id": "places",
                    "type": "symbol",
                    "source": "places",
                    "layout": {
                        "text-font": ["Rampart One"],
                        "text-size": 24,
                        "text-field": ["get", "name"]
                    },
                    "paint": {
                        "text-color": "white"
                    }
                }
            ]
        }
    });