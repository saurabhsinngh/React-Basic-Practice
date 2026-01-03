import Practice from './Export';
import Alert from './Alert';
import { useState } from 'react';
import Test1 from './test1';
// If not a default export so when import it should be inside {} if default export at the time of import it will be without {}
//import { userInfo } from './Export'; 
import PracticeAll  from './practiceAll';
import Table from './FunctionCall';
import User from './UseState';
import Hook from './Hook';
import Toggle from './Toggle';
import MultipleCondition from './multipleCondition';
import Counter from './Counter';
import Prop from './Prop';
import School from './School';
import DefaultProps from './DefaultProps';
import Wrapper from './Wrapper';
import InputField from './InputField'
import ControllerComponent from './ControllerComponent'

function App() {
  const [counter, setCounter] = useState(0);

  let userObj1 = {
    name : "Suraj Singh",
    age : 36,
    email : "suraj@gmail.com"
  }

  let userObj2 = {
    name : "Jasdeep Singh",
    age : 34,
    email : "jasdeep@gmail.com"
  }

  let school = ["IIT", "MNIT", "IIIT"];
  const [name, setName] = useState("Vinay");
  
  return (
  <> 
    <ControllerComponent />
    <br />
    <InputField />
    <br />
    
    <Wrapper colour = "blue">Gaurav Singh </Wrapper>
    <br />
    <Wrapper />

    <DefaultProps name = "Saurabh"/>
    <DefaultProps/>
    {name}
    <hr></hr>
    <button onClick={()=> setName(name === "Saurabh" ? "Vinay" : "Saurabh")}>Change Name</button>

    <School schoolName = {school[0]}/>
    <School schoolName = {school[1]}/>

    <Prop userInfo1 = {userObj1} userInfo2 = {userObj2} />
    <Counter />
    <MultipleCondition />
    <Toggle />
    <Hook />
    <User />
    <Table />
    <PracticeAll />
    <br></br>
    <Practice />
    {/* <Test1 /> */}
    <Alert />
    {/* <h1> Try to: {userInfo}</h1> */}

    <h1> I have implement the counter button: {counter}</h1>
    <button onClick={ () => setCounter(counter + 1)}>Counter: {counter}</button>
  </>
  )
}

export default App;