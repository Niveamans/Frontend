import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Edit , Delete} from "@styled-icons/material";
import { useEffect } from "react";
import ModalTemplate from "../components/Modal/Modal";
import EditForm from "../components/Encounters/EncounterForm";
import ObservationDetails from "../components/Encounters/ObservationDetails";
import AddObservation from "../components/Encounters/AddObservationForm";

const Encounter = () => {
  const [encounterData, setEncounterData] = useState({});
  const [editEncounter, setEditEncounter] = useState({});
  const [isEditModal, setEditModal] = useState(false);
  const [observations, setObservations] = useState([]);
  const [isAddModal,setAddModal] = useState(false);

  const params = useParams();

  async function fetchEncounter() {
    try {
      const response = await axios.get(
        `http://localhost:3000/encounters/${params.encounterid}`
      );
   
      console.log(response.data);
      setEncounterData(response.data);

    } catch (e) {
      console.log(e);
    }
  }

  async function createObservation(data){

    try{
      const response = await axios.post(`http://localhost:3000/observations/`,);
      console.log(response.data);
      setAddObservation(response.data);
    }
    catch(e){
      console.log(e);
    }
  }
  async function updateEncounter(data) {
    const newData = {
      status: data.status,
      resourceType: "Encounter",
      id: params.encounterid,
      period : {
        start : data.period.start,
        end : data.period.end
      }
    };

    console.log(newData);
    const response = await axios.put(
      `http://localhost:3000/encounters/${params.encounterid}`,
      newData
    );
    console.log(response);
    window.location.reload();
  }

  async function allObservations() {
    try {
      const response = await axios.get(
        `http://localhost:3000/observations?encounter=${params.encounterid}`,
      
      );
      setObservations(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    Promise.all([fetchEncounter(), allObservations()]);
  }, []);

  function handleEdit() {
    setEditModal(true);
  }

  function closeModal() {
    setEditModal(false);
    setAddModal(false);
  }

  function EditEncounter({ data }) {
    setEditEncounter(true);
  }

  function handleAdd(){
    setAddModal(true);
  }

  
  return (
    <div className="flex md:flex-row flex-col md:items-start w-full gap-2">
      <div className="flex flex-col bg-blue-300 rounded-lg p-6 gap-4">
        <div className="flex justify-between">
          <p className="font-dmserif text-white md:text-[45px] text-3xl">
            Encounter
          </p>
          <button onClick={handleEdit}>
            <Edit className="fill-white w-8 hover:w-12 hover:transition-all hover:duration-300" />
          </button>
        </div>
        <div className="p-8 gap-2 bg-blue-500 rounded-lg md:text-xl text-lg">
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Status : </div>
            <div>{encounterData.status}</div>
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Location : </div>
            <div></div>
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Period Start : </div>
            {/* <div>{encounterData.period.start}</div> */}
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Period End : </div>
            {/* <div>{encounterData.period.end}</div> */}
          </div>
        </div>
      </div>
      <div className="md:w-[60%] w-full flex flex-col p-6 bg-blue-300 rounded-lg font-poppins gap-2">
        <div className="flex flex-row justify-between items-center mb-4">
          <p className="text-[45px] font-dmserif text-white px-8">
            Observations
          </p>
          <button onClick={handleAdd} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:transition-all hover:duration-100 hover:w-[30%] hover : h-[20%] ">
            Add Observation
          </button>
        </div>
        {observations.map((element, index) => {
          return <ObservationDetails element={element}></ObservationDetails>;
        })}
      </div>
      <ModalTemplate 
      openModal={handleAdd}
      open={isAddModal}
      closeModal={closeModal}>
          <AddObservation handleSave={createObservation}></AddObservation>
      </ModalTemplate>
      <ModalTemplate
        openModal={handleEdit}
        open={isEditModal}
        closeModal={closeModal}
      >
        <EditForm data={encounterData} handleSave={updateEncounter} />
      </ModalTemplate>
    </div>

  );
};

export default Encounter;
