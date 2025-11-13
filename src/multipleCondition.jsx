import { useState } from "react"

function MultipleCondition() {
    let [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Implement Multiple If else Condition</h1>
            <h1>{counter}</h1>
            <button onClick={()=> setCounter(counter + 1)}>Counter</button>

            { 
                counter === 0 ? (<h1> Method 1</h1>) 
              : counter === 1 ? (<h1> Method 2</h1>)
              : counter === 2 ? (<h1> Method 3</h1>)
              : counter === 3 ? (<h1> Method 4</h1>)
              : counter === 4 ? (<h1> Method 5</h1>)
              : counter === 5 ? (<h1> Method 6</h1>)
              : counter === 6 ? (<h1> Method 7</h1>)
              : counter === 7 ? (<h1> Method 8</h1>) 
              : (<h1> Default Method</h1>)
            }
        </div>
    )
}

export default MultipleCondition;