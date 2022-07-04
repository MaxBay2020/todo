import React, {useEffect, useState} from 'react';
import './navbar.css'
import {Link, useLocation} from "react-router-dom";

const NavBar = () => {

    const location = useLocation()
    const {pathname} = location

    const navbarData = [
        {destination: '/', title: 'Home'},
        {destination: '/todos', title: 'Todos'},
        {destination: '/counter', title: 'Counter'},
        // {destination: '/contact', title: 'Contact'},
    ]

    return (
        <section className='navbar'>
            <ul>
                {
                    navbarData.map((data, index) => (
                        <Link key={index} to={data.destination}><li className={`${pathname === data.destination && 'active'}`}>{data.title}</li></Link>
                    ))
                }

                {/*<Link to="/"><li className={`${pathname === '/' ? 'active' : ''}`}>Home</li></Link>*/}
                {/*<Link to="/todos"><li className={`${pathname === '/todos' ? 'active' : ''}`}>Todos</li></Link>*/}
                {/*<Link to="/counter"><li className={`${pathname === '/counter' ? 'active' : ''} `}>Counter</li></Link>*/}
            </ul>
        </section>
    );
};

export default NavBar;
