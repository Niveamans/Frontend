import ObservationDetails from "./ObservationDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ObservationView = (props) => {
  const params = useParams();
  const [observations, setObservations] = useState([]);

  async function allObservations() {
    try {
      setObservations([]);
      const response = await axios.get(
        `http://34.131.154.157/observations?encounter=${params.encounterid}`,
        {
          headers: {
            function: `getObservations`,
          },
        }
      );
      setObservations(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    allObservations();
  }, [props.encounterId]);

  return (
    <div className='md:w-[80%] w-full flex flex-col p-6 bg-blue-300 rounded-b-lg font-poppins gap-2'>
      <div className='flex flex-row justify-between items-center mb-4'>
        <p className='text-[45px] font-dmserif text-white px-8'>Observations</p>
        <button
          onClick={props.handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:transition-all hover:duration-300 "
        >
          Add Observation
        </button>
      </div>

      {observations.length !== 0 ? (
        observations.map((element, index) => (
          <ObservationDetails element={element} key={index} />
        ))
      ) : (
        <p className="ml-8 ">Oops! No observations found</p>
      )}
    </div>
  );
};

export default ObservationView;
