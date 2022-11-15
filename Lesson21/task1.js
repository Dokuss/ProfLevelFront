/* 
1. Заменить текстовое сво-во заголовка на "Супер-пупер-заголовок!"
2. Задать класс "login_text" для элемента Login 
*/
/* 
let body = document.body

let header = body.firstElementChild

let div = header.firstElementChild

let h1 = div.firstElementChild

h1.innerText = "Супер-пупер-заголовок!"

let divWrap = header.nextElementSibling

let divNav = divWrap.lastElementChild

let a = divNav.lastElementChild
let p  = a.lastElementChild 
p.className = 'login_text' 
*/

// console.log(header);

// -------------------------------------------------------------------
// document.querySelector()   - method for search on css class

/* 
.div   - class div
#div   - id div
div    - teg div
*/

/* let h1 = document.querySelector('#h1_elem')
h1.innerText = "Супер-пупер-заголовок!"

let p_login = document.querySelector('.login_text')
p_login.innerText = 'New Login'

let a = p_login.parentElement

// a.parentElement.prepend(a)
a.parentElement.firsElementChild.after(a)

console.log(a); */

let elems = document.querySelectorAll('.login_text')
// console.log(Array.isArray(elems));

for (let elem of elems){
    elem.setAttribute('for', 'test')
}

let a_elem = document.querySelectorAll("a")



