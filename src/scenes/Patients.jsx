import React, { useEffect } from "react";
import PatientDetails from "../components/PatientsPage/PatientDetails";
import Checkup from "../components/PatientsPage/Checkup";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
const Patients = () => {
  const params = useParams();
  console.log(params.patient);
  const firebase = useFirebase();

  //  function fetchDoc(){
  //     const Doc = firebase.getDocument("patients",params.patient)
  //   }

  useEffect(() => {
    Promise.all([
      firebase.getDocument("patients", params.patient),
      firebase.getSubCollection("patients", params.patient, "checkups"),
    ]);
  }, []);
  console.log(firebase.checkups);

  return (
    <div className='flex md:flex-row flex-col items-center md:items-start'>
      <PatientDetails data={firebase.patientDetail}></PatientDetails>
      <div className='flex flex-col w-full  max-h-screen  gap-2 bg-slate-200'>
        <div className='flex justify-center mt-6'>
          <h1 className=' font-poppins md:text-3xl text-xl'>Checkups </h1>
        </div>

        <div className=' max-h-full overflow-y-scroll'>
          {firebase.checkups.map((item) => (
            <Checkup data={item}></Checkup>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
