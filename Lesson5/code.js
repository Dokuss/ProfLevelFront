// function printHi(num){ 
//   console.log('_*'.repeat(num))
//   for (let i = 0; i < num; i++){
//     console.log('Добро пожаловать, дорогой гость!')
//   }
//   console.log('_*'.repeat(num))
// }
​
// printHi(10)
​
// Ключевое слово return
// Функция после вызова всегда возвращает undefined (если ен указать ключевое слово return)
// function hanlder(){
//   let a = 10
// }
// console.log(hanlder())     undefined
​
// Функция handler позволяем вместо undefined вывести значение, 
// переданное в ключевом слове return. return принудительно завершает работу функции, 
// аналогично дериктиве break
​
// function hanlder(a){
//   return a > 5
// }
​
// Результат return можно сформировать в отдельном выражении
// let b = hanlder(10)
 
// console.log(b)   true
​
// Создайту функцию getPercent(), которая в качестве аргумента принимает два числа (а, б).
// В результате выоплнения верните процент числа а от б
​
// let value = getPercent(4,80)
// console.log(value) 5%
​
// Решение
// function getPercent(num1,num2){
//   return num1*100/num2
// }
// console.log(getPercent(4,80))
​
// Задача 2
// Напишите функцию reverseNum(num), которая перевернет num число задом-наперед.
// Результат выполнения функции передайте в return.
​
// Пример:
// console.log(reverseNum(12345))   54321
​
// function reverseNum(num){
//   let string = ''+num
//   let result = '';
//   for (let i = string.length-1; i >= 0; i--){
//     result += string[i]
//   }
//   return +result
// }
​
// console.log(reverseNum(12345)+1000)
​
// function abcd(name){ 
//   console.log('_*'.repeat(10))
//   console.log(`Добро пожаловать, дорогой ${name}!`)
//   console.log('_*'.repeat(10))
// }
​
// abcd('Тигран')
​
// function sum(a){
//  for(let i = 0; i <= a; i = i + 5){
//   if (i != 0){
//     console.log('Итерация '+i)
//   }
//  }
// }
​
// sum(50)
​
// for (let i = 0; i <= 5; i++){
//   console.log(i)
// }
​
// let word = 'водородов'
​
// let result = ''
// for (let i = word.length-1; i >= 0; i--){
//   result = result + word[i]
// }
​
// console.log(result)
​
// Напишите функцию, которая возвращает квадрат числа, переданного в аргументе. 
// От результата работы функции возьмите разницу с таким же числом, переданным в аргументе
​
// function powerQuad(a){
//   return a**2
// }
​
// let result = powerQuad(100) - 5
​
// console.log(result)