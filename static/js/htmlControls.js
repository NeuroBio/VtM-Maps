// Control map view
function switchMap() {
    if (d3.select(this).property('value') === 'true') {
        d3.select('#hartstone-map').style('display', 'block');
        d3.select('#pheonix-map').style('display', 'none');
        hartMap.invalidateSize();
    } else {
        d3.select('#hartstone-map').style('display', 'none');
        d3.select('#pheonix-map').style('display', 'block');
        map.invalidateSize();
    }
}

d3.selectAll('input[class="map-select"]').on('change', switchMap);

// set active character
function setActiveChar(charName) {
    if (!charName) {
        charName = d3.select(this).property('value');
    }
    const char = chars[charName];
    // set main info
    Object.keys(char).forEach(key =>
        d3.select(`#${key}`).text(`${char[key]}`)
    );
    // set image
    d3.select('#portrait').attr('src', `static/images/portraits/${charName}.png`)
}

// add characters
function updateEntries(people) {
    if (people === 'true') {
        const select = d3.select('#pick-element')
        select.html('');
        Object.entries(chars).forEach(el => {
            select.append("option")
            .text(el[1].fullName)
            .property('value', el[0]);
        })
    }
}

d3.select('#pick-element').on('change', setActiveChar);


updateEntries('true');
setActiveChar('Alyx');
