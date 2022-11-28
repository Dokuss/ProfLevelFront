/* let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('First task');
        data = [1,2,3]
        resolve(data)
    }, Math.random() * 1000)
}).then((data)=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            quad(data)
            console.log('Second Task', data)
            resolve()
        }, Math.random()*1000)
    })
})



function quad(array) {
    for(let elem in array){
        array[elem] = array[elem] * 2
    }
} */
/* 
function getTodosByUserName(name){
    let fetchTodos = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data.find(elem => elem.name == name))
    .then((userData)=> {
        fetchTodos.then(data => console.log(data.filter(elem => elem.userId == userData.id && elem.completed == true)))
    })
}

getTodosByUserName('Kurtis Weissnat')
 */
/* 
async function getFetchData(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users').then()
    let data = await res.json()
    console.log(data)
}

getFetchData()
 */