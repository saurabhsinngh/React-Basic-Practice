import { useState } from "react";

function InputField() {
    const [name, setname] = useState("Saurabh Singh");
    return (<>
        <h2>Make Input field Enter text inside and outside of box also clear button</h2>
        <input type = "text" value = {name} onChange={ (event)=> setname(event.target.value)} placeholder="Enter your name" />
        <h2>{name}</h2>
        <button onClick={() => setname("")}>Clear Content</button>
    </>)
}

export default InputField;
