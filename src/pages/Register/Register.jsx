import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';


const Register = () => {
    const {createUser} = useContext(authContext)
    const handleSubmit =e=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const image = form.get("photoUrl")
        const email = form.get("email")
        const password = form.get("password")
        console.log(name,image,email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            updateProfile(result.user,{
                displayName:name,
                photoURL:image
            })
            .then(()=>{
                console.log('user updated')
                toast("Registration Done!!!!!!!")
            })
            .catch(err=>console.log(err.message))
        })
        .catch(err=>console.log(err.message))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Register Now!</h1>
                            
                        </div>
                        <div className="md:w-[700px] bg-base-100 border shadow-2xl p-10">
                            <form className="card-body" onSubmit={handleSubmit}>
                                <div className="form-control"> 
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" name='name' required />
                                </div>
                                <div className="form-control"> 
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" placeholder="Image link" name='photoUrl' className="input input-bordered" required />
                                </div>
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
                                    <button className="btn btn-neutral">Register</button>
                                </div>
                                <p className='text-center mt-3'>Already have an account? please <Link to='/login'><span className='text-blue-700'>Login</span></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;