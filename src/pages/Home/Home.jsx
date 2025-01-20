import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideBar from '../../Layout/leftSideBar/LeftSideBar';
import RightSideBar from '../../Layout/RightSideBar/RightSideBar';
import LatestNews from '../LatestNews/LatestNews';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className=''>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className=' col-span-2'>
                    <Outlet></Outlet>
                </div>
                <div className=''>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;