import React from 'react';
import logo from '../../assets/prothomAlo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='h-36 mx-auto' src={logo} alt="" />
            <p className='font-semibold text-xl '>This is prothom alo website</p>
            <p>{moment().format('MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;