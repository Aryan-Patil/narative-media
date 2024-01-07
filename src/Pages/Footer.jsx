import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className="heading_02">
                Narative Media
            </div>
            <div className="footer-flex">
                <a target='blank' className=' footer-hover footer-hover' href="mailto:visualvibeteam@gmail.com"><IoIosMail  /></a>
                <a target='blank' className='footer-hover footer-icons' href="https://instagram.com/narative.media?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram  /></a>
                <a target='blank' className='footer-hover footer-icons' aria-label="Chat on WhatsApp" href="https://wa.me/919029609279"> <FaWhatsapp /></a>

                
                
                
            </div>
        </div>
    );
};

export default Footer;