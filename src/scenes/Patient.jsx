import React, { useEffect } from "react";
import PatientDetails from "../components/PatientsPage/PatientDetails";
import Checkup from "../components/PatientsPage/Checkup";
import { useParams } from "react-router-dom";

const Patients = () => {
  const params = useParams();

  //  function fetchDoc(){
  //     const Doc = firebase.getDocument("patients",params.patient)
  //   }

  useEffect(() => {
    Promise.all([
    ]);
  }, []);

  function handleAddCheckup() {}

  return (
    <div className='flex md:flex-row flex-col items-center md:items-start gap-2 text-[17px]'>
      <div className='flex flex-col w-full max-h-screen gap-2 p-5 py-8 bg-blue-300 rounded-lg'>
        <div className='flex justify-between mb-5'>
          <h1 className='font-dmserif md:text-[45px] text-xl text-white'>
            Checkups{" "}
          </h1>

          <div className='ml-auto'>
            <button
              className='flex px-4 py-2 min-w-max bg-blue-500 rounded-md text-white'
              onClick={handleAddCheckup}
            >
              {" "}
              New checkup
            </button>
          </div>
        </div>

        <div className='max-h-full overflow-y-scroll rounded-md'>
        </div>
      </div>
    </div>
  );
};

export default Patients;
