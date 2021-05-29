import React from "react";
import Radio from "@material-ui/core/Radio";
import RG from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  formControl: {
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    "& .MuiTypography-root": {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: 14,
    },
  },
  typography: {
    fontFamily: "'Lexend Deca', sans-serif",
    fontSize: 14,
  },
}));

export default function RadioGroup({ name, value, onChange, choices }) {
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
      <FormControl component="fieldset" className={classes.formControl}>
        <RG
          key={value}
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={(event) => handleChange(event)}
          className={classes.typography}
        >
          {choices?.map((option) => (
            <FormControlLabel
              key={option.name}
              value={option.name}
              control={<Radio />}
              label={option.name}
              className={classes.typography}
            />
          ))}
        </RG>
      </FormControl>
    </div>
  );
}
