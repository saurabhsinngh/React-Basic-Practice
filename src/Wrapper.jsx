function Wrapper({colour = "green", children}) {
  return (
    <>
      <div style={{color : colour, border: "4px solid yellow", padding: "20px"}}>
      {children ? children: <div>Hii Guys!!</div>}</div>
    </>
  )

}

export default Wrapper;