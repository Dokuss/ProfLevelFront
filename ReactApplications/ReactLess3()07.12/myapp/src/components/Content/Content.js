
function Content(props){
    return(
        <div>
            <p style={{color: props.color}}>{props.author}</p>
        </div>
    )
}

export default Content