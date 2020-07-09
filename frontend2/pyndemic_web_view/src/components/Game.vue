<template>
  <div id="game_app">
    <div id="vaccines" class="game_params" align="left">
      <img class='virus_img' src="../assets/virus_danger.png"/>
      <input type="checkbox" id="vaccine_blue" value="false" v-model="vaccine_blue">
      <label for="vaccine_blue"><span class="color_blue">blue</span></label>
      <input type="checkbox" id="vaccine_yellow" value="false" v-model="vaccine_yellow">
      <label for="vaccine_yellow"><span class="color_yellow">yellow</span></label>
      <input type="checkbox" id="vaccine_black" value="false" v-model="vaccine_black">
      <label for="vaccine_black"><span class="color_black">black</span></label>
      <input type="checkbox" id="vaccine_red" value="false" v-model="vaccine_red">
      <label for="vaccine_red"><span class="color_red">red</span></label>
    </div>
    <div class="game_params">
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

    <div>
      <div class="row h-75">
        <div id="left_menu" class="left_side_small bg_dark_color col-md-2">
          <h3>Players</h3>
          <img class='card_img_static' v-bind:src="'../assets/' + current_player +'.jpg'"/>
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
        <div class="col-md-10 h-75">
          <div id='mapid'>
          </div>
        </div>
      </div>
      <div class="bottom" align="center">
        <div id="rope"></div>
        <div>
          <div class="row">
            <div class="col-sm">
              <div class="col-3" v-if="current_player === 'Doctor'">
                f <h3>
                <span class="selected_player">{{ current_player }} </span>
                <span class="red">{{ cards_doctor.length }} </span> cards
              </h3>
                <draggable class="list-group" :list="cards_doctor" group="people" @change="log">
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
                <h3>
                  <span class="selected_player">{{ current_player }} </span>
                  <span class="red">{{ cards_scientist.length }} </span> cards
                </h3>
                <draggable class="list-group" :list="cards_scientist" group="people" @change="log">
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
                <h3>
                  <span class="selected_player">{{ current_player }} </span>
                  <span class="red"> {{ cards_researcher.length }} </span> cards
                </h3>
                <draggable class="list-group" :list="cards_researcher" group="people" @change="log">
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
                <h3>
                  <span class="selected_player">{{ current_player }} </span>
                  <span class="red"> {{ cards_caranteener.length }} </span> cards
                </h3>
                <draggable class="list-group" :list="cards_caranteener" group="people" @change="log">
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
                  <button class="shuffle_btn btn btn-success" type="button" v-on:click="shuffle_old_cards">shuffle
                  </button>
                </h4>
                <draggable class="list-group" :list="old_cards" group="people" @change="log">
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

  </div>
