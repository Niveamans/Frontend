import React, { useState } from "react";
import Modal from "react-modal";
import { Close } from "@styled-icons/material";
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

const ModalTemplate = ({children, openModal, closeModal, open, data, handleSave }) => {
  return (
    <div>
      {open ? (
        <Modal
          isOpen={open}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
          className='bg-blue-300 rounded-lg p-5 px-8 relative overflow-y-scroll mt-4'
        >
         <Close
          onClick={closeModal}
          className='w-6 h-6  text-blue-900 hover:cursor-pointer absolute left-[90%] top-2 bottom-[90%]'
        ></Close>
         
        
        {children}
        
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ModalTemplate;
