import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer grid grid-cols-4 items-center p-10 bg-base-200 text-base-content mt-12">
                <div className='ml-8'>
                    <img src="/logo.png" alt="" />
                    <p>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
                </div>
                <nav>
                    <h6 className="footer-title ">Useful links</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Events</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Main Menu</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Offers</a>
                    <a className="link link-hover">Menus</a>
                    <a className="link link-hover">Reservation</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">example@email.com</a>
                    <a className="link link-hover">+64 958 248 966</a>
                    <a className="link link-hover">Social media</a>
                </nav>
            </footer>

            <div className='flex items-center gap-[400px] my-4'>
                <div className='flex items-center gap-6 text-2xl ml-12 cursor-pointer '>
                    <FaFacebook></FaFacebook>
                    <FaInstagram></FaInstagram>
                    <FaTwitter></FaTwitter>
                    <FaYoutube></FaYoutube>
                </div>
                <div className='items-center'><span className='text-red'>Copyright &copy; 2023 Dscode | All rights reserved</span></div>
            </div>
        </div>
    );
};

export default Footer;