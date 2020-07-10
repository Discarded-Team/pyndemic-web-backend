let popup = L.popup();

Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};

var is_epidemy_step = false;


function show_alert(title, text){
     $('#modal_msg').modal('show');
    $('#modal_title').text(title);
    $('#modal_body').text(text);
}

function distance(lat1, lon1, lat2, lon2) {
    let R = 6371000;
    let f1 = Math.radians(lat1);
    let f2 = Math.radians(lat2);
    let df = Math.radians(lat2 - lat1);
    let dl = Math.radians(lon2 - lon1);

    let a = Math.sin(df / 2) * Math.sin(df / 2) +
        Math.cos(f1) * Math.cos(f2) *
        Math.sin(dl / 2) * Math.sin(dl / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = R * c;
    return d;
}

function get_closest(lat, lon) {
    let closest_distance = distance(lat, lon, lats[0], lons[0]);
    let closest = 0;

    for (let i = 1; i < lats.length; i++) {
        let cur_dist = distance(lat, lon, lats[i], lons[i]);

        if (cur_dist < closest_distance) {
            closest_distance = cur_dist;
            closest = i;
        }
    }
    return names_rus[closest];
}

function onIconClick(e) {
    let lat = e.latlng.lat + 2;
    let lon = e.latlng.lng;

    popup.setLatLng([lat, lon])
        .setContent(`${e.target.options.title}`)
        .openOn(mymap);
}

function onIconDragEnd(e) {
    let lat = e.target._latlng.lat;
    let lon = e.target._latlng.lng;
    let city_name = get_closest(lat, lon);

    // tab_game.$set('user_cmd', `{
    //     "type": "command",
    //     "command": "move",
    //     "args" : {
    //         "destination": "London"
    //     }
    // }`);
    show_alert(city_name, '');
    game_vue.user_cmd = `{
    "type": "command",
    "command": "move",
    "args" : {
        "destination": "${city_name}"
    }
}`;
}

function getIconHouse(title, lat, lon) {

    let svg = `<svg  width="43.3" height="42.4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
<g><g><path style="fill: white" d="M850,10c9.5,0,17.7,3.5,24.6,10.4C881.5,27.3,885,35.5,885,45v910c0,9.5-3.5,17.7-10.4,24.6c-6.9,6.9-15.1,10.4-24.6,10.4H150c-9.5,0-17.7-3.5-24.6-10.4c-6.9-6.9-10.4-15.1-10.4-24.6V45c0-9.5,3.5-17.7,10.4-24.6C132.3,13.5,140.5,10,150,10H850z M395,167.5v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9s4.9-7.5,4.9-12.6v-35c0-5.1-1.6-9.3-4.9-12.6s-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9C396.6,158.2,395,162.4,395,167.5L395,167.5z M395,307.5v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9s4.9-7.5,4.9-12.6v-35c0-5.1-1.6-9.3-4.9-12.6s-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9C396.6,298.2,395,302.4,395,307.5L395,307.5z M395,447.5v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9c3.3-3.3,4.9-7.5,4.9-12.6v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9C396.6,438.2,395,442.4,395,447.5L395,447.5z M395,587.5v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9c3.3-3.3,4.9-7.5,4.9-12.6v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9C396.6,578.2,395,582.4,395,587.5L395,587.5z M325,762.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C323.4,771.8,325,767.6,325,762.5z M325,622.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C323.4,631.8,325,627.6,325,622.5z M325,482.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C323.4,491.8,325,487.6,325,482.5z M325,342.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9s-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C323.4,351.8,325,347.6,325,342.5L325,342.5z M325,202.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9s-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6s7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C323.4,211.8,325,207.6,325,202.5z M605,902.5v-105c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-175c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v105c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h175c5.1,0,9.3-1.6,12.6-4.9C603.4,911.8,605,907.6,605,902.5z M605,622.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C603.4,631.8,605,627.6,605,622.5z M605,482.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C603.4,491.8,605,487.6,605,482.5z M605,342.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C603.4,351.8,605,347.6,605,342.5L605,342.5z M605,202.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C603.4,211.8,605,207.6,605,202.5z M745,762.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C743.4,771.8,745,767.6,745,762.5z M745,622.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C743.4,631.8,745,627.6,745,622.5z M745,482.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C743.4,491.8,745,487.6,745,482.5z M745,342.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C743.4,351.8,745,347.6,745,342.5L745,342.5z M745,202.5v-35c0-5.1-1.6-9.3-4.9-12.6c-3.3-3.3-7.5-4.9-12.6-4.9h-35c-5.1,0-9.3,1.6-12.6,4.9c-3.3,3.3-4.9,7.5-4.9,12.6v35c0,5.1,1.6,9.3,4.9,12.6c3.3,3.3,7.5,4.9,12.6,4.9h35c5.1,0,9.3-1.6,12.6-4.9C743.4,211.8,745,207.6,745,202.5z"/></g></g>
</svg>`;

    let meIcon = L.divIcon({
        className: "leaflet-data-marker",
        html: svg.replace('#', '%23'),
        iconAnchor: [22, 28],
        iconSize: [20, 32],
        popupAnchor: [0, -30],
    });
    return L.marker([lat, lon], {
        icon: meIcon,
        title: title,
        draggable: true
    })
        .on('click', onIconClick)
        .on('dragend', onIconDragEnd);
    // .on('down', onDrag)
    // .on('dragstart', onDrag)
    // .on('dragend', onDrag);
}

function getIcon(title, color1, color2, color3, lat, lon) {
    let svg = `<svg id="mePin" xmlns="http://www.w3.org/2000/svg" width="43.3" height="42.4" viewBox="0 0 43.3 42.4"><path class="ring_outer" fill="${color1}" d="M28.6 23c6.1 1.4 10.4 4.4 10.4 8 0 4.7-7.7 8.6-17.3 8.6-9.6 0-17.4-3.9-17.4-8.6 0-3.5 4.2-6.5 10.3-7.9.7-.1-.4-1.5-1.3-1.3C5.5 23.4 0 27.2 0 31.7c0 6 9.7 10.7 21.7 10.7s21.6-4.8 21.6-10.7c0-4.6-5.7-8.4-13.7-10-.8-.2-1.8 1.2-1 1.4z"/><path class="ring_inner" fill="${color2}" d="M27 25.8c2 .7 3.3 1.8 3.3 3 0 2.2-3.7 3.9-8.3 3.9-4.6 0-8.3-1.7-8.3-3.8 0-1 .8-1.9 2.2-2.6.6-.3-.3-2-1-1.6-2.8 1-4.6 2.7-4.6 4.6 0 3.2 5.1 5.7 11.4 5.7 6.2 0 11.3-2.5 11.3-5.7 0-2-2.1-3.9-5.4-5-.7-.1-1.2 1.3-.7 1.5z"/><path class="mePin" d="M21.6 8.1a4 4 0 0 0 4-4 4 4 0 0 0-4-4.1 4.1 4.1 0 0 0-4.1 4 4 4 0 0 0 4 4.1zm4.9 8v-3.7c0-1.2-.6-2.2-1.7-2.6-1-.4-1.9-.6-2.8-.6h-.9c-1 0-2 .2-2.8.6-1.2.4-1.8 1.4-1.8 2.6V16c0 .9 0 2 .2 2.8.2.8.8 1.5 1 2.3l.2.3.4 1 .1.8.2.7.6 3.6c-.6.3-.9.7-.9 1.2 0 .9 1.4 1.7 3.2 1.7 1.8 0 3.2-.8 3.2-1.7 0-.5-.3-.9-.8-1.2l.6-3.6.1-.7.2-.8.3-1 .1-.3c.3-.8 1-1.5 1.1-2.3.2-.8.2-2 .2-2.8z" fill="${color3}"/></svg>`;

    let meIcon = L.divIcon({
        className: "leaflet-data-marker",
        html: svg.replace('#', '%23'),
        iconAnchor: [22, 28],
        iconSize: [20, 32],
        popupAnchor: [0, -30],
    });
    return L.marker([lat, lon], {
        icon: meIcon,
        title: title,
        draggable: true
    })
        .on('click', onIconClick)
        .on('dragend', onIconDragEnd);
}

function getIconCity(city_name, color, lat, lon) {
    let svg = `
    <svg  width="80" height="40"  xmlns="http://www.w3.org/2000/svg">
      <text x="40" y="35" class="svg_city_name">${city_name}</text>
    </svg>`;

    let meIcon = L.divIcon({
        className: "leaflet-data-marker",
        html: svg,
        iconAnchor: [80, 40],
        iconSize: [80, 40],
        popupAnchor: [0, -30],
    });
    return L.marker([lat, lon], {
        icon: meIcon,
        title: city_name,
        draggable: false
    });
}

var mymap = null;
var cities_cicles = [];

function plotMap() {
    mymap = L.map('mapid',
        {
            doubleClickZoom: false,
            maxZoom: 4,
            minZoom: 2
        })
        .locate({setView: true, maxZoom: 10})
        .setView([23.842971, 17.824434], 2);
    let bounds = mymap.getBounds();
    mymap.setMaxBounds(bounds);


    let Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key={api_key}', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
        api_key: '49a93af0-9018-4c13-b216-908d84a1a1b1'
    });

    Stadia_AlidadeSmoothDark.addTo(mymap);

    function onCircleOver(e) {
        let text = `${this.virus_level}`;
        popup
            .setLatLng(e.latlng)
            .setContent(text)
            .openOn(mymap);
    }

    const r0 = 45000;
    const r1 = 90000;
    const r2 = 130000;
    const r3 = 180000;

    let radius_dict = {0: r0, 1: r1, 2: r2, 3: r3};

    function onCircleClick(e) {
        var sign = is_epidemy_step ? 1 : -1;
        if (!is_epidemy_step && e.target.virus_level < 1 || is_epidemy_step && e.target.virus_level === 3) {
            return
        }
        if (e.target.virus_level <= 3) {
            let new_city_level = e.target.virus_level + sign;
            let circle = L.circle([e.target.lat, e.target.lon], {
                color: e.target.options.color,
                fillColor: e.target.options.color,
                fillOpacity: 0.8,
                radius: radius_dict[new_city_level]
            });
            circle.city_ind = e.target.city_ind;
            circle.city_name = e.target.city_name;
            circle.population = e.target.population;

            // add virus_level
            circle.virus_level = new_city_level;

            circle.lat = e.target.lat;
            circle.lon = e.target.lon;

            circle.on('click', onCircleClick)
                .on('mouseover', onCircleOver)
                .addTo(mymap);
            e.target.remove(mymap);

            // game_vue.cities_virus_levels[e.target.city_name] = circle.virus_level;
            cities_cicles[circle.city_ind] = circle;

            if (!is_epidemy_step) {
                // send_cmd player
            }
        }
    }

    function get_city_ind_by_name(city_name) {
        return names.indexOf(city_name);
    }

    function get_city_color(city_name) {
        let ind = get_city_ind_by_name(city_name);
        return colors[ind];
    }

    function onLineOver(e) {
        // let coord = e.latlng.toString().replace('LatLng', '');
        // let text = `${this.parent_name} <--> ${this.child_name} ${coord}`;

        let lon_parent = lons[get_city_ind_by_name(this.parent_name)];
        let lon_child = lats[get_city_ind_by_name(this.child_name)];

        let parent_name = this.parent_name;
        let child_name = this.child_name;

        // if  (lon_parent < lon_child){
        //     parent_name = this.child_name;
        //     child_name =  this.parent_name;
        // }
        // yellow blue black red
        let color_dict_num = {yellow: 3, blue: 2, black: 1, red: 0};
        if (color_dict_num[get_city_color(parent_name)] < color_dict_num[get_city_color(child_name)]) {
            parent_name = this.child_name;
            child_name = this.parent_name;
        }

        if (color_dict_num[get_city_color(parent_name)] === color_dict_num[get_city_color(child_name)]) {
            if (lon_parent < lon_child) {
                parent_name = this.child_name;
                child_name = this.parent_name;
            }
        }

        let color_parent = get_city_color(parent_name);
        let color_child = get_city_color(child_name);

        // let text = `<span class="${color_parent}">${parent_name}</span>
        //              <span class="green">⟷</span>
        //              <span class="${color_child}">${child_name}</span>`;
        let text = `<span class="${color_parent}">${parent_name}</span>
                     <span class="green">✈</span>
                     <span class="${color_child}">${child_name}</span>`;
        popup
            .setLatLng(e.latlng)
            .setContent(text)
            .openOn(mymap);
    }

