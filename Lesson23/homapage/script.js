let data = [
    {id: 1, url: 'https://photographylife.com/wp-content/uploads/2018/08/300x300-Pixel-Digital-Illustration.png', title: 'Повесть об огурце', text: 'Сегодня у огурца было великолепное приключение'},
    {id: 2, url: 'https://www.meme-arsenal.com/memes/6a837c8268da3d3740179e055a6457bd.jpg', title: 'Приключение лопаты на даче', text: 'Сегодня лопату ждала неудача'},
    {id: 3, url: 'https://global-uploads.webflow.com/614b3e8cafbd9789234c277e/616ed140a245902002792507_What-is-Facebook-Pixel-300x300.png', title: 'Достижение деревянной палки', text: 'Палка оказалось не настолько прочной как хотелось бы'},
    {id: 4, url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/pixelmonkey-profile_image-9d94d8bc0726b2f0-300x300.jpeg',title: 'Гибкое окно', text: 'Настолько гибкое, что никак не ломается'},
    {id: 5, url: 'https://i.pinimg.com/474x/50/85/c5/5085c50dbacddf5f80444ad31c821b07.jpg',title: 'Красная совесть', text: 'Оказалось настолько бессовестной, что аж покраснеть можно'},
    {id: 6, url: 'https://happycoding.io/images/stanley-1.jpg',title: 'Компьютерные приключения', text: 'Компьютерная мышь заподозрила что-то неладное....'},
]


let section_elem = document.querySelector('.wrapper')
let header = document.querySelector('.header')
let main = document.querySelector('main')


for(let elem of data){
    let div_elem = document.createElement('div')
    let h2_elem = document.createElement('h2')
    let p_elem = document.createElement('p')
    let btn = document.createElement('button')

    div_elem.className = 'div_elem'
    btn.className = 'btn_elem'
    h2_elem.innerHTML = elem.title
    p_elem.innerText = elem.text    
    btn.innerText = 'Detail'

    div_elem.append(h2_elem, p_elem, btn)
    section_elem.append(div_elem)

    div_elem.addEventListener('click', () => addModal(elem.id))

    btn.addEventListener('click', (elem => addModal(elem.id)))

}


function addModal(id){
    let elem = data.find(elem => elem.id == id)

    let div_elem = document.createElement('div')
    let h2_elem = document.createElement('h2')
    let p_elem = document.createElement('p')
    let img = document.createElement('img')

    div_elem.className = 'div_modal'
    h2_elem.innerHTML = elem.title
    p_elem.innerText = elem.text
    img.src = elem.url
    img.height = '300'
    img.width = '300'

    section_elem.after(div_elem)
    div_elem.append(img)
    div_elem.append(h2_elem, p_elem)

    section_elem.setAttribute('style', 'opacity: 0.4')
    header.setAttribute('style', 'opacity: 0.4')
    /* 
    let btns = document.querySelectorAll('.btn_elem')
    for(let elem of btns){
        elem.disabled = true;
    }

    div_elem.addEventListener('click', () => removeModal())
    */
    div_elem.addEventListener('click', () => removeModal())
    document.querySelectorAll('.btn_elem').forEach(elem => elem.disabled = true)
}

function removeModal(){
    let div_modal = document.querySelector('.div_modal')
    div_modal.remove()

    section_elem.setAttribute('style', 'opacity: 1')
    header.setAttribute('style', 'opacity: 1')
    document.querySelectorAll('.btn_elem').forEach(elem => elem.disabled = false)

}

/* 
alert()
prompt()
confirm()
 */