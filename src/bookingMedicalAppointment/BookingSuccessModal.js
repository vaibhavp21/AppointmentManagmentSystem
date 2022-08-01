import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Docfinal from "../Images/Docfinal.png";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BookingSuccessModal(props) {
  console.log("userData={props.userData}", props.userData);
  return (
    <Modal
      open={props.success}
      onClose={props.handleSuccess}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid Container sx={{ justifyContent: "center", display: "flex" }}>
          <img src={Docfinal} height="auto" width="auto" />
        </Grid>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h2"
          sx={{ textAlign: "center", padding: "1rem 0" }}
        >
          Appointment scheduled.
        </Typography>

        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center", padding: "1rem 0" }}
        >
          Your Appointment has been scheduled. Please contact our customer care
          support team in case of any queries.
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ padding: "0.25rem" }}
        >
          PatitentName : {props.userData[0].FName} {props.userData[0].LName}
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ padding: "0.25rem" }}
        >
          Doctor Name : {props.name} ({props.Department})
        </Typography>
      </Box>
    </Modal>
  );
}
