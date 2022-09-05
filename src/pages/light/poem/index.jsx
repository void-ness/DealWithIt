import React from 'react'

const Poem = () => {
    return (
        <>
            <div className="poem-container mt-10 bg-blue-100 w-10/12 mx-auto py-4 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 px-3 pt-2">Deal With It?</h2>
                <p className="poem-text text-left text-2xl font-light px-3">
                    Whenever you feel low, <br />
                    feel demotivated, <br />
                    The only way it shall <br />
                    pass is when you <br />
                    <b>Deal with It</b> <br /><br />

                    Take help, <br />
                    share your pain, <br />
                    Fall off once, <br />
                    Stand back twice <br />
                    but <br />
                    <b>Deal with It</b>
                </p>
            </div>
        </>
    )
};

export default Poem;