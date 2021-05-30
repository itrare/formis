"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormBuilder;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

var _icons = require("@material-ui/icons");

var _reactSortablejs = require("react-sortablejs");

var _ajv = _interopRequireDefault(require("ajv"));

var _Sidebar = _interopRequireDefault(require("../Sidebar"));

var _types = _interopRequireDefault(require("../Sidebar/types"));

var _InputGroup = _interopRequireDefault(require("../InputGroup"));

var _schema = _interopRequireDefault(require("./schema"));

var _Form = _interopRequireDefault(require("../Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ajv = new _ajv.default();

function Alert(props) {
  return /*#__PURE__*/_react.default.createElement(_Alert.default, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      backgroundColor: "#D4D4D4" // padding: "40px",

    },
    paper: {// borderRadius: theme.spacing(2),
    },
    item: {
      height: "100vh"
    },
    row: {
      display: "flex",
      flexDirection: "row"
    },
    main: {
      height: "100%",
      width: "100%",
      backgroundColor: "#F9F9F9",
      borderRadius: theme.spacing(0, 2, 2, 0)
    },
    header: {
      display: "flex",
      maxHeight: "20%",
      backgroundColor: "white",
      lineHeight: 2,
      fontFamily: "'Lexend Deca', sans-serif",
      padding: theme.spacing(1, 2),
      borderRadius: theme.spacing(0, 2, 0, 0),
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
    },
    content: {
      padding: "20px 40px",
      overflowY: "auto",
      maxHeight: "75%",
      minHeight: "75%",
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
    saveBtn: {
      color: "white",
      borderRadius: theme.spacing(5),
      backgroundColor: "dodgerblue",
      margin: theme.spacing(2.5, 1.5),
      fontFamily: "'Lexend Deca', sans-serif",
      opacity: 0.8,
      "&:hover": {
        opacity: 1,
        backgroundColor: "dodgerblue"
      }
    }
  };
});
/**
 * FormBuilder
 * @description FormBuilder to create drag & drop form fields
 * @returns json
 */

function FormBuilder(_ref) {
  var className = _ref.className,
      style = _ref.style;

  // state of forbuilder
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      setForm = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      previewMode = _useState4[0],
      setPreviewMode = _useState4[1];

  var classes = useStyles();

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      notification = _useState6[0],
      setNotification = _useState6[1];

  var maxIndex = form.length;
  /* Core functions */

  var editInputGrp = function editInputGrp(index, changes) {
    var newForm = _toConsumableArray(form);

    newForm[index] = changes;
    setForm(newForm);
  };

  var deleteInputGrp = function deleteInputGrp(id) {
    var newForm = form.filter(function (its) {
      return its.id !== id;
    });
    setForm(newForm);
  };

  var reArrange = function reArrange(id, idx, direction) {
    var rearranged = _toConsumableArray(form);

    var n_udx;

    if (direction === "up") {
      n_udx = Math.max(0, idx - 1);
    } else {
      n_udx = Math.min(maxIndex, idx + 1);
    }

    if (n_udx === idx) {
      return;
    }

    if (n_udx !== undefined) {
      var swap_this = _objectSpread({}, form[idx]);

      var swap_that = _objectSpread({}, form[n_udx]);

      rearranged[idx] = swap_that;
      rearranged[n_udx] = swap_this;
      setForm(rearranged);
    }
  };
  /* Core functions */

  /* Drag Drop functions */


  var onDragStart = function onDragStart(event, inputName) {
    event.dataTransfer.setData("field", inputName);
  };

  var onDragOver = function onDragOver(event) {
    event.preventDefault();
  };

  var onDrop = function onDrop(event) {
    var _fields$inputType;

    if (previewMode) {
      return;
    }

    var inputType = event.dataTransfer.getData("field");
    if (inputType.trim() === "") return; // identify which default json to push regarding input type

    var group = _objectSpread(_objectSpread({
      id: form.length + 1,
      type: inputType
    }, _types.default[inputType]), {}, {
      choices: (_fields$inputType = _types.default[inputType]) !== null && _fields$inputType !== void 0 && _fields$inputType.hasChild ? [_types.default[inputType].child] : []
    });

    setForm(function (prev) {
      return [].concat(_toConsumableArray(prev), [group]);
    });
  };
  /* Drag Drop functions */


  var getJson = function getJson() {
    var jsonFormats = [];
    form.map(function (ig) {
      return jsonFormats.push({
        id: ig.id,
        type: ig.type,
        hasChild: ig.hasChild,
        name: ig.name,
        choices: ig.choices,
        required: ig.required
      });
    });
    return jsonFormats;
  };

  var handleJSON = function handleJSON(event) {
    var file = event.target.files[0];

    if (file) {
      var fileReader = new FileReader();

      fileReader.onloadend = function () {
        var content = fileReader.result;
        var jsonContent = JSON.parse(content);

        try {
          var valid = ajv.validate(_schema.default, jsonContent);

          if (valid) {
            // append properties
            var newForm = [];
            jsonContent === null || jsonContent === void 0 ? void 0 : jsonContent.map(function (ig) {
              return newForm.push(_objectSpread(_objectSpread({}, _types.default[ig.type]), ig));
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
  }; // it wraps, sidebar along with its content, main drop area


  return (
    /*#__PURE__*/
    // <Grid container spacing={3}>
    _react.default.createElement("div", {
      className: [classes.root, className].join(' '),
      style: style
    }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
      elevation: 2,
      className: classes.paper
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      container: true,
      spacing: 0,
      direction: "row"
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 4,
      sm: 4,
      md: 4,
      lg: 3,
      xl: 3,
      className: classes.item
    }, /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
      onDragStart: onDragStart,
      onDragOver: onDragOver
    })), /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 8,
      sm: 8,
      md: 8,
      lg: 9,
      xl: 9,
      className: classes.item
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.main,
      onDragOver: onDragOver,
      onDrop: onDrop,
      draggable: false
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.header
    }, "Form Builder"), previewMode ? /*#__PURE__*/_react.default.createElement("div", {
      className: classes.content
    }, /*#__PURE__*/_react.default.createElement(_Form.default, {
      src: getJson(),
      onChange: function onChange(e) {
        return console.log(e);
      }
    })) : /*#__PURE__*/_react.default.createElement(_reactSortablejs.ReactSortable, {
      list: form,
      setList: setForm,
      animation: 1000,
      className: classes.content
    }, form.map(function (group, index) {
      return /*#__PURE__*/_react.default.createElement(_InputGroup.default, {
        key: group.id,
        input: group,
        index: index,
        maxIndex: maxIndex,
        onDelete: deleteInputGrp,
        onReArrange: reArrange,
        onEdit: editInputGrp
      });
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: classes.row,
      style: {
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: classes.row
    }, /*#__PURE__*/_react.default.createElement(_core.Button, {
      variant: "outlined",
      size: "small",
      className: classes.saveBtn,
      onClick: function onClick() {
        return console.log(getJson());
      }
    }, "Save"), /*#__PURE__*/_react.default.createElement(_core.Button, {
      variant: "outlined",
      size: "small",
      disabled: form.length === 0,
      className: classes.saveBtn,
      style: {
        backgroundColor: "#34495E"
      },
      href: "data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(getJson()))),
      startIcon: /*#__PURE__*/_react.default.createElement(_icons.GetApp, null),
      download: "formis.json"
    }, "Json"), /*#__PURE__*/_react.default.createElement(_core.Button, {
      variant: "outlined",
      component: "label",
      size: "small",
      className: classes.saveBtn,
      style: {
        backgroundColor: "#16A085"
      },
      startIcon: /*#__PURE__*/_react.default.createElement(_icons.Code, null)
    }, "Upload Json", /*#__PURE__*/_react.default.createElement("input", {
      type: "file",
      onChange: handleJSON,
      hidden: true
    }))), /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      variant: "outlined",
      component: "label",
      size: "small",
      className: classes.saveBtn,
      style: {
        backgroundColor: "#1B2631"
      },
      onClick: function onClick() {
        return setPreviewMode(!previewMode);
      }
    }, /*#__PURE__*/_react.default.createElement(_icons.Visibility, {
      style: {
        fontSize: 14,
        padding: 5
      }
    })))))), /*#__PURE__*/_react.default.createElement(_core.Snackbar, {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "left"
      },
      open: notification,
      onClose: function onClose() {
        return setNotification(false);
      },
      autoHideDuration: 4000,
      key: "notification"
    }, /*#__PURE__*/_react.default.createElement(Alert, {
      onClose: function onClose() {
        return setNotification(false);
      },
      severity: "error"
    }, "Json Validation Errors", " "))))
  );
}