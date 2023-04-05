import React, { useState } from "react";
import { Delete, Edit } from "@styled-icons/material";

import PatientField from "./PatientField";
import ModalTemplate from "../Modal/Modal";
import EditForm from "./EditForm";

const PatientDetails = ({ data }) => {
  const firebase = useFirebase();
  const [isEditModal, setEditModal] = useState(false);
  function handleClick() {
    // Promise.all([firebase.deleteDocument("patients","002")]);
  }

  function handleDelete() {
    firebase.deletePatientfrom(doctorId, patientId);
  }

  function handleEdit() {
    setEditModal(true);
  }
  function closeEditModal() {
    setEditModal(false);
  }

  async function handleEditSave(values) {
    console.log(values);
    await firebase.updateDocument("patients", data.patientId, values);
    closeEditModal();
    location.reload();
  }

  return (
    <div className='bg-blue-300 p-5 w-full md:w-[40%] rounded-lg'>
      <div className='grid'>
        {/* <div className='mx-auto my-4'>
          <img
            alt='profile'
            src='/assets/react.svg'
            className='w-[125px]'
          ></img>
        </div> */}

        <div className='font-poppins grid gap-2 p-5 min-w-[20ch] my-2 text-[17px] bg-blue-500 rounded-md'>
          <PatientField field='Name' data={data.name} />
          {/* <PatientField field='Age' data={data.age} /> */}
          <PatientField field='Sex' data={data.sex} />
          {/* <PatientField field='Bloodgroup' data={data.bloodgroup} /> */}
          {/* <PatientField field='Mobile' data={data.mobile} /> */}
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

        <ModalTemplate
          openModal={handleEdit}
          open={isEditModal}
          closeModal={closeEditModal}
        >
          <EditForm
            data={data}
            handleSave={handleEditSave}
            closeModal={closeEditModal}
          ></EditForm>
        </ModalTemplate>
      </div>
    </div>
  );
};

export default PatientDetails;
