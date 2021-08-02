// set up the layer groups
const hartPeopleMarkers = new L.layerGroup();
const hartPlaceMarkers = new L.layerGroup();

const hartOverlays = {
    'Havens': hartPeopleMarkers,
    'Event Locations': hartPlaceMarkers
};

//  set up map image
const hartMap = L.map('hartstone-map', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 2,
    zoom: 1
});

const ratioSize = 85;
const bounds = [[0,0], [10 * ratioSize, 14 * ratioSize ]];
const image = L.imageOverlay('static/images/cityMap.png', bounds).addTo(hartMap);
hartMap.fitBounds(bounds);

// add control layers
L.control.layers(undefined, hartOverlays).addTo(hartMap);


function pixelToCoord(pixels) {
    return [(2000-pixels[1]) / 2.3575, pixels[0] / 2.3575];
}

// set up place markers
hartPlaces.forEach(place => {
    L.circleMarker(pixelToCoord(place.location), {
        color: '#99ccff',
        stroke: false,
        fillOpacity: .7,
        radius: 17
    }).bindPopup(`<h2>${place.name}</h2><hr> <p class="desc">${place.desc}</p>`)
    .addTo(hartPlaceMarkers);
});

hartPlaceMarkers.addTo(hartMap);


// set up haven markers
hartHavens.forEach(haven => {
    L.circleMarker(pixelToCoord(haven.location), {
        color: 'white',
        stroke: false,
        fillOpacity: .9,
        radius: 7
    }).bindPopup(`<h2><img class="mini-portrait" src=${haven.image}><br>${
        haven.owner}'s Haven</h2><hr> <p class="desc">${haven.havenDesc}</p>`
    ).addTo(hartPeopleMarkers);
});

hartPeopleMarkers.addTo(hartMap);

