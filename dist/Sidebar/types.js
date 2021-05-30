"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icons = require("@material-ui/icons");

var types = {
  text: {
    field_name: "Text Input",
    bg: "rgba(42, 146, 205, 0.5)",
    fg: "#121F94",
    Icon: _icons.TextFields,
    type: "text",
    alt: "Text Input",
    label: "Enter your question here",
    hasChild: false,
    required: false,
    name: ""
  },
  largeText: {
    field_name: "Large Text Input",
    bg: "rgba(226, 134, 134, 0.5)",
    fg: "#BC0000",
    Icon: _icons.TextFields,
    type: "largeText",
    alt: "Large Text",
    label: "Enter your question here",
    hasChild: false,
    name: "",
    required: false
  },
  date: {
    field_name: "Date Input",
    bg: "rgba(42, 146, 205, 0.5)",
    fg: "#035162",
    Icon: _icons.DateRange,
    type: "date",
    alt: "Date Input",
    name: "",
    value: new Date(),
    label: "Enter your question here",
    hasChild: false,
    required: false
  },
  select: {
    field_name: "Select Group",
    bg: "rgba(241, 241, 241, 0.5)",
    fg: "#0066FF",
    Icon: _icons.KeyboardArrowDown,
    type: "select",
    alt: "Select Group",
    label: "Enter your question here",
    hasChild: true,
    name: "",
    child: {
      label: "Enter choice",
      name: "",
      value: ""
    },
    required: false
  },
  radio: {
    field_name: "Radio Group",
    bg: "rgba(233, 211, 155, 0.5)",
    fg: "#E0A100",
    Icon: _icons.RadioButtonUnchecked,
    type: "radio",
    alt: "Radio Group",
    label: "Enter your question here",
    hasChild: true,
    name: "",
    child: {
      label: "Enter choice",
      name: "",
      value: ""
    },
    required: false
  },
  checkbox: {
    field_name: "Checkbox Group",
    bg: "rgba(88, 88, 88, 0.5)",
    fg: "#1F0505",
    Icon: _icons.CheckBoxOutlineBlank,
    type: "checkbox",
    alt: "Checkbox Group",
    label: "Enter your question here",
    hasChild: true,
    name: "",
    child: {
      label: "Enter choice",
      name: "",
      value: false
    },
    required: false
  },
  numeric: {
    field_name: "Numeric Input",
    bg: "rgba(42, 146, 205, 0.5)",
    fg: "dodgerblue",
    Icon: _icons.Looks5,
    type: "numeric",
    alt: "Numeric Input",
    label: "Enter your question here",
    hasChild: false,
    required: false,
    name: ""
  },
  email: {
    type: "email",
    field_name: "Email Input",
    bg: "rgba(226, 134, 134, 0.5)",
    fg: "#BC0000",
    Icon: _icons.Mail,
    alt: "Email Input",
    label: "Enter your question here",
    hasChild: false,
    required: false,
    name: ""
  }
};
var _default = types;
exports.default = _default;