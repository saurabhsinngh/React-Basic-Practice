import { useState } from "react";

function Toggle() {
    let [display, setDisplay] = useState(true)
    return (
        <>
            <h1>Hide and show data</h1>
            { display ? <h1>Saurabh Singh</h1> : <h1>Suraj Singh</h1> }
            <button onClick={()=> setDisplay(!display)}>Toggle Button</button>
        </>
    )
}

export default Toggle;