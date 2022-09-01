import React from 'react'

import './style.css';

const NavList = ({ children }) => {
    return (
        <>
            <div className="navbar-container flex justify-between items-start w-full p-5">
                <div className="flex flex-col">
                    <span className="text-3xl md:text-5xl font-bold leading-6">DEAL</span>
                    <span className="text-lg md:text-2xl">WITH IT</span>
                </div>

                <div className="bg-gradient-to-b from-blue-600 to-blue-400 rounded-full w-12 md:w-16 h-12 md:h-16"></div>
            </div>
        </>
    )
};

export default NavList;