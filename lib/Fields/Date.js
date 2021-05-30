import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControl: {
    width: "100%",
    padding: 2,
    borderRadius: theme.shape.borderRadius,
    "& .MuiInput-root": {
      border: "1px solid rgba(0, 0, 0, 0.3)",
      "&": {
        borderColor: "rgb(33, 150, 243)",
      },
      "&:hover": {
        borderColor: "rgb(33, 150, 243)",
      },
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "rgba(33, 150, 243, 0.1)",
    },
  },
  typography: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: 14,
  },
}));

export default function Date({ name, value, onChange }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.typography} style={{ padding: "10px 0px" }}>
        {name}
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className={[classes.formControl, classes.typography].join(" ")}
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="dense"
          value={value}
          onChange={(e) => onChange({ value: e })}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          onErrorCapture={(e) => onChange({ value, error: e })}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
