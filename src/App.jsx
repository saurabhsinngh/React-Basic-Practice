import Practice from './Export';
import User from './User';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
  <>
    <User />
    <Practice />
    <h1> I have implement the counter button</h1>
    <button onClick={ () => setCounter(counter + 1)}>Counter: {counter}</button>
  </>
  )
}

export default App;