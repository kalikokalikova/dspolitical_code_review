import * as React from "react";
import Typography from "@mui/material/Typography";
import TrainArrivalInfoComponent from "../components/TrainArrivalInfoComponent";

function LandingPage() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Greetings, weary traveler
      </Typography>
      <Typography variant="body1" gutterBottom>
        Select a station to check the train arrival times.
      </Typography>
      <TrainArrivalInfoComponent/>
    </>
  );
}

export default LandingPage;
