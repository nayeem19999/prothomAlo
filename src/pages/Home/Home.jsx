import React from 'react';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import LeftSideBar from '../../Layout/leftSideBar/LeftSideBar';
import RightSideBar from '../../Layout/RightSideBar/RightSideBar';
import LatestNews from '../LatestNews/LatestNews';

const Home = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='border border-blue-500'>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='border border-blue-500 col-span-2'>
                    <h1>This section will container mid align of home page</h1>
                </div>
                <div className='border border-blue-500'>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;