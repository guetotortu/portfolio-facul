import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home'
import About from './components/about/About'
import { 
  Route, 
  Routes, 
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
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
