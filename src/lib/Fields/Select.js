import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControl: {
    width: "100%",

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
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  typography: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: 14,
  },
}));

export default function SelectGroup({ name, value, onChange, choices }) {
  const classes = useStyles();
  const handleChange = (event) => {
    onChange({ value: event.target.value });
  };

  if (!choices.length) {
    return <></>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.typography} style={{ padding: "20px 0px" }}>
        {name}
      </div>
      <FormControl
        variant="outlined"
        className={classes.formControl}
        size="small"
      >
        <InputLabel
          className={classes.typography}
        >
          Choice
        </InputLabel>
        <Select
          value={value}
          key={value}
          onChange={(event) => handleChange(event)}
          className={classes.typography}
          label="Age"
        >
          {choices?.map((option) => (
            <MenuItem
              key={option.name}
              value={option.name}
              className={classes.typography}
            >
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
