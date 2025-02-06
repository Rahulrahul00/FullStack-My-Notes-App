import React from 'react'

const Signup = () => {

    
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100' >
            <div className='border shadow mb-4 bg-white w-[300px] h-auto p-6 rounded'>
                <h2 className='text-center text-2xl font-semibold text-violet-600 mb-4' >SignUp</h2>
                <form className='flex flex-col mx-5'>
                    <div className='mb-4'>
                        <label className="block text-base from-neutral-600 " htmlFor="name">Name</label>
                        <input className=' border border-gray-400 rounded px-1 outline-none text-gray-700 hover:shadow-md w-full text-start transition-all duration-300' type="text" placeholder='Your Name' required />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-base from-neutral-600' htmlFor="email">Email</label>
                        <input className="border border-gray-400 rounded px-1 outline-none text-gray-700 hover:shadow-md w-full text-start transition-all duration-300" type="email" placeholder='Your email' required />
                    </div>

                    <div className='mb-4'>
                        <label className="block text-base from-neutral-600" htmlFor="password">Password</label>
                        <input className="border border-gray-400 rounded px-1 outline-none text-gray-700 hover:shadow-md w-full text-start transition-all duration-300" type="password" placeholder='*********' />
                    </div>

                    <button type='submit' className=' bg-violet-600 px-5 py-1 text-white rounded hover:bg-white border border-violet-700 hover:text-black transition-all duration-300'>SignUp</button>

                    <p className='text-sm mt-2 mx-3'>Already Have Account?<span className='text-violet-800 font-normal underline cursor-pointer'> LogIn</span></p>

                </form>
            </div>

        </div>
    )
}

export default Signup
