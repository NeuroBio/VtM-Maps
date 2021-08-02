// set up map view toggles
dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: APIKEY
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
    center: [33.5, -111.8],
    zoom: 11,
    layers: [dark]
});

L.control.layers(undefined, overlays).addTo(map);


// set up domains
d3.json('https://raw.githubusercontent.com/blackmad/neighborhoods/master/phoenix.geojson')
.then(data => {
    data.features.push(hartstone);
    function styling(feature) {
        return {
            weight: 1,
            fillOpacity: .5,
            color: domainFaction[feature.properties.name].color
        };
    }

    L.geoJson(data, {
        style: styling,
        onEachFeature: (feature, layer) => {
            layer.bindPopup(feature.properties.name);
        }
    }).addTo(domains);


    domains.addTo(map);

    postAsync();
})

// set up a faction legend
const legend = L.control({
    position: 'bottomright'
});

legend.onAdd = () => {
    const div = L.DomUtil.create('div', 'legend');

    div.innerHTML += '<b id="legend-label">Factions:</b><br><br>';

    for (let i = 0; i < factionNames.length; i++) {
        div.innerHTML += `<i style="background: ${factionColors[i]}"></i> ${factionNames[i]} <br><br>`;
    }

    return div;
}

legend.addTo(map)


function postAsync() {
    // set up place markers
    places.forEach(place => {
        L.circleMarker(place.location, {
            color: '#99ccff',
            stroke: false,
            fillOpacity: .7,
            radius: 17
        }).bindPopup(`<h2>${place.name}</h2><hr> <p class="desc">${place.desc}</p>`).addTo(placeMarkers);
    });

    placeMarkers.addTo(map);

    // set up haven markers
    havens.forEach(haven => {
        L.circleMarker(haven.location, {
            color: 'white',
            stroke: false,
            fillOpacity: .9,
            radius: 7
        }).bindPopup(`<h2><img class="mini-portrait" src=${haven.image}><br>${
            haven.owner}'s Haven</h2><hr> <p class="desc">${haven.havenDesc}</p>`
        ).addTo(peopleMarkers);
    });

    peopleMarkers.addTo(map);
};
