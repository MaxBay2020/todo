import React, {useEffect, useState} from 'react';
import './counter.css'
import { useNavigate } from 'react-router-dom'

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

    }, []);

    const navigate = useNavigate()

    const goHome = () => {
        navigate('/')
    }

    return (
        <>
            <h1>counter</h1>
            <section className='counter'>
                <button onClick={deduction}>-</button>
                <span>{count}</span>
                <button onClick={()=>addition()}>+</button>
            </section>
            <h2>{name}</h2>
            <button onClick={()=>goHome()}>Go Back to Home Page</button>
        </>
    );
};

export default Counter;
