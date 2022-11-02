// ООП
// создать шаблонизатор объектов используя функцию

/* function createUser(name, salary) {
    return {
        name: name,
        salary: salary,
        sayHi: function () {
            console.log(`${name} говорит привет!`)
        }
    }
}

let user1 = createUser('Tigran', 1000)
let user2 = createUser('Alex', 4000)

console.log(user1, user2)

user1.sayHi()
user2.sayHi() */


// Class - new type

// класс - шаблонизатор

/* class User {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
        this.exp = 2
    }
    sayHi() {
        console.log(`${this.name} Say Hello`);
    }
    calc() {
        console.log(this.salary * 12 * this.exp);
    }
}


let user1 = new User('Sergiu', 1000)
let user2 = new User('Sergiu2', 3000) 


user1.sayHi()
console.log(user1)
*/


/* 
    --------------------
Статические методы и свойства

Статические методы и свойства - это методы и свойства которые доступны только классу, но не экземпляру

class Users {
    constructor(name){
        this.name = name
    }
    sayHi() {
        console.log(`${this.name} говорит привет!`)
    }
    static method(){
        console.log('Cтaтический метод')
    }
    static prop = 'Статическое свойство'
}

let user1 = new Users('User')

user1.sayHi()            отработает
console.log(user1.name)  отработает
user1.method()           не отработает
console.log(user1.prop)  не отрабатывает

Users.method()
console.log(Users.prop)


Метод keys является статическим методом. Доказательство
let obj = new Object({name: 'user'})

obj.keys()           - не работает
Object.keys(obj)     - работает 
*/


/* let user = {name: 'name', salary: 100}

class Object2{
    static keys(obj) {
        let newArray = []
        for (let i in obj) {
            newArray.push(i)
        }
        return newArray
    }
    static values(obj) {
        let newArray = []
        for (let i in obj) {
            newArray.push(obj[i])
        }
        return newArray        
    } 
    static entries(obj) {
        let newArray = []
        for (let i in obj) {
            newArray.push(i, obj[i])
        }
        return newArray   
    }
}

console.log(Object2.keys(user));

console.log(Object2.values(user));

console.log(Object2.entries(user));
 */

class Goods {
    constructor(name, quantity, price) {
        this.name = name
        this.quantity = quantity
        this.price = price
    }
    totalPrice() {
        console.log(this.price * this.quantity);
    }
}

let goods1 = new Goods('Sergiu', 1, 1000)

goods1.totalPrice()
// console.log(goods1);

