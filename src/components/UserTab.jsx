import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserTab = (props) => {
  return (
    <>
      <div className='flex bg-blue-500 text-white justify-evenly rounded-md p-5 mb-4 drop-shadow font-poppins'>
        <div>{props.serial}</div>|<div>{props.name}</div>|<div>{props.age}</div>
        |<div>{props.bloodgroup}</div>|<div>{props.sex}</div>
      </div>
    </>
  );
};

export default UserTab;
