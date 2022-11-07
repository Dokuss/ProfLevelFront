// Регулярные выражения
// Пример задачи:
// Сформировать из строки только число

// let array = [
//     'word134strin'              
//     ,'14strin'                   
//     ,'word134345'                
//     ,'wordstrin134234564'
// ]     

// Решение используя регулярное выражение
// for (let i = 0; i < array.length; i++){
//     req = /\d+/
//     console.log(array[i].match(req)[0])
// }
// console.log('_-'.repeat(10))

// Решение без регулярок
// for (let i = 0; i < array.length; i++){
//     let stringNum = ''
//     for(let j = 0; j < array[i].length; j++){
//         if( array[i][j] == 0 || array[i][j] == 1 || array[i][j] == 2 || array[i][j] == 3 ||
//             array[i][j] == 4 || array[i][j] == 5 || array[i][j] == 6 || array[i][j] == 7 ||
//             array[i][j] == 8 || array[i][j] == 9 ) {
//                 stringNum += array[i][j]
//             }
//     }
//     console.log(stringNum)
// }

// ---------------------------------------------

// Method match()

/*
let string = 'Hello world'
let reg = /lo/
let result = string.match(reg)

console.log(result);
*/
// ---------------------------------------------

// Search group symbol

// ----------------------------
// Поиск по группе символов
// \w           - латинские буквы и диапазон чисел от 0 до 9 и еще _
// \d           - только цифры (0-9)
// \s           - только пробел
// \W           - НЕ латинские буквы и НЕ цифры (0-9) и НЕ _
// \S           - НЕ пробел 
// \D           - НЕ цифры (0-9)
// [abcABC123]  - пользовательский набор символов
// .            - любо символ
// [.]          - экранирование любого символа
// или \.       - аналог записи выше
// ^            - начало строки
// $            - конец строки


// let string = "hello world"
// let reg = /^\w\w\w\w\w/
// let result = string.match(reg)

// console.log(result)

// let string = 'Hello. world'
// let reg = /\./
// let result = string.match(reg)

// console.log(result);

// Задача 1
// Задан массив phones. Найдите номера телефонов, 
// которые соответствуют маске
// 'xxx.xxx.xxx'. Поместите эти номера в 
// новый массив newPhones.

let phones = [
    '4235123.123.123',
    '453.567.985',
    '23.33.22.34',
    '567.986.423',
    '123456.4533',
    '567.90987.5',
    '12.3323.321',
    '1234.566777',
    '655.432.342'
]

let newPhones = []

for (let elem of phones){
    let reg = /\d{3}\.\d{3}\.\d{3}/
    if (elem.match(reg)){
        newPhones.push(elem)
    }
}
console.log(newPhones)
