import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PatitentInformation from "./PatitentInformation";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import BookingSuccessModal from "./BookingSuccessModal";
import { useState } from "react";

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

export default function PatitentInformationModal(props) {
  const [success, setSuccess] = useState(false);
  const [userValue, setUserValue] = useState({
    FName: "",
    LName: "",
    Email: "",
    Phone: null,
    DoctorName: "",
    Department: "",
    Date: "",
    Time: "",
  });
  const handleBooking = () => {
    setSuccess(!success);
    props.handleConfirm(userValue);
    // props.handleClose();
  };

  const handleSuccess = () => setSuccess(false);
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ textAlign: "center", padding: "1rem 0" }}
          >
            Patitent Information
          </Typography>

          <PatitentInformation
            MinTime={props.item.MinTime}
            maxTime={props.item.MaxTime}
            item={props.item}
            userValue={userValue}
            setUserValue={setUserValue}
          />
          <Grid container sx={{ paddingTop: "2rem ", display: "flex" }}>
            <Grid item xs={6} sx={{ justifyContent: "flex-start" }}>
              <Button
                sx={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  border: 0,
                  borderRadius: 3,
                  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                  color: "white",
                  height: 28,
                  padding: "1rem 2rem",
                }}
                onClick={props.handleClose}
              >
                Back
              </Button>
            </Grid>
            <Grid item xs={6} sx={{ justifyContent: "flex-end" }}>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  sx={{
                    background:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    border: 0,
                    borderRadius: 3,
                    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                    color: "white",
                    height: 28,
                    padding: "1rem 2rem",
                  }}
                  // onClick={() => {
                  //   props.handleConfirm(userValue);
                  //   setSuccess(true);
                  //   props.handleClose();
                  //   console.log("sucess", success);
                  // }}
                  onClick={handleBooking}
                >
                  Confirm your booking
                </Button>
                {success && (
                  <BookingSuccessModal
                    success={success}
                    handleSuccess={handleSuccess}
                    userData={props.userData}
                    name={props.item.name}
                    Department={props.item.Department}
                  />
                )}
              </CardActions>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
