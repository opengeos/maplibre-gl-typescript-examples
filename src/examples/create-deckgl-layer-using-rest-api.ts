import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as deck from 'deck.gl';

const map = new maplibregl.Map({
          container: 'map',
          style: 'https://tiles.openfreemap.org/styles/liberty',
          center: [2.343957, 48.862011],
          zoom: 10.5,
      });
      map.addControl(new maplibregl.NavigationControl(), 'top-right');

      // 20 + 1 random colors for all the districts of Paris and outside of the districts
      const colorPalette = [
          [255, 102, 51],
          [255, 179, 153],
          [255, 51, 255],
          [255, 255, 153],
          [0, 179, 230],
          [230, 179, 51],
          [51, 102, 230],
          [153, 153, 102],
          [153, 255, 153],
          [179, 77, 77],
          [128, 179, 0],
          [128, 153, 0],
          [230, 179, 179],
          [102, 128, 179],
          [102, 153, 26],
          [255, 153, 230],
          [204, 255, 26],
          [255, 26, 102],
          [230, 51, 26],
          [51, 255, 204],
          [102, 153, 77],
      ];

      const limit = 100;
      // Sample data source = https://data.iledefrance.fr
      const parisSights = `https://data.iledefrance.fr/api/explore/v2.1/catalog/datasets/principaux-sites-touristiques-en-ile-de-france0/records?limit=${limit}`;

      let layerControl;

      // Add the overlay as a control
      map.on('load', async () => {
          // Fetch the data
          const response = await fetch(parisSights);
          const responseJSON = await response.json();

          const layer = new deck.ScatterplotLayer({
              id: 'scatterplot-layer',
              data: responseJSON.results,
              pickable: true,
              opacity: 0.7,
              stroked: true,
              filled: true,
              radiusMinPixels: 14,
              radiusMaxPixels: 100,
              lineWidthMinPixels: 5,
              // Using appropriate fields for coordinates from the dataset
              getPosition: (d) => [d.geo_point_2d.lon, d.geo_point_2d.lat],
              getFillColor: (d) => {
                  // Filtering by postal code
                  if ('insee' in d && d.insee.startsWith('75')) {
                      // Districts in Paris
                      return colorPalette[parseInt(d.insee.substring(3))];
                  } else {
                      // Out of Paris
                      return colorPalette[20];
                  }
              },
              getLineColor: (d) => [14, 16, 255],
              onClick: (info) => {
                  const {coordinate, object} = info;
                  const description = `<p>${object.nom_carto || 'Unknown'}</p>`;

                  new maplibregl.Popup()
                      .setLngLat(coordinate)
                      .setHTML(description)
                      .addTo(map);
              },
          });

          // Create the overlay
          const overlay = new deck.MapboxOverlay({
              layers: [layer],
          });
          map.addControl(overlay);
      });