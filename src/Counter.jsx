import { useState } from "react"; // using Hook named useState

const Counter = () => {

    //setCounter: to update this particular value (counter)
    const [counterState, setCounterState] = useState(() => {
        return {counter: 10};
    });

    const [titleState, setTitleState] = useState(() => {
        return {title: "Fun"};
    });
    
    function incrementCounter() {
        setCounterState((prevState) => {
            return {counter: prevState.counter + 1}
        })
    }
    function decrementCounter() {
        setCounterState((prevState) => {
            return {counter: prevState.counter - 1}
        })
    }

    return (
        <div className="col-12 col-md-4 offset-md-4 border text-white">
            <span className="h2 pt-4 m-2 text-white-50">{titleState.title} Counter</span>
            <br/>
            <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button>
            <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
            <br/>
            <span className="h4">
                Counter: &nbsp; <span className="text-warning">{counterState.counter}</span>
            </span>
        </div>
    )
}
export default Counter;