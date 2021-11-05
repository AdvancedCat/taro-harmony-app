var taroExport;

(globalThis["webpackJsonp"] = globalThis["webpackJsonp"] || []).push([["pages/video/index"],{

/***/ "../taro/node_modules/babel-loader/lib/index.js!./src/pages/video/index.jsx":
/*!*************************************************************************!*\
  !*** ../taro/node_modules/babel-loader/lib!./src/pages/video/index.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "../taro/packages/taro-harmony/dist/components/components-react.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/pages/video/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);

  function Index() {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "f"], {
        className: "block",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Text */ "d"], {
          children: "\u89C6\u9891\u7EC4\u4EF6"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* Video */ "e"], {
          className: "video-box",
          src: "https://vod.300hu.com/4c1f7a6atransbjngwcloud1oss/48e602ec290439626706407425/v.f30.mp4",
          poster: "https://developer.harmonyos.com/resource/image/new/home/pic_banner_hdc_360-1013.jpg",
          objectFit: "fill",
          direction: 90,
          speed: 2,
          initialTime: 10,
          onLoadedMetaData: this.onLoadedMetaData,
          onPlay: this.onPlay,
          onPause: this.onPause,
          onEnded: this.onEnded,
          onError: this.onError,
          onTimeUpdate: this.onTimeUpdate,
          onProgress: this.onProgress,
          onFullscreenChange: this.onFullscreenChange,
          onTap: this.onTapVideo
        })]
      });
    }
  }, {
    key: "onTapVideo",
    value: function onTapVideo(e) {
      console.log("[video] tap  " + "e.detail: " + print(e.detail));
    }
  }, {
    key: "onLoadedMetaData",
    value: function onLoadedMetaData(e) {
      console.log("[video] loadedmetadata  " + "e.detail: " + print(e.detail));
    }
  }, {
    key: "onPlay",
    value: function onPlay(e) {
      console.log("[video] play  " + "e.detail: " + print(e.detail));
    }
  }, {
    key: "onPause",
    value: function onPause(e) {
      console.log("[video] pause  " + "e.detail: " + print(e.detail));
    }
  }, {
    key: "onEnded",
    value: function onEnded(e) {
      console.log("[video] ended  " + "e.detail: " + print(e.detail));
    }
  }, {
    key: "onError",
    value: function onError(e) {
      console.log("[video] error  " + "e.detail: " + print(e.detail));
    }
  }, {
    key: "onTimeUpdate",
    value: function onTimeUpdate(e) {
      console.log("[video] timeupdate  " + "e.detail: " + print(e.detail));
    }
  }, {
    key: "onProgress",
    value: function onProgress(e) {
      console.log("[video] progress  " + "e.detail: " + print(e.detail));
    }
  }, {
    key: "onFullscreenChange",
    value: function onFullscreenChange(e) {
      console.log("[video] fullscreen  " + "e.detail: " + print(e.detail));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



function print(obj) {
  if (!obj) return 'null';
  return JSON.stringify(obj);
}

/***/ }),

/***/ "./src/pages/video/index.css":
/*!***********************************!*\
  !*** ./src/pages/video/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/video/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/video/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../taro/packages/taro-runtime/dist/runtime.esm.js");
/* harmony import */ var _taro_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../taro/node_modules/babel-loader/lib!./index.jsx */ "../taro/node_modules/babel-loader/lib/index.js!./src/pages/video/index.jsx");


var config = {"navigationBarTitleText":"视频"};


taroExport = (Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_taro_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/video/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/video/index.jsx","runtime","vendors","common"]]]);
export default taroExport;;
//# sourceMappingURL=index.js.map