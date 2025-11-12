// Here is the use of variable but data not change when press (Press Me Chnage Name) button because here name is the variable not
//  re-render the component to display the update content on the U.I So for autotmatic rendering use Hooks. jiske Aage use likha ho uska mtlb useState hota hai, like useSate

import { useState } from "react";

// function Hook() {
//     let name = "Saurabh";
//     let changeName = () => {
//         name = "Suraj"
//         console.log("name:", name);
//     }
//     return (
//         <>
//            <h1>{name}</h1>
//            <button onClick={changeName}>Press Me Chnage Name</button>
//         </>
//     )
// }

function Hook() {
    const [name, setName] = useState("Saurabh")
    // [name, setName] Here first name is variable and second setName is the function.
    let changeName = () => {
        setName("Ajay")
    }
    return (
        <>
           <h1>{name}</h1>
           <button onClick={changeName}>Press Me Chnage Name</button>
        </>
    )
}

// Note here useState Hook is used so hook is the re-render the component automatically whn its data is change.

export default Hook;