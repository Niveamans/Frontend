import React, { useState } from "react";
import { useFirebase } from "../../context/Firebase";
import { Delete, Edit } from "@styled-icons/material";
import EditModal from "./EditModal";
import PatientField from "./PatientField";

const PatientDetails = ({ data }) => {
  const firebase = useFirebase();
  const [isModal, setModal] = useState(false);
  function handleClick() {
    // Promise.all([firebase.deleteDocument("patients","002")]);
  }

  function handleDelete() {
    firebase.deletePatientfrom(doctorId, patientId);
  }

  function handleEdit() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }

  async function handleEditSave(values) {
    console.log(values);
    firebase.updateDocument("patients", data.patientId, values);
  }

  return (
    <div className='bg-blue-300 p-5 w-full md:w-[40%] rounded-lg'>
      <div className='grid'>
        <div className='mx-auto my-4'>
          <img
            alt='profile'
            src='/assets/react.svg'
            className='w-[125px]'
          ></img>
        </div>

        <div className='font-poppins grid gap-2 p-5 min-w-[20ch] my-2 text-[17px] bg-blue-500 rounded-md'>
          <PatientField field='Name' data={data.name} />
          <PatientField field='Age' data={data.age} />
          <PatientField field='Sex' data={data.sex} />
          <PatientField field='Bloodgroup' data={data.bloodgroup} />
          <PatientField field='Mobile' data={data.mobile} />
          <PatientField field='DOB' data={data.dob} />
        </div>

        <div className='flex justify-between my-2 px-5 py-2 rounded-md bg-blue-500'>
          <Delete
            size={30}
            className='cursor-pointer hover:scale-150 transition duration-200 text-blue-100'
            onClick={handleDelete}
          ></Delete>
          <Edit
            size={30}
            className=' cursor-pointer hover:scale-150 transition duration-200 text-blue-100'
            onClick={handleEdit}
          ></Edit>
        </div>

        <EditModal
          openModal={handleEdit}
          open={isModal}
          closeModal={closeModal}
          data={data}
          handleSave={handleEditSave}
        ></EditModal>
      </div>
    </div>
  );
};

export default PatientDetails;
