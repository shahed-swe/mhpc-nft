import MHPC_LOGO from '@/public/logo.png'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Navbar = () => {

    function changeNav() {
        var x = document.getElementById("centered_nav");
        if (x.className === "rc_nav") {
            x.className += " responsive";
        } else {
            x.className = "rc_nav";
        }

        var y = document.getElementById("right_nav");
        if(y.className === 'rc_nav_right'){
            y.className += " response";
        }else{
            y.className = "rc_nav_right"
        }
    }


    return (
        <>
            <div id="rc_logo">
                <Image src={Logo} height={80} width={111} alt={"logo"}/>
            </div>

            <div className="rc_nav" id="centered_nav">
                <a href="#home" title="Home">ABOUT</a>
                <a href="#services" title="Services">ROADMAP</a>
                <a href="#about" title="About">TEAM</a>
                <a href="#contact" title="Contact">CONTACT US</a>
                <a href="#lego" title="Menu" style={{ fontSize: "18px"}} className="icon" onClick={() => changeNav()}>&#9776;</a>
                
            </div>

            <div className='rc_nav_right' id="right_nav">
                <a href="#" title="discord"><FaDiscord className='discord' /></a>
                <a href="#"><FaInstagram className='insta' /></a>
                
                <a href="#"> <FaTwitter className='twitter' /></a>
                <a href="#"><button className='wallet-button'>Wallet</button></a>
                
            </div>
        </>
    )
}