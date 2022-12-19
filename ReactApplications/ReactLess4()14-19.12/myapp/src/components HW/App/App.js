// import Block from "../Block/Block"

import Content from "../Content/Content"

let data = [
    {id: 1, url: 'https://via.placeholder.com/600/771796', title: 'reprehenderit est deserunt velit ipsam'},
    {id: 2, url: 'https://via.placeholder.com/600/24f355', title: 'accusamus beatae ad facilis cum similique qui sunt'},
    {id: 3, url: 'https://via.placeholder.com/600/d32776', title: 'officia porro iure quia iusto qui ipsa ut modi'},
    {id: 4, url: 'https://via.placeholder.com/600/f66b97', title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae'},
    {id: 5, url: 'https://via.placeholder.com/600/56a8c2', title: 'natus nisi omnis corporis facere molestiae rerum in'},
]

function App(){
    return(
        <div>
            {data.map(elem => 
            <Content 
            key = {elem.id} 
            url={elem.url} 
            title = {elem.title}/>)}
        </div>
    )
}

export default App