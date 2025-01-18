import React from 'react';
import { FcGoogle } from "react-icons/fc";

const RightSideBar = () => {
    return (
        <div >
            <div className='m-4'>
                <button className="btn btn-outline btn-warning w-full"><FcGoogle  className='h-10'/> Google Login</button>
            </div>
        </div>
    );
};

export default RightSideBar;