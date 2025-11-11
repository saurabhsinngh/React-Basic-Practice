import { useState } from "react";

function User() {
    const  [fruit, setFruit] = useState("Apple"); // First: variable & Second: Updated function
    let ChangeFruitName = ()=> {
        setFruit("Mango")
    }
    return (
        <>
           <h1> {fruit}</h1>
           <button onClick={ChangeFruitName}> Change fruit Name</button>
        </>
    )

}

export default User;