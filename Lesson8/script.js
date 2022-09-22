/* let myObj = {
    'my name': 'Sergiu',
    age: 32,
    isJob: true
}

console.log(myObj["my name"]);

let myObj1 = {
    'my name': 'Sergiu',
    age: 32,
    isJob: true
}

console.log(myObj == myObj1);

let myObj2 = Object.assign({}, myObj1)

for (let i in myObj2) {
    console.log(i);
} */

// Задан объект someObj. Посчитайте количество строк в значениях сво-тв

/* let someObj = {
    someChar1: 1,
    char2: '2',
    char3: 3,
    someChar4: '4',
    char5: '5',
    veryBigShar6: 6,
}

let result = 0;

for (let i in someObj) {
    if (typeof (someObj[i]) == 'string')
        result = result + 1;
}
console.log(result); */

/* 
Реализация аналога метода hasOwnProperty
let someObj = {
    someChar1: 1,
    char2: '2',
    char3: 3,
    someChar4: '4',
    char5: '5',
    veryBigShar6: 6,
}

let b = someObj.hasOwnProperty('key')
console.log(b);

function checkProp(obj, prop) {
    for (let i in obj) {
        if (i == prop) {
            return true
        }
    }
    return false

}

console.log(checkProp(someObj, 'key')); */

/* let myObj = {
    name: 'Sergiu',
    last_name: 'Capatin',
    salary: 6000
}

// Object.keys()

// Object.values()

// Object.entries()



console.log(Object.keys(myObj));

console.log(Object.values(myObj));


console.log(Object.entries(myObj)); */

// Задан объект someObj. Используя цикл, выведите те значения сво-тв, 
// чей квадратный окрень вычисляется без дробной части

/* let someObj = {
    char1: 1,
    char2: '1',
    char3: 3,
    char4: '2',
    char5: '3', 
    char6: 9, 
    char7: '4', 
    char8: 4,
}

for (let i in someObj) {
    if (typeof (someObj[i]) == 'number' && Math.sqrt(someObj[i]) % 1 == 0) {
        
        console.log(someObj[i]);
    
    }    
}

console.log(4 ** 2); // возведение в степень, результат 16

console.log(4 ** 0.5);  // Тоже возведение в степень (вычисление кв корня, результат 2) */

/* Типы данных Object - массив

let a = new Array([1, 2, 3])  //Массив 

let b = [1, 2, 3]  // Массив 

console.log(b[0]);*/

/* let a = [1, 'string', true, [1, 2, 3], { name: 'Sergiu' }]

a[30] = 'new element'

console.log(a[4].name); */

/*
let a = [1, 2, 3]

 
Push()      -добавляет новый елемент с конца массива
Pop()       -удаляет елемент с конца массива

unshift()   -добавляет новый елемент с начала массива
shift()     -удаляет елемент с конца массива 
*/

/* let a = ['one', 'two', 'tree']

 - Первый подход

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

 - Второй метод

for (let i of a) {
    console.log(i);
} */

/* let list = []

for (let i = 10; i <= 20; i++){
    list.push(i)
    // console.log(i);
}

console.log(list);
 */