import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Users from './scenes/Users';
import Patients from './scenes/Patients';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />}></Route>
      <Route path=':patient' element={<Patients></Patients>}></Route>
      
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
