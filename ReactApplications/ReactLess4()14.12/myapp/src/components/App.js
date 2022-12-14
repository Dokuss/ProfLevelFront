import { useState } from "react"
let data = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Steven'},
    {id: 3, name: 'Jhon'},
]

function App(){
    // let count = 0
    let [count, setCount] = useState(0)
    let [users, setUsers] = useState(data)
    
    function deleteUsers(){
        setUsers(users.slice(0, users.length-1))
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
                {users.map(elem => <p>{elem.name}</p>)}
                <button onClick={() => deleteUsers()}>User Delete</button>
                <button onClick={() => setUsers()}>User Addeded</button>
            </div>
        </div>
    )
}

export default App