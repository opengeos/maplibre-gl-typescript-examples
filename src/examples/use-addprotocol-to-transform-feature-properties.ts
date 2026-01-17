import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const protocol = 'reverse';
        maplibregl.addProtocol(protocol, (request) => {
            const url = request.url.replace(protocol + '://', '');
            return fetch(url)
                .then((response) => response.arrayBuffer())
                .then((data) => new VectorTile(new Protobuf(data)))
                .then((tile) => ({
                    layers: Object.entries(tile.layers).reduce((acc, [layerId, layer]) => ({
                        ...acc,
                        [layerId]: {
                            ...layer,
                            feature: (index) => {
                                const feature = layer.feature(index);
                                if (feature.properties && typeof feature.properties['NAME'] === 'string') {
                                    feature.properties['NAME'] = feature.properties['NAME'].split('').reverse().join('');
                                }
                                if (feature.properties && typeof feature.properties['ABBREV'] === 'string') {
                                    feature.properties['ABBREV'] = feature.properties['ABBREV'].split('').reverse().join('');
                                }
                                return feature;
                            }
                        }
                    }), {})
                }))
                .then((tile) => tileToProtobuf(tile).buffer)
                .then((data) => ({ data }));
        });

        const map = new maplibregl.Map({
            container: 'map',
            style: 'https://demotiles.maplibre.org/style.json',
            center: [8, 47],
            zoom: 5,
            hash: 'map'
        });

        map.setTransformRequest((url, resourceType) => {
            if (url.startsWith('https://demotiles.maplibre.org/tiles/') && resourceType === 'Tile') {
                return { url: protocol + '://' + url };
            }
            return undefined;
        });