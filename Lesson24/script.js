/* 
// synchron & asynchron

function func_1(){
    console.log('Test 1');
}

function func_2(){
    setTimeout(()=>{
    console.log('Test 2')
func_1()

},2000)
}
func_2()


// setTimeout(()=> console.log(' Test 3', 2000))
 */

/* 
console.log('send request. . . ');

setTimeout(() =>{
    console.log('data...');

    let data = [1,2,3,]
    setTimeout(() =>{
        data.push(5)
        console.log('get data', data);
    }, 2000)
}, 2000)
 */
/* 
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('data...');
        let data = [1,2,3]
        resolve(data)
    }, 2000)
})

promise.then((data)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            data.push(5)
            console.log('get data: ', data);
        })
    })
})

let promise_2 = promise.then(clients => {
    clients = quadArray(clients)
    console.log('transform data: ','clients');
})

function quadArray(array){
    array.map(elem => elem ** 2)
    return array
}

 */

/* let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('data...');
        let data = [1,2,3]
        resolve(data)
    }, 2000)
})

let promise_2 = promise.then((data)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            data.push(5)
            console.log('get data: ', data);
            reject('error')
        })
    })
}).catch(err => console.log(err)) */

let url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
