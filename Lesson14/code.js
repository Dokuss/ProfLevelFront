// ООП
// создать шаблонизатор объектов используя функцию

// function createUser(name, salary){
//     return {
//         name: name,
//         salary: salary,
//         sayHi: function(){
//             console.log(`${name} говорит привет!`)
//         }
//     }
// }

// let user1 = createUser('Tigran', 1000)
// let user2 = createUser('Alex', 4000)

// console.log(user1)

// user1.sayHi()
// user2.sayHi()

// -------------------------
// Class как новый тип

// Класс = шаблонизатор
// user1, user2 - экземпляры шаблонизатора (класса) Users

// class Users {
//     constructor(name, salary){
//         this.name = name
//         this.salary = salary
//         this.exp = 2
//     }
//     sayHi() {
//         console.log(`${this.name} говорит привет!`)
//     }
//     calc() {
//         console.log(this.salary * 12 * this.exp)
//     }
// }

// let user1 = new Users('Tigran', 1000)
// let user2 = new Users('Alex', 3000)

// user1.sayHi()
// user1.calc()
// console.log(user1)


// --------------------
// Статические методы и свойства

// Статические методы и свойства - это методы и свойства которые доступны только классу, но не экземпляру

// class Users {
//     constructor(name){
//         this.name = name
//     }
//     sayHi() {
//         console.log(`${this.name} говорит привет!`)
//     }
//     static method(){
//         console.log('Cтaтический метод')
//     }
//     static prop = 'Статическое свойство'
// }

// let user1 = new Users('User')

// user1.sayHi()            отработает
// console.log(user1.name)  отработает
// user1.method()           не отработает
// console.log(user1.prop)  не отрабатывает

// Users.method()
// console.log(Users.prop)


// Метод keys является статическим методом. Доказательство
// let obj = new Object({name: 'user'})

// obj.keys()           - не работает
// Object.keys(obj)     - работает


// Задача 1
// 1) Создать класс Object2
// 2) Сделать полную копию метода keys() примечание (метод должен быть статичным, метод должен передавать объект и возвращать новый массив)
// 3) Дописать еще 2 статических метода. Необходимо повторить мтеоды Object.values(), Object.entries()
// Object.keys(obj)
// Object2.keys(obj)

// let user = {name: 'name', salary: 100}

// class Object2{
//     static keys(obj){
//         let newArray = []
//         for (let i in obj){
//             newArray.push(i)
//         }
//         return newArray
//     }
//     static values(obj){
//         let newArray = []
//         for (let i in obj){
//             newArray.push(obj[i])
//         }
//         return newArray
//     }

//     static entries(obj){
//         {
//             let newArray = []
//             for (let i in obj){
//                 newArray.push([i, obj[i]])
//             }
//             return newArray
//         }
//     }
// }
// console.log(Object2.keys(user))
// console.log(Object.keys(user))

// console.log(Object2.values(user))
// console.log(Object.values(user))

// console.log(Object2.entries(user))
// console.log(Object.entries(user))


// Задача 3
// 1) Создать класс Goods, который имеет 3 свойства: name, quantity, price
// 2) Напишите метод totalPrice(), который считает итоговую сумму покупки 
// 3) Создайте 2 экзампляра и вызовете метод totalPrice().

class Goods {
    constructor(name, quantity, price) {
        this.name = name
        this.quantity = quantity
        this.price = price
    }
    totalPrice() {
        console.log(this.price * this.quantity)
    }
}

let goods1 = new Goods('Велосипед', 10, 15000)
let goods2 = new Goods('Самокат', 3, 7500)
let goods3 = new Goods('Ролики', 99, 2600)

console.log(goods1)
console.log(goods2)
console.log(goods3)

goods1.totalPrice()
goods2.totalPrice()
goods3.totalPrice()