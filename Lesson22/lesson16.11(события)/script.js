// Cобытия в JS
let btn = document.querySelector('.btn_elem')
let div_block = document.querySelector('.block')

// Сво-во onclick
    // btn.onclick = toogleBtn
// onclick не может вызывать более 1 функции
    // btn.onclick = log

// ------------
// метод addEventListener() - обработчик событий
// позволяет указать вызов нескольких функции одновременно

btn.addEventListener('click', () => toogleBtn())
// btn.addEventListener('click', () => log())

// меняем цвет div блока
let checked = true
function toogleBtn(){
    if (checked){
        div_block.className = 'block red'
    } else {
        div_block.className = 'block bisque'
    }
    checked = !checked
}

// вывод console.log()
// function log(){
//     console.log('Hello!')
// }

// -----------------------------
div_block.addEventListener('dblclick', () => console.log('dblclick'))
div_block.addEventListener('click', () => console.log('click'))
div_block.addEventListener('mousedown', () => console.log('mousedown'))
div_block.addEventListener('mouseup', () => console.log('mouseup'))


// div_block.addEventListener('mouseover', () => console.log('Я в DIV`e!'))
// div_block.addEventListener('mouseout', () => console.log('Я ушел из DIV`a!'))