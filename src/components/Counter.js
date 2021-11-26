import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { counterActions } from '../store/counter';

const Counter = () => {
    const dispatch = useDispatch();
    const show = useSelector(state => state.counter.showCounter)
    const counterValue = useSelector(state => state.counter.counter)
const increClick = () =>{
    dispatch(counterActions.increment(10));
}

const toggleClick = () =>{
    dispatch(counterActions.toggleCounter());
}

return (
    <React.Fragment>
        {show && <h2>{counterValue}</h2>}
    <button onClick={increClick}>Increment</button>
    <button onClick={toggleClick}>Toggle</button>
    </React.Fragment>
);
};

export default Counter;