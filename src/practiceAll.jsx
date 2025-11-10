function PracticeAll() {
    let name = '';
    let a = 8;
    let b = 6;

    let array = ['Vijay', 'Saurabh', 'Ajay'];
    let userObj = {
        "name": "Saurabh Singh",
        "email": "saurabh@gmail.com",
        "age": 32
    }

    function Sum(a, b){
        return a + b
    }

    function Opereation(a, b, op) {
        if(op == "+") {
            return a + b;
        } else if(op == "-") {
            return a - b;
        } else {
            return a*b
        }
    }
    return (
        <>
            <div> Sum of a + b is: {a+b}</div>
            <div> Name is: { name ? name : "Please enter the valid name" }</div>
            <div> Array is: { array[1] }</div>
            <div> Object key is: {userObj.email}</div>
            <div> Function Call: {Sum(4,8)}</div>
            <div> Operational Data: { Opereation(a, b, "-") } </div>
        </>
    )
}

export default PracticeAll;