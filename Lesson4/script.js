// function printHi() {
//     // console.log('_*'.repeat10)
//     console.log('dobro pogalovat')
//     // console.log('_*'*10)    
// }

// function printHi(_name) {
//     // console.log('_*'.repeat10)
//     console.log('dobro pogalovat ${_name}')
//     // console.log('_*'*10)    
// }

// function printHi(name) {
//     if (typeof (name) == 'string')
//         console.log('dobro pogalovat ' +  (name))

//     else {
// console.log('Write to string')

//     }
// }

// printHi('124')

// function quad(num) {
//     let result = num ** 2
//     console.log(result)
// }

// quad(2)

// Задание 2
// Создайте функцию sum(), которая передает 2 аргумента(числа) и выводит в консоль результат их суммы.
//     Пример:
// sum(5, 10)
// Результат:
// 10

// function sum(num1, num2) {

//     console.log(num1 + num2)
// }

// sum(2, 4)


// Задание 3
// Напишите функцию typeData(), который получает параметр произвольного типа и выводит результат 
// согласну примеру:

// typeData('Текст')

// Результат:
// Текст - это string

// Пример 2:

// typeData(2)

// Результат:
// 2 - это number

// function typeData(data) {
//     console.log(data + ' - its ' + typeof (data))
//         // console.log(data + ' thats number')

//     // else if (typeof (data) == 'string')
//     //     console.log(data + ' thats text')        
// }

// typeData(true)


// let a = +'124g'//неявное преобразование, это число
// console.log(a)

// //Для проверки NaN 
// if (isNaN(a)) {
//     console.log('a - its NaN')
// }
// else {
//     console.log('a - its not NaN')
// }

// В программе объявлена переменная data, в которой записано 
// строковое значение. Напишите функцию getNumber(data), 
// которая преобразовывает строку в число по следующему правилу:

//  * если переменная data содержит не число, функция должна вернуть численное значение 0;
//  * если переменная data содержит число, например "123", то функция возвращает числовое значение 123.

// Вызовите эту функцию и выведите результат в консоль.

// Пример значений переменных:
// let data = "привет"

// Пример результата:
// 0

// let data = "1546758"

// // console.log(isNaN(data))

// function getNumber(params) {
//     let check = +params
//     if (isNaN(params)) {
//         console.log(0)
//     }
//     else {
//         console.log(check)
//     }
// }

// getNumber(data)

// Напишите функцию checkEven(), которая передает аргумент строкового типа по условию:
// Если длина строки имеет четное значение - функция должна вывести в консоль значение true
// В противном случае - false

// Пример: checkEven('Привет')

// Ответ: true

function checkEvent(string) {
    if (string.length % 2 == 0) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

checkEvent('Привет')