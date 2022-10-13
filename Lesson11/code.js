// DZ 26.09.2022
// 1

// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     }

// let array = []

// for (let i in someObj){
//     array.push(i)
// }

// console.log(array)

// 2

// function getAvg(array){
//     let sum = 0
//     let count = 0
//     for (let i of array){
//         sum = sum + i
//         count++
//     }
//     let result = sum/count
//     return result
// }

// console.log(getAvg([1,2,3,4,5]))


// 3
// function getString(array){
//     count = 0
//     for (let i of array){
//         if (typeof i == 'string'){
//             count++
//         }
//     }
//     return count
// }

// console.log(getString([1,'3','value1',9]))

//4 
// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     }

// function getEntries(obj){
//     let array = []
//     for (let i in obj){
//         array.push([i,obj[i]])
//     }
//     return array
// }

// console.log(getEntries(someObj))

// 5

// let array = [1,true,'3','value1',9,'key']

// let obj = {}

// for (let i = 0; i < array.length; i++){
//     obj['key'+(i+1)] = array[i]
// }

// console.log(obj)
// ----------------------------------
// Доп. задание:
// Напишите функцию getValues(obj), которая возвращает массив, элементы которого являются значением сво-ств обэекта obj

// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     }

// function getValues(obj){
//     let array = []
//     for (let i in obj){
//         array.push(obj[i])
//     }
//     return array
// }

// console.log(getValues(someObj))

// Задача на метод filter

// Задан массив, передающий элементы с числовым типом данных. Сформируйте новый массив
// элементы кооторого деляться на 5.

// Пример: [4,7,5,9,20,34,40]

// Результат: [5,20,40]

// let array = [4,7,5,9,20,34,40]
// let query = array.filter((elem)=> elem % 5 == 0)

// console.log(query)

// -----------------------------------
// Метод includes()
// Ищет заданный аргумент среди элементов источника (массива). если есть - ответ true, нет - ответ false

// let array = [1,3,5,7,9]

// let answer = array.includes(2) -- false
// let answer = array.includes(7) -- true

// console.log(answer)

// -----------------------------------
// Метод indexOf и lastIndexOf

// Ищет заданный аргмент среди элементов массива. Если есть - отобразит индекс найденного элемента
// Если нет - ответ будет -1

// let array = [1,3,5,7,9,3]

// indexOf
// let indexElem = array.indexOf(3)         --  1
// let indexElem = array.indexOf(7)         --  3
// let indexElem = array.indexOf(11)        --  -1

// let indexElem = array.indexOf(3)         --   1   (первый попавшийся слева-направо)

// lastIndexOf()    
// let indexElem = array.lastIndexOf(3)     --   5    (перыый попавшийся элементс конца)

// Второй аргумент указывает с какого индекса нужно начать поиск

// let indexElem = array.indexOf(3,2)        --  5     (описк слева-направо, начиная с 2 индекса)

// console.log(indexElem)

// 1. Задан массив array, который передает числовые значения. Определите индекс третьего элемента с
// значением 6. Выведите ответ в консоль

// let array = [4,6,7,8,6,9,4,5,6,7,8,9,6,5,4]

// let answer = array.indexOf(6,array.indexOf(6, array.indexOf(6) + 1)+1)

// Решение, если мы знаем количество элементов с значением 6
// let answer = array.lastIndexOf(6, array.lastIndexOf(6)-1)

// console.log(answer)

// ----------------------------
// Метод find 
// Ищет элемент по условую колбека

// Сформировать элемент массива в выражении user, чей id = 2

// let users = [
//     {id: 1, name: 'Tigran'},
//     {id: 2, name: 'Alex'},
//     {id: 2, name: 'Dmitry'},
//     {id: 3, name: 'Petya'},
// ]

// Решение без метода find
// let user;

// for (let elem of users){
//     if (elem.id == 2){
//         user = elem
//         break
//     }
// }

// console.log(user)

// Решение c метода find

// let user = users.find((elem) => elem.id == 2)
// console.log(user)

// --------------
// Задача 1

// let goods = [
//     {id: 1, name: 'Велосипед', quantity: 5},
//     {id: 2, name: 'Самокат', quantity: 15},
//     {id: 3, name: 'Велотренажер', quantity: 20},
//     {id: 4, name: 'Скейтборд', quantity: 30},
// ]
// Используя метод find необходимо определить покупку, имя товара 
// которого начинается на букву 'В' , а количество больше 10

// Решение
// let product = goods.find((elem) => elem.name[0] == 'В' && elem.quantity > 10)

// console.log(product)

// --------------
// Задача 2

let values = [
    { deleted_flg: 1, value: 'false' },
    { deleted_flg: 0, value: 'false' },
    { deleted_flg: 1, value: true },
    { deleted_flg: 1, value: 'true' },
    { deleted_flg: 1, value: 'true' },
]

// Используя метод find необходимо определить элемент, с занчением 
// сво-ва deleted_flg = 1, а value должен принимать булевый тип данных

let row = values.find((elem) => elem.deleted_flg == 1 && elem.value == 'boolean')

console.log(row)