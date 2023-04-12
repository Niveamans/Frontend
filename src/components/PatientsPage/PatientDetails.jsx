import React, { useState } from "react";

import { Delete, Edit } from "@styled-icons/material";

import PatientField from "./PatientField";
import ModalTemplate from "../Modal/Modal";
import EditForm from "./EditForm";
import axios from "axios";

const PatientDetails = ({ data }) => {
  // console.log(data)
  const [isEditModal, setEditModal] = useState(false);
  function handleClick() {
    // Promise.all([firebase.deleteDocument("patients","002")]);
  }

  async function handleDelete() {
    const id = {
      reference: "Practitioner/956533b9-846b-41c6-8e92-5816a74256d4",
    };
    let arr = data.generalPractitioner;
    // console.log(data.generalPractitioner)

    let idIndex = arr.indexOf(id);
    console.log(idIndex);
    delete arr[idIndex];

    data.generalPractitioner = arr;
    console.log(arr);
    let newData = data;
    console.log(newData);
    const response = await axios.put(
      `http://localhost:3000/patients/${data.id}`,
      newData
    );
    console.log(response);
  }

  function handleEdit() {
    setEditModal(true);
  }
  function closeEditModal() {
    setEditModal(false);
  }

  async function handleEditSave(editdata) {
    const newData = {
      birthDate: editdata.birthDate,
      gender: editdata.gender,
      name: [
        {
          family: editdata.lastName,
          given: [editdata.name],
          use: "official",
        },
      ],
      resourceType: "Patient",
      id: data.id,
    };
    console.log(newData);

    const response = await axios.put(
      `http://localhost:3000/patients/${data.id}`,
      newData
    );
    console.log(response);
    window.location.reload();
  }

  let name = data.name[0];
  console.log(name);
  return (
    <div className='bg-blue-300 p-5 w-full md:w-[40%] rounded-b-lg'>
      <div className='grid'>
        {/* <div className='mx-auto my-4'>
          <img
            alt='profile'
            src='/assets/react.svg'
            className='w-[125px]'
          ></img>
        </div> */}

        <div className='font-poppins grid gap-2 p-5 min-w-[20ch] my-2 text-[17px] bg-blue-500 rounded-md'>
          <PatientField field='Name' data={data.name[0].given[0]} />
          {/*response.data.name[0].given[0]} */}
          {/* <PatientField field='Age' data={data.age} /> */}
          <PatientField field='Sex' data={data.gender} />
          {/* <PatientField field='Bloodgroup' data={data.bloodgroup} /> */}
          {/* <PatientField field='Mobile' data={data.mobile} /> */}
          <PatientField field='DOB' data={data.birthDate} />
        </div>

        <div className='flex justify-between my-2 px-5 py-2 rounded-md bg-blue-500'>
          {/* <Delete
            size={30}
            className='cursor-pointer hover:scale-150 transition duration-200 text-blue-100'
            onClick={handleDelete}
          ></Delete> */}
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
