import React from 'react'
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TaskCard = ({ quotetext, authorName }) => {
    return (
        <>
            <div className="quotemaincontainer">
                <div className="quotecontainer container rounded-2xl w-10/12 md:w-6/12 mx-auto mt-12 relative flex justify-center items-center">
                    <p className="quotetext text-white text-2xl md:text-4xl italic font-normal px-6 py-20">
                        {quotetext ? quotetext : "Many roads lead to the path, but basically there are only two: reason and practice."}
                    </p>

                    <span className="quoteauthor absolute bottom-0 left-0 text-slate-100 text-base md:text-xl font-light p-4">
                        {authorName ? authorName : "Bodhidharma"}
                    </span>
                    <FontAwesomeIcon icon={"quote-left"} className="text-4xl md:text-5xl text-white absolute p-4 top-0 left-0" />
                    <FontAwesomeIcon icon={"quote-right"} className="text-4xl md:text-5xl text-white absolute p-4 bottom-0 right-0" />
                </div>
            </div>
        </>
    )
};

export default TaskCard;