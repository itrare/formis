"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Text;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    contextInput: {
      fontSize: 10,
      width: "100%",
      "& label": {
        color: "#000000"
      },
      "& label.Mui-focused": {
        color: "#0288D1"
      },
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
      },
      transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
      "& .MuiInputBase-input": {
        fontFamily: "'Lexend Deca', sans-serif",
        transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
        fontSize: 14
      }
    },
    typography: {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: 14
    }
  };
});

function Text(_ref) {
  var name = _ref.name,
      value = _ref.value,
      _onChange = _ref.onChange;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typography,
    style: {
      padding: "20px 0px"
    }
  }, name), /*#__PURE__*/_react.default.createElement(_core.TextField, {
    className: classes.contextInput,
    variant: "outlined",
    size: "small",
    value: value,
    onChange: function onChange(e) {
      return _onChange({
        value: e.target.value
      });
    },
    fullWidth: true
  }));
}