'use strict';

function add_icon(service, name, account) {
    return `<a id="img-link" href="https://${service}.com/${account}" target="_blank">
              <img id="img-link"
                   src="https://raw.githubusercontent.com/nordic-rse/map/gh-pages/icons/${service}.png"
                   alt="${service} account logo for ${name}"
                   width="18" height="18">
            </a>`;
}


function popup_text(person_or_group) {
    var s = ''

    if (person_or_group.homepage != undefined) {
        s += `<a href="${person_or_group.homepage}" target="_blank">${person_or_group.name}</a>`;
    } else {
        s += person_or_group.name;
    }

    if (person_or_group.github != undefined) {
        s += add_icon('github', person_or_group.name, person_or_group.github);
    }

    if (person_or_group.gitlab != undefined) {
        s += add_icon('gitlab', person_or_group.name, person_or_group.gitlab);
    }

    if (person_or_group.twitter != undefined) {
        s += add_icon('twitter', person_or_group.name, person_or_group.twitter);
    }

    return s;
}


function coordinates_of_places(places) {
    var dict = {};
    for (const place of places) {
        dict[place.name] = [place.lat, place.lon];
    }
    return dict;
}


function load_map(args) {
    axios.get(args.data_url)
        .then(function(response) {
            var _data = jsyaml.load(response.data);
            var persons = _data.persons;
            var places = coordinates_of_places(_data.places);

            var leaflet_map = L.map(args.id).setView([63.0, 15.0], 4);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(leaflet_map);

            for (const person of persons) {

                var lat = (person.place != undefined) ? places[person.place][0] : person.lat;
                var lon = (person.place != undefined) ? places[person.place][1] : person.lon;

                var marker = L.circleMarker([lat, lon], {
                    radius: 10
                }).addTo(leaflet_map);
                marker.bindPopup(popup_text(person));
            }
        })
};