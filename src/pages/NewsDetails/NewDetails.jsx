import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import RightSideBar from '../../Layout/RightSideBar/RightSideBar';

const NewDetails = () => {
    const newsDetails=useLoaderData();
    console.log(newsDetails)
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4 gap-10'>
                <div className='col-span-3'>
                    <div className='border border-blue-500'>
                        
                        <img className='w-full' src={newsDetails[0]?.image_url} alt="" />
                        <h1 className='font-bold text-xl ml-3 my-5'>{newsDetails[0]?.title}</h1>
                        <p className='my-5 ml-3'>{newsDetails[0]?.details}</p>
                    </div>
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default NewDetails;