import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as deck from 'deck.gl';

const url = 'https://maps.clockworkmicro.com/streets/v1/style?x-api-key=';
      const apiKey = 'Dr4eW3s233rRkk8I_public';

      let overlay;

      const map = new maplibregl.Map({
          container: 'map',
          style: url + apiKey,
          center: [2.345885, 48.860412],
          zoom: 12,
      });
      map.addControl(new maplibregl.NavigationControl(), 'top-right');

      // 5 Beautiful gardens in Paris
      const sampleData = {
          type: 'FeatureCollection',
          name: 'Jardins Des Paris',
          crs: {
              type: 'name',
              properties: {name: 'urn:ogc:def:crs:OGC:1.3:CRS84'},
          },
          features: [
              {
                  type: 'Feature',
                  properties: {
                      name: 'Jardins du Trocadéro',
                      district: 16,
                  },
                  geometry: {
                      type: 'Point',
                      coordinates: [2.289207, 48.861561],
                  },
              },
              {
                  type: 'Feature',
                  properties: {
                      name: 'Jardin des Plantes',
                      district: 5,
                  },
                  geometry: {
                      type: 'Point',
                      coordinates: [2.359823, 48.843995],
                  },
              },
              {
                  type: 'Feature',
                  properties: {
                      name: 'Jardins das Tulherias',
                      district: 1,
                  },
                  geometry: {
                      type: 'Point',
                      coordinates: [2.327092, 48.863608],
                  },
              },
              {
                  type: 'Feature',
                  properties: {
                      name: 'Parc de Bercy',
                      district: 12,
                  },
                  geometry: {
                      type: 'Point',
                      coordinates: [2.382094, 48.835962],
                  },
              },
              {
                  type: 'Feature',
                  properties: {
                      name: 'Jardin du Luxemburg',
                      district: 6,
                  },
                  geometry: {
                      type: 'Point',
                      coordinates: [2.336975, 48.846421],
                  },
              },
          ],
      };

      // Add the overlay as a control
      function initializeOverlay () {
          const layer = new deck.ScatterplotLayer({
              id: 'scatterplot-layer',
              data: sampleData.features,
              pickable: true,
              opacity: 0.8,
              stroked: true,
              filled: true,
              radiusScale: 6,
              radiusMinPixels: 20,
              radiusMaxPixels: 100,
              lineWidthMinPixels: 5,
              getPosition: (d) => d.geometry.coordinates,
              getFillColor: (d) => [49, 130, 206],
              getLineColor: (d) => [175, 0, 32],
              onClick: (info) => {
                  const {coordinate, object} = info;
                  const description = `<div>
            <p>
              <strong>Name: </strong>${object.properties['name']}
            </p>
              <strong>District: </strong>${object.properties['district']}
            </p>
          </div>`;

                  new maplibregl.Popup()
                      .setLngLat(coordinate)
                      .setHTML(description)
                      .addTo(map);
              },
          });

          // Create the overlay
          overlay = new deck.MapboxOverlay({
              layers: [layer],
          });

          map.addControl(overlay);
      }

      let show = true; // Display the layer by default

      map.on('load', () => {
          // Add the overlay
          initializeOverlay();

          const toggleButton = document.querySelector('#toggle-button');
          toggleButton.addEventListener('click', () => {
              if (show) {
                  map.removeControl(overlay);
                  toggleButton.innerText = 'Show';
                  show = false;
              } else {
                  initializeOverlay();
                  toggleButton.innerText = 'Hide';
                  show = true;
              }
          });
      });