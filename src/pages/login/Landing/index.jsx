import './style.css';
import logo from './assets/logo.svg';

const Landing = () => {
    function screensplash() {
        setTimeout(() => {
            document.getElementById("landing-page").style.opacity = "0";
            document.getElementById("landing-page").style.zIndex = "-1";
        }, 4000);
    }

    screensplash();
    return (
        <>
            <div className="landingpage_container bg-white fixed w-screen h-screen top-0 left-0 flex flex-col justify-center items-center" id="landing-page">
                <img src={logo} alt="" className="landingpage_logo mb-10 mt-0 w-72" data-aos="zoom-in-up" data-aos-duration="1500" />
                <div className="landingpage_text flex flex-col" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000">
                    <span className="text-6xl md:text-5xl font-bold leading-10 pb-1 text-blue-500">DEAL</span>
                    <span className="text-4xl md:text-2xl leading-tight text-blue-400">WITH IT</span>
                </div>
            </div>
        </>
    )
};

export default Landing;