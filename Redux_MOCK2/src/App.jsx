import {Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Pages/Navbar'
import NoteForm from './Pages/NoteForm'
import NoteList from './Pages/NoteList'

function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<NoteForm/>}/>
       <Route path='/notelist' element={<NoteList/>}/>
     </Routes> 
    </>
  )
}

export default App
