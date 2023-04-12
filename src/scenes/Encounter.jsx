import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Edit, Delete } from "@styled-icons/material";
import { useEffect } from "react";
import ModalTemplate from "../components/Modal/Modal";
import EditForm from "../components/Encounters/EncounterForm";
import AddObservation from "../components/Encounters/AddObservationForm";
import EncounterView from "../components/Encounters/EncounterView";
import ObservationView from "../components/Encounters/ObservationView";

const Encounter = () => {
  const [editEncounter, setEditEncounter] = useState();
  const [isEditModal, setEditModal] = useState(false);
  const [isAddModal, setAddModal] = useState(false);
  const [encounterData, setEncounterData] = useState();

  const params = useParams();

  async function createObservation(data) {
    try {
      console.log(data);
      const now = new Date();
      const response = await axios.post(`http://34.131.154.157/observations/`, {
        code: {
          coding: [
            {
              code: data.code,
              display: data.display,
              system: data.system,
            },
          ],
        },
        context: {
          reference: `Encounter/${params.encounterid}`,
        },
        effectiveDateTime: now.toISOString(),
        identifier: [
          {
            system: "my-code-system",
            value: "ABC-12346",
          },
        ],
        resourceType: "Observation",
        status: data.status,
        valueQuantity: {
          unit: data.unit,
          value: data.value,
        },
      });
      console.log(response.data)
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }
  async function updateEncounter(data) {
    const newData = {
      status: data.status,
      resourceType: "Encounter",
      id: params.encounterid,
      period: {
        start: data?.period?.start,
        end: data?.period?.end,
      },
    };

    console.log(newData);
    const response = await axios.put(
      `http://34.131.154.157/encounters/${params.encounterid}`,
      newData
    );
    console.log(response);
    window.location.reload();
  }

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

  function handleAdd() {
    setAddModal(true);
  }

  function handleEncounter(encounterData) {
    setEncounterData(encounterData);
  }

  return (
    <div className="flex md:flex-row flex-col md:items-start w-full gap-2">
      <EncounterView
        handleEncounter={handleEncounter}
        handleEdit={handleEdit}
      />
      <ObservationView handleAdd={handleAdd} />
      <ModalTemplate
        openModal={handleAdd}
        open={isAddModal}
        closeModal={closeModal}
      >
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
