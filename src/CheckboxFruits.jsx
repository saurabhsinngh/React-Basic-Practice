import { useState } from "react";

function CheckboxFruits() {
    const [fruits, setFruits] = useState([]);
    let updateFruit = (event) => {
        console.log(event.target.value, event.target.checked);
        if(event.target.checked) {
            setFruits([...fruits, event.target.value])
        } else {
            setFruits([...fruits.filter((data) => data != event.target.value)])
        }
    }

    return (<>
        <h2>Fruits Name</h2>
        <input onChange = {updateFruit} type="checkbox" id="apple" value="apple"/> 
        <label htmlFor="apple">APPLE</label><br /> <br />

        <input onChange = {updateFruit} type="checkbox" id = "mango" value="apple"/> 
        <label htmlFor="mango">MANGO</label><br /> <br />

        <input onChange = {updateFruit} type="checkbox" id = "grapes" value="apple"/> 
        <label htmlFor="grapes">GRAPES</label><br /> <br />

        <h2>{fruits.toString()}</h2>
    </>)
}

export default CheckboxFruits;
