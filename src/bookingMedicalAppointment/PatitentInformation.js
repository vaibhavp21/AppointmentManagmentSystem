import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect } from "react";

export default function PatitentInformation(props) {
  const [value, setValue] = React.useState(new Date("2020-01-01 12:00"));
  const [val, setVal] = React.useState(new Date());

  // useEffect(
  //   props.setUserValue({
  //     ...props.userValue,
  //     DoctorName: props.item.name,
  //     Department: props.item.Department,
  //   }),
  //   [props.setUserValue]
  // );

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="First name"
            defaultValue={props.userValue.FName}
            onChange={(event) =>
              props.setUserValue({
                ...props.userValue,
                FName: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Last name"
            defaultValue={props.userValue.LName}
            onChange={(event) =>
              props.setUserValue({
                ...props.userValue,
                LName: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="E-mail"
            defaultValue={props.userValue.Email}
            onChange={(event) =>
              props.setUserValue({
                ...props.userValue,
                Email: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            defaultValue={props.userValue.Phone}
            onChange={(event) =>
              props.setUserValue({
                ...props.userValue,
                Phone: event.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-read-only-input"
            label="Doctor Name"
            defaultValue={props.item.name}
            InputProps={{
              readOnly: true,
            }}
            // onChange={() =>
            //   props.setUserValue({
            //     ...props.userValue,
            //     DoctorName: props.item.name,
            //   })
            // }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-read-only-input"
            label="Department"
            defaultValue={props.item.Department}
            InputProps={{
              readOnly: true,
            }}
            // onChange={(event) =>
            //   props.setUserValue({
            //     ...props.userValue,
            //     Department: event.target.value,
            //   })
            // }
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid item xs={6}>
            <DatePicker
              label="Date"
              value={val}
              onChange={(newValue) => {
                setVal(newValue);
                props.setUserValue({
                  ...props.userValue,
                  Date: newValue,
                });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item xs={6}>
            <MobileTimePicker
              renderInput={(params) => <TextField {...params} />}
              value={value}
              label="min/max time"
              onChange={(newValue) => {
                setValue(newValue);
                props.setUserValue({
                  ...props.userValue,
                  Time: newValue,
                });
              }}
              minTime={props.item.MinTime}
              maxTime={props.item.MaxTime}
            />
          </Grid>
        </LocalizationProvider>
      </Grid>
    </Box>
  );
}
