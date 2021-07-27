var map = L.map('pheonix-map').setView([33.4484, -112.0740], 9);
streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
});
streets.addTo(map);

places.forEach(place => {
    L.marker(place.location)
        .bindPopup(place.name + '<br>' + place.desc)
        .addTo(map);
});