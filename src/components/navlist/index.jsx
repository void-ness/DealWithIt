import React from 'react'

import './style.css';
import logo from './assets/logo.svg';

const NavList = () => {
    return (
        <>
            <div className="navbar-container flex justify-between items-start w-full p-4 fixed top-0 bg-white">
                <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-bold leading-6">DEAL</span>
                    <span className="text-lg md:text-2xl">WITH IT</span>
                </div>

                <img src={logo} className="rounded-full w-12 md:w-16 h-12 md:h-16" />
                <div className="pg-breaker w-full absolute bottom-0 left-0"></div>
            </div>
            <div className="navbar-overlay w-full h-20"></div>
        </>
    )
};

export default NavList;