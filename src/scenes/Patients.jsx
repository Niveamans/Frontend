import UserTab from "../components/UserTab";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Dashboard/Search";
import ModalTemplate from "../components/Modal/Modal";
import axios from "axios";

const Users = () => {
  const [patients, setPatients] = useState([]);
  const currentPractitioner = "9956533b9-846b-41c6-8e92-5816a74256d4";

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  async function getUsersOf(practitionerId) {
    try {
      const response = await axios.get(
        `http://localhost:3000/practitioners/${practitionerId}`,
        {
          headers: {
            function: "getPatients",
          },
        }
      );

      setPatients([]);
      response.data.map((data) => {
        console.log(data.resource);
        setPatients((prev) => [...prev, data.resource]);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsersOf("956533b9-846b-41c6-8e92-5816a74256d4");
  }, []);

  return (
    <>
      <div className='w-5/6 mx-auto p-4 bg-blue-300 rounded-b-lg font-poppins'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-[45px] font-dmserif text-white'>Your Patients</p>
          <div>
            <button className='px-4 py-2 mr-2 bg-blue-500 text-white rounded-md'>
              Create a patient
            </button>
            <button className='px-4 py-2 bg-red-400 text-white rounded-md'>
              Logout
            </button>
          </div>
        </div>
        <UserTab
          serial='S.No'
          name='Name'
          sex='Sex'
          age='age'
          action='Action'
          id=''
        />

        {patients.map((patient, index) => {
          return (
            <UserTab
              serial={index + 1}
              key={patient.id}
              id={patient.id}
              name={patient.name[0].given[0]}
              sex={patient.gender}
              isSeeing={true}
              age={calculate_age(new Date(patient.birthDate))}
            />
          );
        })}
      </div>
    </>
  );
};

export default Users;
