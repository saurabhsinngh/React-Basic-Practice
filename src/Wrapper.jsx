function Wrapper({children, color = "white"}) {
  return (
    <div style={{ color: color, border:"4px solid green", width: "200px", margin: "10px", }}>
    <h2>Hello guys</h2>
      {children}
    </div>
  );
}

export default Wrapper;
