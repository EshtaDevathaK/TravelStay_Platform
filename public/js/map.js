// map.js
const response = await fetch("/api/config/mapbox");
const data = await response.json();

mapboxgl.accessToken = data.token;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinates,
    zoom: 12
});

if (coordinates[0] && coordinates[1]) {
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
}

console.log("Mapbox Token:", data.token);
console.log("Coordinates:", coordinates);
