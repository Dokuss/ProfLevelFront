// из даты в строку

/* let date = new Date('2022-10-31 19:00:00')

// let string = date.toLocaleString('de-DE')
let string = date.toLocaleString('de-DE', {year: "2-digit", month: 'long', day: "2-digit"})

console.log(string); */

// --------------------------------------

// Задача 3. 
// Напишите функцию logDay(date), котоая в качестве аргумента принимает даты и ВЫВОДИТ в консоль день недели даты по примеру:
// Если дата будет текущая - функция должна вывести сообщение:
// 'Сегодня среда'

// Пример:
// let date = new Date('2022-10-18')
// logDate(date)

// Результат: 'Сегодня вторник'

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

// Решение 2
// function logDay(date){
//     let days = ['воскресенье', "понедельник","вторник","среда","четверг","пятница","суббота"]
//     console.log(`Сегодня ${days[date.getDay()]}`)
// }

// logDay(new Date('2022-10-16'))


// Задача 3.
// Напишите функцию endDay(), 
// которая возвращает количество секунд до конца текущего дня.

function endDay() {
    let crDate = new Date('2010-05-19 00:00:00')
    let date = new Date(crDate.getFullYear(), crDate.getMonth(), crDate.getDate() + 1)
    let result = (date.getTime() - crDate.getTime()) / 1000
    console.log(result);
}

endDay()

