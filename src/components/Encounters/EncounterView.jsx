import { Edit, Delete } from "@styled-icons/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Encounter = (props) => {
  const params = useParams();

  const [encounter, setEncounter] = useState();

  async function fetchEncounter() {
    try {
      const response = await axios.get(
        `http://34.131.157.197/encounters/${params.encounterid}`
      );

      setEncounter(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchEncounter();
  }, [params.encounterId]);

  if (encounter) {
    const start = new Date(encounter?.period?.start);
    const startDate = start.toLocaleString();
    const end = new Date(encounter?.period?.end);
    const endDate = end.toLocaleString();
    props.handleEncounter(encounter);

    return (
      <div className="flex flex-col bg-blue-300 rounded-b-lg p-6 gap-4">
        <div className="flex justify-between">
          <p className="font-dmserif text-white md:text-[45px] text-3xl">
            Encounter
          </p>
          <button onClick={props.handleEdit}>
            <Edit className="fill-white w-8 hover:w-12 hover:transition-all hover:duration-300" />
          </button>
        </div>
        <div className="p-8 gap-2 bg-blue-500 rounded-lg md:text-xl text-lg">
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>
              Status:{" "}
              {encounter.status.charAt(0).toUpperCase() +
                encounter.status.slice(1)}
            </div>
            <div></div>
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Location: Bangalore</div>
            <div></div>
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Period Start: {startDate || <>Nil</>}</div>
            <div></div>
          </div>
          <div className="px-6 py-2 flex flex-row justify-between">
            <div>Period End: {endDate || <>Nil</>}</div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
};

export default Encounter;
