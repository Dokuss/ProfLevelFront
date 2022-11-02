// Наследование
/* class Drive {
    constructor(model){
    this.model = model
    this.speed = 0
    }
    driving(speed){
        this.speed = speed
        console.log(`${this.model} едет со скоростью ${this.speed} km/ch`);
    }
    parking() {
        this.speed = 0
        console.log(`${this.model} parking`);
    }
    
}

let car1 = new Drive('Audi')
car1.driving(60)
car1.parking()
console.log(car1);

class Car extends Drive{
    constructor(model, productYear) {
        super()
        this.model = model
        this.productYear = productYear
    }
    autoParking() {
        this.speed = 0.5
        console.log(`${this.model} parking started`);

    }
}

let car1 = new Car('Audi', 2019)
car1.driving(60)
car1.autoParking()
console.log(car1); 
// Audi едет со скоростью 60 km/ch
Audi parking started
Car { model: 'Audi', speed: 0.5, productYear: 2019 }
*/

//--------------------------------------------------------

//  Геттеры и сеттеры

// Method - get

/* let pet = {
    name: 'Sharik',
    breed: 'Pudel',
    get nameBreed(){return `${this.name} - eto ${this.breed}`}
}

pet.nameBreed = 'sifhiusd'

console.log(pet.nameBreed);  // { name: 'Sharik', breed: 'Pudel', nameBreed: [Getter] }
 */

/* let obj = {
    numbers: ['odin', 'dwa', 'try'],
    get lastValue() {return this.numbers[this.numbers.length - 1]}
}

console.log(obj.numbers);
console.log(obj.lastValue);

obj.numbers = [1, 2, 3]

console.log(obj.numbers);
console.log(obj.lastValue); */

/* // Задача:
// задан объект obj. Определите новое сво-во которое будет хранить разницу первого и последнего элемента массива array

let obj = {
    array: [50, 40, 30, 10],
    get dif() { return this.array[0] - this.array[this.array.length - 1]}
}

console.log(obj.dif);
 */

// Method - set

/* let obj = {
    array: [50, 40, 30, 10],
    get lastValue() { return this.array[this.array.length - 1] },
    set setArray(value){this.array = value}
}

obj.setArray = [5, 4, 3, 2, 1]



console.log(obj); */

// Флаги и дескрипторы свойств обьекта
/* value - значение свойства
    writable - право на изменение свойства
    enumerable - право на итерацию в цикле
    configurable - право на удаление и изменение значений флагов дескриптора */

let obj = {
    name: 'Sergiu',
    salary: 1000,
    age: 33,
    work: 'IT'
}

// writable
/* let result = Object.getOwnPropertyDescriptor(obj, 'salary', {writable: false})

console.log(result); //  value: 1000, writable: true, enumerable: true, configurable: true }
    
Object.defineProperty(obj, 'salary', { writable: false })
obj.salary = '0'
console.log(obj); */

// enumerable

/* Object.defineProperty(obj, 'salary', { enumerable: false })
// obj.salary = 1
console.log(obj);
 */

// configurable

/* Object.defineProperty(obj, 'salary', { configurable: false })
obj.salary = 0
console.log(obj); */
