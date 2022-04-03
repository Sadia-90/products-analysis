import React from 'react';
import "./Navber.css";
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <nav className='navber-section'>
            <div className='name-section'>
            <h1>NAVBER</h1>
            </div>

           <div className='link-container'>
            <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='Home'>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='Reviews'>Reviews</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='Dasboard'>Dasboard</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='Blogs'>Blogs</NavLink>
            <NavLink className={({isActive}) => isActive ? "active-link" : "link"} to='About'>About</NavLink>
           </div>

        </nav>
    );
};

export default Navber;