// draw connections
    for (let i = 0; i < polylines.length; i++) {
        let line = L.polyline(polylines[i], {opacity: 0.3}).addTo(mymap);

        line.parent_name = names[polylines_ind[i][0]];
        line.child_name = names[polylines_ind[i][1]];
        // line.on('click', onLineClick);
        line.on('mouseover', onLineOver);
    }

// draw cities
    for (let i = 0; i < 48; i++) {
        let lat = lats[i];
        let lon = lons[i];
        // let r = population[i] * 20000;
        // let r = 100000; // size in km
        let color = colors[i];

        let circle = L.circle([lat, lon], {
            color: color,
            fillColor: color,
            fillOpacity: 0.8,
            radius: r0
        }).addTo(mymap);
        circle.city_ind = i;
        circle.city_name = names[i];
        circle.population = population[i];
        circle.virus_level = 0;
        circle.lat = lat;
        circle.lon = lon;
        circle.on('mouseover', onCircleOver);
        circle.on('click', onCircleClick);

        cities_cicles.push(circle);

        let city_name_marker = getIconCity(names[i], color, lat, lon);
        city_name_marker.addTo(mymap);

        // let text = `${circle.city_name} ${circle.virus_level}`;
        // circle.bindTooltip(text, opacity=0.6).openTooltip();
        // popup
        //     .setLatLng([lat, lon])
        //     .setContent(text)
        //     .openOn(mymap);
    }

    let color1 = '#878787';
    let color2 = '#5F5F5F';
    let color3 = '#ff5000';

    let color4 = '#06ff00';
    let color5 = '#00c1ff';
    let color6 = '#ffe500';

    let lat = 32.185531;
    let lon = -83.542718;
    let dx = 1;

    // let laboratory = getIconHouse('laboratory', lat + 2 * dx, lon);
    // laboratory.addTo(mymap);

    for (var i = 0; i < 48; i++) {
        let laboratory = getIconHouse('laboratory', lat + 2 * dx, lon);
        laboratory.addTo(mymap);
    }

    let doctor_marker = getIcon('Doctor', color1, color2, color3, lat, lon + dx);
    doctor_marker.addTo(mymap);

    let scientist_marker = getIcon('Scientist', color1, color2, color4, lat + dx, lon + dx);
    scientist_marker.addTo(mymap);

    let researcher_marker = getIcon('Researcher', color1, color2, color5, lat - dx, lon - dx);
    researcher_marker.addTo(mymap);

    let caranteener_marker = getIcon('Caranteener', color1, color2, color6, lat + dx, lon);
    caranteener_marker.addTo(mymap);
}


