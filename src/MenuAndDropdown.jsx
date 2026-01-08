import { useState } from "react";

function MenuAndDropdown() {
    const [gender, setGender] = useState('female');
    const [city, setCity] = useState('lucknow');

    return (<>
        <h2>Explain menu and dropdown</h2>
        <h2>Select Gender</h2>
        <input type = "radio" onChange = {(event) => setGender(event.target.value) } name = 'gender' id = 'male' value={'male'} checked = {gender=='male'}/>
        <label htmlFor="male">Male</label>
        <input type = "radio" onChange = {(event) => setGender(event.target.value) } name = 'gender' id = 'female' value={'female'} checked = {gender=='female'}/>
        <label htmlFor="female">Female</label>  

        <h2>Selected Gender: {gender}</h2>

        <select onChange = {(event) => setCity(event.target.value) } defaultValue={"lucknow"}>
            <option value={"noida"}>Noida</option>
            <option value={"delhi"}>Delhi</option>
            <option value={"ghaziabad"}>Ghaziabad</option>
            <option value={"lucknow"}>Lucknow</option>
        </select>

        <h2>Selected City: {city}</h2>

    </>)
}

export default MenuAndDropdown;