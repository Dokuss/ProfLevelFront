// Создание, удаление и вставка нового элемента в DOM - дерево (В HTML-разметку)

// создание нового элемента h1 (пустой)
    // let title = document.createElement('h1')

// иницициализация утрибутов уже созданного элемента
    // title.className = 'title_text'

// определние атрибута id у нового тега
    // title.id = 'h_1'

// второй подход к инициализации ЛЮБОГО атрибута
// title.for = 'div'          не отработает, т.к. не все атрибуты представлены в виде св-ва объекта
    // title.setAttribute('for', 'div')


// Текстовое сво-во
    // title.innerText = 'Первый заголовок!'

// console.log(title)
// ----------------------------------
// Вставка элемента в DOM - дерево (в html)
// append()    - вставить как последний дочерний элемент
// prepend()   - вставить как первый дочерний элемент
// after()     - вставить как следующий братский узел
// before()    - как предыдущий братский узел

// ----
// тег body (как до него добраться в js)
    // let body = document.body

    // body.prepend(title)

// // Задание 1 
// 1. Создайте div элемент с классом block (внутри body)
// 2. Создайте p элемент с текстовым сво-вом (Hello world!) и поместите его внутри созданного div-элемента

// // решение 
// // пункт 1
// let body = document.body
// let div = document.createElement('div')
// div.className = 'block'
// body.prepend(div)
// console.log(div)

// // пункт 2
// let p = document.createElement('p')
// p.innerText = 'Hellow world!'
// div.append(p)


// Задание 2. 
// 1. Создайте ul список внутри body и поместите туда 3 li элемента с текстовым сво-вом (1,2,3)

// Результат:
// <body>
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
//     <script crc ='./ваш js файл'></script>
// </body>

// Решение 1

// let ul = document.createElement('ul')
// let body = document.body
// body.prepend(ul)

// let li_1 = document.createElement('li')
// li_1.innerText = '1'
// ul.append(li_1)

// let li_2 = document.createElement('li')
// li_2.innerText = '2'
// ul.append(li_2)

// let li_3 = document.createElement('li')
// li_3.innerText = '3'
// ul.append(li_3)

// Решение 2

let ul = document.createElement('ul')
let body = document.body
body.prepend(ul)

for (let i = 1; i <= 3; i++){
    let li = document.createElement('li')
    li.innerText = i
    ul.append(li)
}
