"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _types = _interopRequireDefault(require("./types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      height: "100%",
      backgroundColor: "#F9F9F9",
      borderRadius: theme.spacing(2, 0, 0, 2),
      borderRight: "1px solid rgba(0, 0, 0, 0.1)"
    },
    scrollview: {
      padding: theme.spacing(1.5, 1.5, 2, 1.5),
      overflowY: "auto",
      maxHeight: "85%",
      "&::-webkit-scrollbar": {
        width: "10px",
        borderRadius: 5
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "white"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#BDC3C7",
        borderRadius: 12,
        "&:hover": {
          backgroundColor: "#85929E"
        }
      }
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
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      border: "2px solid transparent",
      "&:hover": {
        backgroundColor: "rgba(42, 146, 205, 0.4)",
        transition: "ease-in-out",
        boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
      },
      "&:active": {
        border: "2px solid dodgerblue"
      }
    },
    icon: {
      backgroundColor: "#F0F0F0",
      marginRight: 15,
      padding: 6,
      width: 20,
      height: 20,
      borderRadius: 50
    },
    header: {
      display: "flex",
      maxHeight: "20%",
      backgroundColor: "white",
      lineHeight: 2,
      fontFamily: "'Lexend Deca', sans-serif",
      padding: theme.spacing(1, 2),
      borderRadius: theme.spacing(2, 0, 0, 0),
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
    }
  };
});

function Sidebar(_ref) {
  var _onDragStart = _ref.onDragStart,
      onDragOver = _ref.onDragOver;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/_react.default.createElement(_icons.Ballot, {
    className: classes.icon,
    fontSize: "small",
    style: {
      color: "dodgerblue"
    }
  }), " ", "Fields"), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.scrollview
  }, Object.keys(_types.default).map(function (field, i) {
    var Icon = _types.default[field].Icon;
    return /*#__PURE__*/_react.default.createElement(_core.Box, {
      key: i,
      className: classes.field,
      onDragStart: function onDragStart(event) {
        return _onDragStart(event, _types.default[field].type);
      },
      onDragOver: onDragOver,
      draggable: true
    }, /*#__PURE__*/_react.default.createElement(Icon, {
      fontSize: "small",
      className: classes.icon,
      style: {
        backgroundColor: _types.default[field].bg,
        color: _types.default[field].fg
      }
    }), _types.default[field].field_name);
  })));
}