import React from 'react';
import {FaEdit, FaTrash} from 'react-icons/fa'

const NoteCard = ({note, onEdit, deleteNote}) => {
  return (
    <div className='bg-white p-4 rounded shadow '>
        <h2 className='text-xl font-bold text-purple-700 '>{note.title}</h2>
        <p className='text-base font-medium py-4 text-slate-700'>{note.description}</p>
        <div className='flex justify-end mt-2'>
            <button className='text-purple-600 mr-2' onClick={()=> onEdit(note)}>
                <FaEdit/>
            </button>
            <button onClick={()=> deleteNote(note._id)} className='text-red-500'>
                <FaTrash />
            </button>
        </div>

      
    </div>
  )
}

export default NoteCard
