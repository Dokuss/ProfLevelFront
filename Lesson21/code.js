// Определение существующего элемента в разметке

let body = document.body

// body.firstElementChild          - первый дочернй элемент
// body.lastElementChild           - последний дочерний элемент
// body.nextElementSibling         - следующий братский узел
// body.previousElementSibling     - предыдущий братский узел
// body.parentElement              - родитеьский тег

/* let h1 = body.firstElementChild

let ul = h1.nextElementSibling

let li_ios = ul.lastElementChild  */

let li_android = ul.firstElementChild
let li_iOs = ul.previousElementChild



console.log(li_iOs);
console.log(li_android);