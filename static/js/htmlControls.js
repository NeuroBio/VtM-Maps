function switchMap() {
    console.log('triggered')
    if (d3.select(this).property('value') === 'true') {
        console.log(d3.select('#hartstone-map'))
        d3.select('#hartstone-map').style('display', 'block');
        d3.select('#pheonix-map').style('display', 'none');
        hartMap.invalidateSize();
    } else {
        console.log('don\'t show hart')
        d3.select('#hartstone-map').style('display', 'none');
        d3.select('#pheonix-map').style('display', 'block');
    }
}

d3.selectAll('input[class="map-select"]').on('change', switchMap);