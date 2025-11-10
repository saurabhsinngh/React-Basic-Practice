import Practice from './Export';
import Alert from './Alert';
import User from './User';
import { useState } from 'react';
import Test1 from './test1';
// If not a default export so when import it should be inside {} if default export at the time of import it will be without {}
import { userInfo } from './Export';  

function App() {
  const [counter, setCounter] = useState(0);
  return (
  <>
    <Test1 />
    <Alert />
    <h1> Try to: {userInfo}</h1>

    <h1> I have implement the counter button</h1>
    <button onClick={ () => setCounter(counter + 1)}>Counter: {counter}</button>
  </>
  )
}

export default App;