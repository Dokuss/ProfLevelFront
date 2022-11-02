// ------------------
// class Date()
​
// Инициализация даты (3 подхода)
// 1-ый
// let date = new Date('2022-10-26 19:00:00 GMT')
​
// 2-ой
// let date = new Date(2022,9,26,19)
​
// 3-ой
// let date = new Date(1000*60*60*24*365*30 + 1000*60*60*24*7) 2000-01-01 00:00:00
// console.log(date)
​
// -----------------------
// Текущий момент времени
// let date = new Date()        object
// let date = Date.now()        number
​
// console.log(date)
​
// -------------------------------------
// Методы по работе с датой
// Метод getTime()
​
// let date = new Date('2022-10-26 19:00:00 GMT')
// console.log(date.getTime())
​
// 1 задача
// Определите количество ЧАСОВ которые прошли с 1970 года до текущего момента времени.
// Примечание: полученное значение округлите по правилам математики
​
// let date = Date.now() / 3600000
// let countHourse = Math.round(date)
​
// console.log(countHourse)
​
// 2 задача
// Какое количество дней прошло с начала 2000 года до текущего момент времени?
// Примечание: полученное значение округлите по правилам математики
​
// let date = new Date(2000,0)
​
// let result = (Date.now() - date.getTime()) / (1000*60*60*24)
// console.log(result)
​
​
// -----------------------------
// Математические выражения с датой
// let date1 = new Date(2020,0)
// let date2 = new Date(2000,0)
​
// console.log(date1 - date2)                                      631152000000 (лучше так не делать)
// console.log(date1.getTime() - date2.getTime())                  631152000000 (ок)
​
// console.log(date1 + date2)                                       конкатенация даты (вот почему)
// console.log(date1.getTime() + date2.getTime())                   2524492800000 (ок)
​
// let date1 = new Date('2022-10-01 15:00:00 GMT')
​
// console.log(date1.getTime(),date1)
​
​
// -----------------------------------
// другие методы 
// let date = new Date('2022-10-01 15:00:00')
​
// -- методы для получения отдельных компонентов даты
​
// console.log(date.getFullYear())             2022
// console.log(date.getMonth())                9
// console.log(date.getDate())                 1
// console.log(date.getHours())                15
// console.log(date.getMinutes())              0
// console.log(date.getSeconds())              0
// console.log(date.getMilliseconds())         0
​
​
// -- методы для переопределения отдельных компонентов даты
// let date = new Date('2022-10-01 15:00:00')
​
// date.setFullYear(2010)
// date.setMonth(0)
// date.setDate(20)
// date.setHours(20)
// date.setMinutes(50)
// date.setSeconds(59)
// date.setMilliseconds(999)
​
// console.log(date)
​
// ----------------------------
// компонент, который мы не видим в дате (день недели)
​
// let date = new Date()
​
// 0 - воскресенье
// 1 - понедельник
// 2 - вторник
// 3 - среда
// 4 - четверг
// 5 - пятница
// 6 - суббота
​
// console.log(date.getDay())
​
// -------------------------------
​
// Задача 3
// Создайте новую дату, которая будет отличаться на 5 лет (+) от текущий даты.
// let date = new Date(Date.now() + 1000*60*60*24*365*5)
// date.setFullYear(date.getFullYear() + 5)
// console.log(date)
​
​
// Задача 4
// Напишите функцию checkDate(date), которая получает дату и  проверяет, является ли год в дате високосным. 
// Если да - функция должна вернуть true, в противном случае false
// примечание високосный год - это год который делится на 4 без остатка
​
// let date = new Date('1800-10-01 15:00:00')
​
// function checkDate(date){
//     if (date.getFullYear() % 4 == 0){
//         return true
//     } else {
//         return false
//     }
// }
​
// console.log(checkDate(date))
​
// ------------------------
// Сравнение даты
// let date1 = new Date('2022-10-26')
// let date2 = new Date('2022-10-26')
​
// console.log( date1 == date2 )                        false
// console.log( date1.getTime() == date2.getTime())     true