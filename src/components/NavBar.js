import React from 'react';
import './navbar.css'

const NavBar = () => {
    let count = 0
    for (let i = 0; i < 10; i++) {
        count++
    }

    return (
        <section className='navbar'>
            <h1>JSX语法</h1>
            <h2>123</h2>
            <h1>Count: <span>{count}</span></h1>
        </section>
    );
};

export default NavBar;
