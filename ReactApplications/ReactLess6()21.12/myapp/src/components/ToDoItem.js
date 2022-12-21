import { useState } from "react"

function ToDoItem(props) {
    const {id, title, complited, changeToDo, deleteToDo} = props
    
  return (
    <div 
    className="container" 
    onDoubleClick={() => deleteToDo(id)}
    onClick={() => changeToDo(id)}
    style={{backgroundColor: (complited) ? 'green' : 'tomato'}}
    
    >
        <p>{title}</p>
        {(complited) ? <p>Succes</p> : <b>Crash</b>}
        {/* {complited && <p>Succes</p>} */}
    </div>
  );
}

export default ToDoItem;
