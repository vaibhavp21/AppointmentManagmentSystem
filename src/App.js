import logo from "./logo.svg";
import "./App.css";
import DoctorCard from "./bookingMedicalAppointment/DoctorCard";
import Maindoc from "./Images/Maindoc.jpg";
import Grid from "@mui/material/Grid";
import { useState } from "react";
function App() {
  const listOfProfessionals = [
    {
      id: 1,
      name: "Dr Raj",
      Department: "Cardiologist",
      contactNumber: "(02) 9876 5432",
      MinTime: new Date(0, 0, 0, 9),
      MaxTime: new Date(0, 0, 0, 10),
      slot: "Slot is available from 9:00-10:00 am",
      description:
        "As we get involved in the emotional healing of others, we get healed.",
    },
    {
      id: 2,
      name: "Dr Ram ",
      Department: "Dermatologist",
      contactNumber: "(02) 6667 5472",
      MinTime: new Date(0, 0, 0, 10),
      MaxTime: new Date(0, 0, 0, 11),
      slot: "Slot is available from 10:00-11:00 am",
      description:
        " The fact that your patient gets well does not prove that your diagnosis  was correct.",
    },
    {
      id: 3,
      name: "Dr Shaw",
      Department: "Gynaecologist",
      contactNumber: "(02) 9999 7777",
      MinTime: new Date(0, 0, 0, 11),
      MaxTime: new Date(0, 0, 0, 12),
      slot: "Slot is available from 11:00-12:00 pm",
      description:
        "That physician will hardly be thought very careful of the health of others who neglects his own.",
    },
    {
      id: 4,
      name: "Dr Hobbs",
      Department: "Psychiatrist",
      contactNumber: "(02) 9999 7777",
      MinTime: new Date(0, 0, 0, 2),
      MaxTime: new Date(0, 0, 0, 3),
      slot: "Slot is available from 2:00-3:00 pm",
      description: "Nature, time and patience are the 3 great physicians. ",
    },
    {
      id: 5,
      name: "Dr Shiv",
      Department: "Oncologist",
      contactNumber: "(02) 9999 7777",
      MinTime: new Date(0, 0, 0, 3),
      MaxTime: new Date(0, 0, 0, 4),
      slot: "Slot is available from 3:00-4:00 pm",
      description: "All doctors treat, but a good doctor lets nature heal.",
    },
  ];

  const [book, setBook] = useState();
  let userData = [];
  const handleConfirm = (confirmed) => {
    userData.push(confirmed);
  };
  console.log("userData", userData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Management System</h1>
        <h3>
          “Life affords no greater responsibility, no greater privilege, than
          the raising of the next generation.”
        </h3>
        <Grid
          container
          spacing={2}
          sx={{ padding: "1rem 3rem", justifyContent: "center" }}
        >
          {listOfProfessionals.map((item, index) => (
            <DoctorCard
              item={item}
              book={book}
              setBook={setBook}
              index={index}
              handleConfirm={handleConfirm}
              userData={userData}
            />
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;
