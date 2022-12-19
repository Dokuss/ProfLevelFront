import {useEffect, useState} from "react"
function App(){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

/*     useEffect(() => {
        console.log('Test');
    }) */

   /*  useEffect(() => {
        console.log('Test');
    }, []) */

   /*  useEffect(() => {
        console.log('Test count 1');
    }, [count1])

    useEffect(() => {
        console.log('Test count 2');
    }, [count2]) */

    useEffect(() => {
        console.log('Test count 1 end 2');
    }, [count1, count2])

    return(
        <div>
            <div>
                <h2>Count 1</h2>
                <p>{count1}</p>
                <button onClick={()=> setCount1(count1 +1)}> Increment </button>
            </div>
            <div>
                <h2>Count 2</h2>
                <p>{count2}</p>
                <button onClick={()=> setCount2(count2 +1)}> Increment </button>
            </div>
        </div>
    )
}


export default App