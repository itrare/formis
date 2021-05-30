import React from "react";
import { Paper, Button, IconButton, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Close,
  ArrowUpward,
  RemoveCircleOutline,
  AddCircleOutline,
  ArrowDownward,
  DragIndicator,
} from "@material-ui/icons";

import types from "../Sidebar/types";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    borderRadius: 10,
    margin: "30px 0",
    fontFamily: "'Lexend Deca', sans-serif",
    boxShadow: "0px 1px 11px 2px rgba(0, 0, 0, 0.25)",
    cursor: "grab",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing(1, 1, 0, 1),
  },
  row: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    padding: 0,
  },
  body: {
    padding: theme.spacing(1, 2),
  },
  button: {
    margin: theme.spacing(1),
    fontSize: 9,
    borderRadius: 6,
    fontFamily: "'Lexend Deca', sans-serif",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
    },
  },
  contextInput: {
    fontSize: 10,
    "& label": {
      color: "#000000",
      fontSize: 13,
      fontFamily: "'Lexend Deca', sans-serif",
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
      borderRadius: theme.spacing(1),
    },
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "& .MuiInputBase-input": {
      fontFamily: "'Lexend Deca', sans-serif",
      paddingRight: "110px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      fontSize: 14,
    },
  },
  childInput: {
    margin: theme.spacing(1),
    fontSize: 10,
    "& label": {
      color: "#000000",
      fontSize: 12,
      fontFamily: "'Lexend Deca', sans-serif",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.spacing(1),
      "&.Mui-focused fieldset": {
        borderColor: "rgb(33, 150, 243)",
      },
    },
    "& .MuiInputBase-input": {
      fontFamily: "'Lexend Deca', sans-serif",
      padding: theme.spacing(1, 2),
      lineHeight: 2,
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      fontSize: 14,
    },
  },
  typeAbs: {
    position: "absolute",
    left: "calc(100% - 115px)",
    backgroundColor: "rgba(55, 65, 81, 1)",
    borderRadius: 5,
    backdropFilter: "blur(1px)",
    fontSize: 10,
    fontVariant: "small-caps",
    minWidth: 100,
    color: "white",
    margin: theme.spacing(0.75),
  },
}));

export default function InputGroup({
  input,
  index,
  maxIndex,
  onEdit,
  onDelete,
  onReArrange,
}) {
  const classes = useStyles();

  const ComponentIcon = input.Icon;

  const addChild = (idx) => {
    // default child
    const spawnChild = types[input.type].child;

    const newChoices = [...input.choices];

    newChoices.splice(idx + 1, 0, spawnChild);

    const edited = {
      ...input,
      choices: newChoices,
    };
    return onEdit(index, edited);
  };

  const removeChild = (idx) => {
    // also handles if no element in child for input it will revert back to text type "input"
    if (idx === 0 && input.choices.length < 2) {
      // atleast one child should be there, else change its type to text
      const edited = {
        ...input,
        ...types["text"],
        choices: false,
        hasChild: false,
      };

      return onEdit(index, edited);
    }
    let newChoices = [...input.choices];

    newChoices = newChoices.filter((item, inx) => inx !== idx);

    const edited = {
      ...input,
      choices: newChoices,
    };
    return onEdit(index, edited);
  };

  const contextInputEdit = (event) => {
    const edited = {
      ...input,
      name: event.target.value,
    };
    return onEdit(index, edited);
  };

  const childInputEdit = (idx, event) => {
    let newChoices = [...input.choices];

    newChoices[idx] = {
      ...newChoices[idx],
      name: event.target.value,
    };

    const edited = {
      ...input,
      choices: newChoices,
    };
    return onEdit(index, edited);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.header}>
        <div className={classes.row}>
          <IconButton>
            <DragIndicator
              style={{
                fontSize: 16,
                padding: "2px",
                cursor: "grab",
              }}
            />
          </IconButton>
        </div>
        <div className={classes.row}>
          <IconButton
            aria-label="up"
            disabled={index === 0}
            onClick={() => onReArrange(input.id, index, "up")}
          >
            <ArrowUpward
              style={{
                color: "#035162",
                fontSize: 16,
                padding: 2,
              }}
            />
          </IconButton>
          <IconButton
            aria-label="down"
            disabled={index === maxIndex - 1}
            onClick={() => onReArrange(input.id, index, "down")}
          >
            <ArrowDownward
              style={{
                color: "#035162",
                fontSize: 16,
                padding: 2,
              }}
            />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => onDelete(input.id)}>
            <Close
              style={{
                color: "#035162",
                fontSize: 16,
                padding: 2,
              }}
            />
          </IconButton>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.row}>
          <TextField
            className={classes.contextInput}
            label={input.label}
            value={input.name}
            variant="outlined"
            size="small"
            onChange={contextInputEdit}
            fullWidth
          ></TextField>
          <Button variant="text" size="small" className={classes.typeAbs}>
            {input.type}
          </Button>
        </div>
        {input?.hasChild && (
          <div style={{ margin: "10px 5px" }}>
            {input?.choices.length &&
              input.choices.map((child, i) => {
                return (
                  <div
                    className={classes.row}
                    key={i}
                    style={{ padding: "0px 5px" }}
                  >
                    <ComponentIcon
                      style={{
                        color: "#035162",
                        fontSize: 20,
                        margin: "14px 5px",
                      }}
                    />
                    <TextField
                      className={classes.childInput}
                      label={child.label}
                      value={child.name}
                      onChange={(event) => childInputEdit(i, event)}
                      variant="outlined"
                      size="small"
                      fullWidth
                    ></TextField>
                    <IconButton
                      aria-label="add"
                      title="Insert below"
                      onClick={() => addChild(i)}
                      style={{ padding: "0px 16px" }}
                    >
                      <AddCircleOutline
                        style={{
                          color: "#0069A4",
                          fontSize: 16,
                          padding: 0,
                        }}
                      />
                    </IconButton>
                    <IconButton
                      aria-label="remove"
                      onClick={() => removeChild(i)}
                      style={{ padding: "0px 16px" }}
                    >
                      <RemoveCircleOutline
                        style={{
                          color: "#6F6B6B",
                          fontSize: 16,
                          padding: 0,
                        }}
                      />
                    </IconButton>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </Paper>
  );
}
