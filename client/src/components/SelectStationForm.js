import React from "react";
import { Button, FormControl, MenuItem, Select } from "@mui/material";

function SelectStationForm({stations, onSubmit}) {
  const [station, setStation] = React.useState("");

  const handleStationChange = (event) => {
    setStation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(station)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined">
          <Select
            id="stations"
            value={station}
            sx={{ width: 300 }}
            onChange={handleStationChange}
          >
            {stations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" variant="outline" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
}

export default SelectStationForm;
