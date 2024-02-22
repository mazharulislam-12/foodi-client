import { useEffect, useState } from "react";
import logo from "/logo.png";
import { FaPhoneAlt, FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);


    //handle scroll function
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);

        }
    }, [])


    const navItems = <>
        <li className='font-medium text-lg' href="/" ><a>Home</a></li>
        <li className='font-medium text-lg'>
            <details>
                <summary>Menu</summary>
                <ul className="p-2">
                    <li><a href="/menu">All</a></li>
                    <li><a>Salad</a></li>
                    <li><a>Pizza</a></li>
                </ul>
            </details>
        </li>
        <li className='font-medium text-lg'>
            <details>
                <summary>Service</summary>
                <ul className="p-2">
                    <li><a>Online Order</a></li>
                    <li><a>Table Booking</a></li>
                    <li><a>Order Tracking</a></li>
                </ul>
            </details>
        </li>


        <li className='font-medium text-lg'><a>Offers</a></li>
    </>

    return (
        <header className='max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
            <div className= {`navbar xl:px-24 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`} >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost text-xl">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/*nav item  */}
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end flex gap-4 cursor-pointer">
                    <FaSearch />
                    <FaShoppingCart />
                    <a className="btn bg-green text-white"> <FaPhoneAlt /> Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar