import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NoteModal = ({closeModal, addNote, currentNote, editNote}) => {
     const [title, setTitle] = useState('')
     const [description, setDescription] = useState('')

     const navigate = useNavigate()

     useEffect(()=>{
      if(currentNote){
        setTitle(currentNote.title)
        setDescription(currentNote.description)
      }
     },[currentNote])

     const handleSubmit = async (e)=>{
       e.preventDefault();
       if(currentNote){
        editNote(currentNote._id, title, description)
       }else
      
       addNote(title, description)
    }

  return (
    <div className='fixed bg-gray-800 bg-opacity-75 flex justify-center items-center inset-0 '>
        <div className='bg-white p-8 rounded relative  '>
            <h2 className='text-xl font-bold mb-4 text-violet-800'>{currentNote ? "Edit Note" :"Add New Note" }</h2>
            <p onClick={closeModal} className='text-violet-800 font-bold absolute right-0 top-0 m-4 text-xl cursor-pointer'>X</p>
            <form onSubmit={handleSubmit} >
                <input
                onChange={(e) => setTitle(e.target.value)}
                 type="text"
                 value={title}
                  placeholder='Note Title'
                  className='border  p-2 w-full mb-4' />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Note Description' className='w-full border p-2 mb-4'>
                
                </textarea>
                <button type='submit' className="bg-violet-600  text-white px-3 py-1 rounded font-medium">
                  {currentNote ? "Update Note": "add Note"}
                </button>
            </form> 
            <button onClick={closeModal} className='mt-4 text-red-500'>Cancel</button>
        </div>
      
    </div>
  )
}

export default NoteModal
