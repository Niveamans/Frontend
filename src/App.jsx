import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Patients from "./scenes/Patients";
import Patient from "./scenes/Patient";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";
import EditModal from "./components/PatientsPage/EditModal";
import EditForm from "./components/PatientsPage/EditForm";
import Navbar from "./components/Navbar/Navbar";
import { useFirebase } from "./context/Firebase";

function App() {
  const [count, setCount] = useState(0);
  const firebase = useFirebase();
  // const isLoggedIn = firebase.isLoggedIn;

  // for dev purposes
  const isLoggedIn = true;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <br></br>
        <Routes>
          <Route
            path='/'
            element={isLoggedIn ? <Patients /> : <Navigate to='/login' />}
          ></Route>
          <Route
            path='/login'
            element={isLoggedIn ? <Navigate to='/' /> : <Login />}
          ></Route>
          <Route path='/:patientid' element={<Patient></Patient>}></Route>

          <Route path='/test' element={<EditModal></EditModal>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
