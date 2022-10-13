// findIndex
// метод возвращает индекс найденного элемента
// let goods = [
//     {id: 4, name: 'Скейтборд', quantity: 30},
//     {id: 2, name: 'Самокат', quantity: 15},
//     {id: 3, name: 'Велотренажер', quantity: 20},
//     {id: 1, name: 'Велосипед', quantity: 5},
// ]
​
// let result = goods.findIndex(elem => elem.id == 5)
​
// console.log(result)
​
// ------------------------------
// Метод sort
// сортировка элементов массива.
​
// let array = ['Петрушка','Яблоко','Вишня','Арбус','Дыня']
​
// array.sort() сортировка по возврастанию
// array.sort().reverse() сортировка по убыванию
​
// let array = [3,4,5,2,6,1,9,8,10,7]
// // array.sort((currentElem, secendElem) => secendElem - currentElem )  -- сортировка ЧИСЕЛ по убыванию
// // array.sort((currentElem, secendElem) => currentElem - secendElem )  -- сортировка ЧИСЕЛ по возрастантю
​
// array.sort(() => Math.random() - Math.random()) произвольная сортировка (рандомная)
​
// console.log(array)
​
// сдвиг индекса (доп)
// for (let i = 0; i < array.length; i++){
//     console.log(array[i-1],array[i], array[i+1])
// }
​
​
// Задача 1 
// Отсортировать массив goods по id
​
// let goods = [
//     {id: 4, name: 'Скейтборд', quantity: 30},
//     {id: 4, name: 'Самокат', quantity: 15},
//     {id: 3, name: 'Велотренажер', quantity: 20},
//     {id: 3, name: 'Велосипед', quantity: 5},
// ]
​
// Услованя конструкция
// (condition) ? value1 : value2
​
// Сортировка по id, если id равны - тогда сортируемся по quantity
// goods.sort((ce,se) => (ce.id == se.id) ? ce.quantity - se.quantity : ce.id - se.id) 
​
// goods.sort((ce,se)=> ce.name.length - se.name.length) сортировка по длине сво-ва name 
​
// console.log(goods)
​
​
// --------------------------
// Метод some и every
​
// Метод every. 
// Его задача - проверить, все ли элементы удовлетворяют условию колбек-функции
// Если хотябы 1 элемент не удовлетворит условию - метод вернет false.
​
// let hours = [41,39,41,40,42]
// let result = hours.every(elem => elem >= 40)
// console.log(result)
// --------------------------
​
// Метод some. 
// Его задача - проверить, есть ли хотябы 1 элемент который удовлетворяет условию
​
// let costs = [1100, 1050, 2000, 950, 1700]
// let lowerCost = costs.some(elem => elem < 1000)
// console.log(lowerCost)
​
​
// Существует ли элемент массива goods, чье значение id делится на 2 без остатка и quantity кратно 10
​
// let goods = [
//     {id: 4, name: 'Скейтборд', quantity: 30},
//     {id: 4, name: 'Самокат', quantity: 15},
//     {id: 3, name: 'Велотренажер', quantity: 20},
//     {id: 3, name: 'Велосипед', quantity: 5},
// ]
​
// let result = goods.some(elem=> elem.id % 2 == 0 && elem.quantity % 10 == 0)
// console.log(result)
// --------------------------
​
// Метод map
// Нужен для того, чтобы изменить каждый элемент массива
// Метод возвращает новый массив с измененными элементами
​
// let prices = [100,400,250,1000,499]
​
// Задача: рассчитать 85% от заданных значений элементов массива
// let result = prices.map(elem => elem ** 0.85)   
​
// callback омжет принимать 3 аргумента 
// let result = prices.map((elem, index, array) => console.log(elem, index, array)) 
​
// --------------------------
​
// метод forEach
// Метод циклично перебирает все элементы массива
// let prices = [100,400,250,1000,499]
​
// переменная result будет хранить undefined. метод ничего не возвращает
// let result = prices.forEach((elem)=> array1.push(elem ** 2)) 
​
// prices.forEach(elem => console.log(elem))
// console.log(array1)
​
// --------------------------
// let array = [5,8,9,2,4,5,6]
​
// let sum = 0
// for (let elem of array){
//     sum = sum * elem
// }
// console.log(sum)
​
// Метод reduce
// Метод для расчетов агрегационных значений
​
// let result = array.reduce((sum, elem) => sum * elem)
// console.log(result)