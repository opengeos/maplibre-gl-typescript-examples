import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

/* cSpell:disable */
    const spanishLocale = {
        'AttributionControl.ToggleAttribution': 'Alternar atribución',
        'AttributionControl.MapFeedback': 'Comentarios del mapa',
        'FullscreenControl.Enter': 'Entrar en pantalla completa',
        'FullscreenControl.Exit': 'Salir de pantalla completa',
    };
    /* cSpell:enable */

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-74.5, 40],
        zoom: 4,
        locale: spanishLocale,
    });

    const fullscreenControl = new maplibregl.FullscreenControl();
    map.addControl(fullscreenControl, 'top-left');