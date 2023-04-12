import { React, useState } from "react";
import axios from "axios";
import { Delete, Edit } from "@styled-icons/material";
import ModalTemplate from "../Modal/Modal";
import EditObservationForm from "./EditObservationForm";

const ObservationDetails = (props) => {
  const [isEditObservation, setEditObservation] = useState(false);

  async function deleteObservation() {
    try {
      const response = await axios.delete(
        `http://localhost:3000/observations/${props.element.resource.id}`
      );

      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }

  async function updateObservation(data) {
    console.log(data);

    try {
      const response = await axios.put(
        `http://localhost:3000/observations/${data.id}`,
        data
      );
      console.log(response);
      window.location.reload();
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

  const effectiveDateTime = new Date(props.element.resource.effectiveDateTime);
  const effectiveDateTimeStr = effectiveDateTime.toLocaleString();

  // console.log(props.element);
  return (
    <div className='bg-blue-500 rounded-md p-8 flex flex-col justify-evenly font-poppins'>
      <div className='flex flex-row'>
        <div className='flex flex-col w-full'>
          <div>Status : {props.element.resource.status || <>Null</>}</div>
          <div>Date-Time : {effectiveDateTimeStr || <>Null</>}</div>
          {props.element.resource.code.coding.map((position, index) => {
            return (
              <div>
                <p>Code : {position.code || <>Null</>}</p>
                <p> Display : {position.display || <>Null</>} </p>
                <p>System : {position.system || <>Null</>}</p>
              </div>
            );
          })}
          <div>
            Value : {props.element.resource.valueQuantity.value || <>Null</>}{" "}
            {props.element.resource.valueQuantity.unit}
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <button onClick={handleEdit}>
            <Edit className='fill-white w-8 hover:w-12 hover:transition-all hover:duration-300'></Edit>
          </button>
          <button onClick={deleteObservation}>
            <Delete className='fill-white w-8 hover:w-12 hover:transition-all hover:duration-300'></Delete>
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
