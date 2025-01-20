import React, { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import userProfile from '../../assets/userProfile.png'
import { authContext } from '../../Providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
    const location = useLocation()
    // console.log(location)
    const {user,logout} = useContext(authContext)

    const handleLogout=()=>{
        logout()
        .then(()=>{
            toast('logout done')
        })
        .catch(err=>console.log(err.message))
    }
    

    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div className={`${(location.pathname === '/login' || location.pathname === '/register') ? 'my-0':'my-10'}`}>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLink}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-2'>
                        {
                            user?<div className='flex gap-3'>
                                <img className='h-12 w-12 rounded-full' src={user.photoURL} alt="" />
                                <button className="btn btn-neutral px-9" onClick={handleLogout}>logout</button>
                            </div>:<div className='flex gap-3'>
                            <img className='h-12' src={userProfile} alt="" />
                            <Link to='/login'><button className="btn btn-neutral px-9">Login</button></Link>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;