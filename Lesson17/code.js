// -------------------
// Из даты в строку
​
// let date = new Date('2022-10-31 19:00:00')
​
// let string = date.toLocaleString('en-US')
// Дата + момент времени
// 12/1/2022, 7:00:00 PM
​
// let string = date.toLocaleDateString('de-DE', {year: "numeric", month: 'long', day: "2-digit", hour: "2-digit", minute: "numeric"})
// Дата
// 31/10/2022
​
// let string = date.toLocaleTimeString('it-IT')
// Момент времени
// 19:00:00
// console.log(string)
​
​
// Задача 2. 
// Напишите функцию logDay(date), котоая в качестве аргумента принимает даты и ВЫВОДИТ в консоль день недели даты по примеру:
// Если дата будет текущая - функция должна вывести сообщение:
// 'Сегодня среда'
​
// Пример:
// let date = new Date('2022-10-18')
// logDate(date)
​
// Результат: 'Сегодня вторник'
​
​
// Решение 1
// function logDay(date){
//     if (date.getDay() == 0){
//         console.log('Сегодня воскресенье')
//     } else if (date.getDay() == 1){
//         console.log('Сегодня понедельник')
//     } else if (date.getDay() == 2){
//         console.log('Сегодня вторник')
//     } else if (date.getDay() == 3){
//         console.log('Сегодня среда')
//     } else if (date.getDay() == 4){
//         console.log('Сегодня четверг')
//     } else if (date.getDay() == 5){
//         console.log('Сегодня пятница')
//     } else if (date.getDay() == 6){
//         console.log('Сегодня суббота')
//     }
// }
​
// Решение 2
// function logDay(date){
//     let days = ['воскресенье', "понедельник","вторник","среда","четверг","пятница","суббота"]
//     console.log(`Сегодня ${days[date.getDay()]}`)
// }
​
// logDay(new Date('2022-10-16'))
​
// ------------------------------
​
// Задача 3.
// Напишите функцию endDay(), которая возвращает количество секунд до конца текущего дня.
​
// function endDay(){
//     let crDate = new Date('2010-05-19 00:00:00')
//     let date = new Date(crDate.getFullYear(), crDate.getMonth(), crDate.getDate()+1)
//     let result = (date.getTime() - crDate.getTime()) / 1000
//     console.log(result)
// }
​
// endDay()
​
​
// -------------------------------------------
// Работа со строками
​
// concat() -- конкатенация строк
// let a = 'привет'
// let b = 'друг'
​
// console.log(a.concat(b))
​
// repaet(n) - повтор строк n-ое количество раз
// let a = '_-'
// console.log(a.repeat(10)) 
​
// -------------------------------------------
// includes() - проверяет, существует ли заданная подстрока в строке
// let a = 'Привет мой друг'
// console.log(a.includes('друг'))          -- true
// console.log(a.includes('мой'))           -- true
// console.log(a.includes('Привет'))        -- true
​
// console.log(a.includes(' Привет'))       -- false
// console.log(a.includes('привет'))        -- false
// console.log(a.includes('мой шнур'))      -- false
​
// -----------------------------------------------
// startsWith() -- проверяет, находится ли подстрока в начале строки
// let a = 'Привет мой друг'
​
// console.log(a.startsWith('Привет'))              -- true
// console.log(a.startsWith('Привет мой'))          -- true
// console.log(a.startsWith('Прив'))                -- true
​
// console.log(a.startsWith('мой друг'))            -- falase
// console.log(a.startsWith('друг'))                -- false
// console.log(a.startsWith('руг'))                 -- false
​
​
// ---------------------------
// endsWith() -- проверяет, находится ли подстрока в конце строки
// let a = 'Привет мой друг'
​
// console.log(a.endsWith('Привет'))                -- false
// console.log(a.endsWith('Привет мой'))            -- false
// console.log(a.endsWith('Прив'))                  -- false
​
// console.log(a.endsWith('мой друг'))              -- true
// console.log(a.endsWith('друг'))                  -- true
// console.log(a.endsWith('руг'))                   -- true
​
// ---------------------------------
// indexOf() -- возращает индекс начала заданной подстроки
// let a = 'Привет мой друг мой'
​
// console.log(a.indexOf('мой'))            7
// console.log(a.indexOf('друг'))           11
// console.log(a.indexOf('Привет'))         0
​
// console.log(a.indexOf('наш'))            -1
// console.log(a.indexOf('привет'))         -1
​
// console.log(a.indexOf('мой', 8))         16 (потому что второй аргумент указывает индекс "старта" поиска подстроки)
​
// --------
// lastIndexOf() -- возращает индекс начала заданной подстроки (ищет справа-налево)
// let a = 'Привет мой друг мой'
// console.log(a.lastIndexOf('мой'))        16 
​
// ------------------------------
​
// Задача 1.
// Задан массив emails, передающий строковые элементы. Определите, все ли элементы содержат верную почту.
// Критерии правильной почты: наличие "@" и "."
// В качестве ответа необходимо в консоль вывести ответ true/false для каждого элемента.
​
// Пример:
// let emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro']
​
// Результат:
// true
// false
// false
// true
​
// Решение 1
// for (let i = 0; i < emails.length; i++){
//    console.log(emails[i].includes('@') && emails[i].includes('.'))
// }
​
// Решение 2
// emails.forEach(elem => console.log(elem.includes('@') && elem.includes('.')))