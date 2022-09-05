import React from 'react'

const Resources = ({ children }) => {
    return (
        <>
            <div className="resources-container w-10/12 mx-auto mt-24 flex flex-col">
                <span className='text-2xl font-bold mb-3'>
                    Resources
                </span>
                <ul>
                    {children}
                </ul>
            </div>
        </>
    )
};

export default Resources;