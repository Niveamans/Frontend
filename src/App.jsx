import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Patients from "./scenes/Patients";
import Patient from "./scenes/Patient";
import AllPatients from "./scenes/AllPatients";
import Encounter from "./scenes/Encounter"

function App() {
  const [count, setCount] = useState(0);


  const isLoggedIn = true;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={ <Patients /> }
          ></Route>

          <Route path='/patients' element={<AllPatients />}></Route>

          <Route path='/patient/:patientid' element={<Patient></Patient>}></Route>
          <Route path="/patient/:patientid/encounter/:encounterid" element={<Encounter></Encounter>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
