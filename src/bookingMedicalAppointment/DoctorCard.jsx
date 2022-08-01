import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import doctorIcon from "../Images/doctorIcon.jpg";
import PatitentInformationModal from "./PatitentInformationModal";

import Tooltip from "@mui/material/Tooltip";

export default function MediaCard(props) {
  const [clicked, setClicked] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleBook = () => {
    setClicked(!clicked);
    setOpen(true);
    props.setBook(props.index);
  };
  const handleClose = () => setOpen(false);
  return (
    <Grid item xs={4}>
      <Card>
        <img src={doctorIcon} alt="boom" height={140} width={140} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.item.Department}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "center", pb: "2rem" }}>
          <Tooltip title={props.item.slot} arrow>
            <Button
              sx={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                border: 0,
                borderRadius: 3,
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                color: "white",
                height: 28,
                padding: "10px 30px",
              }}
              onClick={handleBook}
            >
              {props.index === props.book ? "Booked" : "Book Slot"}
            </Button>
          </Tooltip>

          {open && (
            <PatitentInformationModal
              handleClose={handleClose}
              open={open}
              item={props.item}
              handleConfirm={props.handleConfirm}
              userData={props.userData}
            />
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
