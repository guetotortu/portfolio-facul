import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  Routes, 
  BrowserRouter as Router,
  RouterProvider
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)


  return (
      <Router>
        <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/home' element={< Home/>}/>
          <Route path='/about' element={< About/>}/>
        </Routes>
      </Router>
  )
}

export default App
