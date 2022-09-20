//  Object

/* let myObject = {
    name: 'Sergiu',
    salary: '0',
    age: 32,
    gender: 'M'    
}
myObject.jobe = 'IT'
console.log(`Меня зовут ${myObject.name}`);

let myObject1 = {
    name: 'Sergiu',
    salary: '0',
    age: 32,
    gender: 'M'
}

console.log(myObject == myObject1); */

/* Method - Object.assign() 
                - copy object with new link 

let myObject2 = Object.assign({}, myObject1)

delete myObject1.name

console.log(myObject2);*/

/*  Method - Object.assign 
                - обьеденяет несколько обектов в один 

newObject = Object.assign({}, myObject)*/

/* let myObject = {
    name: 'Sergiu',
    salary: '0',
    age: 32,
    gender: 'M'
} */

//Цыкл по ключам обьектов
/* for (let i in myObject) {
    console.log([i]);
} */

// Цыкл по значениям ключей
/* for (let i in myObject) {
    console.log(myObject[i]);
} */

// Задача 2 
// Напишите программу, которая выведет в консоль все значения элементов объекта someObj, 
// игнорируя строки. ​ 
// Пример занчения переменной: 
// let someObj = { 
// char1: 1,
// char2: '2',
// char3: 3,
// char4: '4', 
// char5: '5', 
// char6: 6, 
// }
// Пример результата: ​ 
// 1 
// 3 
// 6 

/* let someObj = {
char1: 1,
char2: '2',
char3: 3,
char4: '4', 
char5: '5', 
char6: 6, 
}

for (let i in someObj){
    if (typeof (someObj[i]) == 'number')
    console.log(someObj[i]);
} */

/* Доработайте решение 2 задания, изменив условие: 
Выведите значение ключей, цифра в конце которых 
делится на 2 без остатка. ​ 
Пример значений переменной: 
let someObj = { 
someChar1: 1,
char2: '2',
char3: 3,
someChar4: '4',
char5: '5',
veryBigShar6: 6,
} ​ 
Пример результата:
char2
someChar4
veryBigShar6 */

let someObj = {
    someChar1: 1,
    char2: '2',
    char3: 3,
    someChar4: '4',
    char5: '5',
    veryBigShar6: 6,
}

for (let i in someObj) {
    if (i[i.length - 1] % 2 == 0)
    console.log(i);
} 