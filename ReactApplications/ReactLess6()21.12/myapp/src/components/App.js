import { useState } from "react"
import AddItem from "./AddItem";
import ToDoList from "./ToDoList";
import './style.css';

let start_todo = [
  {id: 1, title: 'Wash hend', complited: true},
  {id: 2, title: 'Sports', complited: true},
  {id: 3, title: 'Lern React', complited: true},

]

function App() {
  const [todos, setTodos] = useState(start_todo)

  function deleteToDo(id){
   setTodos(todos.filter(elem => elem.id != id ))
  }

  function changeToDo(id){
    setTodos(start_todo.map(elem => {
        if (elem.id == id){
      elem.complited = !elem.complited

        }
        return elem
    }))
  }

  return (
    <div>
      <AddItem/>
      <ToDoList todos = {todos} changeToDo = {changeToDo} deleteToDo = {deleteToDo}/>
    </div>
  );
}

export default App;
