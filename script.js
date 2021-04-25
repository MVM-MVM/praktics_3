/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
'use strict';
let numberOfFilms;
const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: start,
    rememberMyFilms: rememberMyFilms,
    detectPersonalLevel: detectPersonalLevel,
    showMyDB: showMyDB,
    writeYourGenres: writeYourGenres,
    toggleVisibleMyDB: toggleVisibleMyDB,
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms (personalMovieDB.movies);
personalMovieDB.detectPersonalLevel(personalMovieDB.count);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

function start(){
    do {}
    while (!testNumber(numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1'),0,1000000));
    personalMovieDB.count = +numberOfFilms;
}

function rememberMyFilms (arr){
    for (let i = 0; i < 2;i++) {
        let k, l, m, n;
        while (!l) {
            n = prompt('Один из последних просмотренных фильмов?', 'Logan');
            l = testString(n, 1, 50);
        }
        while (!k) { 
            m = prompt(`На сколько оцените фильм ${n}? ot 0 do 10`, '8.1');
            k = (testNumber(m,0,10));
        }
        arr[n] = +m;
    }    
}

function detectPersonalLevel (inp){
    if (inp < 10) { alert("Просмотрено довольно мало фильмов"); }
    else {
        if (10 <= inp && inp <= 30) { alert("Вы классический зритель"); }
        else {
            if (inp > 30) { alert("Вы киноман"); }
            else { alert("Произошла ошибка"); }
        }
    }
}

function testString(n, min, max) {
    if (n === null) { alert("Cancel answer! Try again!"); return false; }
    if (n.length < min) { alert("Too short answer! Try again!"); return false; }
    if (n.length > max) { alert("Too long answer! Try again!"); return false; }
    return true;
}

function testNumber(str, min, max) {
    if (str === null) { alert('You push "cancel"! Try again!'); return false; }
    if (str === '') { alert('Empty answer! Try again!'); return false; }
    if (isNaN(+str)) { alert('You answer is not number! Try again!'); return false; }
    if (+str === 0 && str !== "0" ) { alert('You answer "space" - is not number! Try again!'); return false; }
    if (+str < min) { alert(`You answer wrong! ${str} < ${min} Try again!`); return false; }
    if (+str > max) { alert(`You answer wrong! ${str} > ${max} Try again!`); return false; }
    return true;
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function toggleVisibleMyDB(){
    personalMovieDB.privat = !personalMovieDB.privat;
}

function writeYourGenres() {
    for (let i = 1, k; i <= 3; i++) {
        k = prompt(`Ваш любимый жанр под номером ${i}`);
        if(!testString (k,1,20)) {i--;}
        else {personalMovieDB.genres[i - 1] = k;}
    }
    personalMovieDB.genres.forEach(function(item, i) {
        console.log (`Любимый жанр #${i+1} - это ${item}`);
    });
}
