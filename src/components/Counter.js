import React, {useEffect, useState} from 'react';
import './counter.css'

const Counter = () => {
    let name = 'max'

    const [count, setCount] = useState(0);

    const addition = () => {
        let newCount = count + 1
        setCount(newCount)
    }

    const deduction = () => {
        let newCount = count - 1
        setCount(newCount)
    }

    useEffect(() => {
        console.log('我是useEffect')
    }, []);


    return (
        <>
            <h1>counter</h1>
            <section className='counter'>
                <button onClick={deduction}>-</button>
                <span>{count}</span>
                <button onClick={()=>addition()}>+</button>
            </section>
            <h2>{name}</h2>
        </>
    );
};

export default Counter;
