import React from 'react';
import { NavLink } from 'react-router-dom';
import './Category.css'

const Category = ({category}) => {
    return (
        <div className='bg-gray-300 py-5'>
            <div className='' style={{}}>
            <NavLink to={`/news/${category.category_id}`}>{category.category_name }</NavLink>
            </div>
        </div>
    );
};

export default Category;