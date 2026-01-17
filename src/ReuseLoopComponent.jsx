import LoopUser from "./LoopUser";
function ReuseLoopComponent() {
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
    {
      id: 3,
      name: "Vijay",
      email: "vijay@gmail.com",
      mobile: "9518732598",
    },
  ];
  return (
    <div>
      <h2>Make the use of Reusable component</h2>
      {userObj.map((user) => {
        return <div key={user.id}>{<LoopUser data= {user}/>}</div>;
      })}
      
    </div>
  );
}

export default ReuseLoopComponent;
