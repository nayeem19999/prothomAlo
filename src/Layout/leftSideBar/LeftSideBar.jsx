import React, { useEffect, useState } from 'react';
import Category from './Categories/Category/Category';
import playerImg from '../../assets/3.webp'
import { CiCalendarDate } from "react-icons/ci";

const LeftSideBar = () => {

    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://authentication-project-one.vercel.app/news/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <div>
                <p className='border-b border-black p-4 bg-gray-200'>All Categories</p>
            </div>
            <div>
                {
                    categories.map(category=><Category category={category} key={category.category_id}></Category>)
                }
            </div>
            <div className='mt-10'>
                <p className='font-bold text-xl ml-4'>Latest News</p>
                <div className='mt-5 px-4'>
                    <img className=' rounded-xl' src={playerImg} alt="" />
                    <p className='text-lg font-bold'>Predicted Result: The team choosing to bat first will.</p>

                    <div className='flex justify-between mt-3'>
                        <p>Sports</p>
                        <p className='flex items-center gap-2'><CiCalendarDate className='text-xl'></CiCalendarDate>January 18, 2025</p>
                    </div>
                </div>
                <div className='mt-5 px-4'>
                    <img className=' rounded-xl' src={playerImg} alt="" />
                    <p className='text-lg font-bold'>Predicted Result: The team choosing to bat first will.</p>

                    <div className='flex justify-between mt-3'>
                        <p>Sports</p>
                        <p className='flex items-center gap-2'><CiCalendarDate className='text-xl'></CiCalendarDate>January 18, 2025</p>
                    </div>
                </div>
                <div className='mt-5 px-4'>
                    <img className=' rounded-xl' src={playerImg} alt="" />
                    <p className='text-lg font-bold'>Predicted Result: The team choosing to bat first will.</p>

                    <div className='flex justify-between mt-3'>
                        <p>Sports</p>
                        <p className='flex items-center gap-2'><CiCalendarDate className='text-xl'></CiCalendarDate>January 18, 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;