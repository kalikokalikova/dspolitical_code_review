import React from "react";
import ArrivalInfoDisplayList from "./ArrivalInfoDisplayList";
import { useStationData } from "../hooks/UseStationData";
import TrainStationForm from "./SelectStationForm";
import axios from "axios";

function TrainArrivalInfoComponent() {
  const { stations } = useStationData();
  const [arrivalInfo, setArrivalInfo] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null)

  const handleSubmit = (station) => {
    axios
      .get(`/trains/get-arrival-info/${station}`)
      .then((response) => {
        setArrivalInfo(response.data);
      })
      .catch((err) => {
        console.log("there's an error and here it is: ", err);
        setErrorMessage("This information is currently unavailable, please try again later.")
      });
  };

  return (
    <>
      <TrainStationForm stations={stations} onSubmit={handleSubmit} />
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <ArrivalInfoDisplayList arrivalInfo={arrivalInfo} />
      )}
    </>
  );
}

export default TrainArrivalInfoComponent;
