
function Content(props){
    let {url, title} = props

    return(
        <div>
            <img alt='qwerty' src={url} whidt='300' heigth='300'/>
            <h2>{title}</h2>
        </div>
    )
}

export default Content 