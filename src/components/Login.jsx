import React from 'react'
import { useForm } from "react-hook-form"
import {Link} from 'react-router-dom'
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data);
  return (
    <div>
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none"
                onClick={() => document.getElementById("my_modal_3").close()}
                >
                ✕
            </Link>
            </form>
            <h3 className="font-bold text-lg">Login</h3> 
            <div className='mt-5 space-y-1'>
                <span>Email</span>
                <br />
                <input type="email" 
                placeholder='Enter your Email Id'
                className='w-80 outline-none border rounded-md py-1 px-3'
                {...register("email", { required: true })}/>
                <br />
                {errors.email && (<span className='text-sm text-red-400'>This field is required</span>)}

            </div> 
            <div className='mt-2 space-y-1'>
                <span>Password</span>
                <br />
                <input type="password" 
                placeholder='Enter your password'
                className='w-80 outline-none border rounded-md px-3'
                {...register("password", { required: true })}/>
                <br />
                {errors.password && (<span className='text-sm text-red-400'>This field is required</span>)}

            </div>
            <div className='mt-8 space-y-4'>
                <button className='bg-rose-400 text-white rounded-md px-3 y-1 hover:bg-rose-700 duration-300'>Login</button>
                <p>Not Registered? {" "}
                        <Link to={"/signup"} className='underline text-blue-500 cursor-pointer'>  Sign Up
                    </Link>{" "}
                </p>
            </div>
            </div>
        </dialog>

    </div>
  )
}

export default Login
