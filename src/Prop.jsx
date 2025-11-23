function Prop({userInfo1, userInfo2}) {
    return (
        <>
            <h3>Implement Props1</h3>
            <h3>name: {userInfo1.name}</h3>
            <h3>age: {userInfo1.age}</h3>
            <h3>email: {userInfo1.email}</h3> 

            <hr></hr>

            <h3>Implement Props2</h3>
            <h3>name: {userInfo2.name}</h3>
            <h3>age: {userInfo2.age}</h3>
            <h3>email: {userInfo2.email}</h3>
        </>
    )
}

export default Prop