Vue.component("tab-home", {
    template: `
<div id="home_div" class="container">
<div class="row">
    <div class="col-md-4 left_side">
        <h3>Input persons</h3>
        <h4><span class="blue">Doctor&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> {{ player1_name }}:&nbsp
        <input v-model="player1_name" class="input_name form-control"/></h4>
        
        <h4><span class="blue">Researcher&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> {{ player2_name }}:&nbsp
        <input v-model="player2_name" type="text" class="input_name form-control"/></h4>
        
        <h4><span class="blue">Scientist&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> {{ player3_name }}:&nbsp
        <input v-model="player3_name" class="input_name form-control"/></h4>
        
        <h4><span class="blue">Caranteener</span> {{ player4_name }}:&nbsp
        <input v-model="player4_name" class="input_name form-control"/></h4>
        
        <h4><span class="red">Complexity&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> {{ complexity }}:&nbsp</h4>
        
        <select v-model="complexity" class="custom-select">
              <option disabled value="">Options</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
        </select>
    </div>
    <div id="first_menu" class="col-md-8">
        <center>
            <img class='card_img' src="img/Doctor.jpg"/>
            &nbsp &nbsp
            <img class='card_img' src="img/Researcher.jpg"/>
            <br>
            &nbsp &nbsp
            <img class='card_img' src="img/Scientist.jpg"/>
            &nbsp &nbsp
            <img class='card_img' src="img/Caranteener.jpg"/>
            <br>
            <br>
            <button id="start_btn" type="button" class="btn btn-success" onclick="start_game()">start</button>
        </center>
    </div>
 </div>
</div>
    `,
    data: function () {
        return {
            player1_name: 'Alice',
            player2_name: 'Bob',
            player3_name: 'Charlie',
            player4_name: 'Chuck',
            complexity: 2,
        }
    }
});


