import UserTab from "../components/UserTab";
import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Search from "../components/Dashboard/Search";
import ModalTemplate from "../components/Modal/Modal";
import CreatePatientForm from "../components/Dashboard/CreatePatient";



const Users = () => {
  const firebase = useFirebase();
  const [addModal,setAddModal] = useState(false); 
  const [createModal,setCreateModal] =  useState(false);
  const fetchPatientsData = (docId) => {
    const Data = firebase.getAllPatientsOf(docId);
  };

  const addPatient = ( patientId) => {
    const Data = firebase.addPatientTo("001", patientId);
  };

  const createPatient = async(values)=>{
    console.log(values);
    handleClosePatient();
    location.reload();
  }

  const addOne = (index) => {
    return index + 1;
  };
  const handleAddPatient = ()=>{
      setAddModal(true)
  }
  const handleClosePatient = ()=>{
    setAddModal(false)
    setCreateModal(false)
  } 
  const handleCreatePatient=()=>{
    setCreateModal(true)
  }



 

  useEffect(() => {
    Promise.all([fetchPatientsData("001"),firebase.getAllDocuments("patients")]);
  }, []);

  const auth = getAuth();


  return (
    <>
      <div className='w-5/6 mx-auto p-4 bg-blue-300 rounded-b-lg font-poppins'>
        <div className='flex justify-between items-center mb-4'>
          <p className='text-[45px] font-dmserif text-white'>Patients</p>
          {/* <button
            className='px-4 py-2 bg-blue-500 text-white rounded-md'
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("signed out");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            Logout
          </button> */}
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded-md'
           onClick={handleAddPatient}
          >
            Add patient
          </button>
          <button
            className='px-4 py-2 bg-blue-500 text-white rounded-md'
           onClick={handleCreatePatient}
          >
            create a patient
          </button>

        </div>
        <UserTab
          serial='S.No'
          name='Name'
          sex='Sex'
          age='Age'
          bloodgroup='Blood'
        />

        {firebase.patientData.map((patient, index) => {
          return (
            <Link to={`/${patient.patientId}`}>
              <UserTab
                serial={addOne(index)}
                key={patient.mobile}
                name={patient.name}
                sex={patient.sex}
                age={patient.age}
                bloodgroup={patient.bloodgroup}
              />{" "}
            </Link>
          );
        })}

<ModalTemplate
      openModal={handleAddPatient}
          open={addModal}
          closeModal={handleClosePatient}

>
<Search data={firebase.allPatientData} handleSave={addPatient}></Search>
  
</ModalTemplate>

<ModalTemplate
 openModal={handleCreatePatient}
          open={createModal}
          closeModal={handleClosePatient}
>
        <CreatePatientForm
        handleSave={createPatient}
        >

        </CreatePatientForm>
</ModalTemplate>



      </div>
    </>
  );
};

export default Users;
