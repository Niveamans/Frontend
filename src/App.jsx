import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Users from './scenes/Users';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
    <br></br>
    <Routes>
      <Route path="/" element={<Users />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
