// function declaration


// function printHi(acdb, name) {
//     console.log('Dobro pogalovat, drogoj gost' + acdb + name);
// }

// printHi(124, 'sdfujvbskj')


// return позволяет  далее работать с результатами функции

// function quad(num1, num2) {
//     let result = num1 * num2
//     return result
// }

// console.log(quad(2, 3) - 5);

// ----------------------------------------
// function expression вутри выражения
// let handler = function sameFunc() {
//     console.log(123);
// }
// sameFunc() - так не вызвать. Имя функции можно не вводить
// handler - так можно вызвать, добалять аргументы и прочее

// function expression Стрелочные функции   
// 1. вместо function используем стрелочки
// 2. Если одна команда, фигур скобки можно не ставить
// 3. Не нужен return

// let handler = (name) => {console.log(name);}

// let handler = (name) => name + " test"

// console.log(handler('Teeest'));

// -------------------------------------------

// TypeData
// Object
// let myObj = {
//     name: 'Sergiu',         // (свойство)пара - ключ/значение
//     age: 29,
//     salary: [1,2,3]
// } 

// console.log(myObj.salary);

// myObj.salary = false
// console.log(myObj);

// myObj.lastname = 'Capatin'
// console.log(myObj);

// delete myObj.salary
// console.log(myObj);

let product = {
    name: 'Велосипед',
    count: '5',
    price: '1500'
}

product.category = 'спорт'
product.name = 'Самокат'
delete product.count
console.log(product);