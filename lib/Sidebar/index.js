import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Ballot } from "@material-ui/icons";

import fields from "./types";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "#F9F9F9",
    borderRadius: theme.spacing(2, 0, 0, 2),
    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
  },
  scrollview: {
    padding: theme.spacing(1.5, 1.5, 2, 1.5),
    overflowY: "auto",
    maxHeight: "85%",
    "&::-webkit-scrollbar": {
      width: "10px",
      borderRadius: 5,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "white",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#BDC3C7",
      borderRadius: 12,
      "&:hover": {
        backgroundColor: "#85929E",
      },
    },
  },
  field: {
    display: "flex",
    padding: "8px 20px",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: theme.shape.borderRadius,
    fontSize: 11,
    lineHeight: 3,
    width: "calc(100% - 40px)",
    justifyContent: "flex-start",
    fontFamily: "'Lexend Deca', sans-serif",
    cursor: "grab",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "rgba(42, 146, 205, 0.4)",
      transition: "ease-in-out",
      boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    },
    "&:active": {
      border: "2px solid dodgerblue",
    },
  },
  icon: {
    backgroundColor: "#F0F0F0",
    marginRight: 15,
    padding: 6,
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  header: {
    display: "flex",
    maxHeight: "20%",
    backgroundColor: "white",
    lineHeight: 2,
    fontFamily: "'Lexend Deca', sans-serif",
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(2, 0, 0, 0),
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  },
}));

export default function Sidebar({ onDragStart, onDragOver }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Ballot
          className={classes.icon}
          fontSize="small"
          style={{ color: "dodgerblue" }}
        />{" "}
        Fields
      </div>
      <div className={classes.scrollview}>
        {Object.keys(fields).map((field, i) => {
          const Icon = fields[field].Icon;
          return (
            <Box
              key={i}
              className={classes.field}
              onDragStart={(event) => onDragStart(event, fields[field].type)}
              onDragOver={onDragOver}
              draggable
            >
              <Icon
                fontSize={"small"}
                className={classes.icon}
                style={{
                  backgroundColor: fields[field].bg,
                  color: fields[field].fg,
                }}
              />
              {fields[field].field_name}
            </Box>
          );
        })}
      </div>
    </div>
  );
}
