import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/ContextProvider'


const Login = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const {login} = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login",
                { email, password }
            );
            if (response.data.success) {
                login(response.data.user)
                // store the token we are returning the server side
                localStorage.setItem("token", response.data.token)
                navigate('/')
            }

            // console.log(response);
        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-violet-300 to-purple-500' >
            <div className='border shadow mb-4 bg-white w-[300px] h-[310px] p-6 rounded'>
                <h2 className='text-center text-2xl font-semibold text-violet-600 mb-4' >LogIn</h2>
                <form onSubmit={handleSubmit} className='flex flex-col mx-5'>


                    <div className='mb-4'>
                        <label className='block text-base from-neutral-600' htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} className="border border-gray-400 rounded px-1 outline-none text-gray-700 hover:shadow-violet-800 w-full text-start transition-all duration-300" type="email" placeholder='Your email' required />
                    </div>

                    <div className='mb-4'>
                        <label className="block text-base from-neutral-600" htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className="border border-gray-400 rounded px-1 outline-none text-gray-700 hover:shadow-md w-full text-start transition-all duration-300" type="password" placeholder='*********' />
                    </div>

                    <button type='submit' className=' bg-violet-600 px-5 py-1 text-white rounded hover:bg-white border border-violet-700 hover:text-black transition-all duration-300'>LogIn</button>

                    <p className="text-sm mt-2 mx-1">
                        Don't Have an account?
                        <Link to="/register" className="text-violet-800 font-normal underline cursor-pointer"> Register</Link>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default Login
