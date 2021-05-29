import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, IconButton, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { GetApp, Code, Visibility } from "@material-ui/icons";
import { ReactSortable } from "react-sortablejs";
import Ajv from "ajv";

import Sidebar from "../Sidebar";
import fields from "../Sidebar/types";
import InputGroup from "../InputGroup";
import schema from "./schema";
import Form from "../Form";

const ajv = new Ajv();

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#D4D4D4",
    // padding: "40px",
  },
  paper: {
    // borderRadius: theme.spacing(2),
  },
  item: {
    height: "100vh",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  main: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F9F9F9",
    borderRadius: theme.spacing(0, 2, 2, 0),
  },
  header: {
    display: "flex",
    maxHeight: "20%",
    backgroundColor: "white",
    lineHeight: 2,
    fontFamily: "'Lexend Deca', sans-serif",
    padding: theme.spacing(1, 2),
    borderRadius: theme.spacing(0, 2, 0, 0),
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  },
  content: {
    padding: "20px 40px",
    overflowY: "auto",
    maxHeight: "75%",
    minHeight: "75%",
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
  saveBtn: {
    color: "white",
    borderRadius: theme.spacing(5),
    backgroundColor: "dodgerblue",
    margin: theme.spacing(2.5, 1.5),
    fontFamily: "'Lexend Deca', sans-serif",
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
      backgroundColor: "dodgerblue",
    },
  },
}));

/**
 * FormBuilder
 * @description FormBuilder to create drag & drop form fields
 * @returns json
 */
export default function FormBuilder({className, style}) {
  // state of forbuilder
  const [form, setForm] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);
  const classes = useStyles();

  const [notification, setNotification] = useState(false);

  const maxIndex = form.length;

  /* Core functions */
  const editInputGrp = (index, changes) => {
    const newForm = [...form];
    newForm[index] = changes;

    setForm(newForm);
  };

  const deleteInputGrp = (id) => {
    const newForm = form.filter((its) => its.id !== id);
    setForm(newForm);
  };

  const reArrange = (id, idx, direction) => {
    let rearranged = [...form];
    let n_udx;
    if (direction === "up") {
      n_udx = Math.max(0, idx - 1);
    } else {
      n_udx = Math.min(maxIndex, idx + 1);
    }
    if (n_udx === idx) {
      return;
    }
    if (n_udx !== undefined) {
      const swap_this = { ...form[idx] };
      const swap_that = { ...form[n_udx] };

      rearranged[idx] = swap_that;
      rearranged[n_udx] = swap_this;
      setForm(rearranged);
    }
  };
  /* Core functions */

  /* Drag Drop functions */
  const onDragStart = (event, inputName) => {
    event.dataTransfer.setData("field", inputName);
  };
  const onDragOver = (event) => {
    event.preventDefault();
  };
  const onDrop = (event) => {
    if (previewMode) {
      return;
    }
    const inputType = event.dataTransfer.getData("field");

    if (inputType.trim() === "") return;

    // identify which default json to push regarding input type
    const group = {
      id: form.length + 1,
      type: inputType,
      ...fields[inputType],
      choices: fields[inputType]?.hasChild ? [fields[inputType].child] : [],
    };
    setForm((prev) => [...prev, group]);
  };

  /* Drag Drop functions */

  const getJson = () => {
    const jsonFormats = [];
    form.map((ig) => {
      return jsonFormats.push({
        id: ig.id,
        type: ig.type,
        hasChild: ig.hasChild,
        name: ig.name,
        choices: ig.choices,
        required: ig.required,
      });
    });

    return jsonFormats;
  };

  const handleJSON = (event) => {
    let file = event.target.files[0];
    if (file) {
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        const content = fileReader.result;
        let jsonContent = JSON.parse(content);

        try {
          const valid = ajv.validate(schema, jsonContent);

          if (valid) {
            // append properties
            const newForm = [];
            jsonContent?.map((ig) => {
              return newForm.push({ ...fields[ig.type], ...ig });
            });
            setForm(newForm);
          } else {
            console.warn(ajv.errors);
            setNotification(true);
          }
        } catch (err) {
          console.error(err);
        }
      };
      fileReader.readAsText(file);
    }
  };

  // it wraps, sidebar along with its content, main drop area
  return (
    // <Grid container spacing={3}>
    <div className={[classes.root, className].join(' ')} style={style}>
      <Paper elevation={2} className={classes.paper}>
        <Grid container spacing={0} direction="row">
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={3}
            xl={3}
            className={classes.item}
          >
            <Sidebar onDragStart={onDragStart} onDragOver={onDragOver} />
          </Grid>

          <Grid
            item
            xs={8}
            sm={8}
            md={8}
            lg={9}
            xl={9}
            className={classes.item}
          >
            <div
              className={classes.main}
              onDragOver={onDragOver}
              onDrop={onDrop}
              draggable={false}
            >
              <div className={classes.header}>Form Builder</div>
              {previewMode ? (
                <div className={classes.content}>
                  <Form src={getJson()} onChange={(e) => console.log(e)} />
                </div>
              ) : (
                <ReactSortable
                  list={form}
                  setList={setForm}
                  animation={1000}
                  className={classes.content}
                >
                  {form.map((group, index) => {
                    return (
                      <InputGroup
                        key={group.id}
                        input={group}
                        index={index}
                        maxIndex={maxIndex}
                        onDelete={deleteInputGrp}
                        onReArrange={reArrange}
                        onEdit={editInputGrp}
                      />
                    );
                  })}
                </ReactSortable>
              )}

              <div
                className={classes.row}
                style={{ justifyContent: "space-between" }}
              >
                <div className={classes.row}>
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.saveBtn}
                    onClick={() => console.log(getJson())}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    disabled={form.length === 0}
                    className={classes.saveBtn}
                    style={{ backgroundColor: "#34495E" }}
                    href={`data:text/json;charset=utf-8,${encodeURIComponent(
                      JSON.stringify(getJson())
                    )}`}
                    startIcon={<GetApp />}
                    download="formis.json"
                  >
                    Json
                  </Button>
                  <Button
                    variant="outlined"
                    component="label"
                    size="small"
                    className={classes.saveBtn}
                    style={{ backgroundColor: "#16A085" }}
                    startIcon={<Code />}
                  >
                    Upload Json
                    <input type="file" onChange={handleJSON} hidden />
                  </Button>
                </div>

                <IconButton
                  variant="outlined"
                  component="label"
                  size="small"
                  className={classes.saveBtn}
                  style={{ backgroundColor: "#1B2631" }}
                  onClick={() => setPreviewMode(!previewMode)}
                >
                  <Visibility style={{ fontSize: 14, padding: 5 }} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={notification}
          onClose={() => setNotification(false)}
          autoHideDuration={4000}
          key={"notification"}
        >
          <Alert onClose={() => setNotification(false)} severity="error">
            Json Validation Errors{" "}
          </Alert>
        </Snackbar>
      </Paper>
    </div>
  );
}
