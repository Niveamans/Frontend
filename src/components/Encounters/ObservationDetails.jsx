import { React, useState } from "react";
import axios from "axios";
import { Delete, Edit } from "@styled-icons/material";
import ModalTemplate from "../Modal/Modal";
import EditObservationForm from "./EditObservationForm";

const ObservationDetails = (props) => {
  const [isEditObservation, setEditObservation] = useState(false);
  const [isDeleteObservation, setDeleteObservation] = useState([]);

  async function deleteObservation() {
    // console.log(props.element.resource.id);
    try {
      const response = await axios.delete(
        `http://localhost:3000/observations/${props.element.resource.id}`,
        
      );
      // setDeleteObservation(response.data);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }

  async function updateObservation(data) {
    console.log(data);
    const newData = {
      resourceType: "Observation",
      id: data.id,
      status: data.status,
      effectiveDateTime: data.effectiveDateTime,
      // subject : {
      //   reference : data.subject.reference,
      // },
      // context : {
      //   reference : data.context.reference,
      // },
      identifier: [
        {
            system : data.identifier[0].system,
            value : data.identifier[0].value,
        }
      ],
      // meta : {
      //     lastUpdated : data.meta.lastUpdated,
      //     versionId : data.meta.versionId,
      // },
      code: {
        coding: [
          {
            system: data.code.coding[0].system,
            code: data.code.coding[0].code,
            display: data.code.coding[0].display,
          },
        ],
      },
      valueQuantity: {
        value: data.value,
        unit: data.unit,
      },
    };
    console.log(newData);
    // console.log(data);
    // consolelog(newData.subject.reference);
    try {
      const response = await axios.put(
        `http://localhost:3000/observations/${props.element.resource.id}`,
        newData
      );
      // window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }
  function handleEdit() {
    setEditObservation(true);
  }
  function closeModal() {
    setEditObservation(false);
  }

  // console.log(props.element);
  return (
    <div className="bg-blue-500 rounded-md p-8 flex flex-col justify-evenly font-poppins">
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <div>Status : {props.element.resource.status}</div>
          <div>Date-Time : {props.element.resource.effectiveDateTime}</div>
          {props.element.resource.code.coding.map((position, index) => {
            return (
              <div>
                <p>Code : {position.code}</p>
                <p> Display : {position.display} </p>
                <p>System : {position.system}</p>
              </div>
            );
          })}
          <div>
            Value : {props.element.resource.valueQuantity.value}{" "}
            {props.element.resource.valueQuantity.unit}
          </div>
        </div>
        <div className="flex items-start gap-4">
          <button onClick={handleEdit}>
            <Edit className="fill-white w-8 hover:w-12 hover:transition-all hover:duration-300"></Edit>
          </button>
          <button onClick={deleteObservation}>
            <Delete className="fill-white w-8 hover:w-12 hover:transition-all hover:duration-300"></Delete>
          </button>
        </div>
      </div>
      <ModalTemplate
        openModal={handleEdit}
        open={isEditObservation}
        closeModal={closeModal}
      >
        <EditObservationForm
          data={props.element.resource}
          handleSave={updateObservation}
        ></EditObservationForm>
      </ModalTemplate>
    </div>
  );
};

export default ObservationDetails;
// export default Details;