</template>
<script>
  import L from 'leaflet';

  let inds = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47);
  let lats = Array(36.73225, 33.749, 33.340579999999996, 13.753979999999999, 4.60971, -34.61315, 38.901529, 22.27832, 28.65195, -6.21462, -26.202270000000002, 30.06263, 22.56263, 24.8608, -4.32758, 6.45407, -12.04318, 51.509812, 34.05223, 40.42464, 25.77427, 14.6042, 19.42847, 45.46427, 45.530288, 55.752219999999994, 19.07283, 40.71427, 34.693740000000005, 48.85341, 39.9075, -23.5475, 37.75249, 59.931533, -33.474191, 37.566, -33.86785, 41.01384, 25.04776, 35.69439000000001, 35.6895, 15.551770000000001, 10.82302, 13.08784, 41.85003, 31.22222, 24.68773, 51.467909999999996);
  let lons = Array(3.0874599999999996, -84.38798, 44.40088, 100.50144, -74.08175, -58.377230000000004, -77.03038, 114.17468999999998, 77.23149000000002, 106.84513000000001, 28.04363, 31.249670000000002, 88.36304, 67.0104, 15.31357, 3.3946699999999996, -77.02824, -0.12291, -118.24368, -3.697655, -80.19366, 120.9822, -99.12765999999999, 9.18951, -73.620469, 37.615559999999995, 72.88261, -74.00596999999998, 135.50218, 2.3488, 116.39723000000001, -46.636109999999995, -122.436447, 30.337966, -70.639481, 126.9784, 151.20731999999995, 28.949659999999998, 121.53185, 51.42151, 139.69171, 32.53241, 106.62965, 80.27847, -87.65005, 121.45806, 46.72185, 4.46901);
  let population = Array(2.0, 2.0, 7.0, 5.0, 7.0, 13.0, 2.0, 7.0, 10.0, 8.0, 2.0, 7.0, 4.0, 11.0, 7.0, 9.0, 7.0, 9.0, 3.0, 7.0, 2.0, 2.0, 12.0, 2.0, 2.0, 10.0, 12.0, 8.0, 2.0, 2.0, 11.0, 10.0, 2.0, 5.0, 6.0, 10.0, 4.0, 14.0, 7.0, 7.0, 8.0, 2.0, 3.0, 4.0, 2.0, 22.0, 4.0, 2.0);
  let names = Array('Algiers', 'Atlanta', 'Baghdad', 'Bangkok', 'Bogota', 'Buenos Aires', 'Washington', 'Hong Kong', 'Delhi', 'Jakarta', 'Johannesburg', 'Cairo', 'Kolkata', 'Karachi', 'Kinshasa', 'Lagos', 'Lima', 'London', 'Los Angeles', 'Madrid', 'Miami', 'Manila', 'Mexico City', 'Milan', 'Monreale', 'Moscow', 'Mumbai', 'New York City', 'Osaka', 'Paris', 'Beijing', 'SМЈo Paulo', 'San Francisco', 'St. Petersburg', 'Santiago', 'Seoul', 'Sydney', 'Istanbul', 'Taipei', 'Tehran', 'Tokyo', 'Khartoum', 'Ho Chi Minh City', 'Chennai', 'Chicago', 'Shanghai', 'Riyadh', 'Essen');
  let polylines_ind = [[0, 11], [0, 19], [0, 29], [0, 37], [1, 6], [1, 20], [1, 44], [2, 11], [2, 13], [2, 37], [2, 39], [2, 46], [3, 7], [3, 9], [3, 42], [3, 43], [3, 12], [4, 22], [4, 20], [4, 31], [4, 5], [4, 16], [5, 31], [6, 27], [6, 24], [6, 20], [7, 45], [7, 38], [7, 21], [7, 42], [7, 12], [8, 39], [8, 13], [8, 26], [8, 43], [8, 12], [9, 43], [9, 42], [9, 36], [10, 14], [10, 41], [11, 37], [11, 46], [11, 41], [12, 43], [13, 46], [13, 39], [13, 26], [14, 15], [14, 41], [15, 41], [15, 31], [16, 34], [16, 22], [17, 27], [17, 19], [17, 29], [17, 47], [18, 32], [18, 44], [18, 36], [18, 22], [19, 27], [19, 29], [19, 31], [20, 22], [21, 42], [21, 38], [21, 32], [21, 36], [22, 44], [23, 47], [23, 37], [23, 29], [24, 44], [24, 27], [25, 33], [25, 39], [25, 37], [26, 43], [28, 40], [28, 38], [29, 47], [30, 35], [30, 45], [32, 44], [32, 40], [33, 47], [33, 37], [35, 45], [35, 40], [38, 45], [40, 45]];
  let colors = Array('black', 'blue', 'black', 'red', 'yellow', 'yellow', 'blue', 'red', 'black', 'red', 'yellow', 'black', 'black', 'black', 'yellow', 'yellow', 'yellow', 'blue', 'yellow', 'blue', 'yellow', 'red', 'yellow', 'blue', 'blue', 'black', 'black', 'blue', 'red', 'blue', 'red', 'yellow', 'blue', 'blue', 'yellow', 'red', 'red', 'black', 'red', 'black', 'red', 'yellow', 'red', 'black', 'blue', 'red', 'black', 'blue');
  let polylines = polylines_ind.map(([parent, child]) => {
    return [[lats[parent], lons[parent]], [lats[child], lons[child]]];
  });
  let names_rus = ['Алжир',
    'Атланта',
    'Багдад',
    'Бангкок',
    'Богота',
    'Буэнос-Айрес',
    'Вашингтон',
    'Гонконг',
    'Дели',
    'Джакарта',
    'Йоханнесбург',
    'Каир',
    'Калькутта',
    'Карачи',
    'Киншаса',
    'Лагос',
    'Лима',
    'Лондон',
    'Лос-Анджелес',
    'Мадрид',
    'Майами',
    'Манила',
    'Мехико',
    'Милан',
    'Монреаль',
    'Москва',
    'Мумбаи',
    'Нью-Йорк',
    'Осака',
    'Париж',
    'Пекин',
    'Сан-Паулу',
    'Сан-Франциско',
    'Санкт-Петербург',
    'Сантьяго',
    'Сеул',
    'Сидней',
    'Стамбул',
    'Тайбэй',
    'Тегеран',
    'Токио',
    'Хартум',
    'Хошимин',
    'Ченнаи',
    'Чикаго',
    'Шанхай',
    'Эр-Рияд',
    'Эссен'];
  let colors_rus = {
    'Эпидемия1': 'orange',
    'Эпидемия2': 'orange',
    'Эпидемия3': 'orange',
    'Эпидемия4': 'orange',
    'Прогноз': 'white',
    'Иммунитет': 'white',
    'Переброска': 'white',
    'Тихая ночь': 'white',
    'Гос. грант': 'white',
    'Алжир': 'black',
    'Багдад': 'black',
    'Дели': 'black',
    'Каир': 'black',
    'Калькутта': 'black',
    'Карачи': 'black',
    'Москва': 'black',
    'Мумбаи': 'black',
    'Стамбул': 'black',
    'Тегеран': 'black',
    'Ченнаи': 'black',
    'Эр-Рияд': 'black',
    'Атланта': 'blue',
    'Вашингтон': 'blue',
    'Лондон': 'blue',
    'Мадрид': 'blue',
    'Милан': 'blue',
    'Монреаль': 'blue',
    'Нью-Йорк': 'blue',
    'Париж': 'blue',
    'Сан-Франциско': 'blue',
    'Санкт-Петербург': 'blue',
    'Чикаго': 'blue',
    'Эссен': 'blue',
    'Бангкок': 'red',
    'Гонконг': 'red',
    'Джакарта': 'red',
    'Манила': 'red',
    'Осака': 'red',
    'Пекин': 'red',
    'Сеул': 'red',
    'Сидней': 'red',
    'Тайбэй': 'red',
    'Токио': 'red',
    'Хошимин': 'red',
    'Шанхай': 'red',
    'Богота': 'yellow',
    'Буэнос-Айрес': 'yellow',
    'Йоханнесбург': 'yellow',
    'Киншаса': 'yellow',
    'Лагос': 'yellow',
    'Лима': 'yellow',
    'Лос-Анджелес': 'yellow',
    'Майами': 'yellow',
    'Мехико': 'yellow',
    'Сан-Паулу': 'yellow',
    'Сантьяго': 'yellow',
    'Хартум': 'yellow'
  };

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
      className: 'leaflet-data-marker',
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
      className: 'leaflet-data-marker',
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

  var cities_cicles = [];

  let special_cards = ['Эпидемия1', 'Эпидемия2', 'Эпидемия3', 'Эпидемия4',
    'Прогноз', 'Иммунитет', 'Переброска', 'Тихая ночь', 'Гос. грант'];

  let init_cards_doctor = text2color(['Атланта', 'Мадрид'])
  let init_cards_scientist = text2color(['Пекин', 'Москва'])
  let init_cards_researcher = text2color(['Лондон', 'Карачи'])
  let init_cards_caranteener = text2color(['Милан', 'Стамбул'])
  let init_players_words = ['Атланта', 'Мадрид', 'Пекин', 'Москва', 'Лондон', 'Карачи', 'Стамбул', 'Милан']
  let init_game_cards = text2color(names_rus.filter(function (x) {
    return !init_players_words.includes(x)
  }).concat(special_cards))
  let init_old_cards = []
  let init_cities_virus_levels = {}

  var init_players_cards = {
    Doctor: ['Атланта', 'Мадрид'],
    Scientist: ['Пекин', 'Москва'],
    Researcher: ['Лондон', 'Карачи'],
    Caranteener: ['Милан', 'Стамбул'],
  };
  var init_players_cards_color = convert2color(init_players_cards)

  function convert2color(data) {
    let data_color = {}
    for (const [key, value] of Object.entries(data)) {
      data_color[key] = text2color(value)
    }
    return data_color
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
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

  import draggable from "vuedraggable";

export default {
    name: 'Game',
    components: {
      draggable
    },
    data: function () {
      return {
        mymap: null,
        popup: L.popup(),
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
        msg: "Game",
        currentTab: "Game",
        tabs: ["Home", "Game", "Stats"],
        virus_level: 1,
        epidemic_flashes: 0,
        // current_player: 'Scientist',
        cities_virus_levels: init_cities_virus_levels,
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
      }
    },
    methods: {
      plotMap: function () {
        let mymap = L.map('mapid',
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
          if (e.target.virus_level < 3) {
            let circle = L.circle([e.target.lat, e.target.lon], {
              color: e.target.options.color,
              fillColor: e.target.options.color,
              fillOpacity: 0.8,
              radius: radius_dict[e.target.virus_level + 1]
            });
            circle.city_ind = e.target.city_ind;
            circle.city_name = e.target.city_name;
            circle.population = e.target.population;
            // add virus_level
            circle.virus_level = e.target.virus_level + 1;
            circle.lat = e.target.lat;
            circle.lon = e.target.lon;

            circle.on('click', onCircleClick)
              .on('mouseover', onCircleOver)
              .addTo(mymap);
            e.target.remove(mymap);
            game_vue.cities_virus_levels[e.target.city_name] = circle.virus_level;
            cities_cicles[circle.city_ind] = circle;
          } else {
            let circle = L.circle([e.target.lat, e.target.lon], {
              color: e.target.options.color,
              fillColor: e.target.options.color,
              fillOpacity: 0.8,
              radius: r0
            });
            circle.city_ind = e.target.city_ind;
            circle.city_name = e.target.city_name;
            circle.population = e.target.population;
            // drop virus_level
            circle.virus_level = 0;
            circle.lat = e.target.lat;
            circle.lon = e.target.lon;
            circle
              .on('click', onCircleClick)
              .on('mouseover', onCircleOver)
              .addTo(mymap);
            e.target.remove(mymap);
            game_vue.cities_virus_levels[e.target.city_name] = circle.virus_level;
            cities_cicles[circle.city_ind] = circle;
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
          let line = L.polyline(polylines[i], {opacity: 0.3}).addTo(mymap);
          line.parent_name = names[polylines_ind[i][0]];
          line.child_name = names[polylines_ind[i][1]];
          line.on('click', onLineClick);
        }
// draw cities
        for (let i = 0; i < 48; i++) {
          let lat = lats[i]
          let lon = lons[i]
          // let r = population[i] * 20000;
          // let r = 100000; // size in km
          let color = colors[i]
          let circle = L.circle([lat, lon], {
            color: color,
            fillColor: color,
            fillOpacity: 0.8,
            radius: r0
          }).addTo(mymap)
          circle.city_ind = i
          circle.city_name = names[i]
          circle.population = population[i]
          circle.virus_level = 0
          circle.lat = lat
          circle.lon = lon
          circle.on('mouseover', onCircleOver)
          circle.on('click', onCircleClick)
          cities_cicles.push(circle)
          // let text = `${circle.city_name} ${circle.virus_level}`;
          // circle.bindTooltip(text, opacity=0.6).openTooltip();
          // popup
          //     .setLatLng([lat, lon])
          //     .setContent(text)
          //     .openOn(mymap);
        }
        let color1 = '#878787'
        let color2 = '#5F5F5F'
        let color3 = '#ff5000'
        let color4 = '#06ff00'
        let color5 = '#00c1ff'
        let color6 = '#ffe500'
        let lat = 32.185531
        let lon = -83.542718
        let dx = 1
        // let laboratory = getIconHouse('laboratory', lat + 2 * dx, lon);
        // laboratory.addTo(mymap);
        for (var i = 0; i < 48; i++) {
          let laboratory = getIconHouse('laboratory', lat + 2 * dx, lon);
          laboratory.addTo(mymap)
        }
        let doctor_marker = getIcon('Doctor', color1, color2, color3, lat, lon + dx);
        doctor_marker.addTo(mymap)
        let scientist_marker = getIcon('Scientist', color1, color2, color4, lat + dx, lon + dx);
        scientist_marker.addTo(mymap)
        let researcher_marker = getIcon('Researcher', color1, color2, color5, lat - dx, lon - dx);
        researcher_marker.addTo(mymap)
        let caranteener_marker = getIcon('Caranteener', color1, color2, color6, lat + dx, lon);
        caranteener_marker.addTo(mymap)
        return mymap
      },
      add: function () {
        this.list.push({name: "Juan"})
      },
      replace: function () {
        this.list = [{name: "Edgard"}]
      },
      clone: function (el) {
        return {
          name: el.name + " cloned"
        };
      },
      log: function (evt) {
        window.console.log(evt)
      },
      shuffle_game_cards: function () {
        shuffle(this.game_cards)
      },
      shuffle_old_cards: function () {
        shuffle(this.old_cards)
      },
      sort_game_cards: function () {
        this.game_cards.sort(function (a, b) {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        })
      },
      sort_old_cards: function () {
        this.old_cards.sort(function (a, b) {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }
          return 0
        })
      },
      infectCities: function () {
        let n = this.infect_cities_count
        const selected_inds = inds
          .map(x => ({x, r: Math.random()}))
          .sort((a, b) => a.r - b.r)
          .map(a => a.x)
          .slice(0, n)
        console.log(selected_inds)
        for (let i = 0; i < selected_inds.length; i++) {
          let ind = selected_inds[i]
          let latlngPoint = cities_cicles[ind].getLatLng()
          let logmsg = `infect ${names[ind]}`
          console.log(logmsg)
          cities_cicles[ind].fire('click')
          // this.logtext2 += logmsg + '\n'
        }
      },
      get_state: function () {
        return JSON.parse()
      }
    },
    props: ['logtext2'],
    mounted() {
      this.mymap = this.plotMap()
    },
    watch: {
      players_cards: function (values) {
        alert('change players_cards')
        this.players_cards_color = convert2color(values)
      },
      deep: true
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "leaflet/dist/leaflet.css";

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
