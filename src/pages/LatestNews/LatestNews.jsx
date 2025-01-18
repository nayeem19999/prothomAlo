import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='py-4 border border-black bg-gray-200'>
            <Marquee pauseOnHover={true} speed={100}>As of January 2025, the U.S. is focusing on advanced AI regulations to balance innovation and security.</Marquee>
        </div>
    );
};

export default LatestNews;