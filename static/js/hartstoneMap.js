const hartPeopleMarkers = new L.layerGroup();
const hartPlaceMarkers = new L.layerGroup();

const hartOverlays = {
    'Havens': hartPeopleMarkers,
    'Event Locations': hartPlaceMarkers
};

const hartMap = L.map('hartstone-map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 2
});

const ratioSize = 85;
const bounds = [[0,0], [10 * ratioSize, 14 * ratioSize ]];
const image = L.imageOverlay('static/images/cityMap.png', bounds).addTo(hartMap);
hartMap.fitBounds(bounds);


function pixelToCoord(pixels) {
    return [(2000-pixels[1]) / 2.3575, pixels[0] / 2.3575];
}
// set up places markers
hartPlaces.forEach(place => {
    console.log(pixelToCoord(place.location))
    L.marker(pixelToCoord(place.location))
    .bindPopup(`<h2>${place.name}</h2><hr> <p class="desc">${place.desc}</p>`)
    .addTo(hartPlaceMarkers);
});

hartPlaceMarkers.addTo(hartMap);

