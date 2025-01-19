import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub,FaFacebook,FaTwitter   } from "react-icons/fa";
import img1 from '../../assets/1.png'
import img2 from '../../assets/images.jpg'
import img3 from '../../assets/2.png'

const RightSideBar = () => {
    return (
        <div>
            <div className='m-4'>
                <button className="btn btn-outline btn-neutral w-full mb-3"><FcGoogle  className='text-2xl'/> Google Login</button>
                <button className="btn btn-outline btn-neutral w-full"><FaGithub  className='text-2xl'/> Google Login</button>
            </div>
            <div className='mt-10'>
                <h1 className='font-semibold ml-5'>Our Social Media</h1>
                <div className='border border-black mt-3 mx-4 rounded-lg'>
                    <div className='border-b border-black'>
                        <h1 className='flex p-3 gap-2 items-center justify-center'><FaFacebook className='text-lg'></FaFacebook>Facebook</h1>
                    </div>
                    <div className='border-b border-black'>
                        <h1 className='flex p-3 gap-2 items-center justify-center'><FaTwitter className='text-lg'></FaTwitter>Twitter</h1>
                    </div>
                    <div className=''>
                        <h1 className='flex p-3 gap-2 items-center justify-center'><FaTwitter className='text-lg'></FaTwitter>Twitter</h1>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-xl font-bold ml-4 mb-4'>Kids News</p>
                <img className='mb-5' src={img1} alt="" />
                <img className='mb-3' src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    );
};

export default RightSideBar;