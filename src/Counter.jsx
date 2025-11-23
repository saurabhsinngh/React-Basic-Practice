import { useState } from "react";

function Counter() {
    let [counter, setCounter ] = useState(0);
    let [dcounter, setDCounter ] = useState(20);

    return <>
        <h1>Increase: {counter}</h1>
        <button onClick={ () => setCounter(counter + 1)}>Increment Counter</button>

        <h1>Decrease: {dcounter}</h1>
        <button onClick={ () => setDCounter(dcounter - 1)}>Decreament Counter</button>
    </>
}

export default Counter