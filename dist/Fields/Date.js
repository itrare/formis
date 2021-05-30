"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Date;

var _react = _interopRequireDefault(require("react"));

var _pickers = require("@material-ui/pickers");

var _styles = require("@material-ui/core/styles");

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    formControl: {
      width: "100%",
      padding: 2,
      borderRadius: theme.shape.borderRadius,
      "& .MuiInput-root": {
        padding: 8,
        fontSize: 14,
        fontFamily: "'Lexend Deca', sans-serif",
        border: "1px solid rgba(0, 0, 0, 0.3)",
        "&": {
          borderColor: "rgb(33, 150, 243)"
        },
        "&:hover": {
          borderColor: "rgb(33, 150, 243)"
        },
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "rgba(33, 150, 243, 0.1)"
      }
    },
    typography: {
      fontFamily: "'Lexend Deca', sans-serif",
      fontSize: 14
    }
  };
});

function Date(_ref) {
  var name = _ref.name,
      value = _ref.value,
      _onChange = _ref.onChange;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.typography,
    style: {
      padding: "10px 0px"
    }
  }, name), /*#__PURE__*/_react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _dateFns.default
  }, /*#__PURE__*/_react.default.createElement(_pickers.KeyboardDatePicker, {
    className: [classes.formControl, classes.typography].join(" "),
    disableToolbar: true,
    variant: "inline",
    format: "dd/MM/yyyy",
    margin: "dense",
    value: value,
    onChange: function onChange(e) {
      return _onChange({
        value: e
      });
    },
    KeyboardButtonProps: {
      "aria-label": "change date"
    },
    onErrorCapture: function onErrorCapture(e) {
      return _onChange({
        value: value,
        error: e
      });
    }
  })));
}