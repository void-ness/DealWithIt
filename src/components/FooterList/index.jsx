import React from 'react'
import FooterItem from '../FooterItem';
import './style.css';

const FooterList = () => {
    return (
        <>
            <footer className='w-full fixed bottom-0 md:top-0 mb-5 md:mb-0 md:pt-6'>
                <div className="footer-container w-72 md:w-3/5 mx-auto rounded-3xl flex justify-around items-center px-4 py-3">
                    <FooterItem icon={"clipboard-check"} link={"tasks"} />
                    <FooterItem icon={"home"} link={""} />
                    <FooterItem icon={"lightbulb"} link={"bulb"} />
                </div>
            </footer>
        </>
    )
};

export default FooterList;