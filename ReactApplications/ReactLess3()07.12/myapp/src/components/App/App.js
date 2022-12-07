import Block from "../Block/Block"

let data = [
    {id: 1, author: 'Sergiu1', title: 'Zagolovok', text: 'Text zagolovka', color: 'red'},
    {id: 2, author: 'Sergiu2', title: 'Zagolovok', text: 'Text zagolovka', color: 'blue'},
    {id: 3, author: 'Sergiu3', title: 'Zagolovok', text: 'Text zagolovka', color: 'green'},
    {id: 4, author: 'Sergiu4', title: 'Zagolovok', text: 'Text zagolovka', color: 'yellow'},

]

function App(){
    return(
        <div>
            {data.map( elem => 
            <Block 
                key={elem.id} 
                title={elem.title} 
                text={elem.text} 
                color={elem.color}
                author={elem.author}/>)}
        </div>
    )
}

export default App