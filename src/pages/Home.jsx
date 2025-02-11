import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NoteModal from '../components/NoteModal'
import NoteCard from '../components/NoteCard'
import axios from 'axios'

const Home = () => {

  const [isModelOpen, setModelOpen] = useState(false)
  const [filteredNotes, setFilteredNote] = useState(false)
  const [notes, setNotes] = useState([])
  const [currentNote, setCurrentNote] = useState(null)
  const [query, setQuery] = useState('')


  useEffect(() => {

    fetchNotes()
  }, [])

  // Notes Filtering
  useEffect(()=>{
    setFilteredNote(
      notes.filter((note)=> note.title.toLowerCase().includes(query.toLowerCase())) ||
      notes.filter((note) => note.description.toLowerCase().includes(query.toLowerCase()))
    )
    
  },[query,notes])

  //Fetch the Notes From the Backend(get Method)
  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/note")
      setNotes(data.notes)
    } catch (error) {
      console.log(error)
    }
  }

  //close function
  const closeModal = () => {
    setModelOpen(false)
  }
  // Edited Current notes
  const onEdit = (note) => {
    setCurrentNote(note)
    setModelOpen(true)

  }


  // Add Notes to backend(post method)
  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/note/add",
        { title, description }, {
        headers: {
          Authorization: `Bear ${localStorage.getItem("token")}`
        }
      }

      );
      if (response.data.success) {
        //  navigate('/')
        fetchNotes()
        closeModal()
      }

    } catch (error) {
      console.log(error)
    }
  }


  // edited Current notes from the backend (put method)
  const editNote = async (id, title, description) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/note/${id}`,
        { title, description }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
      );
      if (response.data.success) {
        fetchNotes()
        closeModal()
      }
    } catch (error) {
      console.log(error)
    }

  }

  // Delete the current notes from the database

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/note/${id}`,
        {
          headers: {
            Authorization: `Bear ${localStorage.getItem("token")}`
          }
        }
      );
      if(response.data.success){
        fetchNotes()
      }

    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar setQuery={setQuery} />

      <div className=' grid grid-cols-1 md:grid-cols-3 gap-6  px-10 mt-5 pt-4'>
        {filteredNotes.length > 0 ? filteredNotes.map(note => (
          <NoteCard note={note}
            onEdit={onEdit}
            deleteNote={deleteNote} />
        )) : <p>No notes are available</p> }
      </div>

      <button
        onClick={() => setModelOpen(true)}
        className='fixed right-5 bottom-4 bg-purple-600 text-white font-bold rounded-full p-4'>
        <span className='text-2xl'>+</span>
      </button>
      {
        isModelOpen && <NoteModal
          closeModal={closeModal}
          addNote={addNote}
          currentNote={currentNote}
          editNote={editNote}
        />
      }
    </div>
  )
}

export default Home
