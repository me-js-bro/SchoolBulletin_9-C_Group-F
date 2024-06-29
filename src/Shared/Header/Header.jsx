import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"
import { HiX } from "react-icons/hi";
import { LuBarChart } from "react-icons/lu";

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='flex lg:hidden justify-evenly items-center absolute top-5 left-14'>
                    <NavLink to="/">
                    <img src="https://lh3.googleusercontent.com/knRIplyLueAWo_lsI60T_d6DND8Gzqhyk0NL20KJNiPT3O5Ps7i9d8sOcWDgHWJ1lQiCznvnYF5axGL45XqLAaQ=w16383" alt="logo" className='w-14 mr-4' /> </NavLink>
                    <h3>School Bulletin- 9C Grp F</h3>
                </div>
            <nav className='flex flex-col items-center w-[100%] pl-10 pr-10 pt-5 pb-20 mb-0 navbar lg:hidden sticky top-0 ease-in-out duration-[0.2s] z-50'>

                {/* hamburger menu*/}
                <div className='absolute top-5 right-5 text-5xl text-gray-500 lg:hidden z-20 rotate-[270deg] text-mainFont'>
                    {
                        open ? <HiX onClick={() => setOpen(!open)} /> : <LuBarChart onClick={() => setOpen(!open)} />
                    }
                </div>

                    {/* nav bar for mobile */}
                <div className={`nav-links flex flex-col justify-between items-center w-[100%] h-auto pt-5 backdrop-blur-lg absolute top-0 ${open ? 'top-0 pb-10 shadow-md' : 'top-[-200px]'} text-mainFont`}>

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer}' to="/">Home</NavLink>

                    {/* <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/about">About</NavLink> */}

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/activities">Recent Activities</NavLink>

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/projects">School Project</NavLink>

                    {/* <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/blog">Blog</NavLink> */}

                    <NavLink className='ml-5 mr-5 uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/about">Abour Us</NavLink>
                </div>
            </nav>

                    {/* nav bar for pc */}
                <div className='lg:flex hidden justify-between px-10 py-5 bg-gray-200 sticky top-0 z-50'>
                <div className='hidden lg:flex justify-evenly items-center'>
                    <img src="https://lh3.googleusercontent.com/knRIplyLueAWo_lsI60T_d6DND8Gzqhyk0NL20KJNiPT3O5Ps7i9d8sOcWDgHWJ1lQiCznvnYF5axGL45XqLAaQ=w16383" alt="logo" className='w-14 mr-4' />
                    <h3>School Bulletin- 9C Grp F</h3>
                </div>
                <nav className='hidden lg:flex flex-row justify-between items-center pl-10 pr-10 pt-5 pb-5 mb-0 navbar sticky top-0 backdrop-blur-md text-mainFont z-50'>

                    <div className='nav-links'>
                            <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/">Home</NavLink>
                            {/* <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/about">About</NavLink> */}
                            <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/activities">Recent Activities</NavLink>
                            <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/projects">School Project</NavLink>
                            {/* <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/blog">Blog</NavLink> */}
                            <NavLink className='ml-[30px] mr-[30px] uppercase tracking-wide text-[18px] font-bold text-gray-500 hover:text-gray-600 cursor-pointer' to="/about">About us</NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;