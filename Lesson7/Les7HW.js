/* 
1. Создайте функцию checkEvenChar(word), которая в качестве аргумента передает строку с произвольной длиной и реализует следующие вычисления:
если из длины переменной word вычисляется квадратный корень(без дробной части) - функция должна возвращать ответ 1, в противном случае - 0

Пример:
console.log(checkEvenChar(‘меню’))

Результат: 1

    Решение:   Решено!

function checkEvenChar(word) {
    if (Math.sqrt(word.length) % 1 == 0) {
        console.log(1);
    }
    else
    console.log(0);
}

checkEvenChar('abra')
*/


/*
2. Создайте функцию getRandomChar(word), которая в качестве аргумента передает строку произвольной длины и возвращает случайный символ строки.

Примечание:
Воспользуйтесь библиотекой Math. 
В коде предусмотреть возможность вывода последнего символа в том числе. 
Убедиться в том, что функция не возвращает undefined(проверить выполнение несколько раз)

Пример:
console.log(getRandomChar(‘меню’))

Результат: ‘н’

let result = Math.floor(Math.random(word) * 100)
console.log(result)

            Решение:   Решено

let word = 'asdfghjklqwertyuiopzxcvbnm'

function getRandomChar(word) {

    return word.charAt(Math.round(Math.random(word.length - 1) * word.length)); 
    
}

console.log(getRandomChar(word));
*/

/*
3. Напишите функцию getRandomChars(word, n), которая в качестве аргумента принимает строку и число.Реализуйте функционал, 
который вернет в результате выполнения функции n рандомных символом строки word.

    Пример:
console.log(getRandomChars(‘меню’, 3))
console.log(getRandomChars(‘меню’, 5))

Результат: 
‘нме’
‘енюмн’

            Решение:  не решено!




function getRandomChars(word, n) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        i = word.charAt(Math.round(Math.random(word.length - 1) * word.length));

        if(result < n) {
            result = result + i;
        }else{
            break
        }

    }
    return result;

}

console.log(getRandomChars('abra', 3));
*/

/*
4. Задан объект teamGender, передающий значение гендера каждого пользователя.Выведите в консоль ключи, значения которых равны “M”

Пример:
let teamGender = {
    user1: 'M',
    user2: 'F',
    user3: 'F',
    user4: 'M',
    user5: 'F',
    user6: 'M',
}

Результат:
user1
user4
user1
user6
*/

let teamGender = {
    user1: 'M',
    user2: 'F',
    user3: 'F',
    user4: 'M',
    user5: 'F',
    user6: 'M',
}

if(Object.values(teamGender) == 'M'){
    console.log(Object.keys(teamGender));

}

console.log(Object.keys(teamGender));



/*
5. Задан объект goods, передающий описание каждого товара с ценой.Расчитайте итоговую сумму всех покупок

Пример:
let goods = {
    product1: 'Яблоко',
    price1: 200,
    product1: 'Киви',
    price1: 9,
    product1: 'Помидор',
    price1: 500,
    product1: 'Гречка',
    price1: 199
}

Результат:
908
 */