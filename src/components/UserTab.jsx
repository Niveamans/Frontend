import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

async function addPatientTo(patient, practitionerId) {
  try {
    console.log(patient);
    var generalPractitioner = [];
    if (patient.generalPractitioner) {
      generalPractitioner = patient.generalPractitioner;
      generalPractitioner.push({
        reference: `Practitioner/${practitionerId}`,
      });
    } else {
      generalPractitioner = [
        {
          reference: `Practitioner/${practitionerId}`,
        },
      ];
    }

    const response = await axios.put(
      `http://localhost:3000/patients/${patient.id}`,
      {
        birthDate: patient.birthDate,
        gender: patient.gender,
        generalPractitioner: generalPractitioner,
        name: patient.name,
      }
    );
  } catch (error) {
    console.error(error);
  }
}

const UserTab = (props) => {
  return (
    <>
      <div className='flex justify-between'>
        <Link className='w-[90%]' to={`/patient/${props.id}`}>
          <div className='flex bg-blue-500 text-white justify-evenly rounded-md p-5 mb-4 drop-shadow font-poppins'>
            <div>{props.serial}</div>|<div>{props.name}</div>|
            <div>{props.age}</div>|<div>{props.sex}</div>{" "}
          </div>
        </Link>
        <div
          className={`w-[10%] flex justify-center items-center ${
            props.isSeeing ? "bg-red-400" : "bg-blue-500"
          }  ml-2 text-white rounded-md p-5 mb-4 drop-shadow font-poppins`}
        >
          {props.action ? (
            <div>{props.action}</div>
          ) : (
            <div>
              {props.isSeeing ? (
                <button>Remove</button>
              ) : (
                <button
                  onClick={() => {
                    addPatientTo(props.patient, props.currentPractitioner);
                  }}
                >
                  Add
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserTab;
