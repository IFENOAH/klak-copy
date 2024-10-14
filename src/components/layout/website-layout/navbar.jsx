
import React, { useEffect, useState } from 'react'
import { Button } from '../../forms/button/button'
import { NavLogo } from '../../../assets/generatedicons/generated'
import { NAVLINKS } from '../../constants/navlinks'
import { NavItem } from '../../controls/navbar/navitem'
import { Link, useNavigate } from 'react-router-dom'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import * as Icon from 'react-feather'

export const Navbar = () => {

    let isMonitor = useMediaQuery("(min-width: 1024px)");
    const navigate = useNavigate();
    const [toggleMenu, setToggleMenu] = useState(false);

    const navigateToRoute = (link) => {
        document.body.style.overflow = 'auto';
        setToggleMenu(false)
        if (!link) return;
        navigate(`/${link}`)
    }

    const handleToggle = () => {
        setToggleMenu(prev => !prev)
        document.body.style.overflow = toggleMenu ? 'auto' : 'hidden';
    }

    useEffect(() => {
        if (isMonitor) {
            setToggleMenu(false)
            document.body.style.overflow = 'auto';
        }
    }, [isMonitor])

    return (
        <header id='nav' className='w-full bg-white sticky top-0 z-20 border-b border-[#F0F0F0] flex items-center justify-center'>
            <nav className='w-full flex items-center justify-between px-7 lg:px-28 py-3.5 max-w-screen-2xl relative'>
                <Link to={"/"} className='flex'>
                    <NavLogo />
                </Link>
                <div
                    className={`
                        w-full absolute left-0
                        ${toggleMenu ? 'top-[-0%] bg-white overflow-y-auto py-7 border-b h-dvh' : 'top-[-800%]'}
                        px-7 gap-8 flex flex-col 
                        lg:w-auto lg:static lg:flex-row lg:items-center lg:justify-between
                        transition-all ease-in-out duration-700
                    `}
                >
                    <ul className='flex flex-col lg:flex-row items-start gap-7 justify-between text-sm text-neutral-200'>
                        {
                            NAVLINKS.map((link) => (
                                <NavItem
                                    key={link.id}
                                    title={link.title}
                                    children={link.children}
                                    childrenTitle={link.childrenTitle}
                                    link={link.link}
                                    onClick={(route) => navigateToRoute(route)}
                                />
                            ))
                        }
                    </ul>

                    <div className={`flex lg:hidden flex-row gap-4 items-start`}>
                        <Button
                            onClick={() => {
                                window.open('https://app.useKlak.com/login', '_blank', 'noopener,noreferrer');
                                setToggleMenu(false)
                                document.body.style.overflow = toggleMenu ? 'auto' : 'hidden';
                            }}
                            variant='default'
                            className="border-[#DFDFDF] text-[#4D4D4D] hover:text-white !text-sm"
                        >
                            Login
                        </Button>

                        <Button
                            onClick={() => {
                                navigate('/book-a-demo');
                                setToggleMenu(false)
                                document.body.style.overflow = toggleMenu ? 'auto' : 'hidden';
                            }}
                            className="!text-sm">
                            Book a Demo
                        </Button>
                    </div>
                </div>

                <div className={`hidden lg:flex flex-col lg:flex-row gap-4 items-start`}>
                    <Button
                        onClick={() => {
                            window.open('https://app.useKlak.com/login', '_blank', 'noopener,noreferrer');
                            setToggleMenu(false)
                            // document.body.style.overflow = toggleMenu ? 'auto' : 'hidden';
                        }}
                        variant='default'
                        className="!border-[#DFDFDF] !text-[#4D4D4D] hover:!text-white !py-2.5 !px-4 !text-sm"
                    >
                        Login
                    </Button>

                    <Button
                        onClick={() => {
                            navigate('/book-a-demo');
                            setToggleMenu(false)
                            // document.body.style.overflow = toggleMenu ? 'auto' : 'hidden';
                        }}
                        className="!py-2.5 !px-4 !text-sm">
                        Book a Demo
                    </Button>
                </div>

                <div className='flex lg:hidden z-10'>
                    {
                        !toggleMenu ?
                            <Icon.Menu className='text-primary-200 cursor-pointer' onClick={handleToggle} />
                            :
                            <Icon.X className='text-primary-200 cursor-pointer' onClick={handleToggle} />
                    }
                </div>
            </nav>
        </header>
    )
}
