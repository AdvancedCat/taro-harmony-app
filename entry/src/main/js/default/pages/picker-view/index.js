var taroExport;

(globalThis["webpackJsonp"] = globalThis["webpackJsonp"] || []).push([["pages/picker-view/index"],{

/***/ "../taro/node_modules/babel-loader/lib/index.js!./src/pages/picker-view/index.jsx":
/*!*******************************************************************************!*\
  !*** ../taro/node_modules/babel-loader/lib!./src/pages/picker-view/index.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "../taro/packages/taro-harmony/dist/components/components-react.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.css */ "./src/pages/picker-view/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);












var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Index);

  function Index() {
    var _this;

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onChange", function (e) {
      console.log("[picker-view] change  " + "e.detail: " + print(e.detail));
    });

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onColumnChange", function (e) {
      console.log("[picker-view] columnchange  " + "e.detail: " + print(e.detail));
    });

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_this), "onCancel", function (e) {
      console.log("[picker-view] cancel  " + "e.detail: " + print(e.detail));
    });

    return _this;
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "PickerView"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "selector:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* PickerView */ "b"], {
            className: "pickerview",
            mode: "selector",
            value: 3,
            range: ["1", "2", "3", "4"],
            onChange: this.onChange,
            onCancel: this.onCancel
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "disabled:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* PickerView */ "b"], {
            className: "pickerview",
            mode: "selector",
            value: 1,
            range: ["1", "2", "3"],
            onChange: this.onChange,
            onCancel: this.onCancel,
            disabled: true
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "selector RK:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* PickerView */ "b"], {
            className: "pickerview",
            mode: "selector",
            value: 1,
            range: [{
              id: 0,
              name: "小红"
            }, {
              id: 1,
              name: "小明"
            }, {
              id: 2,
              name: "小丽"
            }],
            rangeKey: "name",
            onChange: this.onChange,
            onCancel: this.onCancel
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "multi:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* PickerView */ "b"], {
            className: "pickerview",
            mode: "multiSelector",
            value: [0, 1, 1],
            range: [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]],
            onChange: this.onChange,
            onCancel: this.onCancel,
            onColumnChange: this.onColumnChange
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "multi RK:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* PickerView */ "b"], {
            className: "pickerview",
            mode: "multiSelector",
            value: [0, 1, 1],
            range: [[{
              id: 0,
              name: "A"
            }, {
              id: 1,
              name: "B"
            }, {
              id: 2,
              name: "C"
            }], [{
              id: 0,
              name: "D"
            }, {
              id: 1,
              name: "E"
            }], [{
              id: 0,
              name: "F"
            }, {
              id: 1,
              name: "G"
            }, {
              id: 2,
              name: "H"
            }]],
            rangeKey: "name",
            onChange: this.onChange,
            onCancel: this.onCancel,
            onColumnChange: this.onColumnChange
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "time:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* PickerView */ "b"], {
            className: "pickerview",
            mode: "time",
            value: "12:30",
            onChange: this.onChange,
            onCancel: this.onCancel
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "date:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* PickerView */ "b"], {
            className: "pickerview",
            mode: "date",
            start: "2018-6-25",
            end: "2030-12-31",
            value: "2021-11-11",
            onChange: this.onChange,
            onCancel: this.onCancel
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* View */ "f"], {
          className: "flexbox",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* Text */ "d"], {
            children: "datetime:"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__[/* PickerView */ "b"], {
            className: "pickerview",
            mode: "datetime",
            value: "2021-11-11-13-13",
            onChange: this.onChange,
            onCancel: this.onCancel
          })]
        })]
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



function print(obj) {
  if (!obj) return "null";
  return JSON.stringify(obj);
}

/***/ }),

/***/ "./src/pages/picker-view/index.css":
/*!*****************************************!*\
  !*** ./src/pages/picker-view/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/picker-view/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/picker-view/index.jsx ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../taro/packages/taro-runtime/dist/runtime.esm.js");
/* harmony import */ var _taro_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../taro/node_modules/babel-loader/lib!./index.jsx */ "../taro/node_modules/babel-loader/lib/index.js!./src/pages/picker-view/index.jsx");


var config = {};


taroExport = (Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_taro_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/picker-view/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/picker-view/index.jsx","runtime","vendors","common"]]]);
export default taroExport;;
//# sourceMappingURL=index.js.map