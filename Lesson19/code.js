// Регулярные выражения
// Пример задачи:
// Сформировать из строки только число
​
// let array = [
//     'word134strin'              
//     ,'14strin'                   
//     ,'word134345'                
//     ,'wordstrin134234564'
// ]     
​
// Решение используя регулярное выражение
// for (let i = 0; i < array.length; i++){
//     req = /\d+/
//     console.log(array[i].match(req)[0])
// }
// console.log('_-'.repeat(10))
​
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
​
// ---------------------------------------------
// Поиск совпадения по подстроке
// Метод match() - возвращает МАССИВ данных, где определяется информация найденного совпадения
​
// let string = 'hello world'
// let reg = /lo_/
// let result = string.match(reg)
​
// console.log(result)
​
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
​
​
// let string = "hello world"
// let reg = /^\w\w\w\w\w/
// let result = string.match(reg)
​
// console.log(result)
​
// ---------------------------------
// Задача 1
// Задан массив phones. Найдите номера телефонов, которые соответствуют маске
// 'xxx.xxx.xxx'. Поместите эти номера в новый массив newPhones.
​
// let phones = [
//     '4235123.123.123',
//     '453.567.9857876',
//     '23.33.22.34',
//     '567.986.423',
//     '123456.4533',
//     '567.90987.5',
//     '12.3323.321',
//     '1234.566777',
//     '655.432.342'
// ]
​
// let newPhones = []
// for (let elem of phones){
//     let reg = /^\d\d\d\.\d\d\d\.\d\d\d$/
//     if (elem.match(reg)){
//         newPhones.push(elem)
//     }
// }
​
// console.log(newPhones)
​
// ---------------------------
// Квантификатор
// {n}         - n-ое количество вхождений групп символов
// {n,m}       - диапазон вхождений от n, до m
// {n,}        - от n или много
// +           - аналог {1,}
// {0,}        - 0 или много
// {0,m}       - от 0 до m
// *           - аналог {0,}
// ?           - аналог {0,1}
​
let string1 = "tigran@gmail.com.net"
let string2 = "test@mail.net"
let reg = /\w+[@]\w+[.]\w+[.]?\w*/
​
let result1 = string1.match(reg)
let result2 = string2.match(reg)
​
console.log(result1)
console.log(result2)