'use strict';

function add_icon(service, name, account) {
    return `<a id="img-link" href="https://${service}.com/${account}" target="_blank">
              <img id="img-link"
                   src="https://raw.githubusercontent.com/nordic-rse/map/gh-pages/icons/${service}.png"
                   alt="${service} account logo for ${name}"
                   width="15" height="15">
            </a>`;
}


function popup_text(person) {
    var s = ''

    if (person.homepage != undefined) {
        s += `<a href="${person.homepage}" target="_blank">${person.name}</a>`;
    } else {
        s += person.name;
    }

    if (person.github != undefined) {
        s += add_icon('github', person.name, person.github);
    }

    if (person.gitlab != undefined) {
        s += add_icon('gitlab', person.name, person.gitlab);
    }

    if (person.twitter != undefined) {
        s += add_icon('twitter', person.name, person.twitter);
    }

    return s;
}


function load_map(args) {
    var persons = [];
    axios.get(args.data_url)
        .then(function(response) {
            var _data = jsyaml.load(response.data);
            persons = _data.persons;

            var map_persons = L.map(args.id).setView([63.0, 15.0], 4);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map_persons);

            for (const person of persons) {
                var marker = L.circleMarker([person.lat, person.lon], {
                    radius: 10
                }).addTo(map_persons);
                marker.bindPopup(popup_text(person));
            }
        })
};
