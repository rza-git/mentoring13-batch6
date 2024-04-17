import './App.css'
import Auth from './Auth.jsx'
import Home from './Home.jsx'
import Navbar from "./components/Navbar.jsx"
import Create from './Create.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Auth/>}></Route>
        <Route path="create" element={<Create/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
