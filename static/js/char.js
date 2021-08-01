function makeChar(name, loc, havenDesc) {
    return {
        owner: name,
        location: loc,
        image: `static/images/portraits/${name}.png`,
        havenDesc: havenDesc,
    };
}

chars = {
    Stefan: {
        fullName: '',

    }
}

havens = [
    makeChar('Stefan', [33.4506, -112.0741], 'A rented room at the San Carlos Hotel.  Stefan benefits from the hotel security cameras to protect himself and his endless horde of stolen shiny objects in relative comfort.  Naturally, he also steals from the other guests.'),
    makeChar('Irfan', [33.48648969915542, -112.08362731511266], 'A studio apartment rented at the Metropolitan Apartments.  There is little security, no luxury, and this area is only tentatively held as Camarilla turf.  It was historically Sabbat, and the Sabbat is aggressively working to reclaim the area.'),
    makeChar('Gree', [33.363814263278435, -112.03995605332327], 'A perpetually under construction frame of what theoretically could be a mansion.  Gree’s dream house project is unlikely to ever be finished, because he keep changes him mind about what the perfect house looks like.  Provides next to no security outside of its remote location, because none of the walls or rooms are finished.'),
    
];