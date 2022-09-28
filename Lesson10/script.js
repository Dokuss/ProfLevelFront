//  Metod filter

// let array = [1, 2, 3, 4, 5,6,7,8,9,10]

/* let query = array.filter(function (elem) {
    return elem > 5;
}) "LONG version" */

/* let query = array.filter((elem) => elem > 5)

console.log(query); */


/* function stringToNumber(string, onOk, onErr) {
    if (typeof string != 'string') {
        onErr('Its not string')
        return
    }
    if (!isNaN(+string)) {
        onOk(+string)
    } else {
        onErr('Tish string not convertible')
    }

}

function logErr(message) {
    console.log(message);
    
}

function quad(num) {
    console.log(num ** 2);
    
}

// stringToNumber(true, quad, logErr)

// stringToNumber('123k', quad, logErr);

// stringToNumber('5', quad, logErr);

// stringToNumber('123k', quad, (message) => console.log(message));

stringToNumber('123', quad, logErr); */

/* Отфильтровать елементы массива array по условию: 
    значение должно быть больше 5.
    Аналог метода filter


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// let query = array.filter((elem) => elem > 5)

function filter(array, condition) {
    let result = [];
    for (let elem of array) {
        if (elem > condition) {
            result.push(elem)
        }
    }
    return result
    
}

let query = filter(array, 5)

console.log(query); */

//  Задача 1
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных

// let array = [true, false, '123', 0, true, 'string', , [1,2,3], {name: 'Sergiu'}]

/* let query = array.filter((elem) => typeof elem == 'boolean');

console.log(query); Короткий способ */

/* let query = [];

for (let i of array) {
    if (typeof i == 'boolean') {
        query.push(i)
    }
}

console.log(query);   Длинный способ */

// Задача 2

let array = ['Арбуз', 'Антена', 'Бор', 'Арбуз', 'Сеть', 'Трон']

let query = array.filter((elem) => elem[0] == 'А');

console.log(query);
