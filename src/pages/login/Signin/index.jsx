import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isRegistered } from '../../../essentials/auth';

const Signin = () => {
    const [username, SetUsername] = useState(null);
    const [pass, SetPass] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        document.getElementById("landing-page").style.display = "none";

        // if a user is registered, if the user is accesing the content from a desktop
        // in that case, the user is warned if they want to proceed or not
        if (isRegistered({ username, pass })) {
            if (window.matchMedia("(min-width: 750px)").matches) {
                if (localStorage.desktopConfirm !== 'yes') {
                    const confirm = prompt("This application is developed for mobile phone users and not optimised for desktop users. Kindly confirm with 'yes' if you want to continue");
                    if (confirm.trim().toLowerCase() === "yes") {
                        localStorage.setItem('desktopConfirm', 'yes')
                        window.location = "/home";
                    }

                    else {
                        localStorage.setItem('desktopConfirm', 'no');
                    }
                }

                else {
                    window.location = "/home";
                }
            }

            else {
                // logic for phone users
                window.location = "/home";
            }
        }
        else {
            alert("Please enter valid username/password");
        }
    }

    useEffect(() => {
        document.getElementsByTagName('footer')[0].style.display = "none";
    })

    return (
        <div className='login-form-container h-screen w-screen fixed top-0 left-0 bg-white' data-aos="fade">
            <div className="login-form bg-blue-600 w-10/12 mx-auto mt-40 p-4 text-center m-5 rounded-2xl relative">
                <FontAwesomeIcon className='mb-5 mt-5 rounded-full p-7 text-6xl text-white bg-blue-400 border-4 border-blue-100' icon="user" />
                <form onSubmit={onSubmit}>
                    <div className="flex my-7 items-center justify-center">
                        <FontAwesomeIcon icon="user" className='text-white text-xl mr-4' />
                        <input type="text" className="p-1 pl-2 border-0 rounded" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => SetUsername(e.target.value)} />
                    </div>
                    <div className="flex my-7 items-center justify-center">
                        <FontAwesomeIcon icon="lock" className='text-white text-xl mr-4' />
                        <input type="password" className="p-1 pl-2 border-0 rounded" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping" onChange={(e) => SetPass(e.target.value)} />
                    </div>
                    <button type="submit" className="btn login-btn rounded-full m-4 px-6 py-1 bg-white active:bg-slate-200">Login</button>
                </form>

                <p className='no-acc text-white text-lg font-normal absolute bottom-4 left-0 w-full text-center'>Don’t have an account?
                    <NavLink to="/" className="sign-btn font-bold"> Sign Up </NavLink>
                </p>
            </div >
        </div >
    )
};

export default Signin;