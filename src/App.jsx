import SignUp, {Login, Programmer} from './Export';
import User from './User';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
  <>
    <User />
    <SignUp />
    <Login />
    <Programmer></Programmer>
    <h1> I have implement the counter button</h1>
    <button onClick={ () => setCounter(counter + 1)}>Counter: {counter}</button>
  </>
  )
}

export default App;