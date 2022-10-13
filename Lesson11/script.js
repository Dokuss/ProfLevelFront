/* 
let someObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
}



function getValues(obj) {
    let array = [];
    for (let i in obj){
    array.push(obj[i])
    }
    return array;
}

console.log(getValues(someObj)); */


/* let array = [4, 7, 5, 9, 20, 34, 40];

let query = array.filter((elem) => elem % 5 == 0)

console.log(query); */

// --------------------------------------------------------------------------

/* Method includes() - Ищет заданый фргумент среди елемнтов источника
 Если есть - true/false

array = [1, 2, 3, 4, 5, 6, 7]

let answer = array.includes(6)

console.log(answer); */

//------------------------------------------------------

/* Method indexOf - ищет заданый аргумент среди елементов массива
 Если есть, отобразит индекс заданного аргумента, если нет -1


array = [1, 2, 3, 4, 5, 6, 7]

let answer = array.indexOf(6)

console.log(answer); 

let indexElem = array.lastIndexOf(3) - ищет с конца*/

/* let array = [4, 6, 7, 8, 9, 6, 4, 5, 6,7,8,9,6]

let indexElem = array.indexOf(6, array.indexOf(6, array.indexOf(6) + 1)+1);

console.log(indexElem); */

// ----------------------------------------------------------------------------

// Method Find

let users = [
    { id: 1, name: 'Sergiu' },
    { id: 2, name: 'Ivan' },
    { id: 3, name: 'Artur' },

]

/* let user;

for (let elem of users) {
    if (elem.id == 2) {
        user = elem
    }
} */

/* let user = users.find((elem) => elem.id == 2)

console.log(user); */

let goods = [
    { id: 1, name: 'Велосипед', quantity: 5 },
    { id: 2, name: 'Самокат', quantity: 15 },
    { id: 3, name: 'Велотренажер', quantity: 20 },
    { id: 4, name: 'Скейтборд', quantity: 30 },
]

/* Используя метод find необходимо определить покупку, имя товара 
 которого начинается на букву 'В', а количество больше 10

let product = goods.find((elem) => elem.quantity >= 10 && elem.name[0] == 'В');

console.log(product);
 */
let values = [
    { deleted_flg: 1, value: 'false' },
    { deleted_flg: 0, value: 'false' },
    { deleted_flg: 1, value: true },
    { deleted_flg: 1, value: 'true' },
    { deleted_flg: 1, value: 'true' },
]

// Используя метод find необходимо определить элемент, с занчением 
// сво-ва deleted_flg = 1, а value должен принимать булевый тип данных

let bool = values.find((elem) => elem.deleted_flg == 1 && typeof elem.value == 'boolean');

console.log(bool);
