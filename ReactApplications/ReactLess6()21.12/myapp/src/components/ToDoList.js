import { useState } from "react"
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
    const {todos, changeToDo, deleteToDo} = props
  return (
    <div>
        {todos.map(elem => 
            <ToDoItem
            key = {elem.id}
            id = {elem.id}
            title = {elem.title}
            complited = {elem.complited}
            changeToDo = {changeToDo}
            deleteToDo = {deleteToDo}
            />
        )}
    </div>
  )
}

export default ToDoList;
