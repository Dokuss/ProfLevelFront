let data = [
    {id: 1, title: 'Повесть об огурце', text: 'Сегодня у огурца было великолепное приключение'},
    {id: 2, title: 'Приключение лопаты на даче', text: 'Сегодня лопату ждала неудача'},
    {id: 3, title: 'Достижение деревянной палки', text: 'Палка оказалось не настолько прочной как хотелось бы'},
    {id: 4, title: 'Гибкое окно', text: 'Настолько гибкое, что никак не ломается'},
    {id: 5, title: 'Красная совесть', text: 'Оказалось настолько бессовестной, что аж покраснеть можно'},
    {id: 6, title: 'Компьютерные приключения', text: 'Компьютерная мышь заподозрила что-то неладное....'},
]


let section_elem = document.querySelector('.wrapper')
let header = document.querySelector('.header')
let main = document.querySelector('main')


for(let elem of data){
    let div_elem = document.createElement('div')
    let h2_elem = document.createElement('h2')
    let p_elem = document.createElement('p')

    div_elem.className = 'div_elem'
    h2_elem.innerHTML = elem.title
    p_elem.innerText = elem.text    

    div_elem.append(h2_elem, p_elem)
    section_elem.append(div_elem)

    div_elem.addEventListener('click', () => addModal(elem.id))

}


function addModal(id){
    let elem = data.find(elem => elem.id == id)

    let div_elem = document.createElement('div')
    let h2_elem = document.createElement('h2')
    let p_elem = document.createElement('p')

    div_elem.className = 'div_modal'
    h2_elem.innerHTML = elem.title
    p_elem.innerText = elem.text

    section_elem.after(div_elem)
    div_elem.append(h2_elem, p_elem)

    section_elem.setAttribute('style', 'opacity: 0.4')
    header.setAttribute('style', 'opacity: 0.4')

    div_elem.addEventListener('click', () => removeModal())

}

function removeModal(){
    let div_modal = document.querySelector('.div_modal')
    div_modal.remove()

    section_elem.setAttribute('style', 'opacity: 0.4')
    header.setAttribute('style', 'opacity: 0.4')
}

/* 
alert()
prompt()
confirm()
 */