let money = 35
let ticketPrice = 10

if ((ticketPrice * 2) > money) {
    console.log("you win");
}
else {
    console.log("Home")
}

let month = 6

if (month == 4) {
    console.log("Birtday")
}
else {
    console.log(month)
}

let x = 7
let y = 42

if (x > y) {
    console.log("X greater then Y")
}
else if (x < y) {
    console.log("Y greater then X")
}
else if (x === y) {
    console.log("X and Y equals")
}

let month_number = 13

if (month_number >= 3 && month_number <= 5) {
    console.log("Wesna")
}
else if (month_number >= 6 && month_number <= 8) {
    console.log("Leto")
}
else if (month_number >= 9 && month_number <= 11) {
    console.log("Osen")
}
else if (month_number <= 2 || month_number === 12) {
    console.log("Zima")
}
else {
    console.log("False")
}

let min = 50
if (min > 1 && min <= 15) {
    conslole.log("Pervaja")
}
else if (min > 16 && min <= 30) {
    console.log("Vtoraja")
}
else if (min > 31 && min <= 45) {
    console.log("Tretja")
}
else if (min > 46 && min <= 59) {
    console.log("Chetvertaj")
}

console.log(5 - 3) //бинарный оператор ( - )

// const x = 7
// const y = -7 
// унарный оператор

//false - 0, '', udefiend, false
//

// const homeWorkDone = false
// console.log(!!x)

// console.log(+'5')  унарный плюс, переводит строку в цыфры
// console.log('5')

// let x = 0
// console.log(x++) инкремент
// console.log(++x)
// console.log(x--)  дикремент
// console.log(--x)

let age = 18

switch (age) {
    case 15:
        console.log('Very Young')
        break
    case 16:
        console.log('Youn')
        break
    case 18:
        console.log('Match')
        break
    case 20:
        console.log('Old')
        break
    default:
        console.log('I don`t know')
}

switch (month) {
    case 4:
        console.log("Birthday")
        break
    default:
        console.log('Note')
}

min >= 0 && min <= 15
    ? console.log('Первая четверть')
    : min > 15 && min <= 30 ? console.log('Вторая четверть')
        : min > 30 && min <= 45 ? console.log('Третья четверть')
            : min > 45 && min <= 59 ? console.log('Четвертая четверть')
                : console.log('Неправильное значение')

// let age = 25
// age > 18
// ? console.log('Welcome') : console.log('Too young')

const task = 'переименовать'

switch (task) {
    case 'удалить':
        console.log('delete')
        break
    case 'переименовать':
        console.log('rename')
        break
    case 'редактировать':
        console.log('edit')
        break
    default:
        console.log('I don`t know')
}

if (task === 'удалить') {
    console.log('delete')
}
else if (task === 'переименовать') {
    console.log('rename')
}
else if (task === 'редактировать') {
    console.log('edit')
}
else {
    console.log('False')
}

task === 'удалить'
    ? console.log('delete')
    : task === 'переименовать'
        ? console.log('rename')
        : task === 'редактировать'
            ? console.log('edit')
            : null