var init_players_cards = {
    Doctor: ['Атланта', 'Мадрид'],
    Scientist: ['Пекин', 'Москва'],
    Researcher: ['Лондон', 'Карачи'],
    Caranteener: ['Милан', 'Стамбул'],
};

var init_players_cards_color = convert2color(init_players_cards);


function convert2color(data) {
    let data_color = {};
    for (const [key, value] of Object.entries(data)) {
        data_color[key] = text2color(value);
    }
    return data_color;
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function text2color(words) {
    let new_words = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let c = colors_rus[word];
        new_words.push({name: word, cname: `color_${c}`})
    }
    return new_words;
}

let init_cards_doctor = text2color(['Атланта', 'Мадрид']);
let init_cards_scientist = text2color(['Пекин', 'Москва']);
let init_cards_researcher = text2color(['Лондон', 'Карачи']);
let init_cards_caranteener = text2color(['Милан', 'Стамбул']);

let init_players_words = ['Атланта', 'Мадрид', 'Пекин', 'Москва', 'Лондон', 'Карачи', 'Стамбул', 'Милан'];
let init_game_cards = text2color(names_rus.filter(function (x) {
    return !init_players_words.includes(x);
}).concat(special_cards));
let init_old_cards = [];

let init_cities_virus_levels = {};


