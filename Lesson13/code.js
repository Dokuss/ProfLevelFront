// Метод reduce
​
// let array = [1,2,3,4]
// Задача без reduce
​
// let sum = 0
// for (let elem of array){
//     sum = sum + elem
// }
// console.log(sum)
// Задача c reduce
​
// let result = array.reduce((sum, elem) => sum + elem, '')
// console.log(result)
​
// Не совсем простая задача с reduce
// Необходимо сформировать новый массив, который будет хранить ВСЕ элемента свойств c
// let array = [
//     {a: 'round', b: 'some', c: ['green', 'yellow', 'red']},
//     {a: 'round', b: 'some', c: ['green', 'yellow']},
//     {a: 'round', b: 'some', c: ['green', 'yellow', 'red','purple']},
// ]
​
// let result = array.reduce((accum,elem) => {
//     elem.c.forEach(value => accum.push(value))
//     return accum
// },[])
​
// console.log(result)
​
// Задача: просуммируйте итоговую сумму всех элементов вложенных массивов
​
// let array = [
//     {a: [1,2,3]},
//     {a: [4,5,6]},
//     {a: [7,8,9]},
// ]
​
// let result = array.reduce((sum, elem)=> {
//     let sumElem = elem.a.reduce((accum, value)=> accum + value)
//     return sum + sumElem
// },0)
​
// console.log(result)
​
// В программе задан массив, передающий строковые элементы. 
// Напишите программу, которая которая ответит на вопрос: присутствует
// ли в массиве элемент, длина которого больше 5? В качестве ответа необходимо
// вывести булевый тип true, false.
​
// Пример: ['Велосипед','Торт','Кадр','Альт','Литр']
// Результат: true
​
// some evere
let array = ['Велосипед','Торт','Кадр','Альт','Литр']
​
// Решение с методом come
// let result = array.some( elem => elem.length > 10)
// console.log(result)
​
​
// Решение без метода some 
​
// function some(array, callback){
//     for (let i of array){
//         if(callback(array[i])){
//             return true
//         }
//     }
//     return false
// }
​
// let result = some(array, (elem) => elem.length >5)
​
// console.log(result)