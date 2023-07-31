//Элмент поля вывода
var boxEl = document.getElementById('allbox');
//коли-во кругов
var countCurcle = 0;
//Круги если Cookies отсутсвует
if (getCookie('count') == undefined) {
    countCurcle = 3;
    for (let i = 0; i < countCurcle; i++) {
        boxEl.innerHTML += (`<div class="circle id=${i}" ></div>`);
    }
}
//Воспроизведение считывая Cookies
if (+getCookie('count') > 0) {
    countCurcle = +getCookie('count');
    for (let i = 0; i < getCookie('count'); i++) {
        boxEl.innerHTML += (
            `<div class="circle id=${i}" ></div>`
        );
    }
}
//Добавление круга
document.getElementById('addCircle').addEventListener('click', () => {
    boxEl.innerHTML += (`<div class="circle id=${countCurcle + 1}" ></div>`);
    countCurcle += 1;
    addCookie('count', countCurcle, `max-age=${24 * 60 * 60}`);
})
//Удаление кругов
document.getElementById('delete').addEventListener('click', () => {
    var el = boxEl.lastChild;
    console.log(el);
    el.remove();
    countCurcle -= 1;
    deleteCookie('count');
    addCookie('count', countCurcle, `max-age=${24 * 60 * 60}`);
})
//Добавление Cookies (ключ, значение, параметр)
function addCookie(key, value, parameters) {
    document.cookie = `${key} = ${value}; ${parameters}`;
}
//Функция получения Cookies по ключу
function getCookie(key) {
    let cookies = {};
    let tempCookiesStrings = document.cookie.split('; ');
    for (let el of tempCookiesStrings) {
        let pare = el.split('=');
        cookies[pare[0]] = pare[1];
    }
    return cookies[key];
}
//Функция удаления Cookies по ключу
function deleteCookie(key) {
    addCookie(key, '!', 'max-age = 0');
}
