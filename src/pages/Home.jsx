import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import NoteModal from '../components/NoteModal'

const Home = () => {

  const [isModelOpen, setModelOpen] = useState(false)
  
  const closeModal = ()=>{
    setModelOpen(false)
  }


  const addNote = async(title, description)=>{
    try{
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        {title, description}
      
      );
      if(response.data.success){
      //  navigate('/')
       closeModal()
      }

    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />

      <button
       onClick={() => setModelOpen(true )}
       className='fixed right-5 bottom-4 bg-violet-500 text-white font-bold rounded-full p-4'>
       <span className='text-2xl'>+</span> 
      </button>
      {
        isModelOpen && <NoteModal closeModal={closeModal}  addNote={addNote}/>
      }
    </div>
  )
}

export default Home
