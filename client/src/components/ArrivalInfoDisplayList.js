import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ArrivalInfoDisplayList(arrivalInfo) {
  if (arrivalInfo['arrivalInfo'].length === 0) {
    return;
  } else {
    return (
      <Box sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
        <nav>
          <List>
            {arrivalInfo['arrivalInfo'].map((arrival, index) => {
              let s = `${arrival.cars} car train ${arrival.line} line to ${arrival.destinationName} arriving in ${arrival.mins} minutes`;
              return (
                <ListItem key={index}>
                  <ListItemText primary={s} />
                </ListItem>
              );
            })}
          </List>
        </nav>
      </Box>
    );
  }
}
