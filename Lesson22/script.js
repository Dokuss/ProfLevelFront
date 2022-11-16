// Cобытия в JS

// Сво-во onclick
let btn = document.querySelector('.btn_elem')
let div_block = document.querySelector('.block')

/* btn.onclick = toogleBtn;
btn.onclick = log; */

btn.addEventListener('click', () => toogleBtn())
// btn.addEventListener('keydown', () => log())

// div_block.addEventListener('click', () => console.log('Клик на див!'))


let checked = true;
function toogleBtn(){
    if (checked){
        div_block.className = 'block red'
    } else {
        div_block.className = 'block bisque'
    }
    checked = !checked
}

/* 
function log(){
    console.log('Hello!');
} 
*/


/* 
function toogleBtn(){
    let div = document.createElement('div')
    div.innerText = 'Text'
    btn.after(div)
    // alert("Hello World");

} */
/* 
div_block.addEventListener('click', () => console.log('Клик на див!'))
div_block.addEventListener('mouseover', () => console.log('In DIV!'))
div_block.addEventListener('mouseout', () => console.log('Out DIV!'))

 */

div_block.addEventListener('mousedown', () => console.log('MouseDown!'))
div_block.addEventListener('mouseup', () => console.log('MouseUp!'))
div_block.addEventListener('dblclick', () => console.log('Doble!'))

