import React from 'react'

import './style.css';
import logo from './assets/logo.svg';

const NavList = ({ children }) => {
    return (
        <>
            <div className="navbar-container flex justify-between items-start w-full p-5 relative">
                <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-bold leading-6">DEAL</span>
                    <span className="text-lg md:text-2xl">WITH IT</span>
                </div>

                <img src={logo} className="rounded-full w-12 md:w-16 h-12 md:h-16" />
            </div>
        </>
    )
};

export default NavList;