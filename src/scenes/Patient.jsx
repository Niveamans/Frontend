import React, { useEffect, useState } from "react";
import PatientDetails from "../components/PatientsPage/PatientDetails";
import Checkup from "../components/PatientsPage/Checkup";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModalTemplate from "../components/Modal/Modal";
import CheckUpForm from "../components/PatientsPage/CheckupForm";

const Patients = () => {
  const [userData,setUserData] = useState({name: [
    {
        family: "Yagami",
        given: [
            "Light"
        ],
        use: "official"
    },
], resourceType: "Patient",
id: 'data.id',


});
  const[encounters,setEncounters] = useState([]);
  const [isCheckupModal,setCheckup]= useState(false);
  
  const params = useParams();
  

   async function fetchPatient(){
      try {
        const response = await axios.get(`http://localhost:3000/patients/${params.patientid}`,{
          headers: {
            function : "getPatient"
          }
        });
        // console.log(response);
        // console.log(response.data)
        setUserData(response.data)
        
      } catch (error) {
        console.error(error);
      }
    
  
    }
    async function fetchEncounter(){
      try {
        const response = await axios.get(`http://localhost:3000/patients/${params.patientid}`,{
          headers: {
            function : "getAllEncounters"
          }
        });
        // console.log(response);
        console.log(response.data.entry)
       setEncounters(response.data.entry)
      } catch (error) {
        console.error(error);
      }
    
  
    }
  
  useEffect(() => {
    Promise.all([
      fetchPatient(),
      fetchEncounter(),
    ]);
  }, []);

   function handleAddCheckup() {
    setCheckup(true);

  }
  function closeAddModal(){
    setCheckup(false)

  }

 async function sendCheckup(data){
 
  
  const newData =   {...data, subject: {
  reference: `Patient/${params.patientid}`
  }
  

}
console.log(newData)
const response = await axios.post("http://localhost:3000/encounters",newData)
console.log(response)
console.log(data)
window.location.reload()


  }




  return (
    <div className='flex md:flex-row flex-col items-center md:items-start gap-2 text-[17px]'>
      <PatientDetails data={userData}></PatientDetails>
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
          {encounters.map((item, index) => (
            <Checkup data={item.resource} index={index + 1} key={index + 1}></Checkup>
          ))}
        </div>
        <ModalTemplate
        openModal={handleAddCheckup}
          open={isCheckupModal}
          closeModal={closeAddModal}
        
        >
          <CheckUpForm
          
            handleSave={sendCheckup}
           
          ></CheckUpForm>

          
        </ModalTemplate>





      </div>
    </div>
  );
};

export default Patients;
