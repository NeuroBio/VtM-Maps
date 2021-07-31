// set up map view toggles
dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
});

const baseMaps = {
    Dark: dark
};

// set up layer toggles
const peopleMarkers = new L.layerGroup();
const placeMarkers = new L.layerGroup();
const domains = new L.layerGroup();

const overlays = {
    'Havens': peopleMarkers,
    'Event Locations': placeMarkers,
    'Domain Borders': domains
};

// build map
const map = L.map('pheonix-map', {
    center: [33.4484, -112.0740],
    zoom: 9,
    layers: [dark]
});

L.control.layers(baseMaps, overlays).addTo(map);


// set up places markers
places.forEach(place => {
    L.circleMarker(place.location, {
        color: 'yellow',
        stroke: false,
        fillOpacity: .7,
        radius: 7
    }).bindPopup(place.name + '<br>' + place.desc).addTo(placeMarkers);
});

placeMarkers.addTo(map);

// set up a faction legend
const legend = L.control({
    position: 'bottomright'
});

legend.onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');
    const colors = ['purple', 'blue', 'red', 'grey'];
    const factionNames = ['Camarilla', 'Anarch', 'Sabbat', 'Autarkis'];

    for (let i = 0; i < factionNames.length; i++) {
        div.innerHTML += `<i style="background: ${colors[i]}"></i> ${factionNames[i]} <br><br>`
    }

    return div;
}

legend.addTo(map)