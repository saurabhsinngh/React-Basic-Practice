let LoopUser = ({data})=> {
    return (<div style={{border: "2px solid green", width: "500px", padding: "10px", marginBottom: "10px"}}>
        <h3>Id: {data.id}</h3>
        <h3>Name: {data.name}</h3>
        <h3>Mobile: {data.mobile}</h3>
        <h3>Email: {data.email}</h3>
    </div>)
}

export default LoopUser;