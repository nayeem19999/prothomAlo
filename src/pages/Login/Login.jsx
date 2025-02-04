import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const {login} = useContext(authContext)
    const handleSubmit=e=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        login(email,password)
        .then(result=>{
        
            console.log(result.user)
        })
        .catch(err=>console.log(err.message))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero ">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            
                        </div>
                        <div className="md:w-[700px] bg-base-100 border shadow-2xl p-10">
                            <form className="card-body" onSubmit={handleSubmit}>
                                <div className="form-control"> 
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">Login</button>
                                </div>
                                <p className='text-center mt-3'>New To this website? please <Link to='/register'><span className='text-blue-700'>Register</span></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;