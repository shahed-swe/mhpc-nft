import MHPC_LOGO from '@/public/logo.png'
import Image from 'next/image'

export const Navbar = () => {
    return (
        <>
            <div className="mhpc_logo">
                <a href="">
                    <Image src={MHPC_LOGO.src} alt="" height={80} width={111}/>
                </a>
            </div>
            <div className='mhpc_nav' id='centered_nav'>
                <a href="#home" title='About'>ABOUT</a>
                <a href="#home" title='Road Map'>ROADMAP</a>
                <a href="#home" title='Team'>Team</a>
                <a href="#home" title='Contactus'>CONTACT US</a>
            </div>
            <div className='mhpc_nav' id="ending_nav">
                
            </div>
        </>
    )
}