Vue.use(vuedraggable);

let tab_game = Vue.component("tab-game", {
    template: `<div>
<div class="game_params">
        <div id="vaccines" class="game_params" align="left">
                <img class='virus_img' src='img/virus_danger.png'/>
                <input type="checkbox" id="vaccine_blue" value="false" v-model="vaccine_blue">
                <label for="vaccine_blue"><span class="color_blue">blue</span></label>
                &nbsp
                <input type="checkbox" id="vaccine_yellow" value="false" v-model="vaccine_yellow">
                <label for="vaccine_yellow"><span class="color_yellow">yellow</span></label>
                &nbsp
                <input type="checkbox" id="vaccine_black" value="false" v-model="vaccine_black">
                <label for="vaccine_black"><span class="color_black">black</span></label>
                &nbsp
                <input type="checkbox" id="vaccine_red" value="false" v-model="vaccine_red">
                <label for="vaccine_red"><span class="color_red">red</span></label>
        </div>
        <div id="virus_level">
            virus level
            <input type="radio" id="v1" value="1" v-model="virus_level">
            <label for="v1">2</label>

            <input type="radio" id="v2" value="2" v-model="virus_level">
            <label for="v2">2</label>

            <input type="radio" id="v3" value="3" v-model="virus_level">
            <label for="v3">3</label>

            <input type="radio" id="v4" value="4" v-model="virus_level">
            <label for="v4">3</label>

            <input type="radio" id="v5" value="5" v-model="virus_level">
            <label for="v5">3</label>

            <input type="radio" id="v6" value="6" v-model="virus_level">
            <label for="v6">4</label>

            <input type="radio" id="v7" value="7" v-model="virus_level">
            <label for="v7">4</label>

            <div hidden="true">{{ virus_level }}</div>
        </div>

        <div id="epidemic_flashes" align="left">
            epidemic flashes
            <input type="radio" id="f0" value="0" v-model="epidemic_flashes">
            <label for="f0">0</label>

            <input type="radio" id="f1" value="1" v-model="epidemic_flashes">
            <label for="f1">1</label>

            <input type="radio" id="f2" value="2" v-model="epidemic_flashes">
            <label for="f2">2</label>

            <input type="radio" id="f3" value="3" v-model="epidemic_flashes">
            <label for="f3">3</label>

            <input type="radio" id="f4" value="4" v-model="epidemic_flashes">
            <label for="f4">4</label>

            <input type="radio" id="f5" value="5" v-model="epidemic_flashes">
            <label for="f5">5</label>

            <input type="radio" id="f6" value="6" v-model="epidemic_flashes">
            <label for="f6">6</label>

            <input type="radio" id="f7" value="7" v-model="epidemic_flashes">
            <label for="f7">7</label>

            <input type="radio" id="f8" value="8" v-model="epidemic_flashes">
            <label for="f8">8</label>

            <div hidden="true">{{ epidemic_flashes }}</div>
        </div>
    </div>
    
<div class="row h-75">
    <div id="left_menu" class="left_side_small bg_dark_color col-md-2">
        <h3>Players</h3>
         <img class='card_img_static' v-bind:src="'img/' + current_player +'.jpg'"/>
         <br>
        <select v-model="current_player" size="4" class="left_select">
            <option><span class="player_span">Doctor</span></option>
            <option><span class="player_span">Researcher</span></option>
            <option><span class="player_span">Scientist</span></option>
            <option><span class="player_span">Caranteener</span></option>
        </select><br><br>
        <div class="input-group">
            <input type="text" value="2" id="infect_input" class="form-control" v-model="infect_cities_count"/>
            <div class="input-group-append">
                <button type="button" class="btn btn-danger" v-on:click="infectCities">infect cities</button>
            </div>
        </div>
    </div>
<br>
    <div  class="col-md-10 h-75">
        <div id='mapid'>
        </div>
    </div>
</div>
<div class="bottom" align="center">
        <div id="rope"></div>
        <div>
           <div class="row">
              <div class="col-sm">
            
              
              
                <div class="col-3 player_field" v-if="current_player === 'Doctor'" >
                      <h3>
                          <span class="selected_player">{{ current_player }} </span>
                          &nbsp
                          <span class="red">{{ cards_doctor.length }} </span> cards
                      </h3>
                      <draggable class="list-group" :list="cards_doctor"  group="people" @change="log">
                        <div
                          v-for="(element, index) in cards_doctor"
                          :key="element.name"
                          v-bind:class="['list-group-item', element.cname]"
                        >
                          {{ element.name }}
                        </div>
                      </draggable>
                    </div>
                
                <div class="col-3 player_field" v-if="current_player === 'Scientist'">
                      <h3>
                          <span class="selected_player">{{ current_player }} </span>
                          &nbsp
                          <span class="red">{{ cards_scientist.length }} </span> cards
                      </h3>

                  <draggable class="list-group" :list="cards_scientist"  group="people" @change="log">
                    <div
                      v-bind:class="['list-group-item', element.cname]"
                      v-for="(element, index) in cards_scientist"
                      :key="element.name"
                    >
                      {{ element.name }}
                    </div>
                  </draggable>
                </div>
                
                 <div class="col-3 player_field" v-if="current_player === 'Researcher'">
                     <h3>
                          <span class="selected_player">{{ current_player }} </span>
                          &nbsp
                          <span class="red"> {{ cards_researcher.length }} </span> cards
                      </h3>
       
                  <draggable class="list-group" :list="cards_researcher"  group="people" @change="log">
                    <div
                       v-bind:class="['list-group-item', element.cname]"
                      v-for="(element, index) in cards_researcher"
                      :key="element.name"
                    >
                      {{ element.name }}
                    </div>
                  </draggable>
                </div>
                
                 <div class="col-3 player_field" v-if="current_player === 'Caranteener'">
                      <h3>
                          <span class="selected_player">{{ current_player }} </span>
                          &nbsp
                          <span class="red"> {{ cards_caranteener.length }} </span> cards
                      </h3>
                  <draggable class="list-group"  :list="cards_caranteener"  group="people" @change="log">
                    <div
                       v-bind:class="['list-group-item', element.cname]"
                      v-for="(element, index) in cards_caranteener"
                      :key="element.name"
                    >
                      {{ element.name }}
                    </div>
                  </draggable>
                </div>
                </div>
                
              <div class="col-sm" hidden="true">
                <div class="col-3 player_field">
                  <h5>Game cards {{ game_cards.length }}
                  <button class="shuffle_btn btn btn-success" v-on:click="sort_game_cards">sort</button>
                  <button class="shuffle_btn btn btn-success" v-on:click="shuffle_game_cards">shuffle</button>
                  </h5>
                  <draggable class="list-group" :list="game_cards" group="people" @change="log">
                    <div
                      v-bind:class="['list-group-item', element.cname]"
                      v-for="(element, index) in game_cards"
                      :key="element.name"
                    >
                      {{ element.name }}
                    </div>
                  </draggable>
                </div>
              </div>
               
            <div class="col-sm">
                  <div class="col-3 player_field">
                      <h4>Old cards {{ old_cards.length }}
                      <button class="shuffle_btn btn btn-success" type="button" v-on:click="sort_old_cards">sort</button> 
                      <button class="shuffle_btn btn btn-success" type="button" v-on:click="shuffle_old_cards">shuffle</button> 
                      </h4>
                      <draggable class="list-group" :list="old_cards"  group="people" @change="log">
                        <div
                          v-bind:class="['list-group-item', element.cname]"
                          v-for="(element, index) in old_cards"
                          :key="element.name"
                        >
                          {{ element.name }}
                        </div>
                      </draggable>
                    </div>
            </div>      
            <div class="col-sm">
                         <div class="col-3 player_field drive_panel">
                                <h4>Send command</h4>
                                <textarea v-model="user_cmd" id="text_area">
                                </textarea><br>
                                <button class="shuffle_btn btn btn-success" v-on:click="send_move">move</button>
                                <button class="shuffle_btn btn btn-danger" v-on:click="cancel_move">cancel</button>
                         </div>
            </div>
                
          </div>
                
        </div>
</div>

<!--    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal_msg">-->
<!--      Launch demo modal-->
<!--    </button>-->

    <div class="modal fade" id="modal_msg" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal_title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div id="modal_body" class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
<!--            <button type="button" class="btn btn-primary">Save changes</button>-->
          </div>
        </div>
      </div>
</div>
</div>
    `,
    mounted() {
        plotMap();
    },
    data: function () {
        return {
            current_player: 'Doctor',
            players_cards: init_players_cards,
            players_cards_color: init_players_cards_color,

            cards_doctor: init_cards_doctor,
            cards_scientist: init_cards_scientist,
            cards_researcher: init_cards_researcher,
            cards_caranteener: init_cards_caranteener,

            game_cards: init_game_cards,
            old_cards: init_old_cards,
            infect_cities_count: 2,
            vaccine_red: false,
            vaccine_yellow: false,
            vaccine_blue: false,
            vaccine_black: false,
            user_cmd: `{
    "type": "command",
    "command": "move",
    "args" : {
        "destination": "London"
    }
}`,
            virus_level: 1,
            epidemic_flashes: 0,
            // current_player: 'Scientist',
            cities_virus_levels: init_cities_virus_levels,
        }
    },
    methods: {
        send_move: function () {
           show_alert(title="Send cmd", text=this.user_cmd);

            // add cards to current player

            let additional_cards = this.game_cards
                .map(x => ({x, r: Math.random()}))
                .sort((a, b) => a.r - b.r)
                .map(a => a.x)
                .slice(0, 2);

            this.game_cards = this.game_cards.filter(e => !additional_cards.includes(e));

            switch (this.current_player) {
                case 'Doctor':
                    this.cards_doctor.push(...additional_cards);
                    break;

                case 'Scientist':
                    this.cards_scientist.push(...additional_cards);
                    break;

                case 'Researcher':
                    this.cards_researcher.push(...additional_cards);
                    break;

                case 'Caranteener':
                    this.cards_caranteener.push(...additional_cards);
                    break;
            }

            let res = getFromServer('http://127.0.0.1:8000/actions/api/v1', JSON.parse(this.user_cmd));
            show_alert("Response", res);
            this.old_cards = [];
            this.infectCities();
        },
        cancel_move: function () {
            show_alert('Info', 'Cancel move');
        },
        add: function () {
            alert('add');
            this.list.push({name: "Juan"});
        },
        replace: function () {
            alert('replace');
            this.list = [{name: "Edgard"}];
        },
        clone: function (el) {
            alert('clone');
            return {
                name: el.name + " cloned"
            };
        },
        log: function (evt) {
            window.console.log(evt);
        },
        shuffle_game_cards: function () {
            shuffle(this.game_cards);
        },
        shuffle_old_cards: function () {
            shuffle(this.old_cards);
        },
        sort_game_cards: function () {
            this.game_cards.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
        },
        sort_old_cards: function () {
            this.old_cards.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
        },
        infectCities: function () {
            is_epidemy_step = true;
            let n = this.infect_cities_count;
            const selected_inds = inds
                .map(x => ({x, r: Math.random()}))
                .sort((a, b) => a.r - b.r)
                .map(a => a.x)
                .slice(0, n);
            console.log(selected_inds);

            for (let i = 0; i < selected_inds.length; i++) {
                let ind = selected_inds[i];
                let latlngPoint = cities_cicles[ind].getLatLng();
                let logmsg = `infect ${names[ind]}`;
                console.log(logmsg);
                cities_cicles[ind].fire('click');
                // this.logtext2 += logmsg + '\n';
            }
            is_epidemy_step = false;
        },
        get_state: function () {
            return JSON.parse();
        },
        // change_user_cmd: function(x){
        //     this.user_cmd = x;
        // }
    },
    props: ['logtext', 'user_cmd'],
    watch: {
        old_cards: function () {
            if (this.old_cards.length > 0) {
                let last_city = this.old_cards[0];
                this.user_cmd = `{
    "type": "command",
    "command": "fly",
    "args" : {
        "destination": "${last_city.name}"
    }
}`
            }
        },
        deep: true
    }
});

