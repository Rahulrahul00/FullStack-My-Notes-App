import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/ContextProvider'

const Navbar = () => {

  const navigate = useNavigate()
  const { user } = useAuth()
  return (
    <nav className='bg-violet-500 flex justify-between '>
      <div>
        <Link to="/" className='text-[30px] text-white ms-5 font-semibold'>mYnotes</Link>
      </div>
      <input className=' rounded-full h-8 w-64 px-3 outline-none text-violet-800 my-3 ' type="text" placeholder='Search notes ...' />
      <div className="m-4 ">

        {!user ? (
          <>
            <Link to="/login" className='bg-white px-3 py-1 rounded hover:bg-slate-200 m-2   text-purple-800 font-semibold'>Login</Link>
            <Link to="/register" className='bg-white px-3 py-1 rounded   hover:bg-slate-200  text-purple-800 font-semibold'>Signup</Link>
          </>

        ) : (
          <>
            <div className='bg-white inline-block mr-3 rounded-full w-[30px] h-[30px]'>
              <p className='mr-4  text-violet-700 text-lg ms-[9px]  font-semibold '>{user.name[0].toUpperCase()}</p>
            </div>

            <button onClick={() => navigate('/login')} className='bg-white px-3 py-1 rounded m-2 hover:bg-slate-200   text-purple-800 font-semibold'>
              Logout
            </button>
          </>


        )}






      </div>
    </nav>
  )
}

export default Navbar
