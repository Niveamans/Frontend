import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./scenes/Users";
import Patients from "./scenes/Patients";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";
import EditModal from "./components/PatientsPage/EditModal";
import EditForm from "./components/PatientsPage/EditForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/:patient' element={<Patients></Patients>}></Route>
          <Route path='/test' element={<EditModal></EditModal>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
