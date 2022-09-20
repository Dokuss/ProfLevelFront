// Карирование функции, 
/* function curry(func) {
    return function (a) {
        return function (b) {
            return func(a, b);
        };
    };
} */

// После карирования используем:
/* function sum(a, b) {
    return a + b;
}
let curriedSum = curry(sum);
console.log(curriedSum(1)(2)); //Вывод: 3

function myFunc(theObject) {
    theObject.make = 'Toyota';
}
------------------------------------------------------------------ */

/* var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x получает значение "Honda"

myFunc(mycar);
y = mycar.make; // y получает значение "Toyota"
                // (свойство было изменено функцией)
console.log(mycar);
--------------------------------------------------------------------- */

