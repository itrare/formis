"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Fields = require("../Fields");

var values = {
  text: {
    Component: _Fields.Text
  },
  largeText: {
    Component: _Fields.LargeText
  },
  date: {
    Component: _Fields.Date
  },
  select: {
    Component: _Fields.Select
  },
  radio: {
    Component: _Fields.Radio
  },
  checkbox: {
    Component: _Fields.Checkbox
  },
  numeric: {
    Component: _Fields.Numeric
  },
  email: {
    Component: _Fields.Email
  }
};
var _default = values;
exports.default = _default;