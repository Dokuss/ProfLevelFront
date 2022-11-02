// Наследование 
​
// class Drive {
//     constructor(model){
//         this.model = model
//         this.speed = 0
//     }
//     driving(speed){
//         this.speed = speed
//         console.log(`${this.model} едет со скоростью ${this.speed} км/ч`)
//     }
//     parking() {
//         this.speed = 0
//         console.log(`${this.model} припоркавался!`)
//     }
// }
​
// let car1 = new Drive('Tesla')
// car1.driving(60)
// car1.parking()
// console.log(car1)
​
// Наследование происходит используя оператор extends с указанием имя наследуемого класса
// Для того, чтобы свойства с контекстом ершы рпавильно наследовались, необходимо использовать метод super()
// class Car extends Drive {
//     constructor (model, productYear){
//         super()
//         this.model = model
//         this.productYear = productYear
//     }
//     autoParking() {
//         this.speed = 0.5
//         console.log(`${this.model} включил режим автопарковки!`)
//     }
// }
​
// let car1 = new Car('Tesla', 2020)
​
// car1.driving(60)
// car1.autoParking()
// console.log(car1)
​
// -------------------------------
// Геттеры, сеттеры
​
​
// Метод get позволяет получить значение сво-ва объекта
// Особенность: определить значение метода get можно только как свойство, а не как вызов метожа
​
// Пример 1
// let pet = {
//     name: "Шарик",
//     breed: 'Пудель',
//     get nameBreed() {return `${this.name} - это ${this.breed}`}
// }
​
// pet.nameBreed = 'YES!'
// console.log(pet.nameBreed)
​
// Пример 2
// let obj = {
//     numbers: ["Раз","Два","Три"],
//     get lastValue() {return this.numbers[this.numbers.length - 1]}
// }
​
// console.log(obj.numbers)
// console.log(obj.lastValue)
​
// obj.numbers = [10,30,60,50]
​
// console.log(obj.numbers)
// console.log(obj.lastValue)
​
// Задача:
// задан объект obj. Определите новое сво-во которое будет хранить разницу первого и последнего элемента массива array
​
// let obj = {
//     array: [50,40,30,10],
//     get difference() {return this.array[0] - this.array[this.array.length - 1]}
// }
// obj.difference = 866
// console.log(obj)
// console.log(obj.difference)
​
​
// Метож set (setter) 
// Позволяет считать значение свой-ства объекта
​
// let obj = {
//     array: [1,2,3,4,5],
//     get lastValue() {return this.array[this.array.length - 1]},
//     set setArray(value) {return this.array = value}
// }
​
// obj.setArray = [5,4,3,2,1]
​
// console.log(obj.lastValue)
​
​
// -----------------------------------------
// Флаги и дескрипторы свойств объекта
​
let obj = {
    name: 'Tigran',
    salary: 1000,
    age: 29,
    job_id: 'it_prog'
}
​
// Object.getOwnPropertyDescriptor() возвращает список спрятарнных десприкторов, которые мы не видим в повседневной жизни
// value - занчение свойства
// writable - право на изменение свойства 
// enumerable - право на итерацию в цикле
// configurable - право на удаление и изменение значений флагов дескриптора
​
// let result = Object.getOwnPropertyDescriptor(obj,'salary')   -- описание всех десприкторов для свойства salary
​
// -------------
// writable
// Object.defineProperty(obj, 'salary', {writable: false})
// obj.salary = '0'                -- не перезапишется
// console.log(obj)
​
​
// -------------
// enumerable
// Object.defineProperty(obj, 'salary', {enumerable: false})
// for (let i in obj){
//     console.log(i, obj[i])          -- свойства salary не будет
// }
// console.log(obj)                    -- свойства salary не будет
​
​
​
// -------------
// configurable
// Object.defineProperty(obj, 'salary', {configurable: false})
// Object.defineProperty(obj, 'salary', {configurable: true})  -- ошибка
// delete obj.salary                                           -- свойтсво не удалится
// console.log(obj)
​
​
// Object.defineProperty(obj, 'salary', {writable: false, enumerable: false, configurable: false })
​
// console.log(obj.salary)