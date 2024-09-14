//----------------------------------------------------------------------//
// Module 15 Challenge //
//----------------------------------------------------------------------//

// url to pull GeoJSON
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch GeoJSON data with d3
d3.json(url).then(function(data) {
createFeatures(data.features);
});

// Create function to map earthquake data
function createFeatures(earthquakeData) {

    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>Magnitude: ${feature.properties.mag}</h3><hr><p>${feature.properties.place}</p><p>Depth: ${feature.geometry.coordinates[2]} km</p>`);
    }
    
    function pointToLayer(feature, latlng) {


        let depth = feature.geometry.coordinates[2];
        let magnitude = feature.properties.mag;
    
        // Select colors for circle marker
        let color = "";
        if (depth < 10) color = "#33ff33";
        else if (depth < 30) color = "#ccff33";
        else if (depth < 50) color = "#ffd11a";
        else if (depth < 70) color = "#ff9900";
        else if (depth < 90) color = "#ff6600";
        else color = "#ff0000";
    
        let radius = magnitude * 2.5;
    
        return L.circleMarker(latlng, {
        radius: radius,
        fillColor: color,
        color: "#000",
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.75
        });
    }
    
    // Create the GeoJSON layer
    let earthquakes = L.geoJSON(earthquakeData, {
        pointToLayer: pointToLayer,
        onEachFeature: onEachFeature
    });
    
    // Send the earthquakes layer to the createMap function
    createMap(earthquakes);
    }
    function createMap(earthquakes) {
        
    // Define streetmap and darkmap layers
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    
    // Define a baseMaps object to hold our base layers
    let baseMaps = {
        "Street Map": streetmap,
    };
    
    // Create an overlay object to hold our overlay
    let overlayMaps = {
        Earthquakes: earthquakes
    };
    
    // Create the map
    let myMap = L.map("map", {
        center: [37.09, -95.71],
        zoom: 4,
        layers: [streetmap, earthquakes]
    });
    
    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);
    

    // Create legend
    let legend = L.control({ position: "bottomright" });


    legend.onAdd = function() {
        let div = L.DomUtil.create("div", "legend leaflet-control-layers leaflet-control-layers-expanded");
        let grades = [-10, 10, 30, 50, 70, 90];
        let colors = ["#33ff33", "#ccff33", "#ffd11a", "#ff9900", "#ff6600", "#ff0000"];
      
        // Loop through the ranges and generate a label with a colored square for each interval
        for (let i = 0; i < grades.length; i++) {
          div.innerHTML += `<i style="background-color:${colors[i]};"></i> ${grades[i]} `
              + (grades[i+1] ? '&ndash; '+grades[i + 1]+' km<br>' : '+'+' km');
        }
        return div;
    };

    legend.addTo(myMap);
    }