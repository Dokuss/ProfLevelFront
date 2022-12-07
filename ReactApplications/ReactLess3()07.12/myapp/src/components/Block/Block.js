import Content from "../Content/Content"


function Block(props){

    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Content color={props.color} author={props.author}/>
        </div>
    )
}

export default Block