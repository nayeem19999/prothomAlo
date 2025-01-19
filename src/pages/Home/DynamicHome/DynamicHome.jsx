import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { Link, useLoaderData, useLocation } from 'react-router-dom';

const DynamicHome = () => {
    const categories = useLoaderData()
    const location  = useLocation()
        console.log(location.pathname)
    console.log(categories)
    return (
        <div className='h-[1500px] overflow-scroll'>
            {
                categories.map((news,index)=><div key={index} className='mb-10'>
                    <div>
                        <div className='flex gap-2 items-center justify-between px-3 bg-gray-200'>
                           <div className='flex gap-2 py-3'>
                           <img className='h-14 w-14 rounded-full' src={news.author.img} alt="" />
                            <div>
                                <p>{news.author.name ? news.author.name: "Unknown"}</p>
                                <p>{news.author.published_date ? news.author.published_date:"no posted Date"}</p>
                            </div>
                           </div>
                            <div className='flex items-center'>
                                <CiBookmark className='text-2xl'></CiBookmark>
                                <CiShare2  className='text-2xl'></CiShare2>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold mx-5 mt-3'>{news.title}</p>
                            <img src={news.image_url} alt="" />
                            <div className='mx-3 my-3'>{(news.details).slice(0,300)}...<span className='text-red-600'><Link to={`news/${news._id}`}>Read More</Link></span></div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default DynamicHome;