import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QuotesCard = ({ quotetext, authorName }) => {
    return (
        <>
            <div className="quotemaincontainer">
                <div className="quotecontainer container rounded-2xl w-10/12 md:w-6/12 mx-auto mt-20 mb-28 relative flex justify-center items-center">
                    <p className="quotetext text-white text-2xl md:text-4xl italic font-normal px-6 py-20">
                        {quotetext ? quotetext : "An exciting quote to motivate you is in waiting. Pull this card down from top to load it"}
                    </p>

                    <span className="quoteauthor absolute bottom-0 left-0 text-slate-100 text-base md:text-xl font-light p-4">
                        {authorName ? authorName : "Loading soon..."}
                    </span>
                    <FontAwesomeIcon icon={"quote-left"} className="text-4xl md:text-5xl text-white absolute p-4 top-0 left-0" />
                    <FontAwesomeIcon icon={"quote-right"} className="text-4xl md:text-5xl text-white absolute p-4 bottom-0 right-0" />
                </div>
            </div>
        </>
    )
};

export default QuotesCard;