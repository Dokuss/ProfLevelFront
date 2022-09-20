// let a = 10

// if (a>15){
//   console.log('true')
// }
// else if(a<15){
//   console.log('false')
// }
// else{
//   console.log(a)
// }

// let i = 1

// while(i<10){
//   console.log(i++)
// }


// let e = 1

// console.log(++e)
// console.log(e)

// while (e > 0) console.log(e--)
//запись цыкла в одну строчку, если тело цыкла состоит из одной команды


//Цыкл Do while
//сначала выполняется одна итерация, потом проверка условия
// let q = 1
// do {
//   console.log(q++)
// }while (false)

// let w = 1
// for (w = 0, r = 1; w <= 10; w++, r*=w){  
//   console.log(w, r) 
// }

//В программе объявлены две переменные start и end. Используя цикл, посчитайте сумму чисел из диапазона значений от start до end (включая концы), кратные значению 5. Результат выведите в консоль.
// Пример значений переменных:

// let start = 0
// let end = 50

// Пример результата:
// 275

// let start = 0
// let end = 50

// let result = 0

// Первый вариант решения
// for (i = start; i <= end; i += 5){
//   result += i  
// }
// console.log(result)

// Второй вариант решения
// for (i = start; i <= end; i++){
//   if (i % 5 == 0){
//     result += i
//   }
// }
// console.log(result)

// for (i = 1; i <= 5; i++){
//   if (i = 3){
//     break //Дуриктива 'break' принудительно завершает цыкл
//   }
//   console.log(i)
// }

// for (y = 1; y <= 5; y++){
//   if (y != 3){// Пропуск через условный оператор{
//     // Дуриктива 'continue' не завершает а пропускает итерацию
//     console.log(y)
//   }
// }

// let name1 = 'голодовка'
// let result = ''
// for (let i = 0; i < name1.length; i++){  
//   result += name1[i]
//   if (name1[i] == 'д') {
//     break
//   }  
// }
// console.log(result)

// В программе объявлена переменная word 
//со строковым значением.Переверните строку,
// используя цикл, и выведите результат 
//в консоль.
// Пример значений переменных:
// let word = "мир"
// Пример результата:
// "рим"

// let word = "абракадабра"
// let newWord = ''
// for (i = word.length-1; i >= 0; i--){
//   // console.log(word[i])
//   newWord += word[i]
// }
// console.log(newWord)

// let word = "абракадабра"
// let newWord = word.split('').reverse().join('')
// console.log(newWord)

// let newWord = word.split('').    reverse().     join('')
//  переменная                      перевернуто    обратно в строку