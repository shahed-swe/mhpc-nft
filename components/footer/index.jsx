import { BsTwitter } from 'react-icons/bs'
import { FaDiscord, FaInstagram } from 'react-icons/fa'

const Footer = () => {


    return (
        <div className="footer-section">
            <footer>
                <div className="row primary">
                    <div className="column about">

                        <h3>MHPC Meta LLC</h3>

                        <p>
                            Copyright © 2022 MHPC
                        </p>
                        <p>
                            All rights reserved
                        </p>

                        <div className="social">
                            <div>
                                <FaInstagram className='icons'/>
                            </div>
                            <div>
                                <BsTwitter className='icons'/>
                            </div>
                            <div>
                                <FaDiscord className='icons'/>
                            </div>
                        </div>
                    </div>

                    <div className="column links">
                        <h3>Company</h3>
                        <ul>
                            <li>
                                <a href="#aboutus">About us</a>
                            </li>
                            <li>
                                <a href="#blog">Blog</a>
                            </li>
                            <li>
                                <a href="#contactus">Contact Us</a>
                            </li>
                            <li>
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="#testimonials">Testimonials</a>
                            </li>
                        </ul>

                    </div>


                    <div className="column links">
                        <h3>Support</h3>
                        <ul>
                            <li>
                                <a href="#help">Help Center</a>
                            </li>
                            <li>
                                <a href="#terms">Terms and Service</a>
                            </li>
                            <li>
                                <a href="#legal">Legal</a>
                            </li>
                            <li>
                                <a href="#privacy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#status">status</a>
                            </li>
                        </ul>
                    </div>

                    <div className="column subscribe">
                        <h3>Stay up to date</h3>
                        <div>
                            <input type="email" className="search" placeholder="Your email address" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        
    )
}


export default Footer