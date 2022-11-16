// Задание 1. 
// 1)   При нажатии на кнопку создайте маркированый список,
//      элементы которого будут передавать их числовой порядок (5 штук)
//      от 1 до 5. Маркированный список должен опрделиться под кнопкой.

let btn = document.querySelector('.btn')

btn.addEventListener('click', () => createUl())

/* 
function createUl(){
    let ul = document.createElement('ul')

    let li_1 = document.createElement('li')
    li_1.innerText = '1'
    ul.append(li_1)

    let li_2 = document.createElement('li')
    li_2.innerText = '2'
    ul.append(li_2)

    let li_3 = document.createElement('li')
    li_3.innerText = '3'
    ul.append(li_3)

    let li_4 = document.createElement('li')
    li_4.innerText = '4'
    ul.append(li_4)

    let li_5 = document.createElement('li')
    li_5.innerText = '5'
    ul.append(li_5)

    btn.after(ul)

} 
*/

/* 
let checked = true;

function createUl(){
    if(checked){
        let ul = document.createElement('ul')

        for(let i = 1; i <= 5; i++){
        let li = document.createElement('li')
        li.innerText = i
        ul.append(li)
        }
        btn.after(ul)

    } else {
        let ul = btn.nextElementSibling
        ul.remove()
        
    }
    checked = !checked
}  
*/


