import React, { Component } from 'react';

const NavBar =({totalCounter})=>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a class = "navar-brand" href='#'>
                Counter 
                <span className='badge badge-pill badge-secondary m-2'>
                    {totalCounter}
                </span>
            </a>
        </nav>
    )
}



 
export default NavBar;