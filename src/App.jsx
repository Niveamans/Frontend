import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Patients from "./scenes/Patients";
import Patient from "./scenes/Patient";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";
import { useFirebase } from "./context/Firebase";
// import ObservationDetails from "./components/Encounters/ObservationDetails";
import Encounter from "./scenes/Encounter";

function App() {
  const [count, setCount] = useState(0);
  const firebase = useFirebase();
  // const isLoggedIn = firebase.isLoggedIn;

  // for dev purposes
  const isLoggedIn = true;
  return (
    <div>
      <BrowserRouter>

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
          <Route path="/encounters/:encounterid" element={<Encounter></Encounter>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
