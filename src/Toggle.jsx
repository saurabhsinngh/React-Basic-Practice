import { useState } from "react";

function Toggle() {
    let [display, setDisplay] = useState(true)
    return (
        <>
            <h1>Hide and show data</h1>
            { display ? <h1>Gaurav Singh</h1> : null }
            <button onClick={()=> setDisplay(!display)}>Toggle Button</button>
        </>
    )
}

export default Toggle;