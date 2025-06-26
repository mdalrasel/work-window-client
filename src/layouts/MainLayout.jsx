import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <div className='shadow-sm fixed top-0 left-0 z-50 bg-base-200 w-full'>
                <div className='w-11/12 mx-auto '>
                    <Navbar />
                </div>
            </div>
            <div className='min-h-[calc(100vh-580px)] pt-18 w-11/12 mx-auto'>
                <Outlet />
            </div>
            <Footer />

        </div>
    );
};

export default MainLayout;