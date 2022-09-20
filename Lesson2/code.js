// Lesson2
// // number NaN
// // string
// // boolean
// // undefiend
// // null
// // let homeworkDone = true
// // if (homeworkDone) {
// //     console.log("Homework done.")
// // } else {
// //     console.log("Homework not done")
// // }
// // let age = 15
// // if (age > 18) {
// //     console.log("Welcome");
// // } else {
// //     console.log("You're too young, bye")
// // }
// /*
// let x = 7
// let y = '7'
// console.log(x == y) // Нестрогая проверка (только значения)
// console.log(x === y) // Строгая проверка (значения и типы данных)
// */
// /*
// let name1 = 'petya'
// let name2 = 'Petya'
// console.log(name1 > name2) // 112 > 80
// */
// // let x = '7'
// // let y = 7
// // if (x !== y) { // true
// //     console.log("OK")
// // }
// // Создать переменную money, где хранится информация о том, сколько у Вас денег
// // Создать переменную ticketPrice, где хранится информация о цене билета на кино
// // Если у Вас больше денег, чем цена 2 билетов, сообщить в log-е, что завтра вечером Вы идете в кино
// // В противном случае остаетесь дома
// // let money = 2000
// // let ticketPrice = 300
// // if (money > ticketPrice * 2) {
// //     console.log('завтра вечером мы идем в кино')
// // } else {
// //     console.log('останусь дома')
// // }
// // Создать переменную month, где хранится любой месяц года
// // Если это месяц Вашего рождения, сообщить об этом в логах, иначе написать, что это очередной месяц года.
// // const month = 'october'
// // if (month === 'october') {
// //     console.log('это месяц моего рождения')
// // } else {
// //     console.log('это очередной месяц года')
// // }
// // let x = 7
// // let y = 42
// // if (x > y) {
// //     console.log("X greater then Y")
// // } else if (x < y) {
// //     console.log("Y greater then X")
// // } else if (x === y) {
// //     console.log("X and Y equals")
// // }
// // Создать переменную month_number, если это число больше 3 но  меньше 6 месяца, то указать, что это
// // весенный месяц. По номеру месяца определить сезон.
// // DRY - don't repeat yourself
// // const month_number = 2
// if (month_number >= 3 && month_number <= 5) { // true treu | treu
//     console.log('Это весенний месяц')
// } else if (month_number >= 6 && month_number <= 8) { // true false | false
//     console.log('Это летний месяц')
// } else if (month_number >= 9 && month_number <= 11) { // false true | false
//     console.log('Это осенний месяц')
// } else if (month_number <= 2 || month_number === 12) { // false true | true
//     console.log('Это зимний месяц')
// } else {
//     console.log('Вы ввели неправильное значение')
// }
// // В переменной min лежит число от 0 до 59.
// // Определите в какую четверть часа попадает это число
// // (в первую, вторую, третью или четвертую).
// // const min = 15
// // if (min >= 0 && min <= 15) {
// //     console.log('Первая четверть')
// // } else if (min > 15 && min <= 30) {
// //     console.log('Вторая четверть')
// // } else if (min > 30 && min <= 45) {
// //     console.log('Третья четверть')
// // } else if (min > 45 && min <= 59) {
// //     console.log('Четвертая четверть')
// // }
// console.log(5 - 3) // бинарный оператор
// // const x = 7
// const y = -x // унарный оператор
// // false - 0, '', undefiend
// console.log(+'3' * 2)
// // console.log('5')
// // let x = 0
// console.log(x++)
// console.log(++x)
// console.log(x--)
// console.log(--x)
// const age = 30
// switch (age) {
//     case 15:
//         console.log('Very young')
//         break
//     case 16:
//         console.log('Young')
//         break
//     case 18:
//         console.log('match')
//         break
//     case 25:
//         console.log('Old')
//         break
//     default:
//         console.log("I don't know")
// }
// // Создать переменную month, где хранится любой месяц года
// // Если это месяц Вашего рождения, сообщить об этом в логах, иначе написать, что это очередной месяц года.
// // const month = 'october'
// // switch(month) {
// //     case 'october':
// //         console.log('это месяц моего рождения');
// //         break
// //     default:
// //         console.log('это очередной месяц года');
// // }
// // Тернарный оператор
// // const min = 45
// // min >= 0 && min <= 15
// // ? console.log('Первая четверть')
// // : min > 15 && min <= 30 ? console.log('Вторая четверть')
// // : min > 30 && min <= 45 ? console.log('Третья четверть')
// // : min > 45 && min <= 59 ? console.log('Четвертая четверть')
// // : console.log('Неправильное значение')
// // const age = 25
// // age > 18 ? console.log('Welcome') : console.log('Too young')
// // В программе объявлена переменная task, в которой записано одно из строковых значений: удалить,
// // переименовать, редактировать. Напишите программу, которая выводит в консоль:
// // delete – при значении task – удалить;
// // rename – при значении task – переименовать;
// // edit – при значении task – редактировать.
// const task = 'редактировать'
// if (task === 'удалить') {
//     console.log('delete')
// } else if (task === 'переименовать') {
//     console.log('rename')
// } else if (task === 'редактировать') {
//     console.log('edit')
// }
// switch (task) {
//     case 'удалить':
//         console.log('delete')
//         break
//     case 'переименовать':
//         console.log('rename')
//         break
//     case 'редактировать':
//         console.log('edit')
//         break
// }
// task === 'удалить'
//     ? console.log('delete')
//     : task === 'переименовать'
//         ? console.log('rename')
//         : task === 'редактировать'
//             ? console.log('edit')
//             : null