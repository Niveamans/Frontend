import React, { useState } from 'react'
import Modal from 'react-modal';
import EditForm from './EditForm';
import { Close } from '@styled-icons/material';

const customStyles = {
    content: {
     width:"max-content",
     marginLeft : "auto",
     marginRight : "auto",
     height: "max-content"

     
    
    },
  };
  
  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  //Modal.setAppElement('#root');
  


const EditModal = ({openModal,closeModal,open,handleSave,data}) => {
 

  
  return (
    <div>
    
    
    {
        open ? <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <Close onClick={closeModal} className="w-6 h-6 relative left-[94%]"></Close> 
         <EditForm data={data} handleSave={handleSave}></EditForm>
        
        
        
        </Modal> : <></>
    }
    </div>
  )
}

export default EditModal