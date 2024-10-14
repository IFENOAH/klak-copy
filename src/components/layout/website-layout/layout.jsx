import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Footer } from './footer'
import ScrollToTop from '../../controls/scrolltop'
import Aos from 'aos'

export const Layout = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className='text-neutral-200 relative no-scrollbar'>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </div>
    )
}