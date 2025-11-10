function Alert() {
    return (
        <>
            <h1>New Alert</h1>
            <button onClick = { () => alert("New alert generated") }> Generate Alert </button>
        </>
    )
}

export default Alert;