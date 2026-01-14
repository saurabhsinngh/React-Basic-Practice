function Loop() {
  let userObj = [
    {
      id: 1,
      name: "Saurabh",
      email: "saurabh@gmail.com",
      mobile: "7518732597",
    },
    {
      id: 2,
      name: "Sagun",
      email: "sagun@gmail.com",
      mobile: "7518732598",
    },
  ];

  return (
    <>
      <h2>Implement Loops in JSX</h2>
      <h2>Using Loops</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
          </tr>
        </thead>
        <tbody>
          {userObj.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Dummy Data</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{1}</td>
            <td>{"Gaurav"}</td>
            <td>{"gaurav@gmail.com"}</td>
            <td>{"7008732597"}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{2}</td>
            <td>{"Onkar"}</td>
            <td>{"onkar@gmail.com"}</td>
            <td>{"8918732567"}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{3}</td>
            <td>{"Mithlesh"}</td>
            <td>{"mithlesh@gmail.com"}</td>
            <td>{"9618732567"}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Loop;
