import {useState} from 'react';

function MultipleCondition() {
    let [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>Show the multiple condition</h1>
            <h1>{counter}</h1>
            <button onClick={()=> setCounter(counter + 1)}>Counter Button</button>
            { counter === 0 ? (<h1> Value 0</h1>) 
                : counter === 1 ? (<h1> Value 1</h1>) 
                : counter === 2 ? (<h1> Value 2</h1>)
                : counter === 3 ? (<h1> Value 3</h1>)
                : counter === 4 ? (<h1> Value 4</h1>)
                : (<h1>Default value 1000</h1>)
            }
        </div>
    )
}

export default MultipleCondition