"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputGroup;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _types = _interopRequireDefault(require("../Sidebar/types"));

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

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      padding: 0,
      borderRadius: 10,
      margin: "30px 0",
      fontFamily: "'Lexend Deca', sans-serif",
      boxShadow: "0px 1px 11px 2px rgba(0, 0, 0, 0.25)",
      cursor: "grab"
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: theme.spacing(1, 1, 0, 1)
    },
    row: {
      display: "flex",
      position: "relative",
      flexDirection: "row",
      padding: 0
    },
    body: {
      padding: theme.spacing(1, 2)
    },
    button: {
      margin: theme.spacing(1),
      fontSize: 9,
      borderRadius: 6,
      fontFamily: "'Lexend Deca', sans-serif",
      opacity: 0.8,
      "&:hover": {
        opacity: 1
      }
    },
    contextInput: {
      fontSize: 10,
      "& label": {
        color: "#000000",
        fontSize: 13,
        fontFamily: "'Lexend Deca', sans-serif"
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
        borderRadius: theme.spacing(1)
      },
      transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
      "& .MuiInputBase-input": {
        fontFamily: "'Lexend Deca', sans-serif",
        paddingRight: "110px",
        transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
        fontSize: 14
      }
    },
    childInput: {
      margin: theme.spacing(1),
      fontSize: 10,
      "& label": {
        color: "#000000",
        fontSize: 12,
        fontFamily: "'Lexend Deca', sans-serif"
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: theme.spacing(1),
        "&.Mui-focused fieldset": {
          borderColor: "rgb(33, 150, 243)"
        }
      },
      "& .MuiInputBase-input": {
        fontFamily: "'Lexend Deca', sans-serif",
        padding: theme.spacing(1, 2),
        lineHeight: 2,
        transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
        fontSize: 14
      }
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
      margin: theme.spacing(0.75)
    }
  };
});

function InputGroup(_ref) {
  var input = _ref.input,
      index = _ref.index,
      maxIndex = _ref.maxIndex,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      onReArrange = _ref.onReArrange;
  var classes = useStyles();
  var ComponentIcon = input.Icon;

  var addChild = function addChild(idx) {
    // default child
    var spawnChild = _types.default[input.type].child;

    var newChoices = _toConsumableArray(input.choices);

    newChoices.splice(idx + 1, 0, spawnChild);

    var edited = _objectSpread(_objectSpread({}, input), {}, {
      choices: newChoices
    });

    return onEdit(index, edited);
  };

  var removeChild = function removeChild(idx) {
    // also handles if no element in child for input it will revert back to text type "input"
    if (idx === 0 && input.choices.length < 2) {
      // atleast one child should be there, else change its type to text
      var _edited = _objectSpread(_objectSpread(_objectSpread({}, input), _types.default["text"]), {}, {
        choices: false,
        hasChild: false
      });

      return onEdit(index, _edited);
    }

    var newChoices = _toConsumableArray(input.choices);

    newChoices = newChoices.filter(function (item, inx) {
      return inx !== idx;
    });

    var edited = _objectSpread(_objectSpread({}, input), {}, {
      choices: newChoices
    });

    return onEdit(index, edited);
  };

  var contextInputEdit = function contextInputEdit(event) {
    var edited = _objectSpread(_objectSpread({}, input), {}, {
      name: event.target.value
    });

    return onEdit(index, edited);
  };

  var childInputEdit = function childInputEdit(idx, event) {
    var newChoices = _toConsumableArray(input.choices);

    newChoices[idx] = _objectSpread(_objectSpread({}, newChoices[idx]), {}, {
      name: event.target.value
    });

    var edited = _objectSpread(_objectSpread({}, input), {}, {
      choices: newChoices
    });

    return onEdit(index, edited);
  };

  return /*#__PURE__*/_react.default.createElement(_core.Paper, {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, null, /*#__PURE__*/_react.default.createElement(_icons.DragIndicator, {
    style: {
      fontSize: 16,
      padding: "2px",
      cursor: "grab"
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "aria-label": "up",
    disabled: index === 0,
    onClick: function onClick() {
      return onReArrange(input.id, index, "up");
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.ArrowUpward, {
    style: {
      color: "#035162",
      fontSize: 16,
      padding: 2
    }
  })), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "aria-label": "down",
    disabled: index === maxIndex - 1,
    onClick: function onClick() {
      return onReArrange(input.id, index, "down");
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.ArrowDownward, {
    style: {
      color: "#035162",
      fontSize: 16,
      padding: 2
    }
  })), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
    "aria-label": "delete",
    onClick: function onClick() {
      return onDelete(input.id);
    }
  }, /*#__PURE__*/_react.default.createElement(_icons.Close, {
    style: {
      color: "#035162",
      fontSize: 16,
      padding: 2
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.body
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.row
  }, /*#__PURE__*/_react.default.createElement(_core.TextField, {
    className: classes.contextInput,
    label: input.label,
    value: input.name,
    variant: "outlined",
    size: "small",
    onChange: contextInputEdit,
    fullWidth: true
  }), /*#__PURE__*/_react.default.createElement(_core.Button, {
    variant: "text",
    size: "small",
    className: classes.typeAbs
  }, input.type)), (input === null || input === void 0 ? void 0 : input.hasChild) && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "10px 5px"
    }
  }, (input === null || input === void 0 ? void 0 : input.choices.length) && input.choices.map(function (child, i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.row,
      key: i,
      style: {
        padding: "0px 5px"
      }
    }, /*#__PURE__*/_react.default.createElement(ComponentIcon, {
      style: {
        color: "#035162",
        fontSize: 20,
        margin: "14px 5px"
      }
    }), /*#__PURE__*/_react.default.createElement(_core.TextField, {
      className: classes.childInput,
      label: child.label,
      value: child.name,
      onChange: function onChange(event) {
        return childInputEdit(i, event);
      },
      variant: "outlined",
      size: "small",
      fullWidth: true
    }), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      "aria-label": "add",
      title: "Insert below",
      onClick: function onClick() {
        return addChild(i);
      },
      style: {
        padding: "0px 16px"
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.AddCircleOutline, {
      style: {
        color: "#0069A4",
        fontSize: 16,
        padding: 0
      }
    })), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      "aria-label": "remove",
      onClick: function onClick() {
        return removeChild(i);
      },
      style: {
        padding: "0px 16px"
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.RemoveCircleOutline, {
      style: {
        color: "#6F6B6B",
        fontSize: 16,
        padding: 0
      }
    })));
  }))));
}