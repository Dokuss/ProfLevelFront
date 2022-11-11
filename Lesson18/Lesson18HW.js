// HW  до 9.11
// task1
​
// function checkDate(){
//     let crDate = new Date('2022-08-01')
//     let nxDate = new Date(crDate.getFullYear(),crDate.getMonth()+1)
//     let result = (nxDate.getTime() - crDate.getTime()) / (1000*60*60*24)
//     console.log(Math.round(result))
// }
​
// checkDate()
​
// task2
​
// function isItFridayToday(){
//     let date = new Date('2022-11-06')
//     let day = date.getDay()
//     if (day == 5){
//         console.log('Сегодня пятница!')
//     } else if (day == 4){
//         console.log('Пятница завтра')
//     } else if (day == 6){
//         console.log('Пятница была вчера')
//     } else {
//         console.log(`Пятница будет через ${5 - day} ${(day == 0) ? 'дней' : 'дня'}`)
//     }
// }
​
// isItFridayToday()
​
​
// task3
​
// let prices = [ 
//     'Цена товара - 1200$', 
//     'Стоимость - 500$', 
//     'Цена не определена', 
//     '9999',
//     'Ценовая категория - больше 300$',
//     'Цена за услугу 500 EUR',
// ]
​
// function getInfo(array){
//     let count = [0,0]
//     for (let elem of array){
//         if (elem.startsWith('Цена')){
//             count[0]++
//         } 
//         if (elem.endsWith('$')){
//             count[1]++
//         }
//     }
//     return count
// }
​
// console.log(getInfo(prices))
​
// task4
​
// let phones = [ 
//     '4000 0012 0056 9499', 
//     '4000 0013 5456 7379', 
//     '4000 0014 1456 9869', 
//     '4000 0015 3466 7859', 
//     '4000 0016 3556 6899', 
//     '4000 0017 4456 4699'
//  ]
​
//  for (let i = 0; i < phones.length; i++){
//     // phones[i] = phones[i].slice(0,4) + '*****' + phones[i].slice(-4)
//     phones[i] = phones[i].replace(phones[i].substring(phones[i].indexOf(' '),phones[i].lastIndexOf(' ')+1),'*****')
//  }
    
// console.log(phones)