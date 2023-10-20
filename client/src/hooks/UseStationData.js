import { useState, useEffect } from "react";
import axios from "axios";

export function useStationData() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    axios
      .get("/trains/stations")
      .then((response) => {
        setStations(response.data);
      })
      .catch((err) => {
        console.log("Something has gone wrong retrieving the list of stations. ", err);
      });
  }, []);

  return { stations };
}
