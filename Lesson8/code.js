/* let myObj2 = {
  name: 'Tigran',
  age: 25,
  isJob: true
}
​
let myObj1 = Object.assign({}, myObj2)
​
delete myObj1.name
delete myObj2.isJob
​
myObj1.salary = 1000
myObj1['salary'] = 1000
​
console.log(myObj1, myObj2) */

/* Цикл для объекта 
​
let myObj = {
  name: 'Tigran',
  age: 25,
  isJob: true
}
​
for (let i in myObj){
  console.log(myObj[i])
} */

/* Задан объект someObj. Посчитайте количество строк в значениях сво-тв
​
let someObj = {
	someChar1: 1,
	char2: 'Строка1',
	char3: 3,
	someChar4: 'Строка2',
	char5: 'Строка3',
	veryBigShar6: 6,
}
​
let count = 0
​
for (let i in someObj){
  if (typeof someObj[i] == 'string'){
    count++
  }
} */

/* let someObj = {
	someChar1: 1,
	char2: 'Строка1',
	char3: 3,
	someChar4: 'Строка2',
	char5: 'Строка3',
	veryBigShar6: 6,
} */

/* Реализация аналога метода obj.hasOwnProperty()
​
let b = someObj.hasOwnProperty('key')
console.log(b)
​
function checkProp(obj, prop){
  for (let i in obj){
    if (i == prop){
      return true
    } 
  }
  return false
} 

console.log(checkProp(someObj, 'someChar4')) 
*/
​

​
​
/* Методы класса Object
​
let myObj = {
  name: 'Tigran',
  last_name: 'Movsisyan',
  salary: 0
}
​
Object.keys()      -  Позволяет получить ключи объекта в виде элементов массива
​
Object.values()    -  Позволяет получить значения объекта в виде элементов массива
​
Object.entries()   -  Позволяет получить значения и ключи объекта в виде элементов массива
​
console.log(Object.entries(myObj))
​ */
​
/* 
Задан объект someObj. Используя цикл, выведите те значения сво-тв, 
чей квадратный окрень вычисляется без дробной части
​
Решение
​
let someObj = {
	char1: 1,
	char2: 'Строка1',
	char3: 3,
	char4: 'Строка2',
	char5: 'Строка3',
	char6: 9,
  char7: 'Строка3',
	char8: 4,
}
​
for (let i in someObj){
  if(typeof someObj[i] == 'number' && someObj[i] ** 0.5 % 1 == 0){
    console.log(someObj[i])
  }
} 
*/
​
/* 
Тип данных object Массив
​
let a = [1,'строка',true, [1,2,3], {name: 'tigran', salary: 0}]
​
console.log(a[1])        Индексация элементов такая же как и у строк
console.log(a.length)    Сво-во, которые хранит длину массива (количесвто элементов)
​
a[0] = 'Один'            Изменение элемента
a[5] = 'новый элемент'   Создание нового элемента
​
a[100] = 'новый элемент' Создание эелемента с заведомо большим индексом. Результат сформирует новую длину, соответствующую заданному индексу нового элемента
​
delete a[2]              Удаляет элемент, но сохраняет длину масива
​
 a[a.length] = 'новый элемент1' 
 a[a.length] = 'новый элемент2'
 a[a.length] = 'новый элемент3'
​ */
/* 
Методы массивов
​
let a = [1,2,3]
​
push()           - добавляет новый элемент с конца масива
pop()            - удаляет элемент с конца масива
​
unshift()        - добавляет новый элемент с начала масива
shift()          - удаляет элемент с сначала масива
​
a.unshift(0)
console.log(a)
​
​
Цикл для массива
​
let a = ['один','два', 'три']
​
Первый способ
​
for (let i = 0; i < a.length; i++){
  console.log(a[i])
}
​
Второй способ
​
for (let i of a){
  console.log(i)
} 
*/
​
​
/* Используя цикл, сформируйте массив list со значениями от 10 до 20 включительно. 
Выведите значение переменной list в консоль.
​
let list = []
​
for (let i = 10; i <= 20; i++){
  list.push(i)
}
​
console.log(list) */