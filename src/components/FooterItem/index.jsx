import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterItem = ({ icon, link }) => {
    return (
        <>
            <NavLink
                className={({ isActive }) => (
                    isActive ? 'text-slate-50 cursor-default' : 'text-slate-300 cursor-default'
                )}
                to={`/${link}`}
            >
                <FontAwesomeIcon icon={icon} className="text-2xl md:text-3xl" />
            </NavLink>
        </>
    )
};

export default FooterItem;