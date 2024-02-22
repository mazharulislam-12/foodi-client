import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import "../App.css"
import Footer from '../component/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;