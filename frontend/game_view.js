let popup = L.popup();


function onIconClick(e) {
    let lat = e.latlng.lat + 2;
    let lon = e.latlng.lng;

    popup.setLatLng([lat, lon])
        .setContent(`${e.target.options.title}`)
        .openOn(mymap);
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
    }).on('click', onIconClick);
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
    }).on('click', onIconClick);
}

var mymap = null;

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
        let text = `${this.city_name} ${this.virus_level}`;
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
        // let coord = e.latlng.toString().replace('LatLng', '');
        // let text = `${this.city_name}  ${this.population} ${coord}`;
        // let text = `${this.city_name}`;

        if (e.target.virus_level < 3) {
            let circle = L.circle([e.target.lat, e.target.lon], {
                color: e.target.options.color,
                fillColor: e.target.options.color,
                fillOpacity: 0.8,
                radius: radius_dict[e.target.virus_level + 1]
            });

            circle.city_name = e.target.city_name;
            circle.population = e.target.population;
            circle.virus_level = e.target.virus_level + 1;
            circle.lat = e.target.lat;
            circle.lon = e.target.lon;

            circle.on('click', onCircleClick)
                .on('mouseover', onCircleOver)
                .addTo(mymap);
            e.target.remove(mymap);
        } else {
            let circle = L.circle([e.target.lat, e.target.lon], {
                color: e.target.options.color,
                fillColor: e.target.options.color,
                fillOpacity: 0.8,
                radius: r0
            });
            circle.city_name = e.target.city_name;
            circle.population = e.target.population;
            circle.virus_level = 0;
            circle.lat = e.target.lat;
            circle.lon = e.target.lon;
            circle
                .on('click', onCircleClick)
                .on('mouseover', onCircleOver)
                .addTo(mymap);
            e.target.remove(mymap);
        }
    }


    function onLineClick(e) {
        let coord = e.latlng.toString().replace('LatLng', '');
        popup
            .setLatLng(e.latlng)
            .setContent(`${this.parent_name} <--> ${this.child_name} ${coord}`)
            .openOn(mymap);
    }

// draw connections
    for (let i = 0; i < polylines.length; i++) {
        let ant_params = {
            "delay": 400,
            "dashArray": [
                34,
                20
            ],
            "weight": 5,
            "color": "rgba(0,0,33,0.44)",
            "pulseColor": "#4eb907",
            "paused": false,
            "reverse": false,
            "hardwareAccelerated": true,
            "opacity": 0.2
        };
        // if (i % 6 === 0) {
        //     // draw each 6 city as animation path
        //     var line = L.polyline.antPath(polylines[i], ant_params
        //     ).addTo(mymap);
        // } else {
        //     // draw line
        //     var line = L.polyline(polylines[i], {opacity: 0.3}).addTo(mymap);
        // }
        //
        // draw line
        let line = L.polyline(polylines[i], {opacity: 0.3}).addTo(mymap);

        line.parent_name = names[polylines_ind[i][0]];
        line.child_name = names[polylines_ind[i][1]];
        line.on('click', onLineClick);
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

        circle.city_name = names[i];
        circle.population = population[i];
        circle.virus_level = 0;
        circle.lat = lat;
        circle.lon = lon;
        circle.on('mouseover', onCircleOver);
        circle.on('click', onCircleClick);

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
    <div class="col-sm left_side">
        <h2>Input persons</h2>
        <h3><span class="blue">Doctor&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> {{ player1_name }}:&nbsp
        <input class="input_name"  v-model="player1_name"/></h3>
        
        <h3><span class="blue">Researcher&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> {{ player2_name }}:&nbsp
        <input class="input_name"  v-model="player2_name"/></h3>
        
        <h3><span class="blue">Scientist&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> {{ player3_name }}:&nbsp
        <input class="input_name"  v-model="player3_name"/></h3>
        
        <h3><span class="blue">Caranteener</span> {{ player4_name }}:&nbsp
        <input class="input_name" v-model="player4_name"/></h3>
        
        <h3><span class="red">Complexity&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> {{ complexity }}:&nbsp</h3>
        

        <select v-model="complexity">
              <option disabled value="">Options</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
        </select>
    </div>
    <div id="first_menu" class="col-sm">
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


Vue.use(vuedraggable);

let tab_game = Vue.component("tab-game", {
    template: `<div>

<div class="row">
<div id="left_menu" class="left_side_small bg_dark_color col-md-2">
    <h3>Players</h3>
     <img class='card_img_static' v-bind:src="'img/' + current_player +'.jpg'"/>
     <br>
    <select v-model="current_player" size="4" class="left_select">
        <option><span class="player_span">Doctor</span></option>
        <option><span class="player_span">Researcher</span></option>
        <option><span class="player_span">Scientist</span></option>
        <option><span class="player_span">Caranteener</span></option>
    </select><br>
    <a href="pandemic_lists.html" class="pandemic_lists_link" target="_blank">pandemic lists</a>
</div>
<br>
<div  class="col-md-10">
    <div id='mapid'>
    </div>
</div>
</div>
<div class="bottom" align="center">
        <div id="rope"></div>
        <div>
        <h3><span class="selected_player">{{ current_player }}</span> cards 
    <!--        <span> {{ players_cards[current_player] }} </span>-->
        </h3>

           <div class="row">
              <div class="col-sm">
                <div class="col-3" v-if="current_player === 'Doctor'" >
                      <h3>Doctor {{ cards_doctor.length }}</h3>
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
                
                <div class="col-3" v-if="current_player === 'Scientist'">
                  <h3>Scientist {{ cards_scientist.length }} </h3>
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
                
                 <div class="col-3" v-if="current_player === 'Researcher'">
                  <h3>Researcher {{ cards_researcher.length }}</h3>
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
                
                 <div class="col-3" v-if="current_player === 'Caranteener'">
                  <h3>Caranteener {{ cards_caranteener.length }}</h3>
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
                
              <div class="col-sm">
                <div class="col-3">
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
              <div class="col-3">
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
            old_cards: init_old_cards
        }
    },
    methods: {
        add: function () {
            this.list.push({name: "Juan"});
        },
        replace: function () {
            this.list = [{name: "Edgard"}];
        },
        clone: function (el) {
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
    },
    watch: {deep: true}
});

Vue.component("tab-stats", {
    template: "<div><img src='img/pandemic_log_example.png' height='600px'></div></div>"
});

let game_vue = new Vue({
    el: "#dynamic-component-demo",
    data: {
        currentTab: "Game",
        tabs: ["Home", "Game", "Stats"],
        virus_level: 1,
        epidemic_flashes: 0,
        // current_player: 'Scientist',
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
