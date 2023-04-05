import UserTab from "../components/UserTab";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Dashboard/Search";
import ModalTemplate from "../components/Modal/Modal";
import axios from "axios";

const Users = () => {
  const [patients, setPatients] = useState([]);

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

  useEffect(async () => {
    // await getUsersOf("9e4e4cf9-47a9-4bda-a65c-57adf6fc87e9");
  }, []);

  return (
    <>
      <div className='w-5/6 mx-auto p-4 bg-blue-300 rounded-b-lg font-poppins'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-[45px] font-dmserif text-white'>Patients</p>
          <div>
            <button className='px-4 py-2 mr-2 bg-blue-500 text-white rounded-md'>
              create a patient
            </button>
            <button className='px-4 py-2 bg-red-400 text-white rounded-md'>
              Logout
            </button>
          </div>
        </div>
        <UserTab serial='S.No' name='Name' sex='Sex' age='age' />

        {patients.map((patient, index) => {
          return (
            <Link to={`/${patient.id}`}>
              <UserTab
                serial={index + 1}
                key={patient.id}
                name={patient.name[0].given[0]}
                sex={patient.gender}
                age={calculate_age(new Date(patient.birthDate))}
              />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Users;
