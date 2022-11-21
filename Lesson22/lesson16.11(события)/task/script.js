// Задание 1. 
// 1)   При нажатии на кнопку создайте маркированый список,
//      элементы которого будут передавать их числовой порядок (5 штук)
//      от 1 до 5. Маркированный список должен опрделиться под кнопкой.

// 2) При повторном нажатии на кнопку - необходимо удалить созданный маркированный список
// Удаление тега - метод remove()

let btn = document.querySelector('.btn')

btn.addEventListener('click', () => createUl())

let checked = true
function createUl(){
    if (checked) {
        let ul = document.createElement('ul')
        for (let i = 1; i <= 5; i++){
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


function getName(){
    let users = [
                'Doston Saidaliev','Misha Sh','Kateryna Strahlberger', 
                'Sergiu Capatin','Dimitry Babin','Алексей Беспалый', 'Tigran'
            ]
    let randomIndex = Math.floor(Math.random() * users.length)
    return users[randomIndex]
    }

console.log(getName())






