// Задача 1
// Задана переменная word со строковым значение. 
// Используя цикл, сформируйте строку с четными элементами строки
// Пример: 
// let word = ‘компьютер’
​
// Результат: кмьтр
​
// Решение
// let word = 'компьютер'
​
// let result = ''
​
// for (let i = 0; i < word.length; i++){
//   if (i % 2 == 0){
//     result += word[i]
//   } 
// }
​
// console.log(result)
​
// ----------------------------------------------------
// Задача 2
// (Условие if)
// В программе объявлены две переменные — temp и weather. 
// Объявите переменную activity и присвойте ей значение по следующему 
// правилу: 
// если значение переменной temp больше либо равно 25, 
// a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf"; 
// если значение переменной temp от 10 до 24, 
// a переменная weather имеет значение "clear", 
// тогда значение переменной activity должно быть "bowling"; 
// в ином случае значение переменной activity должно быть "hiking". 
​
// Пример значений переменных: 
// let temp = 25 
// let weather = "clear" 
​
// Пример результата: "golf"
​
// Решение 1 
// let temp = 5 
// let weather = "clear" 
// let activity = ''
​
// if (temp >= 25 && weather == 'clear'){
//   activity = 'golf'
// } else if (temp > 10 && temp < 24 && weather == 'clear'){
//   activity = 'bowling'
// } else {
//   activity = 'hiking'
// }
​
// console.log(activity)
​
​
// Решение 2
// let temp = 29 
// let weather = "clear" 
​
// let activity = (temp >= 25 && weather == 'clear') ? 'golf' : 
//                   (temp > 10 && temp < 24 && weather == 'clear') ? 'bowling' : 'hiking'
​
// console.log(activity)
​
// ----------------------------------------------------
// Напиши функцию handler(num), которая проверяет, 
// делится ли число на 2 без остатка.
// Функция должна возвращать булевый тип.
// Пример:
// console.log(handler(10))
​
// Результат: true
​
// function handler(num){
//   return num % 2 == 0
// }
​
// let a = handler(10)
// let b = handler(19)
​
// console.log(b)
// ----------------------------------------------------
// Решение 4 задачи
// let word = 'ворон!'
​
// console.log(word[word.length - 1])
// ----------------------------------------------------
​
// Решение 5 задачи
​
// В программе объявлена переменная price, которая содержит в себе числовые данные.
// Опишите функцию priceMessage(), которая должна вывести 
// в консоль сообщение по следующему примеру: 
// let price = 13000 
// priceMessage(price)
​
// Результат 
// "Данный товар стоит 13000 рублей"
​
// function priceMessage(num){
//   if (typeof(num) == 'number'){
//     if (num < 0){
//       console.log('Переданный аргумент имеет отрицательное значение') 
//     } else {
//       console.log(`Данный товар стоит ${num} рублей`)
//     }
//   } else {
//     console.log('Аргумент не является числом') 
//   }
// }
​
// priceMessage(100)
// priceMessage(999)
// priceMessage('asdasd')
// priceMessage(-10)
​
// ----------------------------------------------------
// Повторяем объект.
​
// let MyObj = {
//   name: 'Тигран',
//   salary: 1000,
//   age: 32,
//   gender: 'M'
// }
​
// Сформируйте строку: Меня зовут Тигран, мне 32  лет, мой гендер - M
​
// console.log('Меня зовут ${MyObj.name}, мне ${MyObj.age} лет, мой гендер - ${MyObj.gender}')
​
// ----------------------------------------------------
// Сравнение объектов
​
// Сравнение MyObj1 и MyObj2 вернет ответ false, т.к. разные пути определения в области памяти
​
// let MyObj1 = {
//   name: 'Тигран',
//   salary: 1000,
//   age: 32,
//   gender: 'M'
// }
​
// let MyObj2 = {
//   name: 'Тигран',
//   salary: 1000,
//   age: 32,
//   gender: 'M'
// }
​
// console.log(MyObj1 == MyObj2)
​
// В этот примере мы создаем новую переменную, которая обращается к одному и тому же объекту.
​
// let MyObj1 = {
//   name: 'Тигран',
//   salary: 1000,
//   age: 32,
//   gender: 'M'
// }
​
// let MyObj2 = MyObj1
​
// delete MyObj1.name
// delete MyObj2.salary
​
// console.log(MyObj2)
// ----------------------------------------------------
// Метод Object.assign() - создаем копию объекта (ПОЛНУЮ КОПИЮ, С НОВОЙ ССЫЛКОЙ)
​
// Пример создания нового объекта, который имеет свою ссылку, и при изменеии нового объекта старый объект остается неизменным
​
// let MyObj1 = {
//   name: 'Тигран',
//   salary: 1000,
//   age: 32,
//   gender: 'M'
// }
​
// let MyObj2 = Object.assign({}, MyObj1)
​
// delete MyObj1.age 
// delete MyObj1.name 
​
// console.log(MyObj2, MyObj1)
​
// Копирование свойств двух объектов в один newObj
​
// let MyObj1 = {
//   name: 'Тигран',
//   age: 40
// }
​
// let MyObj2 = {
//   age: 50
// }
​
// let newObj = Object.assign(MyObj2, MyObj1) 
​
// console.log(newObj)
​
// Цикл for для объектов
​
/* let MyObj = {
  name: 'Тигран',
  salary: 1000,
  age: 32,
  gender: 'M'
} */
​
// for (let i in MyObj){    Цикл по ключам объекта MyObj
//   console.log(i)
// }
​
// for (let i in MyObj){    Цикл по значениям объекта MyObj
//   console.log(MyObj[i])
// }
​
​
// Задача 2
// Напишите программу, которая выведет в консоль все значения элементов объекта someObj, 
// игнорируя строковые значения.
​
// Пример занчения переменной:
// let someObj = {
// 	char1: 1,
// 	char2: '2',
// 	char3: 3,
// 	char4: '4',
// 	char5: '5',
// 	char6: 6,
// }
​
// Пример результата:
​
// 1
// 3
// 6
​
// Решение 
​
// let someObj = {
// 	char1: 1,
// 	char2: '2',
// 	char3: 3,
// 	char4: '4',
// 	char5: '5',
// 	char6: 6,
// }
​
// for (let i in someObj){
//   if (typeof(someObj[i]) == 'number'){
//     console.log(someObj[i])
// }
// }
​
​
​
// Доработайте решение 2 задания, изменив условие:
// Выведите значение ключей, цифра в конце которых 
// делится на 2 без остатка.
​
// Пример значений переменной:
// let someObj = {
// 	someChar1: 1,
// 	char2: '2',
// 	char3: 3,
// 	someChar4: '4',
// 	char5: '5',
// 	veryBigShar6: 6,
// }
​
// Пример результата:
​
// char2
// someChar4
// veryBigShar6
​
// Решение  
​
// let someObj = {
// 	someChar1: 1,
// 	char2: '2',
// 	char3: 3,
// 	someChar4: '4',
// 	char5: '5',
// 	veryBigShar6: 6,
// }
​
​
// for (let i in someObj){
//   if (i[i.length-1] % 2 == 0){
//     console.log(i)
//   }
// }