import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, withStyles } from "@material-ui/core/styles";

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
    padding: "20px 0px",
  },
}));

const RJCheckbox = withStyles({
  root: {
    color: "gray",
    "&$checked": {
      color: "rgb(33, 150, 243)",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxGroup({ name, choices, onChange }) {
  const classes = useStyles();

  const handleChange = (i, event) => {
    // onChange({ ...choices, [event.target.name]: event.target.checked });
    const changes = [...choices];
    changes[i] = { ...changes[i], value: event.target.checked };
    onChange({ choices: changes });
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
        <FormGroup>
          {choices?.map((option, i) => (
            <FormControlLabel
              key={option.name}
              control={
                <RJCheckbox
                  key={i}
                  checked={option.value}
                  name={option.name}
                  onChange={(e) => handleChange(i, e)}
                />
              }
              label={option.name}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}
