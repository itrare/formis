"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioGroup;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    formControl: {
      width: "100%",
      borderRadius: theme.shape.borderRadius,
      "& .MuiTypography-root": {
        fontFamily: "'Lexend Deca', sans-serif",
        fontSize: 14
      }
    },
    typography: {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: 14
    }
  };
});

function RadioGroup(_ref) {
  var name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      choices = _ref.choices;
  var classes = useStyles();

  var handleChange = function handleChange(event) {
    onChange({
      value: event.target.value
    });
  };

  if (!choices.length) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typography,
    style: {
      padding: "20px 0px"
    }
  }, name), /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    component: "fieldset",
    className: classes.formControl
  }, /*#__PURE__*/_react.default.createElement(_RadioGroup.default, {
    key: value,
    "aria-label": "gender",
    name: "gender1",
    value: value,
    onChange: function onChange(event) {
      return handleChange(event);
    },
    className: classes.typography
  }, choices === null || choices === void 0 ? void 0 : choices.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
      key: option.name,
      value: option.name,
      control: /*#__PURE__*/_react.default.createElement(_Radio.default, {
        style: {
          color: "dodgerblue"
        }
      }),
      label: option.name,
      className: classes.typography
    });
  }))));
}