import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  contextInput: {
    fontSize: 10,
    width: "100%",
    "& label": {
      color: "#000000",
    },
    "& label.Mui-focused": {
      color: "#0288D1",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(33, 150, 243)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(33, 150, 243)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(33, 150, 243)",
      },
      borderRadius: theme.shape.borderRadius,
    },
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "& .MuiInputBase-input": {
      fontFamily: "'Lexend Deca', sans-serif",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      fontSize: 14,
    },
  },
  typography: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: 14,
    padding: "20px 0px",
  },
}));

export default function Email({ name, value, onChange }) {
  const classes = useStyles();

  function validateEmail(email) {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return false;
    }
    return true;
  }
  const validation = validateEmail(value);
  return (
    <div className={classes.root}>
      <div className={classes.typography} style={{ padding: "20px 0px" }}>
        {name}
      </div>
      <TextField
        error={validation}
        type="email"
        variant="outlined"
        size="small"
        className={classes.contextInput}
        value={value}
        onChange={(e) => onChange({ value: e.target.value, error: validation })}
      />
    </div>
  );
}
