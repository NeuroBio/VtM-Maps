// used by hartHavens as well
function makeHaven(name, loc, havenDesc) {
    return {
        owner: name,
        location: loc,
        image: `static/images/portraits/${name}.png`,
        havenDesc: havenDesc,
    };
}

havens = [
    makeHaven('Stefan', [33.4506, -112.0741], 'A rented room at the San Carlos Hotel.  Stefan benefits from the hotel security cameras to protect himself and his endless horde of stolen shiny objects in relative comfort.  Naturally, he also steals from the other guests.'),
    makeHaven('Irfan', [33.48648969915542, -112.08362731511266], 'A studio apartment rented at the Metropolitan Apartments.  There is little security, no luxury, and this area is only tentatively held as Camarilla turf.  It was historically Sabbat, and the Sabbat is aggressively working to reclaim the area.'),
    makeHaven('Gree', [33.363814263278435, -112.03995605332327], 'A perpetually-under-construction frame of what theoretically could be a mansion.  Gree’s dream house project is unlikely to ever be finished, because he keep changes his mind about what the perfect house looks like.  zit provides next to no security outside of its distance from the city center, because none of the walls or rooms are finished.'),
    makeHaven('Kyle', [33.44278671837701, -112.08561744978024], 'To escape the electricity of the upper world, Kyle joined the Nosferatu in the sewers.  Since they left for Hartstone, their city of reclaimed goods, stolen items, and outright trash is entirely in Kyle’s care now.')
];