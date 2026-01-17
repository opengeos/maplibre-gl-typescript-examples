interface Example {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

const examples: Example[] = [
  { id: "3d-terrain", title: "3D Terrain", description: "Go beyond hillshade and show elevation in actual 3D.", category: "3d", tags: ["terrain", "elevation"] },
  { id: "add-a-3d-model-to-globe-using-threejs", title: "Add a 3D model to globe using three.js", description: "Use a custom style layer with three.js to add a 3D model to a globe.", category: "3d", tags: ["three.js", "globe", "model"] },
  { id: "add-a-3d-model-using-threejs", title: "Add a 3D model using three.js", description: "Use a custom style layer with three.js to add a 3D model to the map.", category: "3d", tags: ["three.js", "model", "custom-layer"] },
  { id: "add-a-3d-model-with-babylonjs", title: "Add a 3D model with babylon.js", description: "Use a custom style layer with babylon.js to add a 3D model to the map.", category: "3d", tags: ["babylon.js", "model"] },
  { id: "add-a-3d-model-with-shadow-using-threejs", title: "Add a 3D model with shadow using three.js", description: "Use a custom style layer with three.js to add a 3D model with shadow to the map.", category: "3d", tags: ["three.js", "shadow"] },
  { id: "add-a-canvas-source", title: "Add a canvas source", description: "Add a canvas source to the map.", category: "layers", tags: ["canvas", "source"] },
  { id: "add-a-cog-raster-source", title: "Add a COG raster source", description: "Add an external Cloud Optimized Geotiff (COG) as source.", category: "layers", tags: ["cog", "raster", "geotiff"] },
  { id: "add-a-color-relief-layer", title: "Add a color relief layer", description: "Add a color relief layer.", category: "layers", tags: ["relief", "terrain"] },
  { id: "add-a-custom-layer-with-tiles-to-a-globe", title: "Add a custom layer with tiles to a globe", description: "Use custom layer to display arbitrary tiles drawn with a custom WebGL shader on a globe.", category: "globe", tags: ["webgl", "custom-layer", "tiles"] },
  { id: "add-a-custom-style-layer", title: "Add a custom style layer", description: "Use a custom style layer to render custom WebGL content.", category: "layers", tags: ["webgl", "custom-layer"] },
  { id: "add-a-default-marker", title: "Add a default marker", description: "Add a default marker to the map.", category: "basics", tags: ["marker"] },
  { id: "add-a-generated-icon-to-the-map", title: "Add a generated icon to the map", description: "Add an icon to the map that was generated at runtime.", category: "layers", tags: ["icon", "canvas"] },
  { id: "add-a-geojson-line", title: "Add a GeoJSON line", description: "Add a GeoJSON line to a map using addSource, then style it using addLayer's paint properties.", category: "layers", tags: ["geojson", "line"] },
  { id: "add-a-geojson-polygon", title: "Add a GeoJSON polygon", description: "Style a polygon with the fill layer type.", category: "layers", tags: ["geojson", "polygon", "fill"] },
  { id: "add-a-hillshade-layer", title: "Add a hillshade layer", description: "Add a simple hillshade layer.", category: "layers", tags: ["hillshade", "terrain"] },
  { id: "add-a-multidirectional-hillshade-layer", title: "Add a multidirectional hillshade layer", description: "Add a hillshade layer with multiple illumination sources.", category: "layers", tags: ["hillshade", "terrain"] },
  { id: "add-a-new-layer-below-labels", title: "Add a new layer below labels", description: "Use the second argument of addLayer to add a layer below labels.", category: "layers", tags: ["layer-order"] },
  { id: "add-a-pattern-to-a-polygon", title: "Add a pattern to a polygon", description: "Use fill-pattern to draw a polygon from a repeating image pattern.", category: "layers", tags: ["pattern", "fill"] },
  { id: "add-a-raster-tile-source", title: "Add a raster tile source", description: "Add a third-party raster source to the map.", category: "layers", tags: ["raster", "tiles"] },
  { id: "add-a-simple-custom-layer-on-a-globe", title: "Add a simple custom layer on a globe", description: "Use a custom layer to draw simple WebGL content on a globe.", category: "globe", tags: ["webgl", "custom-layer"] },
  { id: "add-a-stretchable-image-to-the-map", title: "Add a stretchable image to the map", description: "Use a stretchable image as a background for text.", category: "layers", tags: ["image", "stretchable"] },
  { id: "add-a-vector-tile-source", title: "Add a vector tile source", description: "Add a vector source to a map.", category: "layers", tags: ["vector", "tiles"] },
  { id: "add-a-video", title: "Add a video", description: "Display a video on top of a satellite raster baselayer.", category: "layers", tags: ["video", "media"] },
  { id: "add-a-wms-source", title: "Add a WMS source", description: "Add an external Web Map Service raster layer to the map using addSource's tiles option.", category: "layers", tags: ["wms", "raster"] },
  { id: "add-an-animated-icon-to-the-map", title: "Add an animated icon to the map", description: "Add an animated icon to the map that was generated at runtime with the Canvas API.", category: "animation", tags: ["icon", "canvas", "animation"] },
  { id: "add-an-icon-to-the-map", title: "Add an icon to the map", description: "Add an icon to the map from an external URL and use it in a symbol layer.", category: "layers", tags: ["icon", "symbol"] },
  { id: "add-contour-lines", title: "Add Contour Lines", description: "Add contour lines to your map from a raster-dem source.", category: "layers", tags: ["contour", "terrain"] },
  { id: "add-custom-icons-with-markers", title: "Add custom icons with Markers", description: "Add custom marker icons to your map.", category: "basics", tags: ["marker", "icon"] },
  { id: "add-live-realtime-data", title: "Add live realtime data", description: "Use realtime GeoJSON data streams to move a symbol on your map.", category: "data", tags: ["realtime", "geojson"] },
  { id: "add-multiple-geometries-from-one-geojson-source", title: "Add multiple geometries from one GeoJSON source", description: "Add a polygon and circle layer from the same GeoJSON source.", category: "layers", tags: ["geojson", "multiple"] },
  { id: "add-support-for-right-to-left-scripts", title: "Add support for right-to-left scripts", description: "Use the mapbox-gl-rtl-text plugin to support right-to-left languages such as Arabic and Hebrew.", category: "plugins", tags: ["rtl", "i18n"] },
  { id: "adding-3d-models-using-threejs-on-terrain", title: "Adding 3D models using three.js on terrain", description: "Use a custom style layer with three.js to add 3D models to a map with 3d terrain.", category: "3d", tags: ["three.js", "terrain", "model"] },
  { id: "animate-a-line", title: "Animate a line", description: "Animate a line by updating a GeoJSON source on each frame.", category: "animation", tags: ["line", "geojson"] },
  { id: "animate-a-marker", title: "Animate a marker", description: "Animate the position of a marker by updating its location on each frame.", category: "animation", tags: ["marker"] },
  { id: "animate-a-point-along-a-route", title: "Animate a point along a route", description: "Use Turf to smoothly animate a point along the distance of a line.", category: "animation", tags: ["turf", "route"] },
  { id: "animate-a-point", title: "Animate a point", description: "Animate the position of a point by updating a GeoJSON source on each frame.", category: "animation", tags: ["point", "geojson"] },
  { id: "animate-a-series-of-images", title: "Animate a series of images", description: "Use a series of image sources to create an animation.", category: "animation", tags: ["images"] },
  { id: "animate-map-camera-around-a-point", title: "Animate map camera around a point", description: "Animate the map camera around a point.", category: "animation", tags: ["camera"] },
  { id: "animate-symbol-to-follow-the-mouse", title: "Animate symbol to follow the mouse", description: "Animate symbol to follow the mouse.", category: "animation", tags: ["symbol", "mouse"] },
  { id: "attach-a-popup-to-a-marker-instance", title: "Attach a popup to a marker instance", description: "Attach a popup to a marker and display it on click.", category: "basics", tags: ["popup", "marker"] },
  { id: "center-the-map-on-a-clicked-symbol", title: "Center the map on a clicked symbol", description: "Use events and flyTo to center the map on a symbol.", category: "interaction", tags: ["click", "flyTo"] },
  { id: "change-a-layers-color-with-buttons", title: "Change a layer's color with buttons", description: "Use setPaintProperty to change a layer's fill color.", category: "interaction", tags: ["paint", "color"] },
  { id: "change-a-maps-language", title: "Change a map's language", description: "Use setLayoutProperty to switch languages dynamically.", category: "interaction", tags: ["language", "i18n"] },
  { id: "change-building-color-based-on-zoom-level", title: "Change building color based on zoom level", description: "Use the interpolate expression to ease-in the building layer and smoothly fade from one color to the next.", category: "layers", tags: ["expression", "zoom"] },
  { id: "change-the-case-of-labels", title: "Change the case of labels", description: "Use the upcase and downcase expressions to change the case of labels.", category: "layers", tags: ["expression", "text"] },
  { id: "change-the-default-position-for-attribution", title: "Change the default position for attribution", description: "Place attribution in the top-left position when initializing a map.", category: "controls", tags: ["attribution"] },
  { id: "check-if-webgl-is-supported", title: "Check if WebGL is supported", description: "Check for WebGL browser support.", category: "basics", tags: ["webgl"] },
  { id: "cooperative-gestures", title: "Cooperative gestures", description: "Enable cooperative gestures. See how it behaves in fullscreen mode.", category: "interaction", tags: ["gestures"] },
  { id: "create-a-draggable-marker", title: "Create a draggable Marker", description: "Drag the marker to a new location on a map and populate its coordinates in a display.", category: "interaction", tags: ["marker", "drag"] },
  { id: "create-a-draggable-point", title: "Create a draggable point", description: "Drag the point to a new location on a map and populate its coordinates in a display.", category: "interaction", tags: ["point", "drag"] },
  { id: "create-a-gradient-dashed-line-using-an-expression", title: "Create a gradient line with dasharray using an expression", description: "Use the line-gradient and line-dasharray paint properties together to create a dashed line with gradient colors.", category: "layers", tags: ["gradient", "line", "expression"] },
  { id: "create-a-gradient-line-using-an-expression", title: "Create a gradient line using an expression", description: "Use the line-gradient paint property and an expression to visualize distance from the starting point of a line.", category: "layers", tags: ["gradient", "line", "expression"] },
  { id: "create-a-heatmap-layer", title: "Create a heatmap layer", description: "Visualize earthquake frequency by location using a heatmap layer.", category: "layers", tags: ["heatmap"] },
  { id: "create-a-heatmap-layer-on-a-globe-with-terrain-elevation", title: "Create a Heatmap layer on a globe with terrain elevation", description: "Create a Heatmap layer on a globe with terrain elevation.", category: "globe", tags: ["heatmap", "terrain"] },
  { id: "create-a-hover-effect", title: "Create a hover effect", description: "Use events and feature states to create a per feature hover effect.", category: "interaction", tags: ["hover", "feature-state"] },
  { id: "create-a-time-slider", title: "Create a time slider", description: "Visualize earthquakes with a range slider.", category: "interaction", tags: ["slider", "filter"] },
  { id: "create-and-style-clusters", title: "Create and style clusters", description: "Use MapLibre GL JS' built-in functions to visualize points as clusters.", category: "data", tags: ["cluster"] },
  { id: "create-deckgl-layer-using-rest-api", title: "Create deck.gl layer using REST API", description: "Create a deck.gl layer as an overlay from a REST API.", category: "plugins", tags: ["deck.gl", "api"] },
  { id: "customize-camera-animations", title: "Customize camera animations", description: "Customize camera animations using AnimationOptions.", category: "animation", tags: ["camera"] },
  { id: "customize-the-map-transform-constrain", title: "Customize the map transform constrain", description: "Customize the constrain callback of the map transform. For example, to allow users to underzoom and overpan the bounds.", category: "interaction", tags: ["transform"] },
  { id: "disable-map-rotation", title: "Disable map rotation", description: "Prevent users from rotating a map.", category: "interaction", tags: ["rotation"] },
  { id: "disable-scroll-zoom", title: "Disable scroll zoom", description: "Prevent scroll from zooming a map.", category: "interaction", tags: ["zoom", "scroll"] },
  { id: "display-a-globe-with-a-fill-extrusion-layer", title: "Display a globe with a fill extrusion layer", description: "Display a globe with a fill extrusion layer.", category: "globe", tags: ["extrusion"] },
  { id: "display-a-globe-with-a-vector-map", title: "Display a globe with a vector map", description: "Display a globe with a vector map.", category: "globe", tags: ["vector"] },
  { id: "display-a-globe-with-an-atmosphere", title: "Display a globe with an atmosphere", description: "Display a globe with an atmosphere.", category: "globe", tags: ["atmosphere"] },
  { id: "display-a-hybrid-satellite-map-with-terrain-elevation", title: "Display a hybrid satellite map with terrain elevation", description: "Display a hybrid satellite map with terrain elevation.", category: "3d", tags: ["satellite", "terrain"] },
  { id: "display-a-map", title: "Display a map", description: "Initialize a map in an HTML element with MapLibre GL JS.", category: "basics", tags: ["map"] },
  { id: "display-a-map-with-mlt", title: "Display a map with MLT", description: "Initialize a map using MLT (MapLibre Tiles) encoding.", category: "basics", tags: ["mlt", "tiles"] },
  { id: "display-a-non-interactive-map", title: "Display a non-interactive map", description: "Disable interactivity to create a static map.", category: "basics", tags: ["static"] },
  { id: "display-a-popup", title: "Display a popup", description: "Add a popup to the map.", category: "basics", tags: ["popup"] },
  { id: "display-a-popup-on-click", title: "Display a popup on click", description: "When a user clicks a symbol, show a popup containing more information.", category: "interaction", tags: ["popup", "click"] },
  { id: "display-a-popup-on-hover", title: "Display a popup on hover", description: "When a user hovers over a custom marker, show a popup containing more information.", category: "interaction", tags: ["popup", "hover"] },
  { id: "display-a-remote-svg-symbol", title: "Display a remote SVG symbol", description: "Uses the 'styleimagemissing' event to load a remote image and use it.", category: "layers", tags: ["svg", "symbol"] },
  { id: "display-a-satellite-map", title: "Display a satellite map", description: "Display a satellite raster baselayer.", category: "basics", tags: ["satellite"] },
  { id: "display-and-style-rich-text-labels", title: "Display and style rich text labels", description: "Use the format expression to display country labels in both English and in the local language.", category: "layers", tags: ["text", "expression"] },
  { id: "display-buildings-in-3d", title: "Display buildings in 3D", description: "Use extrusions to display buildings' height in 3D.", category: "3d", tags: ["buildings", "extrusion"] },
  { id: "display-html-clusters-with-custom-properties", title: "Display HTML clusters with custom properties", description: "Extend clustering with HTML markers and custom property expressions.", category: "data", tags: ["cluster", "html"] },
  { id: "display-line-that-crosses-180th-meridian", title: "Display line that crosses 180th meridian", description: "Draw a line across the 180th meridian using a GeoJSON source.", category: "layers", tags: ["line", "meridian"] },
  { id: "display-map-navigation-controls", title: "Display map navigation controls", description: "Add zoom and rotation controls to the map.", category: "controls", tags: ["navigation"] },
  { id: "draw-a-circle", title: "Draw a Circle", description: "Draw a radius to approximate a location with Turf.js", category: "layers", tags: ["turf", "circle"] },
  { id: "draw-geojson-points", title: "Draw GeoJSON points", description: "Draw points from a GeoJSON collection to a map.", category: "layers", tags: ["geojson", "points"] },
  { id: "draw-geometries-with-terra-draw", title: "Draw geometries with terra-draw", description: "Use maplibre-gl-terradraw to draw a geometry in various forms such as point, line or polygon on your map.", category: "plugins", tags: ["terra-draw", "drawing"] },
  { id: "draw-polygon-with-mapbox-gl-draw", title: "Draw polygon with mapbox-gl-draw", description: "Use mapbox-gl-draw to draw a polygon and Turf.js to calculate its area in square meters.", category: "plugins", tags: ["draw", "turf"] },
  { id: "extrude-polygons-for-3d-indoor-mapping", title: "Extrude polygons for 3D indoor mapping", description: "Create a 3D indoor map with the fill-extrude-height paint property.", category: "3d", tags: ["indoor", "extrusion"] },
  { id: "filter-layer-symbols-using-global-state", title: "Filter layer symbols using global state", description: "Filter a layer symbols based on user input using setGlobalStateProperty().", category: "interaction", tags: ["filter", "state"] },
  { id: "filter-symbols-by-text-input", title: "Filter symbols by text input", description: "Filter symbols by icon name by typing in a text input.", category: "interaction", tags: ["filter", "text"] },
  { id: "filter-symbols-by-toggling-a-list", title: "Filter symbols by toggling a list", description: "Filter a set of symbols based on a property value in the data.", category: "interaction", tags: ["filter", "toggle"] },
  { id: "filter-within-a-layer", title: "Filter within a Layer", description: "Filter a layer based on user input using setFilter().", category: "interaction", tags: ["filter"] },
  { id: "fit-a-map-to-a-bounding-box", title: "Fit a map to a bounding box", description: "Fit the map to a specific area, regardless of the pixel size of the map.", category: "basics", tags: ["bounds"] },
  { id: "fit-to-the-bounds-of-a-linestring", title: "Fit to the bounds of a LineString", description: "Get the bounds of a LineString.", category: "basics", tags: ["bounds", "linestring"] },
  { id: "fly-to-a-location-based-on-scroll-position", title: "Fly to a location based on scroll position", description: "Scroll down through the story and the map will fly to the chapter's location.", category: "animation", tags: ["flyTo", "scroll"] },
  { id: "fly-to-a-location", title: "Fly to a location", description: "Use flyTo to smoothly interpolate between locations.", category: "animation", tags: ["flyTo"] },
  { id: "generate-and-add-a-missing-icon-to-the-map", title: "Generate and add a missing icon to the map", description: "Dynamically generate a missing icon at runtime and add it to the map.", category: "layers", tags: ["icon", "dynamic"] },
  { id: "geocode-with-nominatim", title: "Geocode with Nominatim", description: "Geocode with Nominatim and the maplibre-gl-geocoder plugin.", category: "plugins", tags: ["geocoder", "nominatim"] },
  { id: "get-coordinates-of-the-mouse-pointer", title: "Get coordinates of the mouse pointer", description: "Show mouse position on hover with pixel and latitude and longitude coordinates.", category: "interaction", tags: ["mouse", "coordinates"] },
  { id: "get-features-under-the-mouse-pointer", title: "Get features under the mouse pointer", description: "Use queryRenderedFeatures to show properties of hovered-over map elements.", category: "interaction", tags: ["query", "features"] },
  { id: "hash-routing", title: "Hash routing", description: "Keep the viewport state in the url with hash routing.", category: "basics", tags: ["hash", "routing"] },
  { id: "jump-to-a-series-of-locations", title: "Jump to a series of locations", description: "Use the jumpTo function to showcase multiple locations.", category: "animation", tags: ["jumpTo"] },
  { id: "level-of-detail-control", title: "Level of Detail Control", description: "Modify how Level of Detail behaves at high pitch angles.", category: "controls", tags: ["lod", "pitch"] },
  { id: "locale-switching", title: "Locale switching", description: "Show how localization can be applied manually to UI elements. Hover over a control to see the translated tooltip.", category: "controls", tags: ["locale", "i18n"] },
  { id: "locate-the-user", title: "Locate the user", description: "Geolocate the user and then track their current location on the map using the GeolocateControl.", category: "controls", tags: ["geolocation"] },
  { id: "measure-distances", title: "Measure distances", description: "Click points on a map to create lines that measure distanced using turf.length.", category: "interaction", tags: ["turf", "measure"] },
  { id: "navigate-the-map-with-game-like-controls", title: "Navigate the map with game-like controls", description: "Use the keyboard's arrow keys to move around the map with game-like controls.", category: "interaction", tags: ["keyboard", "navigation"] },
  { id: "offset-the-vanishing-point-using-padding", title: "Offset the vanishing point using padding", description: "Offset the center or vanishing point of the map to reduce distortion when floating elements are displayed over the map.", category: "basics", tags: ["padding"] },
  { id: "pmtiles-source-and-protocol", title: "PMTiles source and protocol", description: "Uses the PMTiles plugin and protocol to present a map.", category: "plugins", tags: ["pmtiles"] },
  { id: "render-world-copies", title: "Render world copies", description: "Toggle between rendering a single world and multiple copies of the world using setRenderWorldCopies.", category: "basics", tags: ["world-copies"] },
  { id: "restrict-map-panning-to-an-area", title: "Restrict map panning to an area", description: "Prevent a map from being panned to a different place by setting maxBounds.", category: "interaction", tags: ["bounds", "restrict"] },
  { id: "set-center-point-above-ground", title: "Set center point above ground", description: "Set the center point above ground level.", category: "basics", tags: ["center", "elevation"] },
  { id: "set-pitch-and-bearing", title: "Set pitch and bearing", description: "Initialize a map with pitch and bearing camera options.", category: "basics", tags: ["pitch", "bearing"] },
  { id: "show-polygon-information-on-click", title: "Show polygon information on click", description: "When a user clicks a polygon, show a popup containing more information.", category: "interaction", tags: ["popup", "polygon"] },
  { id: "sky-fog-terrain", title: "Sky, Fog, Terrain", description: "Allows changing the sky, fog and horizon color and blends.", category: "3d", tags: ["sky", "fog", "terrain"] },
  { id: "slowly-fly-to-a-location", title: "Slowly fly to a location", description: "Use flyTo with flyOptions to slowly zoom to a location.", category: "animation", tags: ["flyTo", "slow"] },
  { id: "style-labels-with-local-fonts", title: "Style labels with local fonts", description: "Apply local fonts to your style's text labels.", category: "layers", tags: ["fonts", "text"] },
  { id: "style-labels-with-web-fonts", title: "Style labels with Web fonts", description: "Apply Web fonts to your style's text labels.", category: "layers", tags: ["fonts", "web-fonts"] },
  { id: "style-lines-with-a-data-driven-property", title: "Style lines with a data-driven property", description: "Create a visualization with a data expression for line-color.", category: "layers", tags: ["data-driven", "line"] },
  { id: "sync-movement-of-multiple-maps", title: "Sync movement of multiple maps", description: "Synchronize MapLibre GL JS maps with the sync-move plugin.", category: "plugins", tags: ["sync", "multiple-maps"] },
  { id: "toggle-deckgl-layer", title: "Toggle deck.gl layer", description: "Toggle deck.gl layer using maplibre.", category: "plugins", tags: ["deck.gl", "toggle"] },
  { id: "toggle-interactions", title: "Toggle interactions", description: "Enable or disable UI handlers on a map.", category: "interaction", tags: ["handlers"] },
  { id: "update-a-feature-in-realtime", title: "Update a feature in realtime", description: "Change an existing feature on your map in real-time by updating its data.", category: "data", tags: ["realtime", "update"] },
  { id: "use-a-fallback-image", title: "Use a fallback image", description: "Use a coalesce expression to display another image when a requested image is not available.", category: "layers", tags: ["image", "fallback"] },
  { id: "use-addprotocol-to-transform-feature-properties", title: "Use addProtocol to Transform Feature Properties", description: "Reverse country names with addProtocol in plain JavaScript.", category: "data", tags: ["protocol", "transform"] },
  { id: "use-locally-generated-ideographs", title: "Use locally generated ideographs", description: "Set localIdeographFontFamily to override the font used for displaying CJK characters.", category: "layers", tags: ["cjk", "fonts"] },
  { id: "variable-label-placement", title: "Variable label placement", description: "Use text-variable-anchor to allow high priority labels to shift position to stay on the map.", category: "layers", tags: ["labels", "placement"] },
  { id: "variable-label-placement-with-offset", title: "Variable label placement with offset", description: "Use text-variable-anchor-offset to allow high priority labels to shift position to stay on the map.", category: "layers", tags: ["labels", "offset"] },
  { id: "view-a-fullscreen-map", title: "View a fullscreen map", description: "Toggle between current view and fullscreen mode.", category: "controls", tags: ["fullscreen"] },
  { id: "view-local-geojson-experimental", title: "View local GeoJSON (experimental)", description: "View local GeoJSON with experimental File System Access API.", category: "data", tags: ["geojson", "file-system"] },
  { id: "view-local-geojson", title: "View local GeoJSON", description: "View local GeoJSON without server upload.", category: "data", tags: ["geojson", "local"] },
  { id: "visualize-population-density", title: "Visualize population density", description: "Use a variable binding expression to calculate and display population density.", category: "data", tags: ["population", "expression"] },
  { id: "zoom-and-planet-size-relation-on-globe", title: "Zoom and planet size relation on globe", description: "Explanation of zoom and planet size relation under globe projection and how to account for it when changing the map center and zoom by some delta.", category: "globe", tags: ["zoom", "scale"] },
];

// DOM Elements
const searchInput = document.getElementById('search') as HTMLInputElement;
const examplesGrid = document.getElementById('examples-grid') as HTMLDivElement;
const noResults = document.getElementById('no-results') as HTMLDivElement;
const visibleCount = document.getElementById('visible-count') as HTMLDivElement;
const totalCount = document.getElementById('total-count') as HTMLDivElement;
const categoriesContainer = document.getElementById('categories') as HTMLDivElement;

let activeCategory = 'all';

// Update total count
totalCount.textContent = examples.length.toString();

function createExampleCard(example: Example): HTMLElement {
  const card = document.createElement('a');
  card.className = 'example-card';
  // In dev mode, reference .ts files which Vite serves; in production, .html files are built
  card.href = `./src/examples/${example.id}.html`;
  
  card.innerHTML = `
    <div class="example-preview">
      <div class="example-preview-map loading-skeleton"></div>
      <div class="example-preview-overlay"></div>
      <div class="example-category-badge">${example.category}</div>
    </div>
    <div class="example-content">
      <h3 class="example-title">${example.title}</h3>
      <p class="example-description">${example.description}</p>
      <div class="example-footer">
        <div class="example-tags">
          ${example.tags.slice(0, 3).map(tag => `<span class="example-tag">${tag}</span>`).join('')}
        </div>
        <span class="view-btn">
          View
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </div>
  `;
  
  return card;
}

function renderExamples(filteredExamples: Example[]): void {
  examplesGrid.innerHTML = '';
  
  if (filteredExamples.length === 0) {
    noResults.style.display = 'block';
    examplesGrid.style.display = 'none';
  } else {
    noResults.style.display = 'none';
    examplesGrid.style.display = 'grid';
    
    filteredExamples.forEach(example => {
      examplesGrid.appendChild(createExampleCard(example));
    });
  }
  
  visibleCount.textContent = filteredExamples.length.toString();
}

function filterExamples(): void {
  const searchTerm = searchInput.value.toLowerCase();
  
  const filtered = examples.filter(example => {
    const matchesSearch = 
      example.title.toLowerCase().includes(searchTerm) ||
      example.description.toLowerCase().includes(searchTerm) ||
      example.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    
    const matchesCategory = activeCategory === 'all' || example.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  renderExamples(filtered);
}

// Event Listeners
searchInput.addEventListener('input', filterExamples);

categoriesContainer.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('category-btn')) {
    // Update active state
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');
    
    activeCategory = target.dataset.category || 'all';
    filterExamples();
  }
});

// Initial render
renderExamples(examples);
