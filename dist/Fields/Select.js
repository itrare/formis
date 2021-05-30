"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectGroup;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    formControl: {
      width: "100%",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgb(33, 150, 243)"
        },
        "&:hover fieldset": {
          borderColor: "rgb(33, 150, 243)"
        },
        "&.Mui-focused fieldset": {
          borderColor: "rgb(33, 150, 243)"
        },
        borderRadius: theme.shape.borderRadius
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    typography: {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: 14
    }
  };
});

function SelectGroup(_ref) {
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
    variant: "outlined",
    className: classes.formControl,
    size: "small"
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    className: classes.typography
  }, "Choice"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    value: value,
    key: value,
    onChange: function onChange(event) {
      return handleChange(event);
    },
    className: classes.typography,
    label: "Age"
  }, choices === null || choices === void 0 ? void 0 : choices.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      key: option.name,
      value: option.name,
      className: classes.typography
    }, option.name);
  }))));
}