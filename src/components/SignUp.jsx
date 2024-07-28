import React from 'react'
import Login from './Login'
import { useForm } from "react-hook-form"
import {Link} from 'react-router-dom'
function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center '>
    <div className="w-[600px]">
            <div className="modal_box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                {/* <button className="btn btn-sm outline-none btn-ghost absolute right-2 top-2">✕</button> */}
                <Link to={"/"} className='btn btn-sm outline-none btn-ghost absolute right-2 top-2'>x
                        </Link>
                
                <h3 className="font-bold text-lg">Sign Up</h3>
                {/* email */}
                <div className='mt-5 space-y-1'>
                    <span>Name</span>
                    <br />
                    <input type="text" 
                    placeholder='Enter your fullname'
                    className='w-80 outline-none border rounded-md px-3'
                    {...register("name", { required: true })}/>
                    <br />
                    {errors.name && <span className='text-sm text-red-400'>This field is required</span>}

                    
                </div>
                <div className='mt-2  space-y-1'>
                    <span>Email</span>
                    <br />
                    <input type="email" 
                    placeholder='Enter your Email Id'
                    className='w-80 outline-none border rounded-md px-3'
                    {...register("email", { required: true })}/>
                    <br />
                    {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
                </div>
                
                {/* password */}
                <div className='mt-2 space-y-1'>
                    <span>Password</span>
                    <br />
                    <input type="password" 
                    placeholder='Enter your password'
                    className='w-80 outline-none border rounded-md px-3'
                    {...register("password", { required: true })}/>
                    <br />
                    {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
                </div>
                <div className='mt-8 space-y-4'>
                    <button className='bg-rose-400 text-white rounded-md px-3 y-1 hover:bg-rose-700 duration-300'>Sign Up</button>
                    <p>Already have an Account? {" "}
                    <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                    </p>
                    
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignUp
