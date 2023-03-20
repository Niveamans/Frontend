import React, { useState } from "react";
import Modal from "react-modal";
import EditForm from "./EditForm";

const customStyles = {
  content: {
    width: "max-content",
    marginLeft: "auto",
    marginRight: "auto",
    height: "max-content",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#root');

const EditModal = ({ openModal, closeModal, open, handleSave, data }) => {
  return (
    <div>
      {open ? (
        <Modal
          isOpen={open}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
          className='bg-blue-300 rounded-lg p-5 px-8'
        >
          <EditForm
            data={data}
            handleSave={handleSave}
            closeModal={closeModal}
          ></EditForm>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EditModal;
