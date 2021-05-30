"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckboxGroup;

var _react = _interopRequireDefault(require("react"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
      fontSize: 14,
      padding: "20px 0px"
    }
  };
});
var RJCheckbox = (0, _styles.withStyles)({
  root: {
    color: "gray",
    "&$checked": {
      color: "rgb(33, 150, 243)"
    }
  },
  checked: {}
})(function (props) {
  return /*#__PURE__*/_react.default.createElement(_Checkbox.default, _extends({
    color: "default"
  }, props));
});

function CheckboxGroup(_ref) {
  var name = _ref.name,
      choices = _ref.choices,
      onChange = _ref.onChange;
  var classes = useStyles();

  var handleChange = function handleChange(i, event) {
    // onChange({ ...choices, [event.target.name]: event.target.checked });
    var changes = _toConsumableArray(choices);

    changes[i] = _objectSpread(_objectSpread({}, changes[i]), {}, {
      value: event.target.checked
    });
    onChange({
      choices: changes
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
  }, /*#__PURE__*/_react.default.createElement(_FormGroup.default, null, choices === null || choices === void 0 ? void 0 : choices.map(function (option, i) {
    return /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
      key: option.name,
      control: /*#__PURE__*/_react.default.createElement(RJCheckbox, {
        key: i,
        checked: option.value,
        name: option.name,
        onChange: function onChange(e) {
          return handleChange(i, e);
        }
      }),
      label: option.name
    });
  }))));
}