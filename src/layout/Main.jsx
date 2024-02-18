import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import "../App.css"

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <footer>Footer</footer>
        </div>
    );
};

export default Main;