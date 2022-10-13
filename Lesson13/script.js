// Method reduce

//  let array = [1, 2, 3, 4, 5]

 /*
 variant 1:
let sum = 0;

for (let i of array) {
    sum = sum +i
}
console.log(sum); 

variant 2:
let result = array.reduce((sum, elem) => sum * elem, '')
console.log(result);

*/


/* let array = [
    { a: 'round', b: 'some', c: ['green', 'yellow', 'red'] },
    { a: 'round', b: 'some', c: ['green', 'yellow'] },
    { a: 'round', b: 'some', c: ['green', 'yellow', 'red', 'purple'] }

]

let result = array.reduce((accum, elem) => {
    elem.c.forEach(val => accum.push(val))
    return accum
}, [])

console.log(result); */


/* let array = [
    { a: [1, 2, 3] },
    { a: [4, 5, 6] },
    { a: [7, 8, 9] },
]

let result = array.reduce((sum, elem) => sum + elem.a.reduce((accum, value) => accum + value),0)

console.log(result); */

/* В программе задан массив, передающий строковые элементы.
Напишите программу, которая которая ответит на вопрос: 
присутствует ли в массиве элемент, длина которого больше 5 ?
    В качестве ответа необходимо вывести булевый тип true, false. 
    Пример: ['Велосипед', 'Торт', 'Кадр', 'Альт', 'Литр']
Результат: true
*/
/* 
let array = ['Велосипед', 'Торт', 'Кадр', 'Альт', 'Литр']

let result = array.some((elem) => elem.length > 5)

console.log(result); */
