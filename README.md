# leaflet-challenge

![logo](https://github.com/caitlin-hartley/leaflet-challenge/blob/main/images/1-Logo.png)

---

## About the Project and Data:

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

Code that develops a way to visualize USGS data: Earthquakes in the past week. 

---

## Map Link

[map](https://caitlin-hartley.github.io/leaflet-challenge/)

---

## Create the Earthquake Visualization

Fetch GeoJSON dataset:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes.

 - Use the URL of this JSON to pull in the data for the visualization
 - Use d3 to fetch the GeoJson data

Sampling of earthquake data in JSON format:

![json](https://github.com/caitlin-hartley/leaflet-challenge/blob/main/images/4-JSON.png)

Javascrip to pull GeoJSON:

![json_code](https://github.com/caitlin-hartley/leaflet-challenge/blob/main/images/json_code.png)

---

Import and visualize the data:

- Created a map that plots all the earthquakes from your dataset based on their longitude and latitude.
- Datamarkers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color: Earthquakes with higher magnitudes appear larger, earthquakes with greater depth appear darker in color (green to red color scale)

Code for markers:
![markers](https://github.com/caitlin-hartley/leaflet-challenge/blob/main/images/circle_markers.png)


- Popups that provide additional information about the earthquake when its associated marker is clicked
- Created a legend

Code for legend:
![legend](https://github.com/caitlin-hartley/leaflet-challenge/blob/main/images/legend.png)

Map:
![map](https://github.com/caitlin-hartley/leaflet-challenge/blob/main/images/map.png)
