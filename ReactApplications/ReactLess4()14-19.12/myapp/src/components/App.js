import { useState } from "react"
let data = [
    {id: 1, name: 'Alex', salary: 1000},
    {id: 2, name: 'Steven', salary: 1500},
    {id: 3, name: 'Jhon', salary: 2000},
]

function App(){
    // let count = 0
    let [count, setCount] = useState(0)
    let [users, setUsers] = useState(data)
    
    function deleteLastUsers(){
        setUsers(users.slice(0, users.length-1))
    }

    function addUser(){
        let user = {
            id: users.length+1, 
            name: prompt('Enter name'), 
            salary: prompt('Enter Price')}
        setUsers([...users, user])
    }
    
    function deleteFirstUsers(){
        // setUsers(users.slice(1))
        setUsers(users.filter((value, index) => index != 0))
    }

    return(
        <div>
            <div>Count!
                <h2>{count}</h2>
                <button onClick={() => setCount(++count)}>Push IT+</button>
                <button onClick={() => setCount(--count)}>Push IT-</button>
                <div>
                    <button onClick={() => setCount(count + 100)}>+ 100</button>
                    <button onClick={() => setCount(count - 100)}>- 100</button>
                    <button onClick={() => setCount(count = 0)}>Anull</button>

                </div>
            </div>
            <div>Users!
                {users.map(elem => <p key = {elem.id}>{elem.name} {elem.salary}</p>)}
                <button onClick={() => deleteLastUsers()}>User Delete</button>
                <button onClick={() => addUser()}>User Addeded</button>
                <button onClick={() => deleteFirstUsers()}>First user Delete</button>

            </div>
        </div>
    )
}

export default App