Vue.component("tab-stats", {
        template: `
<div>
    <textarea v-model="logtext2">
    </textarea>    
</div>`,
        props: ["logtext2"]
    },
);

let game_vue = new Vue({
    el: "#dynamic-component-demo",
    data: {
        currentTab: "Game",
        tabs: ["Home", "Game", "Stats"],
        logtext: `
Game log: 
infect Los Angeles 
infect Lagos 
infect Shanghai 
infect Milan 
infect Bangkok 
infect Tehran 
infect Bogota 
infect Seoul 
infect Istanbul 
infect Miami 
infect Johannesburg 
infect Osaka 
infect London 
infect Jakarta 
infect Madrid 
infect St. Petersburg 
infect Karachi 
infect Tokyo 
infect Sydney 
infect Ho Chi Minh City`,
        user_cmd:  `{
    "type": "command",
    "command": "move",
    "args" : {
        "destination": "London"
    }
}`,
    },
    computed: {
        currentTabComponent: function () {
            return "tab-" + this.currentTab.toLowerCase();
        }
    },
    methods: {
        plotMap: plotMap
    },
    watch: {
        players_cards: function (values) {
            alert('change players_cards');
            this.players_cards_color = convert2color(values);
        },
        deep: true
    }
});

function getFromServer(query, params_dict) {
    // let response = await fetch(query);
    // return await response.text();
    let xhttp = new XMLHttpRequest();
    let params = '';
    for (let k in params_dict) {
        params += k + '=' + encodeURIComponent(params_dict[k]) + '&';
    }
    // let params = 'name=' + encodeURIComponent(name) + '&surname=' + encodeURIComponent(surname);
    xhttp.open("GET", query + '?' + params, false);
    xhttp.send();
    return xhttp.responseText;
}

function create_new_game() {
    let res = getFromServer("/create_new_game", {
            "name": "string",
            "owner": "string",
            "difficult": 0,
            "players": {
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
            },
            "player_count": "string",
            "created": "string"
        }
    );
    console.log(res);
}

create_new_game();
