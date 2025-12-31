import { useState } from 'react'

function Counter() {
    const [counter, setCounter ] = useState(0);
    const [dcounter, dsetCounter ] = useState(100);

    return (
        <>
          <h1> Increment: {counter}</h1>
          <button onClick = { ()=> setCounter(counter + 1)}>Increment Button</button>

          <h1> Decrement: {dcounter}</h1>
          <button onClick = { ()=> dsetCounter(dcounter - 1)}>Decrement Button: {dcounter}</button>
        </>
    )
}

export default Counter;