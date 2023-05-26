import React from 'react';

import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

const MainBody = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='md:min-h-[calc(100vh-181px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainBody;