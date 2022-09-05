import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './style.css';

function Card() {
    return (
        <>
            <div className="help-card w-10/12 mx-auto shadow-lg shadow-slate-400 rounded-3xl mt-11 py-5 px-6 text-white">
                <FontAwesomeIcon icon="hand-holding-heart" className='text-3xl mr-5' />
                <span className="card-text text-2xl">You are not alone</span>
            </div>
        </>
    )
};

export default Card;