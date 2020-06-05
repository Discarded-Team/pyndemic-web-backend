

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

let colors_rus = {'Эпидемия1': 'orange', 'Эпидемия2': 'orange', 'Эпидемия3': 'orange', 'Эпидемия4': 'orange','Прогноз': 'white', 'Иммунитет': 'white', 'Переброска': 'white', 'Тихая ночь': 'white', 'Гос. грант': 'white', 'Алжир': 'black', 'Багдад': 'black', 'Дели': 'black', 'Каир': 'black', 'Калькутта': 'black', 'Карачи': 'black', 'Москва': 'black', 'Мумбаи': 'black', 'Стамбул': 'black', 'Тегеран': 'black', 'Ченнаи': 'black', 'Эр-Рияд': 'black', 'Атланта': 'blue', 'Вашингтон': 'blue', 'Лондон': 'blue', 'Мадрид': 'blue', 'Милан': 'blue', 'Монреаль': 'blue', 'Нью-Йорк': 'blue', 'Париж': 'blue', 'Сан-Франциско': 'blue', 'Санкт-Петербург': 'blue', 'Чикаго': 'blue', 'Эссен': 'blue', 'Бангкок': 'red', 'Гонконг': 'red', 'Джакарта': 'red', 'Манила': 'red', 'Осака': 'red', 'Пекин': 'red', 'Сеул': 'red', 'Сидней': 'red', 'Тайбэй': 'red', 'Токио': 'red', 'Хошимин': 'red', 'Шанхай': 'red', 'Богота': 'yellow', 'Буэнос-Айрес': 'yellow', 'Йоханнесбург': 'yellow', 'Киншаса': 'yellow', 'Лагос': 'yellow', 'Лима': 'yellow', 'Лос-Анджелес': 'yellow', 'Майами': 'yellow', 'Мехико': 'yellow', 'Сан-Паулу': 'yellow', 'Сантьяго': 'yellow', 'Хартум': 'yellow'};

let special_cards = ['Эпидемия1','Эпидемия2', 'Эпидемия3', 'Эпидемия4',
                     'Прогноз', 'Иммунитет', 'Переброска', 'Тихая ночь', 'Гос. грант'];