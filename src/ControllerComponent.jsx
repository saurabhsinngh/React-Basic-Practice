import { useState } from "react";

function ControllerComponent() {
    
    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword] = useState("");

    return (<>
        <h2>Controller Componenet</h2>
        <input type = "name" value = {name} onChange = { (event)=> setName(event.target.value)} placeholder="Enter your name"/><br /><br />
        <input type = "email" value = {email} onChange = { (event)=> setEmail(event.target.value)} placeholder="Enter your email"/><br /><br />
        <input type = "password" value = {password} onChange = { (event)=> setPassword(event.target.value)} placeholder="Enter your password"/><br /><br />

        <button>Submit</button>
        <button onClick={()=> {setName(""); setEmail(""); setPassword("");}}>Clear</button>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{password}</h2>
        
    </>)
}

export default ControllerComponent;