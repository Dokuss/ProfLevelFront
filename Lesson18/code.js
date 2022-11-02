// Задача 1.
// Определить индекс второй подстроки 'date' у переменной string.
// Код должен работать на 2 тестах
// 1-ый тест
// let string = 'date 10.10.10 date 20.20.20 date 30.30.30' 
// 14    
​
// 2-ой тест
// let string = '10.10.10.10.10.10 date 20.20.20 date 30.30.30 date'   
// 32
 
// let result = string.indexOf('date', string.indexOf('date')+1)
​
// console.log(result)
​
​
// --------------------------------
// let string = "Привет"
// console.log(string[0]+string[1]+string[2]+string[3])             Прив
​
// Метод slice(n,m) - позволяет сформировать подстроку от n индекса (вкл) до m индекса (не вкл) у строки
// let string = "Привет мой друг"
​
​
// console.log(string.slice(0,4))        Прив
// console.log(string.slice(7,10))       мой
// console.log(string.slice(10,7))       (пусто)     
// console.log(string.slice(11))         друг
// console.log(string.slice(7))          мой друг   
// console.log(string.slice(-4))         друг
// console.log(string.slice(-8))         мой друг   
​
​
// ----------------------------------
// Метод substring(n,m) - позволяет сформировать подстроку от n индекса (вкл) до m индекса (не вкл) у строки
// Отличие -  1) второй аргумент может быть меньше чем первый
// 2) Работает немного по другому с отрицательными аргументами
​
​
// let string = "Привет мой друг"
​
​
// console.log(string.substring(0,4))     Прив 
// console.log(string.substring(7,10))    мой
// console.log(string.substring(11))      друг
// console.log(string.substring(7))       мой друг  
​
// console.log(string.substring(10, 7))      мой
// console.log(string.substring(7, 10))      мой  
​
// console.log(string.substring(7, -1))         Привет
// console.log(string.substring(7, -10))        Привет
// console.log(string.substring(7, -100))       Привет
// console.log(string.substring(7, -9999999))   Привет
​
​
// --------------------------
// метод replace() - заменяет одну подстркоу на другую подстроку
​
// let string = "Привет мой друг"
​
// console.log(string.replace('мой','наш'))     Привет наш друг
// console.log(string.replace('мой',''))        Привет мой друг
// console.log(string.replace('наш',''))        Привет мой друг
​
// метод replaceAll() - заменяет все найденные подстроки на другую подстроку
​
// let string = "test test test"
​
// console.log(string.replace('test', 'top'))           top test test
// console.log(string.replaceAll('test', 'top'))        top top top
​
// --------------------
// Другие простые методы
// let string = 'Some'
​
// console.log(string.toLowerCase())    some
// console.log(string.toUpperCase())    SOME
​
// let string = '   Some Text   '
​
// console.log(string.trim())         'Some Text'
// console.log(string.trimLeft())     '   Some Text'   
// console.log(string.trimRight())    'Some Text   '
​
// -----------------
// Задача 2 
​
// Задан массив phones
// Сформируйте новый массив newPhones. 
// Если телефон начинается на +7 - он должен оказаться в новом массиве
​
// Пример:
// let phones = ['+7975644911','8975644944+7','+7975644999','+7975644945']
​
// Результат:
// ['+7975644911','+7975644999','+7975644945']
​
// Решение 1 
// let newPhones = []
// for (let elem of phones){
//     if (elem.startsWith('+7')){
//         newPhones.push(elem)
//     }
// }
​
// console.log(newPhones)
​
// Решение 2
​
// let newPhones = phones.filter(elem => elem.startsWith('+7'))
// console.log(newPhones)
​
// -----------------
// Задача 3 
// Задан массив phones, передающий номера телефонов в виде строки.
// Реализуйте очистку данных, сформировав единый вид для все элементов массива.phones
​
// Пример:
// let phones = ['891 11112 233','89181-1122-44','8911-11122-44','89111112244']
​
// Результат:
​
// ['+79111112233','+79111112244','+79111112244','+79111112244']
​
​
// Решение 1 
// for (let i = 0; i < phones.length; i++){
//     phones[i] = phones[i].replace('8', '+7').replaceAll(' ', '').replaceAll('-', '')
//     console.log(phones[i])
// }
// console.log(phones)
​
// Решение 3 
// let newPhones = phones.map(elem => elem.replace('8', '+7').replaceAll(' ', '').replaceAll('-', ''))
// console.log(newPhones)