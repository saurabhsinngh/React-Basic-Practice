// In onClick we need to pass the function definition no need to call the function.
// Function definition means entire function and function call means call the function like Gun()
//     "react": "^19.1.0", 1st (19) means major update, (1) minor releas (1)patch means to fix small bugs

function Table() {
  function CallMe() {
    return alert("Hello Guys!");
  }
  return (
    <div>
      <h1>Pass the function instead of calling it</h1>
      <button onClick={CallMe}>Press Me</button>
    </div>
  );
}

export default Table;
