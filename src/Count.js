import { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const incrementValue = () => {
        setCount(count + 1)
    }
    const decrementValue = () => {
        setCount(count - 1)
    }
    return (
        <div className='counter'>
        <button onClick={decrementValue}>Decrement (-)</button>
        {/* <p>{count + 5} </p> */}
        <p>{count} </p>
        <button onClick={incrementValue}>Increment (+)</button>
        <br/>
        </div>
    )
}

export default Count;