import React from 'react'
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from './pages/NoteDetailPage'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router'
import {toast} from "react-hot-toast"

const App = () => {
  return (
    <div data-theme="nord">
      <h1>Hello Guys</h1>
      <button className='btn btn-ghost' onClick={()=>{toast.success("Success!!")}}>PopUp1</button>
      <button className='btn ' onClick={()=>{toast.error("Failed!!")}}>Popup2</button>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
          <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetailPage/>}/>
      </Routes> 
      
    </div>
  )
}

export default App
