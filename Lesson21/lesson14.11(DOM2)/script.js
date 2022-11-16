// Определение существующего элемента в разметке

let body = document.body

// body.firstElementChild          - первый дочернй элемент
// body.lastElementChild           - последний дочерний элемент
// body.nextElementSibling         - следующий братский узел
// body.previousElementSibling     - предыдущий братский узел
// body.parentElement              - родитеьский тег

// Задание 1
// 1. Заменить текстовое сво-во заголовка на "Супер-пупер-заголовок!"
// 2. Задать класс "login_text" для элемента Login

// 1
// let header = body.firstElementChild
// let div_container = header.firstElementChild
// let h1 = div_container.firstElementChild
// h1.innerText = 'Супер-пупер-заголовок!'

// 2
// let p_login_text = body.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.lastElementChild
// p_login_text.className = 'login_text'


// ------------------------------------
// document.querySelector()  - метод, производящий посик по css селектору

// CSS селекторы:
// .div    - класс div
// #div    - id div
// div     - тег div

    // let h1 = document.querySelector('#h1_elem')
    // h1.innerText = 'Супер-пупер-заголовок!'

    // let p_login = document.querySelector('.login_text')
    // p_login.innerText = 'New Login'

// Перемещение элемента по разметке
    // let a = p_login.parentElement
// let nav = a.parentElement
// let a_home = nav.firstElementChild
// Как следующий элемент по отношению к элементу a_ho,e
    // a_home.after(a)

// ------
// document.querySelectorAll()      - метод, возвращающий список найденных элементов по css-селектору
// let elems = document.querySelectorAll('.login_text')
// console.log(Array.isArray(elems))

// for (let elem of elems){
//     elem.innerText = 'Tigran'
// }

// Задание:
// Задайте для всех тегов "a" класс "a_color_theme"

let a_elems = document.querySelectorAll('a')

for (let elem of a_elems){
    elem.className = 'a_color_theme'
}