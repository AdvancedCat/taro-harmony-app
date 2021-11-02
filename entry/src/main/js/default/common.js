(globalThis["webpackJsonp"] = globalThis["webpackJsonp"] || []).push([["common"],{

/***/ "../taro/packages/shared/dist/shared.esm.js":
/*!**************************************************!*\
  !*** ../taro/packages/shared/dist/shared.esm.js ***!
  \**************************************************/
/*! exports provided: EMPTY_ARR, EMPTY_OBJ, animation, box, cacheDataGet, cacheDataHas, cacheDataSet, capitalize, controlledComponent, defaultReconciler, ensure, focusComponents, getUniqueKey, hasOwn, indent, internalComponents, isArray, isBoolean, isBooleanStringLiteral, isFunction, isNull, isNumber, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, nestElements, noop, processApis, queryToJson, setUniqueKeyToRoute, singleQuote, toCamelCase, toDashed, toKebabCase, touchEvents, unbox, unsupport, voidElements, warn */
/*! exports used: EMPTY_ARR, EMPTY_OBJ, capitalize, controlledComponent, defaultReconciler, ensure, internalComponents, isArray, isFunction, isNumber, isObject, isString, isUndefined, mergeInternalComponents, mergeReconciler, noop, queryToJson, singleQuote, toCamelCase, toDashed, warn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* unused harmony export animation */
/* unused harmony export box */
/* unused harmony export cacheDataGet */
/* unused harmony export cacheDataHas */
/* unused harmony export cacheDataSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return controlledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultReconciler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ensure; });
/* unused harmony export focusComponents */
/* unused harmony export getUniqueKey */
/* unused harmony export hasOwn */
/* unused harmony export indent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return internalComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isArray; });
/* unused harmony export isBoolean */
/* unused harmony export isBooleanStringLiteral */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isFunction; });
/* unused harmony export isNull */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return mergeInternalComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return mergeReconciler; });
/* unused harmony export nestElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return noop; });
/* unused harmony export processApis */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return queryToJson; });
/* unused harmony export setUniqueKeyToRoute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return singleQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return toDashed; });
/* unused harmony export toKebabCase */
/* unused harmony export touchEvents */
/* unused harmony export unbox */
/* unused harmony export unsupport */
/* unused harmony export voidElements */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return warn; });
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");



function isString(o) {
  return typeof o === 'string';
}

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isNull(o) {
  return o === null;
}

function isObject(o) {
  return o !== null && Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(o) === 'object';
}

function isBoolean(o) {
  return o === true || o === false;
}

function isFunction(o) {
  return typeof o === 'function';
}

function isNumber(o) {
  return typeof o === 'number';
}

function isBooleanStringLiteral(o) {
  return o === 'true' || o === 'false';
}

var isArray = Array.isArray;
var DEFAULT_EMPTY_ARRAY = '[]';
var NO_DEFAULT_VALUE = '';
var DEFAULT_TRUE = 'true';
var DEFAULT_FALSE = 'false';
var touchEvents = {
  bindTouchStart: NO_DEFAULT_VALUE,
  bindTouchMove: NO_DEFAULT_VALUE,
  bindTouchEnd: NO_DEFAULT_VALUE,
  bindTouchCancel: NO_DEFAULT_VALUE,
  bindLongTap: NO_DEFAULT_VALUE
};
var animation = {
  animation: NO_DEFAULT_VALUE,
  bindAnimationStart: NO_DEFAULT_VALUE,
  bindAnimationIteration: NO_DEFAULT_VALUE,
  bindAnimationEnd: NO_DEFAULT_VALUE,
  bindTransitionEnd: NO_DEFAULT_VALUE
};

function singleQuote(s) {
  return "'".concat(s, "'");
}

var View = Object.assign(Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '50',
  'hover-stay-time': '400'
}, touchEvents), animation);
var Icon = {
  type: NO_DEFAULT_VALUE,
  size: '23',
  color: NO_DEFAULT_VALUE
};
var MapComp = Object.assign({
  longitude: NO_DEFAULT_VALUE,
  latitude: NO_DEFAULT_VALUE,
  scale: '16',
  markers: DEFAULT_EMPTY_ARRAY,
  covers: NO_DEFAULT_VALUE,
  polyline: DEFAULT_EMPTY_ARRAY,
  circles: DEFAULT_EMPTY_ARRAY,
  controls: DEFAULT_EMPTY_ARRAY,
  'include-points': DEFAULT_EMPTY_ARRAY,
  'show-location': NO_DEFAULT_VALUE,
  'layer-style': '1',
  bindMarkerTap: NO_DEFAULT_VALUE,
  bindControlTap: NO_DEFAULT_VALUE,
  bindCalloutTap: NO_DEFAULT_VALUE,
  bindUpdated: NO_DEFAULT_VALUE
}, touchEvents);
var Progress = {
  percent: NO_DEFAULT_VALUE,
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: DEFAULT_FALSE,
  'active-mode': singleQuote('backwards'),
  'show-info': DEFAULT_FALSE
};
var RichText = {
  nodes: DEFAULT_EMPTY_ARRAY
};
var Text = {
  selectable: DEFAULT_FALSE,
  space: NO_DEFAULT_VALUE,
  decode: DEFAULT_FALSE
};
var Button = Object.assign({
  size: singleQuote('default'),
  type: NO_DEFAULT_VALUE,
  plain: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  loading: DEFAULT_FALSE,
  'form-type': NO_DEFAULT_VALUE,
  'open-type': NO_DEFAULT_VALUE,
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '20',
  'hover-stay-time': '70',
  name: NO_DEFAULT_VALUE
}, touchEvents);
var Checkbox = {
  value: NO_DEFAULT_VALUE,
  disabled: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  color: singleQuote('#09BB07'),
  name: NO_DEFAULT_VALUE
};
var CheckboxGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Form = {
  'report-submit': DEFAULT_FALSE,
  bindSubmit: NO_DEFAULT_VALUE,
  bindReset: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Input = {
  value: NO_DEFAULT_VALUE,
  type: singleQuote(NO_DEFAULT_VALUE),
  password: DEFAULT_FALSE,
  placeholder: NO_DEFAULT_VALUE,
  'placeholder-style': NO_DEFAULT_VALUE,
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: NO_DEFAULT_VALUE,
  maxlength: '140',
  'cursor-spacing': '0',
  focus: DEFAULT_FALSE,
  'confirm-type': singleQuote('done'),
  'confirm-hold': DEFAULT_FALSE,
  cursor: 'i.value.length',
  'selection-start': '-1',
  'selection-end': '-1',
  bindInput: NO_DEFAULT_VALUE,
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Label = {
  for: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Picker = {
  mode: singleQuote('selector'),
  disabled: NO_DEFAULT_VALUE,
  range: NO_DEFAULT_VALUE,
  'range-key': NO_DEFAULT_VALUE,
  value: NO_DEFAULT_VALUE,
  start: NO_DEFAULT_VALUE,
  end: NO_DEFAULT_VALUE,
  fields: singleQuote('day'),
  'custom-item': NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  bindCancel: NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  bindColumnChange: NO_DEFAULT_VALUE
};
var PickerView = {
  value: NO_DEFAULT_VALUE,
  'indicator-style': NO_DEFAULT_VALUE,
  'indicator-class': NO_DEFAULT_VALUE,
  'mask-style': NO_DEFAULT_VALUE,
  'mask-class': NO_DEFAULT_VALUE,
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var PickerViewColumn = {
  name: NO_DEFAULT_VALUE
};
var Radio = {
  value: NO_DEFAULT_VALUE,
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  color: singleQuote('#09BB07'),
  name: NO_DEFAULT_VALUE
};
var RadioGroup = {
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: NO_DEFAULT_VALUE,
  value: '0',
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': DEFAULT_FALSE,
  bindChange: NO_DEFAULT_VALUE,
  bindChanging: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Switch = {
  checked: DEFAULT_FALSE,
  disabled: NO_DEFAULT_VALUE,
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var Textarea = {
  value: NO_DEFAULT_VALUE,
  placeholder: NO_DEFAULT_VALUE,
  'placeholder-style': NO_DEFAULT_VALUE,
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: NO_DEFAULT_VALUE,
  maxlength: '140',
  'auto-focus': DEFAULT_FALSE,
  focus: DEFAULT_FALSE,
  'auto-height': DEFAULT_FALSE,
  fixed: DEFAULT_FALSE,
  'cursor-spacing': '0',
  cursor: '-1',
  'selection-start': '-1',
  'selection-end': '-1',
  bindFocus: NO_DEFAULT_VALUE,
  bindBlur: NO_DEFAULT_VALUE,
  bindLineChange: NO_DEFAULT_VALUE,
  bindInput: NO_DEFAULT_VALUE,
  bindConfirm: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE
};
var CoverImage = {
  src: NO_DEFAULT_VALUE,
  bindLoad: 'eh',
  bindError: 'eh'
};
var CoverView = Object.assign({
  'scroll-top': DEFAULT_FALSE
}, touchEvents);
var MovableArea = {
  'scale-area': DEFAULT_FALSE
};
var MovableView = Object.assign(Object.assign({
  direction: 'none',
  inertia: DEFAULT_FALSE,
  'out-of-bounds': DEFAULT_FALSE,
  x: NO_DEFAULT_VALUE,
  y: NO_DEFAULT_VALUE,
  damping: '20',
  friction: '2',
  disabled: NO_DEFAULT_VALUE,
  scale: DEFAULT_FALSE,
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  bindChange: NO_DEFAULT_VALUE,
  bindScale: NO_DEFAULT_VALUE,
  bindHTouchMove: NO_DEFAULT_VALUE,
  bindVTouchMove: NO_DEFAULT_VALUE,
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents), animation);
var ScrollView = Object.assign(Object.assign({
  'scroll-x': DEFAULT_FALSE,
  'scroll-y': DEFAULT_FALSE,
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': NO_DEFAULT_VALUE,
  'scroll-left': NO_DEFAULT_VALUE,
  'scroll-into-view': NO_DEFAULT_VALUE,
  'scroll-with-animation': DEFAULT_FALSE,
  'enable-back-to-top': DEFAULT_FALSE,
  bindScrollToUpper: NO_DEFAULT_VALUE,
  bindScrollToLower: NO_DEFAULT_VALUE,
  bindScroll: NO_DEFAULT_VALUE
}, touchEvents), animation);
var Swiper = Object.assign({
  'indicator-dots': DEFAULT_FALSE,
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: DEFAULT_FALSE,
  current: '0',
  interval: '5000',
  duration: '500',
  circular: DEFAULT_FALSE,
  vertical: DEFAULT_FALSE,
  'previous-margin': singleQuote('0px'),
  'next-margin': singleQuote('0px'),
  'display-multiple-items': '1',
  bindChange: NO_DEFAULT_VALUE,
  bindTransition: NO_DEFAULT_VALUE,
  bindAnimationFinish: NO_DEFAULT_VALUE
}, touchEvents);
var SwiperItem = {
  'item-id': NO_DEFAULT_VALUE
};
var Navigator = {
  url: NO_DEFAULT_VALUE,
  'open-type': singleQuote('navigate'),
  delta: '1',
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': DEFAULT_FALSE,
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: NO_DEFAULT_VALUE,
  bindFail: NO_DEFAULT_VALUE,
  bindComplete: NO_DEFAULT_VALUE
};
var Audio = {
  id: NO_DEFAULT_VALUE,
  src: NO_DEFAULT_VALUE,
  loop: DEFAULT_FALSE,
  controls: DEFAULT_FALSE,
  poster: NO_DEFAULT_VALUE,
  name: NO_DEFAULT_VALUE,
  author: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindPlay: NO_DEFAULT_VALUE,
  bindPause: NO_DEFAULT_VALUE,
  bindTimeUpdate: NO_DEFAULT_VALUE,
  bindEnded: NO_DEFAULT_VALUE
};
var Camera = {
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  bindStop: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
var Image = Object.assign({
  src: NO_DEFAULT_VALUE,
  mode: singleQuote('scaleToFill'),
  'lazy-load': DEFAULT_FALSE,
  bindError: NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE
}, touchEvents);
var LivePlayer = Object.assign({
  src: NO_DEFAULT_VALUE,
  autoplay: DEFAULT_FALSE,
  muted: DEFAULT_FALSE,
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': DEFAULT_FALSE,
  'min-cache': '1',
  'max-cache': '3',
  bindStateChange: NO_DEFAULT_VALUE,
  bindFullScreenChange: NO_DEFAULT_VALUE,
  bindNetStatus: NO_DEFAULT_VALUE
}, animation);
var Video = Object.assign({
  src: NO_DEFAULT_VALUE,
  duration: NO_DEFAULT_VALUE,
  controls: DEFAULT_TRUE,
  'danmu-list': NO_DEFAULT_VALUE,
  'danmu-btn': NO_DEFAULT_VALUE,
  'enable-danmu': NO_DEFAULT_VALUE,
  autoplay: DEFAULT_FALSE,
  loop: DEFAULT_FALSE,
  muted: DEFAULT_FALSE,
  'initial-time': '0',
  'page-gesture': DEFAULT_FALSE,
  direction: NO_DEFAULT_VALUE,
  'show-progress': DEFAULT_TRUE,
  'show-fullscreen-btn': DEFAULT_TRUE,
  'show-play-btn': DEFAULT_TRUE,
  'show-center-play-btn': DEFAULT_TRUE,
  'enable-progress-gesture': DEFAULT_TRUE,
  'object-fit': singleQuote('contain'),
  poster: NO_DEFAULT_VALUE,
  'show-mute-btn': DEFAULT_FALSE,
  bindPlay: NO_DEFAULT_VALUE,
  bindPause: NO_DEFAULT_VALUE,
  bindEnded: NO_DEFAULT_VALUE,
  bindTimeUpdate: NO_DEFAULT_VALUE,
  bindFullScreenChange: NO_DEFAULT_VALUE,
  bindWaiting: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
}, animation);
var Canvas = Object.assign({
  'canvas-id': NO_DEFAULT_VALUE,
  'disable-scroll': DEFAULT_FALSE,
  bindError: NO_DEFAULT_VALUE
}, touchEvents);
var Ad = {
  'unit-id': NO_DEFAULT_VALUE,
  'ad-intervals': NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE,
  bindClose: NO_DEFAULT_VALUE
};
var WebView = {
  src: NO_DEFAULT_VALUE,
  bindMessage: NO_DEFAULT_VALUE,
  bindLoad: NO_DEFAULT_VALUE,
  bindError: NO_DEFAULT_VALUE
};
var Block = {}; // For Vue，因为 slot 标签被 vue 占用了

var SlotView = {
  name: NO_DEFAULT_VALUE
}; // For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗

var Slot = {
  name: NO_DEFAULT_VALUE
};
var internalComponents = {
  View: View,
  Icon: Icon,
  Progress: Progress,
  RichText: RichText,
  Text: Text,
  Button: Button,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Form: Form,
  Input: Input,
  Label: Label,
  Picker: Picker,
  PickerView: PickerView,
  PickerViewColumn: PickerViewColumn,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Slider: Slider,
  Switch: Switch,
  CoverImage: CoverImage,
  Textarea: Textarea,
  CoverView: CoverView,
  MovableArea: MovableArea,
  MovableView: MovableView,
  ScrollView: ScrollView,
  Swiper: Swiper,
  SwiperItem: SwiperItem,
  Navigator: Navigator,
  Audio: Audio,
  Camera: Camera,
  Image: Image,
  LivePlayer: LivePlayer,
  Video: Video,
  Canvas: Canvas,
  Ad: Ad,
  WebView: WebView,
  Block: Block,
  Map: MapComp,
  Slot: Slot,
  SlotView: SlotView
};
var controlledComponent = new Set(['input', 'checkbox', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']);
var focusComponents = new Set(['input', 'textarea']);
var voidElements = new Set(['progress', 'icon', 'rich-text', 'input', 'textarea', 'slider', 'switch', 'audio', 'ad', 'official-account', 'open-data', 'navigation-bar']);
var nestElements = new Map([['view', -1], ['catch-view', -1], ['cover-view', -1], ['static-view', -1], ['pure-view', -1], ['block', -1], ['text', -1], ['static-text', 6], ['slot', 8], ['slot-view', 8], ['label', 6], ['form', 4], ['scroll-view', 4], ['swiper', 4], ['swiper-item', 4]]);
var EMPTY_OBJ = {};
var EMPTY_ARR = [];

var noop = function noop() {};

var defaultReconciler = Object.create(null);
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param v Value.
 * @returns Boxed value.
 */

var box = function box(v) {
  return {
    v: v
  };
};
/**
 * box creates a boxed value.
 *
 * @typeparam T Value type.
 * @param b Boxed value.
 * @returns Value.
 */


var unbox = function unbox(b) {
  return b.v;
};

function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(s) {
  var camel = '';
  var nextCap = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }

  return camel;
}

var toKebabCase = function toKebabCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */


function ensure(condition, msg) {
  if (!condition) {
    if (true) {
      var reportIssue = '\n如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
      throw new Error(msg + reportIssue);
    } else {}
  }
}

function warn(condition, msg) {
  if (true) {
    if (condition) {
      console.warn("[taro warn] ".concat(msg));
    }
  }
}

function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;

  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];

    if (item.length) {
      var s = item.indexOf('=');

      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }

      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }

      if (Array.isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }

  return ret; // Object
}

var _uniqueId = 1;

var _loadTime = new Date().getTime().toString();

function getUniqueKey() {
  return _loadTime + _uniqueId++;
}

var cacheData = {};

function cacheDataSet(key, val) {
  cacheData[key] = val;
}

function cacheDataGet(key, delelteAfterGet) {
  var temp = cacheData[key];
  delelteAfterGet && delete cacheData[key];
  return temp;
}

function cacheDataHas(key) {
  return key in cacheData;
}

function mergeInternalComponents(components) {
  Object.keys(components).forEach(function (name) {
    if (name in internalComponents) {
      Object.assign(internalComponents[name], components[name]);
    } else {
      internalComponents[name] = components[name];
    }
  });
}

function mergeReconciler(hostConfig) {
  Object.keys(hostConfig).forEach(function (key) {
    var value = hostConfig[key];
    var raw = defaultReconciler[key];
    defaultReconciler[key] = !raw ? value : isArray(raw) ? raw.concat(value) : [raw, value];
  });
}

function unsupport(api) {
  return function () {
    console.warn("\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(api));
  };
}

function setUniqueKeyToRoute(key, obj) {
  var routerParamsPrivateKey = '__key_';
  var useDataCacheApis = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];

  if (useDataCacheApis.indexOf(key) > -1) {
    var url = obj.url = obj.url || '';
    var hasMark = url.indexOf('?') > -1;
    var cacheKey = getUniqueKey();
    obj.url += (hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(cacheKey);
  }
}

function indent(str, size) {
  return str.split('\n').map(function (line, index) {
    var indent = index === 0 ? '' : Array(size).fill(' ').join('');
    return indent + line;
  }).join('\n');
}

var needPromiseApis = new Set(['addPhoneContact', 'authorize', 'canvasGetImageData', 'canvasPutImageData', 'canvasToTempFilePath', 'checkSession', 'chooseAddress', 'chooseImage', 'chooseInvoiceTitle', 'chooseLocation', 'chooseVideo', 'clearStorage', 'closeBLEConnection', 'closeBluetoothAdapter', 'closeSocket', 'compressImage', 'connectSocket', 'createBLEConnection', 'downloadFile', 'exitMiniProgram', 'getAvailableAudioSources', 'getBLEDeviceCharacteristics', 'getBLEDeviceServices', 'getBatteryInfo', 'getBeacons', 'getBluetoothAdapterState', 'getBluetoothDevices', 'getClipboardData', 'getConnectedBluetoothDevices', 'getConnectedWifi', 'getExtConfig', 'getFileInfo', 'getImageInfo', 'getLocation', 'getNetworkType', 'getSavedFileInfo', 'getSavedFileList', 'getScreenBrightness', 'getSetting', 'getStorage', 'getStorageInfo', 'getSystemInfo', 'getUserInfo', 'getWifiList', 'hideHomeButton', 'hideShareMenu', 'hideTabBar', 'hideTabBarRedDot', 'loadFontFace', 'login', 'makePhoneCall', 'navigateBack', 'navigateBackMiniProgram', 'navigateTo', 'navigateToBookshelf', 'navigateToMiniProgram', 'notifyBLECharacteristicValueChange', 'hideKeyboard', 'hideLoading', 'hideNavigationBarLoading', 'hideToast', 'openBluetoothAdapter', 'openDocument', 'openLocation', 'openSetting', 'pageScrollTo', 'previewImage', 'queryBookshelf', 'reLaunch', 'readBLECharacteristicValue', 'redirectTo', 'removeSavedFile', 'removeStorage', 'removeTabBarBadge', 'requestSubscribeMessage', 'saveFile', 'saveImageToPhotosAlbum', 'saveVideoToPhotosAlbum', 'scanCode', 'sendSocketMessage', 'setBackgroundColor', 'setBackgroundTextStyle', 'setClipboardData', 'setEnableDebug', 'setInnerAudioOption', 'setKeepScreenOn', 'setNavigationBarColor', 'setNavigationBarTitle', 'setScreenBrightness', 'setStorage', 'setTabBarBadge', 'setTabBarItem', 'setTabBarStyle', 'showActionSheet', 'showFavoriteGuide', 'showLoading', 'showModal', 'showShareMenu', 'showTabBar', 'showTabBarRedDot', 'showToast', 'startBeaconDiscovery', 'startBluetoothDevicesDiscovery', 'startDeviceMotionListening', 'startPullDownRefresh', 'stopBeaconDiscovery', 'stopBluetoothDevicesDiscovery', 'stopCompass', 'startCompass', 'startAccelerometer', 'stopAccelerometer', 'showNavigationBarLoading', 'stopDeviceMotionListening', 'stopPullDownRefresh', 'switchTab', 'uploadFile', 'vibrateLong', 'vibrateShort', 'writeBLECharacteristicValue']);

function getCanIUseWebp(taro) {
  return function () {
    var _a;

    var res = (_a = taro.getSystemInfoSync) === null || _a === void 0 ? void 0 : _a.call(taro);

    if (!res) {
      if (true) {
        console.error('不支持 API canIUseWebp');
      }

      return false;
    }

    var platform = res.platform;
    var platformLower = platform.toLowerCase();

    if (platformLower === 'android' || platformLower === 'devtools') {
      return true;
    }

    return false;
  };
}

function getNormalRequest(global) {
  return function request(options) {
    options = options ? isString(options) ? {
      url: options
    } : options : {};
    var originSuccess = options.success;
    var originFail = options.fail;
    var originComplete = options.complete;
    var requestTask;
    var p = new Promise(function (resolve, reject) {
      options.success = function (res) {
        originSuccess && originSuccess(res);
        resolve(res);
      };

      options.fail = function (res) {
        originFail && originFail(res);
        reject(res);
      };

      options.complete = function (res) {
        originComplete && originComplete(res);
      };

      requestTask = global.request(options);
    });

    p.abort = function (cb) {
      cb && cb();

      if (requestTask) {
        requestTask.abort();
      }

      return p;
    };

    return p;
  };
}

function processApis(taro, global) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var patchNeedPromiseApis = config.needPromiseApis || [];

  var _needPromiseApis = new Set([].concat(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(patchNeedPromiseApis), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(needPromiseApis)));

  var preserved = ['getEnv', 'interceptors', 'Current', 'getCurrentInstance', 'options', 'nextTick', 'eventCenter', 'Events', 'preload', 'webpackJsonp'];
  var apis = new Set(!config.isOnlyPromisify ? Object.keys(global).filter(function (api) {
    return preserved.indexOf(api) === -1;
  }) : new Set(patchNeedPromiseApis));

  if (config.modifyApis) {
    config.modifyApis(apis);
  }

  apis.forEach(function (key) {
    if (_needPromiseApis.has(key)) {
      var originKey = key;

      taro[originKey] = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var key = originKey; // 第一个参数 options 为字符串，单独处理

        if (typeof options === 'string') {
          if (args.length) {
            return global[key].apply(global, [options].concat(args));
          }

          return global[key](options);
        } // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段


        if (config.transformMeta) {
          var transformResult = config.transformMeta(key, options);
          key = transformResult.key;
          options = transformResult.options; // 新 key 可能不存在

          if (!global.hasOwnProperty(key)) {
            return unsupport(key)();
          }
        }

        var task = null;
        var obj = Object.assign({}, options); // 为页面跳转相关的 API 设置一个随机数作为路由参数。为了给 runtime 区分页面。

        setUniqueKeyToRoute(key, options); // Promise 化

        var p = new Promise(function (resolve, reject) {
          obj.success = function (res) {
            var _a, _b;

            (_a = config.modifyAsyncResult) === null || _a === void 0 ? void 0 : _a.call(config, key, res);
            (_b = options.success) === null || _b === void 0 ? void 0 : _b.call(options, res);

            if (key === 'connectSocket') {
              resolve(Promise.resolve().then(function () {
                return task ? Object.assign(task, res) : res;
              }));
            } else {
              resolve(res);
            }
          };

          obj.fail = function (res) {
            var _a;

            (_a = options.fail) === null || _a === void 0 ? void 0 : _a.call(options, res);
            reject(res);
          };

          obj.complete = function (res) {
            var _a;

            (_a = options.complete) === null || _a === void 0 ? void 0 : _a.call(options, res);
          };

          if (args.length) {
            task = global[key].apply(global, [obj].concat(args));
          } else {
            task = global[key](obj);
          }
        }); // 给 promise 对象挂载属性

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            task === null || task === void 0 ? void 0 : task.onProgressUpdate(cb);
            return p;
          };

          p.abort = function (cb) {
            cb === null || cb === void 0 ? void 0 : cb();
            task === null || task === void 0 ? void 0 : task.abort();
            return p;
          };
        }

        return p;
      };
    } else {
      var platformKey = key; // 改变 key 或 option 字段，如需要把支付宝标准的字段对齐微信标准的字段

      if (config.transformMeta) {
        platformKey = config.transformMeta(key, {}).key;
      } // API 不存在


      if (!global.hasOwnProperty(platformKey)) {
        taro[key] = unsupport(key);
        return;
      }

      if (isFunction(global[key])) {
        taro[key] = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          if (config.handleSyncApis) {
            return config.handleSyncApis(key, global, args);
          } else {
            return global[platformKey].apply(global, args);
          }
        };
      } else {
        taro[key] = global[platformKey];
      }
    }
  });
  !config.isOnlyPromisify && equipCommonApis(taro, global, config);
}
/**
 * 挂载常用 API
 * @param taro Taro 对象
 * @param global 小程序全局对象，如微信的 wx，支付宝的 my
 */


function equipCommonApis(taro, global) {
  var apis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  taro.canIUseWebp = getCanIUseWebp(taro);
  taro.getCurrentPages = getCurrentPages || unsupport('getCurrentPages');
  taro.getApp = getApp || unsupport('getApp');
  taro.env = global.env || {};

  try {
    taro.requirePlugin = requirePlugin || unsupport('requirePlugin');
  } catch (error) {
    taro.requirePlugin = unsupport('requirePlugin');
  } // request & interceptors


  var request = apis.request || getNormalRequest(global);

  function taroInterceptor(chain) {
    return request(chain.requestParams);
  }

  var link = new taro.Link(taroInterceptor);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.miniGlobal = taro.options.miniGlobal = global;
}



/***/ }),

/***/ "../taro/packages/taro-harmony/dist/components/components-react.js":
/*!*************************************************************************!*\
  !*** ../taro/packages/taro-harmony/dist/components/components-react.js ***!
  \*************************************************************************/
/*! exports provided: Ad, Audio, Block, Button, Camera, Canvas, Checkbox, CheckboxGroup, CoverImage, CoverView, CustomWrapper, Form, Icon, Image, Input, Label, List, ListItem, LivePlayer, Map, MovableArea, MovableView, Navigator, Picker, PickerView, PickerViewColumn, Progress, Radio, RadioGroup, RichText, ScrollView, Slider, Slot, Span, Swiper, SwiperItem, Switch, TabBar, TabContent, Tabs, Text, Textarea, Video, View, WebView */
/*! exports used: Picker, Switch, Text, Video, View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Ad */
/* unused harmony export Audio */
/* unused harmony export Block */
/* unused harmony export Button */
/* unused harmony export Camera */
/* unused harmony export Canvas */
/* unused harmony export Checkbox */
/* unused harmony export CheckboxGroup */
/* unused harmony export CoverImage */
/* unused harmony export CoverView */
/* unused harmony export CustomWrapper */
/* unused harmony export Form */
/* unused harmony export Icon */
/* unused harmony export Image */
/* unused harmony export Input */
/* unused harmony export Label */
/* unused harmony export List */
/* unused harmony export ListItem */
/* unused harmony export LivePlayer */
/* unused harmony export Map */
/* unused harmony export MovableArea */
/* unused harmony export MovableView */
/* unused harmony export Navigator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Picker; });
/* unused harmony export PickerView */
/* unused harmony export PickerViewColumn */
/* unused harmony export Progress */
/* unused harmony export Radio */
/* unused harmony export RadioGroup */
/* unused harmony export RichText */
/* unused harmony export ScrollView */
/* unused harmony export Slider */
/* unused harmony export Slot */
/* unused harmony export Span */
/* unused harmony export Swiper */
/* unused harmony export SwiperItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Switch; });
/* unused harmony export TabBar */
/* unused harmony export TabContent */
/* unused harmony export Tabs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Text; });
/* unused harmony export Textarea */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return View; });
/* unused harmony export WebView */
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var Video = 'video';
var Canvas = 'canvas';
var Ad = 'ad';
var WebView = 'web-view';
var Block = 'block';
var Map = 'map';
var Slot = 'slot';
var CustomWrapper = 'custom-wrapper'; // For React.createElement's type

var Span = 'span';
var Tabs = 'tabs';
var TabBar = 'tab-bar';
var TabContent = 'tab-content';
var List = 'list';
var ListItem = 'list-item';


/***/ }),

/***/ "../taro/packages/taro-runtime/dist/runtime.esm.js":
/*!*********************************************************!*\
  !*** ../taro/packages/taro-runtime/dist/runtime.esm.js ***!
  \*********************************************************/
/*! exports provided: Current, ElementNames, Events, FormElement, SERVICE_IDENTIFIER, SVGElement, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, addLeadingSlash, cancelAnimationFrame, container, createComponentConfig, createDocument, createEvent, createPageConfig, createRecursiveComponentConfig, document, eventCenter, eventHandler, getComputedStyle, getCurrentInstance, getPageInstance, hydrate, incrementId, injectPageInstance, navigator, nextTick, now, options, processPluginHooks, requestAnimationFrame, safeExecute, stringify, window */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, requestAnimationFrame, cancelAnimationFrame, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementNames", function() { return ElementNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_IDENTIFIER", function() { return SERVICE_IDENTIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGElement", function() { return SVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLeadingSlash", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return caf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() { return createRecursiveComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCenter", function() { return eventCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventHandler", function() { return eventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageInstance", function() { return getPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementId", function() { return incrementId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processPluginHooks", function() { return processPluginHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeExecute", function() { return safeExecute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/shared */ "../taro/packages/shared/dist/shared.esm.js");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! inversify */ "../taro/node_modules/inversify/es/inversify.js");
















/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

if (false) {} else {
  // var Reflect;
  (function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
      // var root = typeof global === "object" ? global :
      //     typeof self === "object" ? self :
      //         typeof this === "object" ? this :
      //             Function("return this;")();
      var exporter = makeExporter(Reflect); // if (typeof root.Reflect === "undefined") {
      //     root.Reflect = Reflect;
      // }
      // else {
      //     exporter = makeExporter(root.Reflect, exporter);
      // }

      factory(exporter);

      function makeExporter(target, previous) {
        return function (key, value) {
          if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(target[key])) {
            Object.defineProperty(target, key, {
              configurable: true,
              writable: true,
              value: value
            });
          }

          if (previous) previous(key, value);
        };
      }
    })(function (exporter) {
      var hasOwn = Object.prototype.hasOwnProperty; // feature test for Symbol support

      var supportsSymbol = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(Symbol);
      var toPrimitiveSymbol = supportsSymbol && !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(Symbol.toPrimitive) ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(Symbol.iterator) ? Symbol.iterator : "@@iterator";
      var supportsCreate = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(Object.create); // feature test for Object.create support

      var supportsProto = {
        __proto__: []
      } instanceof Array; // feature test for __proto__ support

      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function () {
          return MakeDictionary(Object.create(null));
        } : supportsProto ? function () {
          return MakeDictionary({
            __proto__: null
          });
        } : function () {
          return MakeDictionary({});
        },
        has: downLevel ? function (map, key) {
          return hasOwn.call(map, key);
        } : function (map, key) {
          return key in map;
        },
        get: downLevel ? function (map, key) {
          return hasOwn.call(map, key) ? map[key] : undefined;
        } : function (map, key) {
          return map[key];
        }
      }; // Load global or shim versions of Map, Set, and WeakMap

      var functionPrototype = Object.getPrototypeOf(Function);
      var usePolyfill = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isObject */ "k"])(process) && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
      var _Map = Map;
      var _Set = Set;

      var _WeakMap = !usePolyfill && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(WeakMap) ? WeakMap : CreateWeakMapPolyfill(); // [[Metadata]] internal slot
      // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots


      var Metadata = new _WeakMap();
      /**
       * Applies a set of decorators to a property of a target object.
       * @param decorators An array of decorators.
       * @param target The target object.
       * @param propertyKey (Optional) The property key to decorate.
       * @param attributes (Optional) The property descriptor for the target key.
       * @remarks Decorators are applied in reverse order.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     Example = Reflect.decorate(decoratorsArray, Example);
       *
       *     // property (on constructor)
       *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
       *
       *     // property (on prototype)
       *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
       *
       *     // method (on constructor)
       *     Object.defineProperty(Example, "staticMethod",
       *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
       *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
       *
       *     // method (on prototype)
       *     Object.defineProperty(Example.prototype, "method",
       *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
       *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
       *
       */

      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsObject(target)) throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
          if (IsNull(attributes)) attributes = undefined;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsConstructor(target)) throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }

      exporter("decorate", decorate); // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
      // https://rbuckton.github.io/reflect-metadata/#reflect.metadata

      /**
       * A default metadata decorator factory that can be used on a class, class member, or parameter.
       * @param metadataKey The key for the metadata entry.
       * @param metadataValue The value for the metadata entry.
       * @returns A decorator function.
       * @remarks
       * If `metadataKey` is already defined for the target and target key, the
       * metadataValue for that key will be overwritten.
       * @example
       *
       *     // constructor
       *     @Reflect.metadata(key, value)
       *     class Example {
       *     }
       *
       *     // property (on constructor, TypeScript only)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         static staticProperty;
       *     }
       *
       *     // property (on prototype, TypeScript only)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         property;
       *     }
       *
       *     // method (on constructor)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         static staticMethod() { }
       *     }
       *
       *     // method (on prototype)
       *     class Example {
       *         @Reflect.metadata(key, value)
       *         method() { }
       *     }
       *
       */

      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }

        return decorator;
      }

      exporter("metadata", metadata);
      /**
       * Define a unique metadata entry on the target.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param metadataValue A value that contains attached metadata.
       * @param target The target object on which to define metadata.
       * @param propertyKey (Optional) The property key for the target.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     Reflect.defineMetadata("custom:annotation", options, Example);
       *
       *     // property (on constructor)
       *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
       *
       *     // property (on prototype)
       *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
       *
       *     // method (on constructor)
       *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
       *
       *     // method (on prototype)
       *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
       *
       *     // decorator factory as metadata-producing annotation.
       *     function MyAnnotation(options): Decorator {
       *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
       *     }
       *
       */

      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }

      exporter("defineMetadata", defineMetadata);
      /**
       * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.hasMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }

      exporter("hasMetadata", hasMetadata);
      /**
       * Gets a value indicating whether the target object has the provided metadata key defined.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }

      exporter("hasOwnMetadata", hasOwnMetadata);
      /**
       * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }

      exporter("getMetadata", getMetadata);
      /**
       * Gets the metadata value for the provided metadata key on the target object.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getOwnMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }

      exporter("getOwnMetadata", getOwnMetadata);
      /**
       * Gets the metadata keys defined on the target object or its prototype chain.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns An array of unique metadata keys.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getMetadataKeys(Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getMetadataKeys(Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getMetadataKeys(Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getMetadataKeys(Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getMetadataKeys(Example.prototype, "method");
       *
       */

      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }

      exporter("getMetadataKeys", getMetadataKeys);
      /**
       * Gets the unique metadata keys defined on the target object.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns An array of unique metadata keys.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.getOwnMetadataKeys(Example);
       *
       *     // property (on constructor)
       *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
       *
       */

      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }

      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      /**
       * Deletes the metadata entry from the target object with the provided key.
       * @param metadataKey A key used to store and retrieve metadata.
       * @param target The target object on which the metadata is defined.
       * @param propertyKey (Optional) The property key for the target.
       * @returns `true` if the metadata entry was found and deleted; otherwise, false.
       * @example
       *
       *     class Example {
       *         // property declarations are not part of ES6, though they are valid in TypeScript:
       *         // static staticProperty;
       *         // property;
       *
       *         constructor(p) { }
       *         static staticMethod(p) { }
       *         method(p) { }
       *     }
       *
       *     // constructor
       *     result = Reflect.deleteMetadata("custom:annotation", Example);
       *
       *     // property (on constructor)
       *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
       *
       *     // property (on prototype)
       *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
       *
       *     // method (on constructor)
       *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
       *
       *     // method (on prototype)
       *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
       *
       */

      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return false;
        if (!metadataMap.delete(metadataKey)) return false;
        if (metadataMap.size > 0) return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0) return true;
        Metadata.delete(target);
        return true;
      }

      exporter("deleteMetadata", deleteMetadata);

      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);

          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated)) throw new TypeError();
            target = decorated;
          }
        }

        return target;
      }

      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);

          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated)) throw new TypeError();
            descriptor = decorated;
          }
        }

        return descriptor;
      }

      function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);

        if (IsUndefined(targetMetadata)) {
          if (!Create) return undefined;
          targetMetadata = new _Map();
          Metadata.set(O, targetMetadata);
        }

        var metadataMap = targetMetadata.get(P);

        if (IsUndefined(metadataMap)) {
          if (!Create) return undefined;
          metadataMap = new _Map();
          targetMetadata.set(P, metadataMap);
        }

        return metadataMap;
      } // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata


      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      } // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata


      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return false;
        return ToBoolean(metadataMap.has(MetadataKey));
      } // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata


      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
      } // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata


      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return undefined;
        return metadataMap.get(MetadataKey);
      } // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata


      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        true);
        metadataMap.set(MetadataKey, MetadataValue);
      } // 3.1.6.1 OrdinaryMetadataKeys(O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys


      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null) return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) return ownKeys;
        if (ownKeys.length <= 0) return parentKeys;
        var set = new _Set();
        var keys = [];

        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);

          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }

        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);

          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }

        return keys;
      } // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
      // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys


      function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P,
        /*Create*/
        false);
        if (IsUndefined(metadataMap)) return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;

        while (true) {
          var next = IteratorStep(iterator);

          if (!next) {
            keys.length = k;
            return keys;
          }

          var nextValue = IteratorValue(next);

          try {
            keys[k] = nextValue;
          } catch (e) {
            try {
              IteratorClose(iterator);
            } finally {
              throw e;
            }
          }

          k++;
        }
      } // 6 ECMAScript Data Typ0es and Values
      // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values


      function Type(x) {
        if (x === null) return 1
        /* Null */
        ;

        switch (Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(x)) {
          case "undefined":
            return 0
            /* Undefined */
            ;

          case "boolean":
            return 2
            /* Boolean */
            ;

          case "string":
            return 3
            /* String */
            ;

          case "symbol":
            return 4
            /* Symbol */
            ;

          case "number":
            return 5
            /* Number */
            ;

          case "object":
            return x === null ? 1
            /* Null */
            : 6
            /* Object */
            ;

          default:
            return 6
            /* Object */
            ;
        }
      } // 6.1.1 The Undefined Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type


      function IsUndefined(x) {
        return x === undefined;
      } // 6.1.2 The Null Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type


      function IsNull(x) {
        return x === null;
      } // 6.1.5 The Symbol Type
      // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type


      function IsSymbol(x) {
        return Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(x) === "symbol";
      } // 6.1.7 The Object Type
      // https://tc39.github.io/ecma262/#sec-object-type


      function IsObject(x) {
        return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isObject */ "k"])(x) ? x !== null : Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(x);
      } // 7.1 Type Conversion
      // https://tc39.github.io/ecma262/#sec-type-conversion
      // 7.1.1 ToPrimitive(input [, PreferredType])
      // https://tc39.github.io/ecma262/#sec-toprimitive


      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0
          /* Undefined */
          :
            return input;

          case 1
          /* Null */
          :
            return input;

          case 2
          /* Boolean */
          :
            return input;

          case 3
          /* String */
          :
            return input;

          case 4
          /* Symbol */
          :
            return input;

          case 5
          /* Number */
          :
            return input;
        }

        var hint = PreferredType === 3
        /* String */
        ? "string" : PreferredType === 5
        /* Number */
        ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);

        if (exoticToPrim !== undefined) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result)) throw new TypeError();
          return result;
        }

        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
      } // 7.1.1.1 OrdinaryToPrimitive(O, hint)
      // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive


      function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
          var toString_1 = O.toString;

          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result)) return result;
          }

          var valueOf = O.valueOf;

          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }
        } else {
          var valueOf = O.valueOf;

          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }

          var toString_2 = O.toString;

          if (IsCallable(toString_2)) {
            var result = toString_2.call(O);
            if (!IsObject(result)) return result;
          }
        }

        throw new TypeError();
      } // 7.1.2 ToBoolean(argument)
      // https://tc39.github.io/ecma262/2016/#sec-toboolean


      function ToBoolean(argument) {
        return !!argument;
      } // 7.1.12 ToString(argument)
      // https://tc39.github.io/ecma262/#sec-tostring


      function ToString(argument) {
        return "" + argument;
      } // 7.1.14 ToPropertyKey(argument)
      // https://tc39.github.io/ecma262/#sec-topropertykey


      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3
        /* String */
        );
        if (IsSymbol(key)) return key;
        return ToString(key);
      } // 7.2 Testing and Comparison Operations
      // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
      // 7.2.2 IsArray(argument)
      // https://tc39.github.io/ecma262/#sec-isarray


      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      } // 7.2.3 IsCallable(argument)
      // https://tc39.github.io/ecma262/#sec-iscallable


      function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(argument);
      } // 7.2.4 IsConstructor(argument)
      // https://tc39.github.io/ecma262/#sec-isconstructor


      function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(argument);
      } // 7.2.7 IsPropertyKey(argument)
      // https://tc39.github.io/ecma262/#sec-ispropertykey


      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3
          /* String */
          :
            return true;

          case 4
          /* Symbol */
          :
            return true;

          default:
            return false;
        }
      } // 7.3 Operations on Objects
      // https://tc39.github.io/ecma262/#sec-operations-on-objects
      // 7.3.9 GetMethod(V, P)
      // https://tc39.github.io/ecma262/#sec-getmethod


      function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null) return undefined;
        if (!IsCallable(func)) throw new TypeError();
        return func;
      } // 7.4 Operations on Iterator Objects
      // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects


      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method)) throw new TypeError(); // from Call

        var iterator = method.call(obj);
        if (!IsObject(iterator)) throw new TypeError();
        return iterator;
      } // 7.4.4 IteratorValue(iterResult)
      // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue


      function IteratorValue(iterResult) {
        return iterResult.value;
      } // 7.4.5 IteratorStep(iterator)
      // https://tc39.github.io/ecma262/#sec-iteratorstep


      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      } // 7.4.6 IteratorClose(iterator, completion)
      // https://tc39.github.io/ecma262/#sec-iteratorclose


      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f) f.call(iterator);
      } // 9.1 Ordinary Object Internal Methods and Internal Slots
      // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
      // 9.1.1.1 OrdinaryGetPrototypeOf(O)
      // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof


      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(O) || O === functionPrototype) return proto; // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.

        if (proto !== functionPrototype) return proto; // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.

        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) return proto; // If the constructor was not a function, then we cannot determine the heritage.

        var constructor = prototypeProto.constructor;
        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(constructor)) return proto; // If we have some kind of self-reference, then we cannot determine the heritage.

        if (constructor === O) return proto; // we have a pretty good guess at the heritage.

        return constructor;
      } // naive Map shim
      // function CreateMapPolyfill() {
      //     var cacheSentinel = {};
      //     var arraySentinel = [];
      //     var MapIterator = /** @class */ (function () {
      //         function MapIterator(keys, values, selector) {
      //             this._index = 0;
      //             this._keys = keys;
      //             this._values = values;
      //             this._selector = selector;
      //         }
      //         MapIterator.prototype["@@iterator"] = function () { return this; };
      //         MapIterator.prototype[iteratorSymbol] = function () { return this; };
      //         MapIterator.prototype.next = function () {
      //             var index = this._index;
      //             if (index >= 0 && index < this._keys.length) {
      //                 var result = this._selector(this._keys[index], this._values[index]);
      //                 if (index + 1 >= this._keys.length) {
      //                     this._index = -1;
      //                     this._keys = arraySentinel;
      //                     this._values = arraySentinel;
      //                 }
      //                 else {
      //                     this._index++;
      //                 }
      //                 return { value: result, done: false };
      //             }
      //             return { value: undefined, done: true };
      //         };
      //         MapIterator.prototype.throw = function (error) {
      //             if (this._index >= 0) {
      //                 this._index = -1;
      //                 this._keys = arraySentinel;
      //                 this._values = arraySentinel;
      //             }
      //             throw error;
      //         };
      //         MapIterator.prototype.return = function (value) {
      //             if (this._index >= 0) {
      //                 this._index = -1;
      //                 this._keys = arraySentinel;
      //                 this._values = arraySentinel;
      //             }
      //             return { value: value, done: true };
      //         };
      //         return MapIterator;
      //     }());
      //     return /** @class */ (function () {
      //         function Map() {
      //             this._keys = [];
      //             this._values = [];
      //             this._cacheKey = cacheSentinel;
      //             this._cacheIndex = -2;
      //         }
      //         Object.defineProperty(Map.prototype, "size", {
      //             get: function () { return this._keys.length; },
      //             enumerable: true,
      //             configurable: true
      //         });
      //         Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
      //         Map.prototype.get = function (key) {
      //             var index = this._find(key, /*insert*/ false);
      //             return index >= 0 ? this._values[index] : undefined;
      //         };
      //         Map.prototype.set = function (key, value) {
      //             var index = this._find(key, /*insert*/ true);
      //             this._values[index] = value;
      //             return this;
      //         };
      //         Map.prototype.delete = function (key) {
      //             var index = this._find(key, /*insert*/ false);
      //             if (index >= 0) {
      //                 var size = this._keys.length;
      //                 for (var i = index + 1; i < size; i++) {
      //                     this._keys[i - 1] = this._keys[i];
      //                     this._values[i - 1] = this._values[i];
      //                 }
      //                 this._keys.length--;
      //                 this._values.length--;
      //                 if (key === this._cacheKey) {
      //                     this._cacheKey = cacheSentinel;
      //                     this._cacheIndex = -2;
      //                 }
      //                 return true;
      //             }
      //             return false;
      //         };
      //         Map.prototype.clear = function () {
      //             this._keys.length = 0;
      //             this._values.length = 0;
      //             this._cacheKey = cacheSentinel;
      //             this._cacheIndex = -2;
      //         };
      //         Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
      //         Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
      //         Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
      //         Map.prototype["@@iterator"] = function () { return this.entries(); };
      //         Map.prototype[iteratorSymbol] = function () { return this.entries(); };
      //         Map.prototype._find = function (key, insert) {
      //             if (this._cacheKey !== key) {
      //                 this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
      //             }
      //             if (this._cacheIndex < 0 && insert) {
      //                 this._cacheIndex = this._keys.length;
      //                 this._keys.push(key);
      //                 this._values.push(undefined);
      //             }
      //             return this._cacheIndex;
      //         };
      //         return Map;
      //     }());
      //     function getKey(key, _) {
      //         return key;
      //     }
      //     function getValue(_, value) {
      //         return value;
      //     }
      //     function getEntry(key, value) {
      //         return [key, value];
      //     }
      // }
      // naive Set shim
      // function CreateSetPolyfill() {
      //     return /** @class */ (function () {
      //         function Set() {
      //             this._map = new _Map();
      //         }
      //         Object.defineProperty(Set.prototype, "size", {
      //             get: function () { return this._map.size; },
      //             enumerable: true,
      //             configurable: true
      //         });
      //         Set.prototype.has = function (value) { return this._map.has(value); };
      //         Set.prototype.add = function (value) { return this._map.set(value, value), this; };
      //         Set.prototype.delete = function (value) { return this._map.delete(value); };
      //         Set.prototype.clear = function () { this._map.clear(); };
      //         Set.prototype.keys = function () { return this._map.keys(); };
      //         Set.prototype.values = function () { return this._map.values(); };
      //         Set.prototype.entries = function () { return this._map.entries(); };
      //         Set.prototype["@@iterator"] = function () { return this.keys(); };
      //         Set.prototype[iteratorSymbol] = function () { return this.keys(); };
      //         return Set;
      //     }());
      // }
      // naive WeakMap shim


      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return function () {
          function WeakMap() {
            this._key = CreateUniqueKey();
          }

          WeakMap.prototype.has = function (target) {
            var table = GetOrCreateWeakMapTable(target,
            /*create*/
            false);
            return table !== undefined ? HashMap.has(table, this._key) : false;
          };

          WeakMap.prototype.get = function (target) {
            var table = GetOrCreateWeakMapTable(target,
            /*create*/
            false);
            return table !== undefined ? HashMap.get(table, this._key) : undefined;
          };

          WeakMap.prototype.set = function (target, value) {
            var table = GetOrCreateWeakMapTable(target,
            /*create*/
            true);
            table[this._key] = value;
            return this;
          };

          WeakMap.prototype.delete = function (target) {
            var table = GetOrCreateWeakMapTable(target,
            /*create*/
            false);
            return table !== undefined ? delete table[this._key] : false;
          };

          WeakMap.prototype.clear = function () {
            // NOTE: not a real clear, just makes the previous data unreachable
            this._key = CreateUniqueKey();
          };

          return WeakMap;
        }();

        function CreateUniqueKey() {
          var key;

          do {
            key = "@@WeakMap@@" + CreateUUID();
          } while (HashMap.has(keys, key));

          keys[key] = true;
          return key;
        }

        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create) return undefined;
            Object.defineProperty(target, rootKey, {
              value: HashMap.create()
            });
          }

          return target[rootKey];
        }

        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i) {
            buffer[i] = Math.random() * 0xff | 0;
          }

          return buffer;
        }

        function GenRandomBytes(size) {
          if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(Uint8Array)) {
            if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(crypto)) return crypto.getRandomValues(new Uint8Array(size));
            if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(msCrypto)) return msCrypto.getRandomValues(new Uint8Array(size));
            return FillRandomBytes(new Uint8Array(size), size);
          }

          return FillRandomBytes(new Array(size), size);
        }

        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE); // mark as random - RFC 4122 § 4.4

          data[6] = data[6] & 0x4f | 0x40;
          data[8] = data[8] & 0xbf | 0x80;
          var result = "";

          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8) result += "-";
            if (byte < 16) result += "0";
            result += byte.toString(16).toLowerCase();
          }

          return result;
        }
      } // uses a heuristic used by v8 and chakra to force an object into dictionary mode.


      function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect || (Reflect = {}));
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if ((typeof Reflect === "undefined" ? "undefined" : Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var PROPERTY_THRESHOLD = 2046;
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';
var ROOT_STR = 'root';
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var APP = 'app';
var CONTAINER = 'container';
var DOCUMENT_ELEMENT_NAME = '#document';
var DOCUMENT_FRAGMENT = 'document-fragment';
var ID = 'id';
var UID = 'uid';
var CLASS = 'class';
var STYLE = 'style';
var FOCUS = 'focus';
var VIEW = 'view';
var STATIC_VIEW = 'static-view';
var PURE_VIEW = 'pure-view';
var PROPS = 'props';
var DATASET = 'dataset';
var OBJECT = 'object';
var VALUE = 'value';
var INPUT = 'input';
var CHANGE = 'change';
var CUSTOM_WRAPPER = 'custom-wrapper';
var TARGET = 'target';
var CURRENT_TARGET = 'currentTarget';
var TYPE = 'type';
var CONFIRM = 'confirm';
var TIME_STAMP = 'timeStamp';
var KEY_CODE = 'keyCode';
var TOUCHMOVE = 'touchmove';
var DATE = 'Date';
var SET_TIMEOUT = 'setTimeout';
var CATCHMOVE = 'catchMove';
var CATCH_VIEW = 'catch-view';
var COMMENT = 'comment';
var ON_LOAD = 'onLoad';
var ON_READY = 'onReady';
var ON_SHOW = 'onShow';
var ON_HIDE = 'onHide';
var OPTIONS = 'options';
var EXTERNAL_CLASSES = 'externalClasses';
var BEHAVIORS = 'behaviors';

var incrementId = function incrementId() {
  var id = 0;
  return function () {
    return (id++).toString();
  };
};

function isElement(node) {
  return node.nodeType === 1
  /* ELEMENT_NODE */
  ;
}

function isText(node) {
  return node.nodeType === 3
  /* TEXT_NODE */
  ;
}

function isComment(node) {
  return node.nodeName === COMMENT;
}

function isHasExtractProp(el) {
  var res = Object.keys(el.props).find(function (prop) {
    return !(/^(class|style|id)$/.test(prop) || prop.startsWith('data-'));
  });
  return Boolean(res);
}
/**
 * 往上寻找组件树直到 root，寻找是否有祖先组件绑定了同类型的事件
 * @param node 当前组件
 * @param type 事件类型
 */


function isParentBinded(node, type) {
  var _a;

  var res = false;

  while ((node === null || node === void 0 ? void 0 : node.parentElement) && node.parentElement._path !== ROOT_STR) {
    if ((_a = node.parentElement.__handlers[type]) === null || _a === void 0 ? void 0 : _a.length) {
      res = true;
      break;
    }

    node = node.parentElement;
  }

  return res;
}

function shortcutAttr(key) {
  switch (key) {
    case STYLE:
      return "st"
      /* Style */
      ;

    case ID:
      return UID;

    case CLASS:
      return "cl"
      /* Class */
      ;

    default:
      return key;
  }
}

var SID_TARO_ELEMENT = '0';
var SID_TARO_ELEMENT_FACTORY = '1';
var SID_TARO_TEXT = '2';
var SID_TARO_TEXT_FACTORY = '3';
var SID_TARO_NODE_IMPL = '4';
var SID_TARO_ELEMENT_IMPL = '5';
var SID_HOOKS = '6';
var SID_ON_REMOVE_ATTRIBUTE = '7';
var SID_GET_MINI_LIFECYCLE = '8';
var SID_GET_LIFECYCLE = '9';
var SID_GET_PATH_INDEX = '10';
var SID_GET_EVENT_CENTER = '11';
var SID_IS_BUBBLE_EVENTS = '12';
var SID_GET_SPECIAL_NODES = '13';
var SID_EVENT_CENTER = '14';
var SID_MODIFY_MP_EVENT = '15';
var SID_MODIFY_TARO_EVENT = '16';
var SID_MODIFY_DISPATCH_EVENT = '17';
var SID_BATCHED_EVENT_UPDATES = '18';
var SID_MERGE_PAGE_INSTANCE = '19';
var SID_CREATE_PULLDOWN_COMPONENT = '20';
var SID_GET_DOM_NODE = '21';
var SID_INIT_NATIVE_API = '22';
var SID_MODIFY_HYDRATE_DATA = '23';
var SID_MODIFY_SET_ATTR_PAYLOAD = '24';
var SID_MODIFY_RM_ATTR_PAYLOAD = '25';
var SID_ON_ADD_EVENT = '26';
var SID_PATCH_ELEMENT = '27';
var SID_MODIFY_PAGE_OBJECT = '28';
var SERVICE_IDENTIFIER = {
  TaroElement: SID_TARO_ELEMENT,
  TaroElementFactory: SID_TARO_ELEMENT_FACTORY,
  TaroText: SID_TARO_TEXT,
  TaroTextFactory: SID_TARO_TEXT_FACTORY,
  TaroNodeImpl: SID_TARO_NODE_IMPL,
  TaroElementImpl: SID_TARO_ELEMENT_IMPL,
  Hooks: SID_HOOKS,
  onRemoveAttribute: SID_ON_REMOVE_ATTRIBUTE,
  getMiniLifecycle: SID_GET_MINI_LIFECYCLE,
  getLifecycle: SID_GET_LIFECYCLE,
  getPathIndex: SID_GET_PATH_INDEX,
  getEventCenter: SID_GET_EVENT_CENTER,
  isBubbleEvents: SID_IS_BUBBLE_EVENTS,
  getSpecialNodes: SID_GET_SPECIAL_NODES,
  eventCenter: SID_EVENT_CENTER,
  modifyMpEvent: SID_MODIFY_MP_EVENT,
  modifyTaroEvent: SID_MODIFY_TARO_EVENT,
  modifyDispatchEvent: SID_MODIFY_DISPATCH_EVENT,
  batchedEventUpdates: SID_BATCHED_EVENT_UPDATES,
  mergePageInstance: SID_MERGE_PAGE_INSTANCE,
  createPullDownComponent: SID_CREATE_PULLDOWN_COMPONENT,
  getDOMNode: SID_GET_DOM_NODE,
  initNativeApi: SID_INIT_NATIVE_API,
  modifyHydrateData: SID_MODIFY_HYDRATE_DATA,
  modifySetAttrPayload: SID_MODIFY_SET_ATTR_PAYLOAD,
  modifyRmAttrPayload: SID_MODIFY_RM_ATTR_PAYLOAD,
  onAddEvent: SID_ON_ADD_EVENT,
  patchElement: SID_PATCH_ELEMENT,
  modifyPageObject: SID_MODIFY_PAGE_OBJECT
};
var ElementNames;

(function (ElementNames) {
  ElementNames["Element"] = "Element";
  ElementNames["Document"] = "Document";
  ElementNames["RootElement"] = "RootElement";
  ElementNames["FormElement"] = "FormElement";
})(ElementNames || (ElementNames = {}));

var store = {
  container: null
};

function getHooks() {
  return store.container.get(SID_HOOKS);
}

function getElementFactory() {
  return store.container.get(SID_TARO_ELEMENT_FACTORY);
}

function getNodeImpl() {
  return store.container.get(SID_TARO_NODE_IMPL);
}

function getElementImpl() {
  return store.container.get(SID_TARO_ELEMENT_IMPL);
}

function getDocument() {
  var getElement = getElementFactory();
  return getElement(ElementNames.Document)();
}

var TaroEventTarget = /*#__PURE__*/function () {
  function TaroEventTarget() {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroEventTarget);

    this.__handlers = {};
    this.hooks = getHooks();
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      var _a, _b;

      (_b = (_a = this.hooks).onAddEvent) === null || _b === void 0 ? void 0 : _b.call(_a, type, handler, options, this);

      if (type === 'regionchange') {
        // map 组件的 regionchange 事件非常特殊，详情：https://github.com/NervJS/taro/issues/5766
        this.addEventListener('begin', handler, options);
        this.addEventListener('end', handler, options);
        return;
      }

      type = type.toLowerCase();
      var handlers = this.__handlers[type];
      var isCapture = Boolean(options);
      var isOnce = false;

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isObject */ "k"])(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }

      if (isOnce) {
        var wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element

          this.removeEventListener(type, wrapper);
        };

        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }

       true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "u"])(isCapture, 'Taro 暂未实现 event 的 capture 特性。');

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "h"])(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();

      if (!handler) {
        return;
      }

      var handlers = this.__handlers[type];

      if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "h"])(handlers)) {
        return;
      }

      var index = handlers.indexOf(handler);
       true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "u"])(index === -1, "\u4E8B\u4EF6: '".concat(type, "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"));
      handlers.splice(index, 1);
    }
  }, {
    key: "isAnyEventBinded",
    value: function isAnyEventBinded() {
      var handlers = this.__handlers;
      var isAnyEventBinded = Object.keys(handlers).find(function (key) {
        return handlers[key].length;
      });
      return Boolean(isAnyEventBinded);
    }
  }]);

  return TaroEventTarget;
}();

TaroEventTarget = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])(), __metadata("design:paramtypes", [])], TaroEventTarget);
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */

function hydrate(node) {
  var _data;

  var _a, _b;

  var nodeName = node.nodeName;

  if (isText(node)) {
    var _ref;

    return _ref = {}, Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_ref, "v"
    /* Text */
    , node.nodeValue), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_ref, "nn"
    /* NodeName */
    , nodeName), _ref;
  }

  var data = (_data = {}, Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_data, "nn"
  /* NodeName */
  , nodeName), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_data, "uid", node.uid), _data);
  var props = node.props;
  var SPECIAL_NODES = node.hooks.getSpecialNodes();

  if (!node.isAnyEventBinded() && SPECIAL_NODES.indexOf(nodeName) > -1) {
    data["nn"
    /* NodeName */
    ] = "static-".concat(nodeName);

    if (nodeName === VIEW && !isHasExtractProp(node)) {
      data["nn"
      /* NodeName */
      ] = PURE_VIEW;
    }
  }

  for (var prop in props) {
    var propInCamelCase = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(prop);

    if (!prop.startsWith('data-') && // 在 node.dataset 的数据
    prop !== CLASS && prop !== STYLE && prop !== ID && propInCamelCase !== CATCHMOVE) {
      data[propInCamelCase] = props[prop];
    }

    if (nodeName === VIEW && propInCamelCase === CATCHMOVE && props[prop] !== false) {
      data["nn"
      /* NodeName */
      ] = CATCH_VIEW;
    }
  }

  var childNodes = node.childNodes; // 过滤 comment 节点

  childNodes = childNodes.filter(function (node) {
    return !isComment(node);
  });

  if (childNodes.length > 0) {
    data["cn"
    /* Childnodes */
    ] = childNodes.map(hydrate);
  } else {
    data["cn"
    /* Childnodes */
    ] = [];
  }

  if (node.className !== '') {
    data["cl"
    /* Class */
    ] = node.className;
  }

  if (node.cssText !== '' && nodeName !== 'swiper-item') {
    data["st"
    /* Style */
    ] = node.cssText;
  }

  (_b = (_a = node.hooks).modifyHydrateData) === null || _b === void 0 ? void 0 : _b.call(_a, data);
  return data;
}

var eventSource = new Map();
var nodeId = incrementId();

var TaroNode = /*#__PURE__*/function (_TaroEventTarget) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroNode, _TaroEventTarget);

  var _super = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroNode);

  function TaroNode() {
    var _this;

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroNode);

    _this = _super.call(this);
    _this.parentNode = null;
    _this.childNodes = [];
    _this._getElement = getElementFactory();

    _this.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };

    var impl = getNodeImpl();
    impl.bind(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this));
    _this.uid = "_n_".concat(nodeId());
    eventSource.set(_this.uid, Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this));
    return _this;
  }
  /**
   * like jQuery's $.empty()
   */


  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroNode, [{
    key: "_empty",
    value: function _empty() {
      while (this.childNodes.length > 0) {
        var child = this.childNodes[0];
        child.parentNode = null;
        eventSource.delete(child.uid);
        this.childNodes.shift();
      }
    }
  }, {
    key: "_root",
    get: function get() {
      var _a;

      return ((_a = this.parentNode) === null || _a === void 0 ? void 0 : _a._root) || null;
    }
  }, {
    key: "findIndex",
    value: function findIndex(refChild) {
      var index = this.childNodes.indexOf(refChild);
      Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "f"])(index !== -1, 'The node to be replaced is not a child of this node.');
      return index;
    }
  }, {
    key: "_path",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        // 计算路径时，先过滤掉 comment 节点
        var list = parentNode.childNodes.filter(function (node) {
          return !isComment(node);
        });
        var indexOfNode = list.indexOf(this);
        var index = this.hooks.getPathIndex(indexOfNode);
        return "".concat(parentNode._path, ".", "cn"
        /* Childnodes */
        , ".").concat(index);
      }

      return '';
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;
      return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) + 1]) || null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;
      return (parentNode === null || parentNode === void 0 ? void 0 : parentNode.childNodes[parentNode.findIndex(this) - 1]) || null;
    }
  }, {
    key: "parentElement",
    get: function get() {
      var parentNode = this.parentNode;

      if ((parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeType) === 1
      /* ELEMENT_NODE */
      ) {
        return parentNode;
      }

      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var childNodes = this.childNodes;
      return childNodes[childNodes.length - 1] || null;
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */

  }, {
    key: "textContent",
    set: function set(text) {
      this._empty();

      if (text === '') {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return [];
          }
        });
      } else {
        var _document = this._getElement(ElementNames.Document)();

        this.appendChild(_document.createTextNode(text));
      }
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this2 = this;

      if (newChild.nodeName === DOCUMENT_FRAGMENT) {
        newChild.childNodes.reduceRight(function (previousValue, currentValue) {
          _this2.insertBefore(currentValue, previousValue);

          return currentValue;
        }, refChild);
        return newChild;
      }

      newChild.remove();
      newChild.parentNode = this;
      var payload;

      if (refChild) {
        var index = this.findIndex(refChild);
        this.childNodes.splice(index, 0, newChild);

        if (isReplace) {
          payload = {
            path: newChild._path,
            value: this.hydrate(newChild)
          };
        } else {
          payload = {
            path: "".concat(this._path, ".", "cn"
            /* Childnodes */
            ),
            value: function value() {
              var childNodes = _this2.childNodes.filter(function (node) {
                return !isComment(node);
              });

              return childNodes.map(hydrate);
            }
          };
        }
      } else {
        this.childNodes.push(newChild);
        payload = {
          path: newChild._path,
          value: this.hydrate(newChild)
        };
      }

      this.enqueueUpdate(payload);

      if (!eventSource.has(newChild.uid)) {
        eventSource.set(newChild.uid, newChild);
      }

      return newChild;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      this.insertBefore(child);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      if (oldChild.parentNode === this) {
        this.insertBefore(newChild, oldChild, true);
        oldChild.remove(true);
        return oldChild;
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(child, isReplace) {
      var _this3 = this;

      var index = this.findIndex(child);
      this.childNodes.splice(index, 1);

      if (!isReplace) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            var childNodes = _this3.childNodes.filter(function (node) {
              return !isComment(node);
            });

            return childNodes.map(hydrate);
          }
        });
      }

      child.parentNode = null;
      eventSource.delete(child.uid); // @TODO: eventSource memory overflow
      // child._empty()

      return child;
    }
  }, {
    key: "remove",
    value: function remove(isReplace) {
      var _a;

      (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this, isReplace);
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      var _a;

      (_a = this._root) === null || _a === void 0 ? void 0 : _a.enqueueUpdate(payload);
    }
  }, {
    key: "ownerDocument",
    get: function get() {
      var document = this._getElement(ElementNames.Document)();

      return document;
    }
  }]);

  return TaroNode;
}(TaroEventTarget);

TaroNode = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])(), __metadata("design:paramtypes", [])], TaroNode);

var TaroText = /*#__PURE__*/function (_TaroNode) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroText, _TaroNode);

  var _super2 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroText);

  function TaroText() {
    var _this4;

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroText);

    _this4 = _super2.apply(this, arguments);
    _this4.nodeType = 3
    /* TEXT_NODE */
    ;
    _this4.nodeName = '#text';
    return _this4;
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroText, [{
    key: "textContent",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "v"
        /* Text */
        ),
        value: text
      });
    }
  }, {
    key: "nodeValue",
    get: function get() {
      return this._value;
    },
    set: function set(text) {
      this.textContent = text;
    }
  }]);

  return TaroText;
}(TaroNode);

TaroText = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])()], TaroText);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */

var styleProperties = ['all', 'appearance', 'blockOverflow', 'blockSize', 'bottom', 'clear', 'contain', 'content', 'continue', 'cursor', 'direction', 'display', 'filter', 'float', 'gap', 'height', 'inset', 'isolation', 'left', 'letterSpacing', 'lightingColor', 'markerSide', 'mixBlendMode', 'opacity', 'order', 'position', 'quotes', 'resize', 'right', 'rowGap', 'tabSize', 'tableLayout', 'top', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'zIndex'
/** 非常用 style */
// 'azimuth',
// 'backfaceVisibility',
// 'baselineShift',
// 'captionSide',
// 'chains',
// 'dominantBaseline',
// 'elevation',
// 'emptyCells',
// 'forcedColorAdjust',
// 'glyphOrientationVertical',
// 'hangingPunctuation',
// 'hyphenateCharacter',
// 'hyphens',
// 'imageOrientation',
// 'imageResolution',
// 'orphans',
// 'playDuring',
// 'pointerEvents',
// 'regionFragment',
// 'richness',
// 'running',
// 'scrollBehavior',
// 'speechRate',
// 'stress',
// 'stringSet',
// 'unicodeBidi',
// 'willChange',
// 'writingMode',
]; // 减少文件体积

function combine(prefix, list, excludeSelf) {
  !excludeSelf && styleProperties.push(prefix);
  list.forEach(function (item) {
    styleProperties.push(prefix + item);
  });
}

var color = 'Color';
var style = 'Style';
var width = 'Width';
var image = 'Image';
var size = 'Size';
var color_style_width = [color, style, width];
var fitlength_fitwidth_image = ['FitLength', 'FitWidth', image];
var fitlength_fitwidth_image_radius = [].concat(fitlength_fitwidth_image, ['Radius']);
var color_style_width_fitlength_fitwidth_image = [].concat(color_style_width, fitlength_fitwidth_image);
var endRadius_startRadius = ['EndRadius', 'StartRadius'];
var bottom_left_right_top = ['Bottom', 'Left', 'Right', 'Top'];
var end_start = ['End', 'Start'];
var content_items_self = ['Content', 'Items', 'Self'];
var blockSize_height_inlineSize_width = ['BlockSize', 'Height', 'InlineSize', width];
var after_before = ['After', 'Before'];
combine('borderBlock', color_style_width);
combine('borderBlockEnd', color_style_width);
combine('borderBlockStart', color_style_width);
combine('outline', [].concat(color_style_width, ['Offset']));
combine('border', [].concat(color_style_width, ['Boundary', 'Break', 'Collapse', 'Radius', 'Spacing']));
combine('borderFit', ['Length', width]);
combine('borderInline', color_style_width);
combine('borderInlineEnd', color_style_width);
combine('borderInlineStart', color_style_width);
combine('borderLeft', color_style_width_fitlength_fitwidth_image);
combine('borderRight', color_style_width_fitlength_fitwidth_image);
combine('borderTop', color_style_width_fitlength_fitwidth_image);
combine('borderBottom', color_style_width_fitlength_fitwidth_image);
combine('textDecoration', [color, style, 'Line']);
combine('textEmphasis', [color, style, 'Position']);
combine('scrollMargin', bottom_left_right_top);
combine('scrollPadding', bottom_left_right_top);
combine('padding', bottom_left_right_top);
combine('margin', [].concat(bottom_left_right_top, ['Trim']));
combine('scrollMarginBlock', end_start);
combine('scrollMarginInline', end_start);
combine('scrollPaddingBlock', end_start);
combine('scrollPaddingInline', end_start);
combine('gridColumn', end_start);
combine('gridRow', end_start);
combine('insetBlock', end_start);
combine('insetInline', end_start);
combine('marginBlock', end_start);
combine('marginInline', end_start);
combine('paddingBlock', end_start);
combine('paddingInline', end_start);
combine('pause', after_before);
combine('cue', after_before);
combine('mask', ['Clip', 'Composite', image, 'Mode', 'Origin', 'Position', 'Repeat', size, 'Type']);
combine('borderImage', ['Outset', 'Repeat', 'Slice', 'Source', 'Transform', width]);
combine('maskBorder', ['Mode', 'Outset', 'Repeat', 'Slice', 'Source', width]);
combine('font', ['Family', 'FeatureSettings', 'Kerning', 'LanguageOverride', 'MaxSize', 'MinSize', 'OpticalSizing', 'Palette', size, 'SizeAdjust', 'Stretch', style, 'Weight', 'VariationSettings']);
combine('fontSynthesis', ['SmallCaps', style, 'Weight']);
combine('transform', ['Box', 'Origin', style]);
combine('background', [color, image, 'Attachment', 'BlendMode', 'Clip', 'Origin', 'Position', 'Repeat', size]);
combine('listStyle', [image, 'Position', 'Type']);
combine('scrollSnap', ['Align', 'Stop', 'Type']);
combine('grid', ['Area', 'AutoColumns', 'AutoFlow', 'AutoRows']);
combine('gridTemplate', ['Areas', 'Columns', 'Rows']);
combine('overflow', ['Block', 'Inline', 'Wrap', 'X', 'Y']);
combine('transition', ['Delay', 'Duration', 'Property', 'TimingFunction']);
combine('lineStacking', ['Ruby', 'Shift', 'Strategy']);
combine('color', ['Adjust', 'InterpolationFilters', 'Scheme']);
combine('textAlign', ['All', 'Last']);
combine('page', ['BreakAfter', 'BreakBefore', 'BreakInside']);
combine('speak', ['Header', 'Numeral', 'Punctuation']);
combine('animation', ['Delay', 'Direction', 'Duration', 'FillMode', 'IterationCount', 'Name', 'PlayState', 'TimingFunction']);
combine('flex', ['Basis', 'Direction', 'Flow', 'Grow', 'Shrink', 'Wrap']);
combine('offset', [].concat(after_before, end_start, ['Anchor', 'Distance', 'Path', 'Position', 'Rotate']));
combine('fontVariant', ['Alternates', 'Caps', 'EastAsian', 'Emoji', 'Ligatures', 'Numeric', 'Position']);
combine('perspective', ['Origin']);
combine('pitch', ['Range']);
combine('clip', ['Path', 'Rule']);
combine('flow', ['From', 'Into']);
combine('align', ['Content', 'Items', 'Self'], true);
combine('alignment', ['Adjust', 'Baseline'], true);
combine('bookmark', ['Label', 'Level', 'State'], true);
combine('borderStart', endRadius_startRadius, true);
combine('borderEnd', endRadius_startRadius, true);
combine('borderCorner', ['Fit', image, 'ImageTransform'], true);
combine('borderTopLeft', fitlength_fitwidth_image_radius, true);
combine('borderTopRight', fitlength_fitwidth_image_radius, true);
combine('borderBottomLeft', fitlength_fitwidth_image_radius, true);
combine('borderBottomRight', fitlength_fitwidth_image_radius, true);
combine('column', ['s', 'Count', 'Fill', 'Gap', 'Rule', 'RuleColor', 'RuleStyle', 'RuleWidth', 'Span', width], true);
combine('break', [].concat(after_before, ['Inside']), true);
combine('wrap', [].concat(after_before, ['Flow', 'Inside', 'Through']), true);
combine('justify', content_items_self, true);
combine('place', content_items_self, true);
combine('max', [].concat(blockSize_height_inlineSize_width, ['Lines']), true);
combine('min', blockSize_height_inlineSize_width, true);
combine('line', ['Break', 'Clamp', 'Grid', 'Height', 'Padding', 'Snap'], true);
combine('inline', ['BoxAlign', size, 'Sizing'], true);
combine('text', ['CombineUpright', 'GroupAlign', 'Height', 'Indent', 'Justify', 'Orientation', 'Overflow', 'Shadow', 'SpaceCollapse', 'SpaceTrim', 'Spacing', 'Transform', 'UnderlinePosition', 'Wrap'], true);
combine('shape', ['ImageThreshold', 'Inside', 'Margin', 'Outside'], true);
combine('word', ['Break', 'Spacing', 'Wrap'], true);
combine('nav', ['Down', 'Left', 'Right', 'Up'], true);
combine('object', ['Fit', 'Position'], true);
combine('box', ['DecorationBreak', 'Shadow', 'Sizing', 'Snap'], true);

function setStyle(newVal, styleKey) {
  var old = this[styleKey];

  if (newVal) {
    this._usedStyleProp.add(styleKey);
  }

   true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "u"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isString */ "l"])(newVal) && newVal.length > PROPERTY_THRESHOLD, "Style \u5C5E\u6027 ".concat(styleKey, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002"));

  if (old !== newVal) {
    this._value[styleKey] = newVal;

    this._element.enqueueUpdate({
      path: "".concat(this._element._path, ".", "st"
      /* Style */
      ),
      value: this.cssText
    });
  }
}

function initStyle(ctor) {
  var properties = {};

  var _loop = function _loop(i) {
    var styleKey = styleProperties[i];
    properties[styleKey] = {
      get: function get() {
        return this._value[styleKey] || '';
      },
      set: function set(newVal) {
        setStyle.call(this, newVal, styleKey);
      }
    };
  };

  for (var i = 0; i < styleProperties.length; i++) {
    _loop(i);
  }

  Object.defineProperties(ctor.prototype, properties);
}

function isCssVariable(propertyName) {
  return /^--/.test(propertyName);
}

var Style = /*#__PURE__*/function () {
  function Style(element) {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, Style);

    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Style, [{
    key: "setCssVariables",
    value: function setCssVariables(styleKey) {
      var _this5 = this;

      this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return _this5._value[styleKey] || '';
        },
        set: function set(newVal) {
          setStyle.call(_this5, newVal, styleKey);
        }
      });
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this6 = this;

      var text = '';

      this._usedStyleProp.forEach(function (key) {
        var val = _this6[key];
        if (!val) return;
        var styleName = isCssVariable(key) ? key : Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toDashed */ "t"])(key);
        text += "".concat(styleName, ": ").concat(val, ";");
      });

      return text;
    },
    set: function set(str) {
      var _this7 = this;

      if (str == null) {
        str = '';
      }

      this._usedStyleProp.forEach(function (prop) {
        _this7.removeProperty(prop);
      });

      if (str === '') {
        return;
      }

      var rules = str.split(';');

      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();

        if (rule === '') {
          continue;
        } // 可能存在 'background: url(http:x/y/z)' 的情况


        var _rule$split = rule.split(':'),
            _rule$split2 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_rule$split),
            propName = _rule$split2[0],
            valList = _rule$split2.slice(1);

        var val = valList.join(':');

        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(val)) {
          continue;
        }

        this.setProperty(propName.trim(), val.trim());
      }
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      if (propertyName[0] === '-') {
        // 支持 webkit 属性或 css 变量
        this.setCssVariables(propertyName);
      } else {
        propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(propertyName);
      }

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(value)) {
        return;
      }

      if (value === null || value === '') {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(propertyName);

      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }

      var value = this[propertyName];
      this[propertyName] = '';

      this._usedStyleProp.delete(propertyName);

      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(propertyName);
      var value = this[propertyName];

      if (!value) {
        return '';
      }

      return value;
    }
  }]);

  return Style;
}();

initStyle(Style);

function returnTrue() {
  return true;
}

function treeToArray(root, predict) {
  var array = [];
  var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  var object = root;

  while (object) {
    if (object.nodeType === 1
    /* ELEMENT_NODE */
    && filter(object)) {
      array.push(object);
    }

    object = following(object, root);
  }

  return array;
}

function following(el, root) {
  var firstChild = el.firstChild;

  if (firstChild) {
    return firstChild;
  }

  var current = el;

  do {
    if (current === root) {
      return null;
    }

    var nextSibling = current.nextSibling;

    if (nextSibling) {
      return nextSibling;
    }

    current = current.parentElement;
  } while (current);

  return null;
}

var ClassList = /*#__PURE__*/function (_Set2) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(ClassList, _Set2);

  var _super3 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(ClassList);

  function ClassList(className, el) {
    var _thisSuper, _this8;

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, ClassList);

    _this8 = _super3.call(this);
    className.trim().split(/\s+/).forEach(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])((_thisSuper = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this8), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype)), "add", _thisSuper).bind(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this8)));
    _this8.el = el;
    return _this8;
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(ClassList, [{
    key: "value",
    get: function get() {
      return Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this).join(' ');
    }
  }, {
    key: "add",
    value: function add(s) {
      Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s);

      this._update();

      return this;
    }
  }, {
    key: "length",
    get: function get() {
      return this.size;
    }
  }, {
    key: "remove",
    value: function remove(s) {
      Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s);

      this._update();
    }
  }, {
    key: "toggle",
    value: function toggle(s) {
      if (Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype), "has", this).call(this, s)) {
        Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s);
      } else {
        Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s);
      }

      this._update();
    }
  }, {
    key: "replace",
    value: function replace(s1, s2) {
      Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s1);

      Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s2);

      this._update();
    }
  }, {
    key: "contains",
    value: function contains(s) {
      return Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(ClassList.prototype), "has", this).call(this, s);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "_update",
    value: function _update() {
      this.el.className = this.value;
    }
  }]);

  return ClassList;
}( /*#__PURE__*/Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Set));

var TaroElement = /*#__PURE__*/function (_TaroNode2) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroElement, _TaroNode2);

  var _super4 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroElement);

  function TaroElement() {
    var _this9;

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroElement);

    var _a, _b;

    _this9 = _super4.call(this);
    _this9.props = {};
    _this9.dataset = _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
    var impl = getElementImpl();
    impl.bind(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this9));
    _this9.nodeType = 1
    /* ELEMENT_NODE */
    ;
    _this9.style = new Style(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this9));
    (_b = (_a = _this9.hooks).patchElement) === null || _b === void 0 ? void 0 : _b.call(_a, Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_this9));
    return _this9;
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroElement, [{
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this; // eslint-disable-next-line no-cond-assign

      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];

        if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "h"])(listeners)) {
          continue;
        }

        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute(ID);
    },
    set: function set(val) {
      this.setAttribute(ID, val);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute(CLASS) || '';
    },
    set: function set(val) {
      this.setAttribute(CLASS, val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute(STYLE) || '';
    }
  }, {
    key: "classList",
    get: function get() {
      return new ClassList(this.className, this);
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var props = this.props;
      var propKeys = Object.keys(props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (key) {
        return {
          name: key,
          value: props[key]
        };
      });
      return attrs.concat(style ? {
        name: STYLE,
        value: style
      } : []);
    }
  }, {
    key: "textContent",
    get: function get() {
      var text = '';
      var childNodes = this.childNodes;

      for (var i = 0; i < childNodes.length; i++) {
        text += childNodes[i].textContent;
      }

      return text;
    },
    set: function set(text) {
      Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroElement.prototype), "textContent", text, this, true);
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.setAttribute(FOCUS, true);
    }
  }, {
    key: "blur",
    value: function blur() {
      this.setAttribute(FOCUS, false);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      var _a, _b;

       true && Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* warn */ "u"])(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isString */ "l"])(value) && value.length > PROPERTY_THRESHOLD, "\u5143\u7D20 ".concat(this.nodeName, " \u7684 \u5C5E\u6027 ").concat(qualifiedName, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002"));
      var isPureView = this.nodeName === VIEW && !isHasExtractProp(this) && !this.isAnyEventBinded();

      switch (qualifiedName) {
        case STYLE:
          this.style.cssText = value;
          break;

        case ID:
          eventSource.delete(this.uid);
          value = String(value);
          this.props[qualifiedName] = this.uid = value;
          eventSource.set(value, this);
          break;

        default:
          this.props[qualifiedName] = value;

          if (qualifiedName.startsWith('data-')) {
            if (this.dataset === _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"]) {
              this.dataset = Object.create(null);
            }

            this.dataset[Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(qualifiedName.replace(/^data-/, ''))] = value;
          }

          break;
      }

      qualifiedName = shortcutAttr(qualifiedName);
      var payload = {
        path: "".concat(this._path, ".").concat(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(qualifiedName)),
        value: value
      };
      (_b = (_a = this.hooks).modifySetAttrPayload) === null || _b === void 0 ? void 0 : _b.call(_a, this, qualifiedName, payload);
      this.enqueueUpdate(payload);

      if (this.nodeName === VIEW) {
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(qualifiedName) === CATCHMOVE) {
          // catchMove = true: catch-view
          // catchMove = false: view or static-view
          this.enqueueUpdate({
            path: "".concat(this._path, ".", "nn"
            /* NodeName */
            ),
            value: value ? CATCH_VIEW : this.isAnyEventBinded() ? VIEW : STATIC_VIEW
          });
        } else if (isPureView && isHasExtractProp(this)) {
          // pure-view => static-view
          this.enqueueUpdate({
            path: "".concat(this._path, ".", "nn"
            /* NodeName */
            ),
            value: STATIC_VIEW
          });
        }
      }
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      var _a, _b, _c, _d;

      var isStaticView = this.nodeName === VIEW && isHasExtractProp(this) && !this.isAnyEventBinded();

      if (qualifiedName === STYLE) {
        this.style.cssText = '';
      } else {
        var isInterrupt = (_b = (_a = this.hooks).onRemoveAttribute) === null || _b === void 0 ? void 0 : _b.call(_a, this, qualifiedName);

        if (isInterrupt) {
          return;
        }

        if (!this.props.hasOwnProperty(qualifiedName)) {
          return;
        }

        delete this.props[qualifiedName];
      }

      qualifiedName = shortcutAttr(qualifiedName);
      var payload = {
        path: "".concat(this._path, ".").concat(Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(qualifiedName)),
        value: ''
      };
      (_d = (_c = this.hooks).modifyRmAttrPayload) === null || _d === void 0 ? void 0 : _d.call(_c, this, qualifiedName, payload);
      this.enqueueUpdate(payload);

      if (this.nodeName === VIEW) {
        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* toCamelCase */ "s"])(qualifiedName) === CATCHMOVE) {
          // catch-view => view or static-view or pure-view
          this.enqueueUpdate({
            path: "".concat(this._path, ".", "nn"
            /* NodeName */
            ),
            value: this.isAnyEventBinded() ? VIEW : isHasExtractProp(this) ? STATIC_VIEW : PURE_VIEW
          });
        } else if (isStaticView && !isHasExtractProp(this)) {
          // static-view => pure-view
          this.enqueueUpdate({
            path: "".concat(this._path, ".", "nn"
            /* NodeName */
            ),
            value: PURE_VIEW
          });
        }
      }
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === STYLE ? this.style.cssText : this.props[qualifiedName];
      return attr !== null && attr !== void 0 ? attr : '';
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      var _this10 = this;

      return treeToArray(this, function (el) {
        return el.nodeName === tagName || tagName === '*' && _this10 !== el;
      });
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return treeToArray(this, function (el) {
        var classList = el.classList;
        var classNames = className.trim().split(/\s+/);
        return classNames.every(function (c) {
          return classList.has(c);
        });
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;
      var listeners = this.__handlers[event.type];

      if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "h"])(listeners)) {
        return false;
      }

      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;

        if (listener._stop) {
          listener._stop = false;
        } else {
          this.hooks.modifyDispatchEvent(event, this);
          result = listener.call(this, event);
        }

        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }

        if (event._end && event._stop) {
          break;
        }
      }

      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }

      return listeners != null;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      var name = this.nodeName;
      var SPECIAL_NODES = this.hooks.getSpecialNodes();

      if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "nn"
          /* NodeName */
          ),
          value: name
        });
      }

      Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroElement.prototype), "addEventListener", this).call(this, type, handler, options);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(TaroElement.prototype), "removeEventListener", this).call(this, type, handler);

      var name = this.nodeName;
      var SPECIAL_NODES = this.hooks.getSpecialNodes();

      if (!this.isAnyEventBinded() && SPECIAL_NODES.indexOf(name) > -1) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "nn"
          /* NodeName */
          ),
          value: isHasExtractProp(this) ? "static-".concat(name) : "pure-".concat(name)
        });
      }
    }
  }]);

  return TaroElement;
}(TaroNode);

TaroElement = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])(), __metadata("design:paramtypes", [])], TaroElement);
var options = {
  prerender: true,
  debug: false
};

var Performance = /*#__PURE__*/function () {
  function Performance() {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, Performance);

    this.recorder = new Map();
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Performance, [{
    key: "start",
    value: function start(id) {
      if (!options.debug) {
        return;
      }

      this.recorder.set(id, Date.now());
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (!options.debug) {
        return;
      }

      var now = Date.now();
      var prev = this.recorder.get(id);
      var time = now - prev; // eslint-disable-next-line no-console

      console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
    }
  }]);

  return Performance;
}();

var perf = new Performance();

function findCustomWrapper(ctx, dataPathArr) {
  var currentData = ctx.__data__ || ctx.data || ctx._data;
  var wrapper;
  var index;
  dataPathArr.some(function (item, i) {
    var key = item.replace(/^\[(.+)\]$/, '$1');
    currentData = currentData[key];
    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(currentData)) return true;

    if (currentData.nn === CUSTOM_WRAPPER) {
      wrapper = currentData;
      index = i;
    }
  });

  if (wrapper) {
    return {
      wrapper: wrapper,
      index: index
    };
  }
}

var TaroRootElement = /*#__PURE__*/function (_TaroElement) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroRootElement, _TaroElement);

  var _super5 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroRootElement);

  function TaroRootElement() {
    var _this11;

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroRootElement);

    _this11 = _super5.call(this);
    _this11.updatePayloads = [];
    _this11.updateCallbacks = [];
    _this11.pendingUpdate = false;
    _this11.ctx = null;
    _this11.nodeName = ROOT_STR;
    return _this11;
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroRootElement, [{
    key: "_path",
    get: function get() {
      return ROOT_STR;
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);

      if (!this.pendingUpdate && this.ctx) {
        this.performUpdate();
      }
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this12 = this;

      var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prerender = arguments.length > 1 ? arguments[1] : undefined;
      this.pendingUpdate = true;
      var ctx = this.ctx;
      setTimeout(function () {
        perf.start(SET_DATA);
        var data = Object.create(null);
        var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);

        while (_this12.updatePayloads.length > 0) {
          var _this12$updatePayload = _this12.updatePayloads.shift(),
              path = _this12$updatePayload.path,
              value = _this12$updatePayload.value;

          if (path.endsWith("cn"
          /* Childnodes */
          )) {
            resetPaths.add(path);
          }

          data[path] = value;
        }

        var _loop2 = function _loop2(_path) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path.includes(p) && _path !== p) {
              delete data[_path];
            }
          });
          var value = data[_path];

          if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(value)) {
            data[_path] = value();
          }
        };

        for (var _path in data) {
          _loop2(_path);
        } // 预渲染


        if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(prerender)) return prerender(data); // 正常渲染

        _this12.pendingUpdate = false;
        var normalUpdate = {};
        var customWrapperMap = new Map();

        if (initRender) {
          // 初次渲染，使用页面级别的 setData
          normalUpdate = data;
        } else {
          // 更新渲染，区分 CustomWrapper 与页面级别的 setData
          for (var p in data) {
            var dataPathArr = p.split('.');
            var found = findCustomWrapper(ctx, dataPathArr);

            if (found) {
              // 此项数据使用 CustomWrapper 去更新
              var wrapper = found.wrapper,
                  index = found.index;
              var customWrapperId = "#".concat(wrapper.uid);
              var customWrapper = ctx.selectComponent(customWrapperId);

              if (customWrapper) {
                var splitedPath = dataPathArr.slice(index + 1).join('.'); // 合并同一个 customWrapper 的相关更新到一次 setData 中

                customWrapperMap.set(customWrapper, Object.assign(Object.assign({}, customWrapperMap.get(customWrapper) || {}), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])({}, "i.".concat(splitedPath), data[p])));
              }
            } else {
              // 此项数据使用页面去更新
              normalUpdate[p] = data[p];
            }
          }
        }

        var customWrpperCount = customWrapperMap.size;
        var isNeedNormalUpdate = Object.keys(normalUpdate).length > 0;
        var updateArrLen = customWrpperCount + (isNeedNormalUpdate ? 1 : 0);
        var executeTime = 0;

        var cb = function cb() {
          if (++executeTime === updateArrLen) {
            perf.stop(SET_DATA);

            _this12.flushUpdateCallback();

            initRender && perf.stop(PAGE_INIT);
          }
        }; // custom-wrapper setData


        if (customWrpperCount) {
          customWrapperMap.forEach(function (data, ctx) {
            if ( true && options.debug) {
              // eslint-disable-next-line no-console
              console.log('custom wrapper setData: ', data);
            }

            ctx.setData(data, cb);
          });
        } // page setData


        if (isNeedNormalUpdate) {
          if ( true && options.debug) {
            // eslint-disable-next-line no-console
            console.log('page setData:', normalUpdate);
          }

          ctx.setData(normalUpdate, cb);
        }
      }, 0);
    }
  }, {
    key: "enqueueUpdateCallback",
    value: function enqueueUpdateCallback(cb, ctx) {
      this.updateCallbacks.push(function () {
        ctx ? cb.call(ctx) : cb();
      });
    }
  }, {
    key: "flushUpdateCallback",
    value: function flushUpdateCallback() {
      var updateCallbacks = this.updateCallbacks;
      if (!updateCallbacks.length) return;
      var copies = updateCallbacks.slice(0);
      this.updateCallbacks.length = 0;

      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
  }]);

  return TaroRootElement;
}(TaroElement);

TaroRootElement = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])(), __metadata("design:paramtypes", [])], TaroRootElement);

var FormElement = /*#__PURE__*/function (_TaroElement2) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(FormElement, _TaroElement2);

  var _super6 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(FormElement);

  function FormElement() {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, FormElement);

    return _super6.apply(this, arguments);
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(FormElement, [{
    key: "value",
    get: function get() {
      // eslint-disable-next-line dot-notation
      var val = this.props[VALUE];
      return val == null ? '' : val;
    },
    set: function set(val) {
      this.setAttribute(VALUE, val);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if (event.mpEvent) {
        var val = event.mpEvent.detail.value;

        if (event.type === CHANGE) {
          this.props.value = val;
        } else if (event.type === INPUT) {
          // Web 规范中表单组件的 value 应该跟着输入改变
          // 只是改 this.props.value 的话不会进行 setData，因此这里修改 this.value。
          // 只测试了 React、Vue、Vue3 input 组件的 onInput 事件，onChange 事件不确定有没有副作用，所以暂不修改。
          this.value = val;
        }
      }

      return Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(FormElement.prototype), "dispatchEvent", this).call(this, event);
    }
  }]);

  return FormElement;
}(TaroElement); // for Vue3


var SVGElement = /*#__PURE__*/function (_TaroElement3) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(SVGElement, _TaroElement3);

  var _super7 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(SVGElement);

  function SVGElement() {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, SVGElement);

    return _super7.apply(this, arguments);
  }

  return SVGElement;
}(TaroElement); // Taro 事件对象。以 Web 标准的事件对象为基础，加入小程序事件对象中携带的部分信息，并模拟实现事件冒泡。


var TaroEvent = /*#__PURE__*/function () {
  function TaroEvent(type, opts, event) {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroEvent);

    this._stop = false;
    this._end = false;
    this.defaultPrevented = false; // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp

    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "target",
    get: function get() {
      var _a, _b, _c;

      var element = getDocument().getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
      return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
        dataset: element !== null ? element.dataset : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"]
      });
    }
  }, {
    key: "currentTarget",
    get: function get() {
      var _a, _b, _c;

      var element = getDocument().getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget.id);

      if (element === null) {
        return this.target;
      }

      return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.currentTarget), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
        dataset: element.dataset
      });
    }
  }]);

  return TaroEvent;
}();

function createEvent(event, node) {
  if (typeof event === 'string') {
    // For Vue3 using document.createEvent
    return new TaroEvent(event, {
      bubbles: true,
      cancelable: true
    });
  }

  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  }, event);

  for (var key in event) {
    if (key === CURRENT_TARGET || key === TARGET || key === TYPE || key === TIME_STAMP) {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }

  if (domEv.type === CONFIRM && (node === null || node === void 0 ? void 0 : node.nodeName) === INPUT) {
    // eslint-disable-next-line dot-notation
    domEv[KEY_CODE] = 13;
  }

  return domEv;
}

var eventsBatch = {}; // 小程序的事件代理回调函数

function eventHandler(event) {
  var _a, _b, _c;

  var hooks = getHooks();
  (_a = hooks.modifyMpEvent) === null || _a === void 0 ? void 0 : _a.call(hooks, event);
  event.currentTarget || (event.currentTarget = event.target);
  var nid = ((_b = event.currentTarget) === null || _b === void 0 ? void 0 : _b.id) || ((_c = event.detail) === null || _c === void 0 ? void 0 : _c.id) || '';
  var node = getDocument().getElementById(nid);

  if (node) {
    var dispatch = function dispatch() {
      var _a;

      var e = createEvent(event, node);
      (_a = hooks.modifyTaroEvent) === null || _a === void 0 ? void 0 : _a.call(hooks, e, node);
      node.dispatchEvent(e);
    };

    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(hooks.batchedEventUpdates)) {
      var type = event.type;

      if (!hooks.isBubbleEvents(type) || !isParentBinded(node, type) || type === TOUCHMOVE && !!node.props.catchMove) {
        // 最上层组件统一 batchUpdate
        hooks.batchedEventUpdates(function () {
          if (eventsBatch[type]) {
            eventsBatch[type].forEach(function (fn) {
              return fn();
            });
            delete eventsBatch[type];
          }

          dispatch();
        });
      } else {
        // 如果上层组件也有绑定同类型的组件，委托给上层组件调用事件回调
        (eventsBatch[type] || (eventsBatch[type] = [])).push(dispatch);
      }
    } else {
      dispatch();
    }
  }
}

var doc =  false ? undefined : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
var win =  false ? undefined : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];

function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}

function feedPosition(position, str, len) {
  var start = position.index;
  var end = position.index = start + len;

  for (var i = start; i < end; i++) {
    var char = str.charAt(i);

    if (char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}

function jumpPosition(position, str, end) {
  var len = end - position.index;
  return feedPosition(position, str, len);
}

function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}

var whitespace = /\s/;

function isWhitespaceChar(char) {
  return whitespace.test(char);
}

var equalSign = /=/;

function isEqualSignChar(char) {
  return equalSign.test(char);
}

function shouldBeIgnore(tagName) {
  var name = tagName.toLowerCase();

  if (options.html.skipElements.has(name)) {
    return true;
  }

  return false;
}

var alphanumeric = /[A-Za-z0-9]/;

function findTextEnd(str, index) {
  while (true) {
    var textEnd = str.indexOf('<', index);

    if (textEnd === -1) {
      return textEnd;
    }

    var char = str.charAt(textEnd + 1);

    if (char === '/' || char === '!' || alphanumeric.test(char)) {
      return textEnd;
    }

    index = textEnd + 1;
  }
}

function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor))) return false;
  var len = html.length; // backwrad

  for (var i = cursor - 1; i > wordBegin; i--) {
    var char = html.charAt(i);

    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char)) return false;
      break;
    }
  } // forward


  for (var _i2 = cursor + 1; _i2 < len; _i2++) {
    var _char = html.charAt(_i2);

    if (!isWhitespaceChar(_char)) {
      if (isEqualSignChar(_char)) return false;
      return true;
    }
  }
}

var Scaner = /*#__PURE__*/function () {
  function Scaner(html) {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, Scaner);

    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Scaner, [{
    key: "scan",
    value: function scan() {
      var html = this.html,
          position = this.position;
      var len = html.length;

      while (position.index < len) {
        var start = position.index;
        this.scanText();

        if (position.index === start) {
          var _isComment = html.startsWith('!--', start + 1);

          if (_isComment) {
            this.scanComment();
          } else {
            var tagName = this.scanTag();

            if (shouldBeIgnore(tagName)) {
              this.scanSkipTag(tagName);
            }
          }
        }
      }

      return this.tokens;
    }
  }, {
    key: "scanText",
    value: function scanText() {
      var type = 'text';
      var html = this.html,
          position = this.position;
      var textEnd = findTextEnd(html, position.index);

      if (textEnd === position.index) {
        return;
      }

      if (textEnd === -1) {
        textEnd = html.length;
      }

      var start = copyPosition(position);
      var content = html.slice(position.index, textEnd);
      jumpPosition(position, html, textEnd);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "scanComment",
    value: function scanComment() {
      var type = 'comment';
      var html = this.html,
          position = this.position;
      var start = copyPosition(position);
      feedPosition(position, html, 4); // "<!--".length

      var contentEnd = html.indexOf('-->', position.index);
      var commentEnd = contentEnd + 3; // "-->".length

      if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
      }

      var content = html.slice(position.index, contentEnd);
      jumpPosition(position, html, commentEnd);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: copyPosition(position)
        }
      });
    }
  }, {
    key: "scanTag",
    value: function scanTag() {
      this.scanTagStart();
      var tagName = this.scanTagName();
      this.scanAttrs();
      this.scanTagEnd();
      return tagName;
    }
  }, {
    key: "scanTagStart",
    value: function scanTagStart() {
      var type = 'tag-start';
      var html = this.html,
          position = this.position;
      var secondChar = html.charAt(position.index + 1);
      var close = secondChar === '/';
      var start = copyPosition(position);
      feedPosition(position, html, close ? 2 : 1);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          start: start
        }
      });
    }
  }, {
    key: "scanTagEnd",
    value: function scanTagEnd() {
      var type = 'tag-end';
      var html = this.html,
          position = this.position;
      var firstChar = html.charAt(position.index);
      var close = firstChar === '/';
      feedPosition(position, html, close ? 2 : 1);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          end: end
        }
      });
    }
  }, {
    key: "scanTagName",
    value: function scanTagName() {
      var type = 'tag';
      var html = this.html,
          position = this.position;
      var len = html.length;
      var start = position.index;

      while (start < len) {
        var char = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
        if (isTagChar) break;
        start++;
      }

      var end = start + 1;

      while (end < len) {
        var _char2 = html.charAt(end);

        var _isTagChar = !(isWhitespaceChar(_char2) || _char2 === '/' || _char2 === '>');

        if (!_isTagChar) break;
        end++;
      }

      jumpPosition(position, html, end);
      var tagName = html.slice(start, end);
      this.tokens.push({
        type: type,
        content: tagName
      });
      return tagName;
    }
  }, {
    key: "scanAttrs",
    value: function scanAttrs() {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var cursor = position.index;
      var quote = null; // null, single-, or double-quote

      var wordBegin = cursor; // index of word start

      var words = []; // "key", "key=value", "key='value'", etc

      var len = html.length;

      while (cursor < len) {
        var char = html.charAt(cursor);

        if (quote) {
          var isQuoteEnd = char === quote;

          if (isQuoteEnd) {
            quote = null;
          }

          cursor++;
          continue;
        }

        var isTagEnd = char === '/' || char === '>';

        if (isTagEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          break;
        }

        if (isWordEnd(cursor, wordBegin, html)) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          wordBegin = cursor + 1;
          cursor++;
          continue;
        }

        var isQuoteStart = char === '\'' || char === '"';

        if (isQuoteStart) {
          quote = char;
          cursor++;
          continue;
        }

        cursor++;
      }

      jumpPosition(position, html, cursor);
      var wLen = words.length;
      var type = 'attribute';

      for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');

        if (isNotPair) {
          var secondWord = words[i + 1];

          if (secondWord && secondWord.startsWith('=')) {
            if (secondWord.length > 1) {
              var newWord = word + secondWord;
              tokens.push({
                type: type,
                content: newWord
              });
              i += 1;
              continue;
            }

            var thirdWord = words[i + 2];
            i += 1;

            if (thirdWord) {
              var _newWord = word + '=' + thirdWord;

              tokens.push({
                type: type,
                content: _newWord
              });
              i += 1;
              continue;
            }
          }
        }

        if (word.endsWith('=')) {
          var _secondWord = words[i + 1];

          if (_secondWord && !_secondWord.includes('=')) {
            var _newWord3 = word + _secondWord;

            tokens.push({
              type: type,
              content: _newWord3
            });
            i += 1;
            continue;
          }

          var _newWord2 = word.slice(0, -1);

          tokens.push({
            type: type,
            content: _newWord2
          });
          continue;
        }

        tokens.push({
          type: type,
          content: word
        });
      }
    }
  }, {
    key: "scanSkipTag",
    value: function scanSkipTag(tagName) {
      var html = this.html,
          position = this.position;
      var safeTagName = tagName.toLowerCase();
      var len = html.length;

      while (position.index < len) {
        var nextTag = html.indexOf('</', position.index);

        if (nextTag === -1) {
          this.scanText();
          break;
        }

        jumpPosition(position, html, nextTag);
        var name = this.scanTag();

        if (safeTagName === name.toLowerCase()) {
          break;
        }
      }
    }
  }]);

  return Scaner;
}();

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}

var specialMiniElements = {
  img: 'image',
  iframe: 'web-view'
};
var internalCompsList = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* internalComponents */ "g"]).map(function (i) {
  return i.toLowerCase();
}).join(','); // https://developers.weixin.qq.com/miniprogram/dev/component

var isMiniElements = makeMap(internalCompsList, true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

var isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);

function unquote(str) {
  var car = str.charAt(0);
  var end = str.length - 1;
  var isQuoteStart = car === '"' || car === "'";

  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }

  return str;
}

var LEFT_BRACKET = '{';
var RIGHT_BRACKET = '}';
var CLASS_SELECTOR = '.';
var ID_SELECTOR = '#';
var CHILD_COMBINATOR = '>';
var GENERAL_SIBLING_COMBINATOR = '~';
var ADJACENT_SIBLING_COMBINATOR = '+';

var StyleTagParser = /*#__PURE__*/function () {
  function StyleTagParser() {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, StyleTagParser);

    this.styles = [];
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(StyleTagParser, [{
    key: "extractStyle",
    value: function extractStyle(src) {
      var _this13 = this;

      var REG_STYLE = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g;
      var html = src; // let html = src.replace(/\n/g, '')

      html = html.replace(REG_STYLE, function (_, $1) {
        var style = $1.trim();

        _this13.stringToSelector(style);

        return '';
      });
      return html.trim();
    }
  }, {
    key: "stringToSelector",
    value: function stringToSelector(style) {
      var _this14 = this;

      var lb = style.indexOf(LEFT_BRACKET);

      var _loop3 = function _loop3() {
        var rb = style.indexOf(RIGHT_BRACKET);
        var selectors = style.slice(0, lb).trim();
        var content = style.slice(lb + 1, rb);
        content = content.replace(/:(.*);/g, function (_, $1) {
          var t = $1.trim().replace(/ +/g, '+++');
          return ":".concat(t, ";");
        });
        content = content.replace(/ /g, '');
        content = content.replace(/\+\+\+/g, ' ');

        if (!/;$/.test(content)) {
          content += ';';
        }

        selectors.split(',').forEach(function (src) {
          var selectorList = _this14.parseSelector(src);

          _this14.styles.push({
            content: content,
            selectorList: selectorList
          });
        });
        style = style.slice(rb + 1);
        lb = style.indexOf(LEFT_BRACKET);
      };

      while (lb > -1) {
        _loop3();
      } // console.log('res this.styles: ', this.styles)

    }
  }, {
    key: "parseSelector",
    value: function parseSelector(src) {
      // todo: 属性选择器里可以带空格：[a = "b"]，这里的 split(' ') 需要作兼容
      var list = src.trim().replace(/ *([>~+]) */g, ' $1').replace(/ +/g, ' ').split(' ');
      var selectors = list.map(function (item) {
        var firstChar = item.charAt(0);
        var selector = {
          isChild: firstChar === CHILD_COMBINATOR,
          isGeneralSibling: firstChar === GENERAL_SIBLING_COMBINATOR,
          isAdjacentSibling: firstChar === ADJACENT_SIBLING_COMBINATOR,
          tag: null,
          id: null,
          class: [],
          attrs: []
        };
        item = item.replace(/^[>~+]/, ''); // 属性选择器

        item = item.replace(/\[(.+?)\]/g, function (_, $1) {
          var _$1$split = $1.split('='),
              _$1$split2 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_$1$split, 2),
              key = _$1$split2[0],
              value = _$1$split2[1];

          var all = $1.indexOf('=') === -1;
          var attr = {
            all: all,
            key: key,
            value: all ? null : value
          };
          selector.attrs.push(attr);
          return '';
        });
        item = item.replace(/([.#][A-Za-z0-9-_]+)/g, function (_, $1) {
          if ($1[0] === ID_SELECTOR) {
            // id 选择器
            selector.id = $1.substr(1);
          } else if ($1[0] === CLASS_SELECTOR) {
            // class 选择器
            selector.class.push($1.substr(1));
          }

          return '';
        }); // 标签选择器

        if (item !== '') {
          selector.tag = item;
        }

        return selector;
      });
      return selectors;
    }
  }, {
    key: "matchStyle",
    value: function matchStyle(tagName, el, list) {
      var _this15 = this;

      var res = sortStyles(this.styles).reduce(function (str, _ref2, i) {
        var content = _ref2.content,
            selectorList = _ref2.selectorList;
        var idx = list[i];
        var selector = selectorList[idx];
        var nextSelector = selectorList[idx + 1];

        if ((nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isGeneralSibling) || (nextSelector === null || nextSelector === void 0 ? void 0 : nextSelector.isAdjacentSibling)) {
          selector = nextSelector;
          idx += 1;
          list[i] += 1;
        }

        var isMatch = _this15.matchCurrent(tagName, el, selector);

        if (isMatch && selector.isGeneralSibling) {
          var prev = getPreviousElement(el);

          while (prev) {
            if (prev.h5tagName && _this15.matchCurrent(prev.h5tagName, prev, selectorList[idx - 1])) {
              isMatch = true;
              break;
            }

            prev = getPreviousElement(prev);
            isMatch = false;
          }
        }

        if (isMatch && selector.isAdjacentSibling) {
          var _prev = getPreviousElement(el);

          if (!_prev || !_prev.h5tagName) {
            isMatch = false;
          } else {
            var isSiblingMatch = _this15.matchCurrent(_prev.h5tagName, _prev, selectorList[idx - 1]);

            if (!isSiblingMatch) {
              isMatch = false;
            }
          }
        }

        if (isMatch) {
          if (idx === selectorList.length - 1) {
            return str + content;
          } else if (idx < selectorList.length - 1) {
            list[i] += 1;
          }
        } else {
          // 直接子代组合器: >
          if (selector.isChild && idx > 0) {
            list[i] -= 1;

            if (_this15.matchCurrent(tagName, el, selectorList[list[i]])) {
              list[i] += 1;
            }
          }
        }

        return str;
      }, '');
      return res;
    }
  }, {
    key: "matchCurrent",
    value: function matchCurrent(tagName, el, selector) {
      // 标签选择器
      if (selector.tag && selector.tag !== tagName) return false; // id 选择器

      if (selector.id && selector.id !== el.id) return false; // class 选择器

      if (selector.class.length) {
        var classList = el.className.split(' ');

        for (var i = 0; i < selector.class.length; i++) {
          var cls = selector.class[i];

          if (classList.indexOf(cls) === -1) {
            return false;
          }
        }
      } // 属性选择器


      if (selector.attrs.length) {
        for (var _i3 = 0; _i3 < selector.attrs.length; _i3++) {
          var _selector$attrs$_i = selector.attrs[_i3],
              all = _selector$attrs$_i.all,
              key = _selector$attrs$_i.key,
              value = _selector$attrs$_i.value;

          if (all && !el.hasAttribute(key)) {
            return false;
          } else {
            var attr = el.getAttribute(key);

            if (attr !== unquote(value || '')) {
              return false;
            }
          }
        }
      }

      return true;
    }
  }]);

  return StyleTagParser;
}();

function getPreviousElement(el) {
  var parent = el.parentElement;
  if (!parent) return null;
  var prev = el.previousSibling;
  if (!prev) return null;

  if (prev.nodeType === 1
  /* ELEMENT_NODE */
  ) {
    return prev;
  } else {
    return getPreviousElement(prev);
  }
} // 根据 css selector 权重排序: 权重大的靠后
// @WARN 不考虑伪类
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2


function sortStyles(styles) {
  return styles.sort(function (s1, s2) {
    var hundreds1 = getHundredsWeight(s1.selectorList);
    var hundreds2 = getHundredsWeight(s2.selectorList);
    if (hundreds1 !== hundreds2) return hundreds1 - hundreds2;
    var tens1 = getTensWeight(s1.selectorList);
    var tens2 = getTensWeight(s2.selectorList);
    if (tens1 !== tens2) return tens1 - tens2;
    var ones1 = getOnesWeight(s1.selectorList);
    var ones2 = getOnesWeight(s2.selectorList);
    return ones1 - ones2;
  });
}

function getHundredsWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + (cur.id ? 1 : 0);
  }, 0);
}

function getTensWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + cur.class.length + cur.attrs.length;
  }, 0);
}

function getOnesWeight(selectors) {
  return selectors.reduce(function (pre, cur) {
    return pre + (cur.tag ? 1 : 0);
  }, 0);
}

var closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table']
};

function hasTerminalParent(tagName, stack) {
  var tagParents = closingTagAncestorBreakers[tagName];

  if (tagParents) {
    var currentIndex = stack.length - 1;

    while (currentIndex >= 0) {
      var parentTagName = stack[currentIndex].tagName;

      if (parentTagName === tagName) {
        break;
      }

      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }

      currentIndex--;
    }
  }

  return false;
}

function getTagName(tag) {
  if (options.html.renderHTMLTag) {
    return tag;
  }

  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  }

  return 'view';
}

function splitEqual(str) {
  var sep = '=';
  var idx = str.indexOf(sep);
  if (idx === -1) return [str];
  var key = str.slice(0, idx).trim();
  var value = str.slice(idx + sep.length).trim();
  return [key, value];
}

function format(children, document, styleOptions, parent) {
  return children.filter(function (child) {
    // 过滤注释和空文本节点
    if (child.type === 'comment') {
      return false;
    } else if (child.type === 'text') {
      return child.content !== '';
    }

    return true;
  }).map(function (child) {
    // 文本节点
    if (child.type === 'text') {
      var text = document.createTextNode(child.content);

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(options.html.transformText)) {
        return options.html.transformText(text, child);
      }

      parent === null || parent === void 0 ? void 0 : parent.appendChild(text);
      return text;
    }

    var el = document.createElement(getTagName(child.tagName));
    el.h5tagName = child.tagName;
    parent === null || parent === void 0 ? void 0 : parent.appendChild(el);

    if (!options.html.renderHTMLTag) {
      el.className = "h5-".concat(child.tagName);
    }

    for (var i = 0; i < child.attributes.length; i++) {
      var attr = child.attributes[i];

      var _splitEqual = splitEqual(attr),
          _splitEqual2 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_splitEqual, 2),
          key = _splitEqual2[0],
          value = _splitEqual2[1];

      if (key === 'class') {
        el.className += ' ' + unquote(value);
      } else if (key[0] === 'o' && key[1] === 'n') {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }

    var styleTagParser = styleOptions.styleTagParser,
        descendantList = styleOptions.descendantList;
    var list = descendantList.slice();
    var style = styleTagParser.matchStyle(child.tagName, el, list);
    el.setAttribute('style', style + el.style.cssText); // console.log('style, ', style)

    format(child.children, document, {
      styleTagParser: styleTagParser,
      descendantList: list
    }, el);

    if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }

    return el;
  });
}

function parser(html, document) {
  var styleTagParser = new StyleTagParser();
  html = styleTagParser.extractStyle(html);
  var tokens = new Scaner(html).scan();
  var root = {
    tagName: '',
    children: [],
    type: 'element',
    attributes: []
  };
  var state = {
    tokens: tokens,
    options: options,
    cursor: 0,
    stack: [root]
  };
  parse(state);
  return format(root.children, document, {
    styleTagParser: styleTagParser,
    descendantList: Array(styleTagParser.styles.length).fill(0)
  });
}

function parse(state) {
  var tokens = state.tokens,
      stack = state.stack;
  var cursor = state.cursor;
  var len = tokens.length;
  var nodes = stack[stack.length - 1].children;

  while (cursor < len) {
    var token = tokens[cursor];

    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }

    var tagToken = tokens[++cursor];
    cursor++;
    var tagName = tagToken.content.toLowerCase();

    if (token.close) {
      var index = stack.length;
      var shouldRewind = false;

      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }

      while (cursor < len) {
        var endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }

      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }

    var isClosingTag = options.html.closingElements.has(tagName);
    var shouldRewindToAutoClose = isClosingTag;

    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }

    if (shouldRewindToAutoClose) {
      var currentIndex = stack.length - 1;

      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          var previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }

        currentIndex = currentIndex - 1;
      }
    }

    var attributes = [];
    var attrToken = void 0;

    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }

    cursor++;
    var children = [];
    var element = {
      type: 'element',
      tagName: tagToken.content,
      attributes: attributes,
      children: children
    };
    nodes.push(element);
    var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));

    if (hasChildren) {
      stack.push({
        tagName: tagName,
        children: children
      });
      var innerState = {
        tokens: tokens,
        cursor: cursor,
        stack: stack
      };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }

  state.cursor = cursor;
}

options.html = {
  skipElements: new Set(['style', 'script']),
  voidElements: new Set(['!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']),
  closingElements: new Set(['html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup']),
  renderHTMLTag: false
};

function setInnerHTML(element, html, getDoc) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  var children = parser(html, getDoc());

  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}
/**
 * An implementation of `Element.insertAdjacentHTML()`
 * to support Vue 3 with a version of or greater than `vue@3.1.2`
 */


function insertAdjacentHTMLImpl(getDoc, position, html) {
  var _a, _b;

  var parsedNodes = parser(html, getDoc());

  for (var i = 0; i < parsedNodes.length; i++) {
    var n = parsedNodes[i];

    switch (position) {
      case 'beforebegin':
        (_a = this.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(n, this);
        break;

      case 'afterbegin':
        if (this.hasChildNodes()) {
          this.insertBefore(n, this.childNodes[0]);
        } else {
          this.appendChild(n);
        }

        break;

      case 'beforeend':
        this.appendChild(n);
        break;

      case 'afterend':
        (_b = this.parentNode) === null || _b === void 0 ? void 0 : _b.appendChild(n);
        break;
    }
  }
}

function cloneNode(getDoc) {
  var isDeep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var document = getDoc();
  var newNode;

  if (this.nodeType === 1
  /* ELEMENT_NODE */
  ) {
    newNode = document.createElement(this.nodeName);
  } else if (this.nodeType === 3
  /* TEXT_NODE */
  ) {
    newNode = document.createTextNode('');
  }

  for (var key in this) {
    var value = this[key];

    if ([PROPS, DATASET].includes(key) && Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])(value) === OBJECT) {
      newNode[key] = Object.assign({}, value);
    } else if (key === '_value') {
      newNode[key] = value;
    } else if (key === STYLE) {
      newNode.style._value = Object.assign({}, value._value);
      newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
    }
  }

  if (isDeep) {
    newNode.childNodes = this.childNodes.map(function (node) {
      return node.cloneNode(true);
    });
  }

  return newNode;
}

function contains(node) {
  var isContains = false;
  this.childNodes.some(function (childNode) {
    var uid = childNode.uid;

    if (uid === node.uid || uid === node.id || childNode.contains(node)) {
      isContains = true;
      return true;
    }
  });
  return isContains;
}

var TaroNodeImpl = /*#__PURE__*/function () {
  function TaroNodeImpl( // eslint-disable-next-line @typescript-eslint/indent
  getElement) {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroNodeImpl);

    this.getDoc = function () {
      return getElement(ElementNames.Document)();
    };
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroNodeImpl, [{
    key: "bind",
    value: function bind(ctx) {
      var getDoc = this.getDoc;

      if (true) {
        bindInnerHTML(ctx, getDoc);

        if (false) {}
      }

      if (false) {}

      if (false) {}
    }
  }]);

  return TaroNodeImpl;
}();

TaroNodeImpl = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SERVICE_IDENTIFIER.TaroElementFactory)), __metadata("design:paramtypes", [Function])], TaroNodeImpl);

function bindInnerHTML(ctx, getDoc) {
  Object.defineProperty(ctx, 'innerHTML', {
    configurable: true,
    enumerable: true,
    set: function set(html) {
      setInnerHTML.call(ctx, ctx, html, getDoc);
    },
    get: function get() {
      return '';
    }
  });
}

function getBoundingClientRectImpl() {
  var _this16 = this;

  if (!options.miniGlobal) return Promise.resolve(null);
  return new Promise(function (resolve) {
    var query = options.miniGlobal.createSelectorQuery();
    query.select("#".concat(_this16.uid)).boundingClientRect(function (res) {
      resolve(res);
    }).exec();
  });
}

function getTemplateContent(ctx) {
  if (ctx.nodeName === 'template') {
    var content = ctx._getElement(ElementNames.Element)(DOCUMENT_FRAGMENT);

    content.childNodes = ctx.childNodes;
    ctx.childNodes = [content];
    content.parentNode = ctx;
    content.childNodes.forEach(function (nodes) {
      nodes.parentNode = content;
    });
    return content;
  }
}

var TaroElementImpl = /*#__PURE__*/function () {
  function TaroElementImpl() {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroElementImpl);
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroElementImpl, [{
    key: "bind",
    value: function bind(ctx) {
      if (false) {}

      if (false) {}
    }
  }]);

  return TaroElementImpl;
}();

TaroElementImpl = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])()], TaroElementImpl);

function bindContent(ctx) {
  Object.defineProperty(ctx, 'content', {
    configurable: true,
    enumerable: true,
    get: function get() {
      return getTemplateContent(ctx);
    }
  });
}

var TaroDocument = /*#__PURE__*/function (_TaroElement4) {
  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(TaroDocument, _TaroElement4);

  var _super8 = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(TaroDocument);

  function TaroDocument( // eslint-disable-next-line @typescript-eslint/indent
  getText) {
    var _this17;

    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, TaroDocument);

    _this17 = _super8.call(this);
    _this17._getText = getText;
    _this17.nodeType = 9
    /* DOCUMENT_NODE */
    ;
    _this17.nodeName = DOCUMENT_ELEMENT_NAME;
    return _this17;
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      var getElement = this._getElement;

      if (type === ROOT_STR) {
        return getElement(ElementNames.RootElement)();
      }

      if (_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* controlledComponent */ "d"].has(type)) {
        return getElement(ElementNames.FormElement)(type);
      }

      return getElement(ElementNames.Element)(type);
    } // an ugly fake createElementNS to deal with @vue/runtime-dom's
    // support mounting app to svg container since vue@3.0.8

  }, {
    key: "createElementNS",
    value: function createElementNS(_svgNS, type) {
      return this.createElement(type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return this._getText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      var el = eventSource.get(id);
      return Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(el) ? null : el;
    }
  }, {
    key: "querySelector",
    value: function querySelector(query) {
      // 为了 Vue3 的乞丐版实现
      if (/^#/.test(query)) {
        return this.getElementById(query.slice(1));
      }

      return null;
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll() {
      // fake hack
      return [];
    } // @TODO: @PERF: 在 hydrate 移除掉空的 node

  }, {
    key: "createComment",
    value: function createComment() {
      var textnode = this._getText('');

      textnode.nodeName = COMMENT;
      return textnode;
    }
  }]);

  return TaroDocument;
}(TaroElement);

TaroDocument = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])(), __param(0, Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_TARO_TEXT_FACTORY)), __metadata("design:paramtypes", [Function])], TaroDocument);
/**
 * 支持冒泡的事件, 除 支付宝小程序外，其余的可冒泡事件都和微信保持一致
 * 详见 见 https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
 */

var BUBBLE_EVENTS = new Set(['touchstart', 'touchmove', 'touchcancel', 'touchend', 'touchforcechange', 'tap', 'longpress', 'longtap', 'transitionend', 'animationstart', 'animationiteration', 'animationend']);
var defaultMiniLifecycle = {
  app: ['onLaunch', 'onShow', 'onHide'],
  page: ['onLoad', 'onUnload', 'onReady', 'onShow', 'onHide', ['onPullDownRefresh', 'onReachBottom', 'onPageScroll', 'onResize', 'onTabItemTap', 'onTitleClick', 'onOptionMenuClick', 'onPopMenuClick', 'onPullIntercept', 'onAddToFavorites']]
};

var getMiniLifecycle = function getMiniLifecycle(defaultConfig) {
  return defaultConfig;
};

var getLifecycle = function getLifecycle(instance, lifecycle) {
  return instance[lifecycle];
};

var getPathIndex = function getPathIndex(indexOfNode) {
  return "[".concat(indexOfNode, "]");
};

var getEventCenter = function getEventCenter(Events) {
  return new Events();
};

var isBubbleEvents = function isBubbleEvents(eventName) {
  return BUBBLE_EVENTS.has(eventName);
};

var getSpecialNodes = function getSpecialNodes() {
  return ['view', 'text', 'image'];
};

var DefaultHooksContainer = new inversify__WEBPACK_IMPORTED_MODULE_15__[/* ContainerModule */ "b"](function (bind) {
  function bindFunction(sid, target) {
    return bind(sid).toFunction(target);
  }

  bindFunction(SID_GET_MINI_LIFECYCLE, getMiniLifecycle);
  bindFunction(SID_GET_LIFECYCLE, getLifecycle);
  bindFunction(SID_GET_PATH_INDEX, getPathIndex);
  bindFunction(SID_GET_EVENT_CENTER, getEventCenter);
  bindFunction(SID_IS_BUBBLE_EVENTS, isBubbleEvents);
  bindFunction(SID_GET_SPECIAL_NODES, getSpecialNodes);
});

var Hooks = /*#__PURE__*/function () {
  function Hooks() {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, Hooks);
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Hooks, [{
    key: "getMiniLifecycleImpl",
    value: function getMiniLifecycleImpl() {
      return this.getMiniLifecycle(defaultMiniLifecycle);
    }
  }, {
    key: "modifyMpEvent",
    value: function modifyMpEvent(e) {
      var _a;

      (_a = this.modifyMpEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(e);
      });
    }
  }, {
    key: "modifyTaroEvent",
    value: function modifyTaroEvent(e, element) {
      var _a;

      (_a = this.modifyTaroEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(e, element);
      });
    }
  }, {
    key: "modifyDispatchEvent",
    value: function modifyDispatchEvent(e, element) {
      var _a;

      (_a = this.modifyDispatchEventImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(e, element);
      });
    }
  }, {
    key: "initNativeApi",
    value: function initNativeApi(taro) {
      var _a;

      (_a = this.initNativeApiImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(taro);
      });
    }
  }, {
    key: "patchElement",
    value: function patchElement(element) {
      var _a;

      (_a = this.patchElementImpls) === null || _a === void 0 ? void 0 : _a.forEach(function (fn) {
        return fn(element);
      });
    }
  }]);

  return Hooks;
}();

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_GET_MINI_LIFECYCLE), __metadata("design:type", Function)], Hooks.prototype, "getMiniLifecycle", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_GET_LIFECYCLE), __metadata("design:type", Function)], Hooks.prototype, "getLifecycle", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_GET_PATH_INDEX), __metadata("design:type", Function)], Hooks.prototype, "getPathIndex", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_GET_EVENT_CENTER), __metadata("design:type", Function)], Hooks.prototype, "getEventCenter", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_IS_BUBBLE_EVENTS), __metadata("design:type", Function)], Hooks.prototype, "isBubbleEvents", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_GET_SPECIAL_NODES), __metadata("design:type", Function)], Hooks.prototype, "getSpecialNodes", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_ON_REMOVE_ATTRIBUTE), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "onRemoveAttribute", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_BATCHED_EVENT_UPDATES), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "batchedEventUpdates", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_MERGE_PAGE_INSTANCE), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "mergePageInstance", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_MODIFY_PAGE_OBJECT), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifyPageObject", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_CREATE_PULLDOWN_COMPONENT), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "createPullDownComponent", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_GET_DOM_NODE), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "getDOMNode", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_MODIFY_HYDRATE_DATA), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifyHydrateData", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_MODIFY_SET_ATTR_PAYLOAD), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifySetAttrPayload", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_MODIFY_RM_ATTR_PAYLOAD), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "modifyRmAttrPayload", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* inject */ "c"])(SID_ON_ADD_EVENT), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Function)], Hooks.prototype, "onAddEvent", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* multiInject */ "e"])(SID_MODIFY_MP_EVENT), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "modifyMpEventImpls", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* multiInject */ "e"])(SID_MODIFY_TARO_EVENT), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "modifyTaroEventImpls", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* multiInject */ "e"])(SID_MODIFY_DISPATCH_EVENT), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "modifyDispatchEventImpls", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* multiInject */ "e"])(SID_INIT_NATIVE_API), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "initNativeApiImpls", void 0);

__decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* multiInject */ "e"])(SID_PATCH_ELEMENT), Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* optional */ "f"])(), __metadata("design:type", Array)], Hooks.prototype, "patchElementImpls", void 0);

Hooks = __decorate([Object(inversify__WEBPACK_IMPORTED_MODULE_15__[/* injectable */ "d"])()], Hooks);

function processPluginHooks(container) {
  var keys = Object.keys(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* defaultReconciler */ "e"]);
  keys.forEach(function (key) {
    if (key in SERVICE_IDENTIFIER) {
      // is hooks
      var identifier = SERVICE_IDENTIFIER[key];
      var fn = _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* defaultReconciler */ "e"][key];

      if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "h"])(fn)) {
        // is multi
        fn.forEach(function (item) {
          return container.bind(identifier).toFunction(item);
        });
      } else {
        if (container.isBound(identifier)) {
          // 之前有绑定过，需要重新绑定以覆盖前者
          container.rebind(identifier).toFunction(fn);
        } else {
          container.bind(identifier).toFunction(fn);
        }
      }
    }
  });
}

var container = new inversify__WEBPACK_IMPORTED_MODULE_15__[/* Container */ "a"]();

function bind(sid, target) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var res = container.bind(sid).to(target);

  if (options.single) {
    res = res.inSingletonScope();
  }

  if (options.name) {
    res = res.whenTargetNamed(options.name);
  }

  return res;
}

if (true) {
  bind(SID_TARO_TEXT, TaroText);
  bind(SID_TARO_ELEMENT, TaroElement, {
    name: ElementNames.Element
  });
  bind(SID_TARO_ELEMENT, TaroRootElement, {
    name: ElementNames.RootElement
  });
  bind(SID_TARO_ELEMENT, FormElement, {
    name: ElementNames.FormElement
  });
  bind(SID_TARO_ELEMENT, TaroDocument, {
    name: ElementNames.Document,
    single: true
  });
  bind(SID_TARO_NODE_IMPL, TaroNodeImpl, {
    single: true
  });
  bind(SID_TARO_ELEMENT_IMPL, TaroElementImpl, {
    single: true
  });
  container.bind(SID_TARO_ELEMENT_FACTORY).toFactory(function (context) {
    return function (named) {
      return function (nodeName) {
        var el = context.container.getNamed(SID_TARO_ELEMENT, named);

        if (nodeName) {
          el.nodeName = nodeName;
        }

        el.tagName = el.nodeName.toUpperCase();
        return el;
      };
    };
  });
  container.bind(SID_TARO_TEXT_FACTORY).toFactory(function (context) {
    return function (text) {
      var textNode = context.container.get(SID_TARO_TEXT);
      textNode._value = text;
      return textNode;
    };
  });
}

bind(SID_HOOKS, Hooks, {
  single: true
});
container.load(DefaultHooksContainer);
processPluginHooks(container);
store.container = container;

function createDocument() {
  /**
   * <document>
   *   <html>
   *     <head></head>
   *     <body>
   *       <container>
   *         <app id="app" />
   *       </container>
   *     </body>
   *   </html>
   * </document>
   */
  var getElement = container.get(SERVICE_IDENTIFIER.TaroElementFactory);
  var doc = getElement(ElementNames.Document)();
  var documentCreateElement = doc.createElement.bind(doc);
  var html = documentCreateElement(HTML);
  var head = documentCreateElement(HEAD);
  var body = documentCreateElement(BODY);
  var app = documentCreateElement(APP);
  app.id = APP;
  var container$1 = documentCreateElement(CONTAINER); // 多包一层主要为了兼容 vue

  doc.appendChild(html);
  html.appendChild(head);
  html.appendChild(body);
  body.appendChild(container$1);
  container$1.appendChild(app);
  doc.documentElement = html;
  doc.head = head;
  doc.body = body;
  doc.createEvent = createEvent;
  return doc;
}

var document$1 =  false ? undefined : createDocument();
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var msg = '(' + machine + '; ' + arch + ') ' + engine;
var navigator =  false ? undefined : {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 ' + msg,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Taro',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 ' + msg,
  vendor: 'Joyent',
  vendorSub: ''
}; // https://github.com/myrne/performance-now

var now;

(function () {
  var loadTime;

  if (typeof performance !== 'undefined' && performance !== null && performance.now) {
    now = function now() {
      return performance.now();
    };
  } else if (Date.now) {
    now = function now() {
      return Date.now() - loadTime;
    };

    loadTime = Date.now();
  } else {
    now = function now() {
      return new Date().getTime() - loadTime;
    };

    loadTime = new Date().getTime();
  }
})();

var lastTime = 0; // https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0

var raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
  var _now = now();

  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.

  return setTimeout(function () {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
var caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : function (seed) {
  // fix https://github.com/NervJS/taro/issues/7749
  clearTimeout(seed);
};

function getComputedStyle(element) {
  return element.style;
}

var window$1 =  false ? undefined : {
  navigator: navigator,
  document: document$1
};

if (true) {
  var globalProperties = [].concat(Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object.getOwnPropertyNames(global || win)), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object.getOwnPropertySymbols(global || win)));
  globalProperties.forEach(function (property) {
    if (property === 'atob') return;

    if (!Object.prototype.hasOwnProperty.call(window$1, property)) {
      window$1[property] = global[property];
    }
  });
  window$1.requestAnimationFrame = raf;
  window$1.cancelAnimationFrame = caf;
  window$1.getComputedStyle = getComputedStyle;
  window$1.addEventListener = _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* noop */ "p"];
  window$1.removeEventListener = _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* noop */ "p"];

  if (!(DATE in window$1)) {
    window$1.Date = Date;
  }

  if (!(SET_TIMEOUT in window$1)) {
    window$1.setTimeout = setTimeout;
  }

  document$1.defaultView = window$1;
}

var Current = {
  app: null,
  router: null,
  page: null
};

var getCurrentInstance = function getCurrentInstance() {
  return Current;
};

var Events = /*#__PURE__*/function () {
  function Events(opts) {
    Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(this, Events);

    var _a;

    this.callbacks = (_a = opts === null || opts === void 0 ? void 0 : opts.callbacks) !== null && _a !== void 0 ? _a : {};
  }

  Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Events, [{
    key: "on",
    value: function on(eventName, callback, context) {
      var event, node, tail, list;

      if (!callback) {
        return this;
      }

      eventName = eventName.split(Events.eventSplitter);
      this.callbacks || (this.callbacks = {});
      var calls = this.callbacks;

      while (event = eventName.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this18 = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this18, args);

        _this18.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      var rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;
var eventCenter = getHooks().getEventCenter(Events);
container.bind(SID_EVENT_CENTER).toConstantValue(eventCenter);
/* eslint-disable dot-notation */

var instances = new Map();
var pageId = incrementId();

function injectPageInstance(inst, id) {
  var _a, _b;

  (_b = (_a = getHooks()).mergePageInstance) === null || _b === void 0 ? void 0 : _b.call(_a, instances.get(id), inst);
  instances.set(id, inst);
}

function getPageInstance(id) {
  return instances.get(id);
}

function addLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path : '/' + path;
}

function safeExecute(path, lifecycle) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var instance = instances.get(path);

  if (instance == null) {
    return;
  }

  var func = getHooks().getLifecycle(instance, lifecycle);

  if (Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isArray */ "h"])(func)) {
    var res = func.map(function (fn) {
      return fn.apply(instance, args);
    });
    return res[0];
  }

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isFunction */ "i"])(func)) {
    return;
  }

  return func.apply(instance, args);
}

function stringify(obj) {
  if (obj == null) {
    return '';
  }

  var path = Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
  return path === '' ? path : '?' + path;
}

function getPath(id, options) {
  var path = id;

  if (true) {
    path = id + stringify(options);
  }

  return path;
}

function getOnReadyEventKey(path) {
  return path + '.' + ON_READY;
}

function getOnShowEventKey(path) {
  return path + '.' + ON_SHOW;
}

function getOnHideEventKey(path) {
  return path + '.' + ON_HIDE;
}

function createPageConfig(component, pageName, data, pageConfig) {
  var _config;

  var _a, _b, _c; // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上


  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId());
  var hooks = getHooks();

  var _hooks$getMiniLifecyc = Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(hooks.getMiniLifecycleImpl().page, 6),
      ONLOAD = _hooks$getMiniLifecyc[0],
      ONUNLOAD = _hooks$getMiniLifecyc[1],
      ONREADY = _hooks$getMiniLifecyc[2],
      ONSHOW = _hooks$getMiniLifecyc[3],
      ONHIDE = _hooks$getMiniLifecyc[4],
      LIFECYCLES = _hooks$getMiniLifecyc[5];

  var pageElement = null;
  var unmounting = false;
  var prepareMountList = [];

  function setCurrentRouter(page) {
    var router =  false ? undefined : page.route || page.__route__ || page.$taroPath;
    Current.router = {
      params: page.$taroParams,
      path: addLeadingSlash(router),
      onReady: getOnReadyEventKey(id),
      onShow: getOnShowEventKey(id),
      onHide: getOnHideEventKey(id)
    };
  }

  var config = (_config = {}, Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_config, ONLOAD, function (options, cb) {
    var _this19 = this;

    perf.start(PAGE_INIT);
    Current.page = this;
    this.config = pageConfig || {};
    options.$taroTimestamp = Date.now(); // this.$taroPath 是页面唯一标识，不可变，因此页面参数 options 也不可变

    this.$taroPath = getPath(id, options);
    var $taroPath = this.$taroPath; // this.$taroParams 作为暴露给开发者的页面参数对象，可以被随意修改

    if (this.$taroParams == null) {
      this.$taroParams = Object.assign({}, options);
    }

    setCurrentRouter(this);

    var mount = function mount() {
      Current.app.mount(component, $taroPath, function () {
        pageElement = document$1.getElementById($taroPath);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "f"])(pageElement !== null, '没有找到页面实例。');
        safeExecute($taroPath, ON_LOAD, _this19.$taroParams);

        if (true) {
          pageElement.ctx = _this19;
          pageElement.performUpdate(true, cb);
        } else {}
      });
    };

    if (unmounting) {
      prepareMountList.push(mount);
    } else {
      mount();
    }
  }), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_config, ONUNLOAD, function () {
    var $taroPath = this.$taroPath;
    unmounting = true;
    Current.app.unmount($taroPath, function () {
      unmounting = false;
      instances.delete($taroPath);

      if (pageElement) {
        pageElement.ctx = null;
      }

      if (prepareMountList.length) {
        prepareMountList.forEach(function (fn) {
          return fn();
        });
        prepareMountList = [];
      }
    });
  }), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_config, ONREADY, function () {
    // 触发生命周期
    safeExecute(this.$taroPath, ON_READY); // 通过事件触发子组件的生命周期

    raf(function () {
      return eventCenter.trigger(getOnReadyEventKey(id));
    });
    this.onReady.called = true;
  }), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_config, ONSHOW, function () {
    // 设置 Current 的 page 和 router
    Current.page = this;
    setCurrentRouter(this); // 触发生命周期

    safeExecute(this.$taroPath, ON_SHOW); // 通过事件触发子组件的生命周期

    raf(function () {
      return eventCenter.trigger(getOnShowEventKey(id));
    });
  }), Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_config, ONHIDE, function () {
    // 设置 Current 的 page 和 router
    if (Current.page === this) {
      Current.page = null;
      Current.router = null;
    } // 触发生命周期


    safeExecute(this.$taroPath, ON_HIDE); // 通过事件触发子组件的生命周期

    eventCenter.trigger(getOnHideEventKey(id));
  }), _config);
  LIFECYCLES.forEach(function (lifecycle) {
    config[lifecycle] = function () {
      return safeExecute.apply(void 0, [this.$taroPath, lifecycle].concat(Array.prototype.slice.call(arguments)));
    };
  }); // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。

  if (component.onShareAppMessage || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) || component.enableShareAppMessage) {
    config.onShareAppMessage = function (options) {
      var target = options === null || options === void 0 ? void 0 : options.target;

      if (target) {
        var _id = target.id;
        var element = document$1.getElementById(_id);

        if (element) {
          target.dataset = element.dataset;
        }
      }

      return safeExecute(this.$taroPath, 'onShareAppMessage', options);
    };
  }

  if (component.onShareTimeline || ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) || component.enableShareTimeline) {
    config.onShareTimeline = function () {
      return safeExecute(this.$taroPath, 'onShareTimeline');
    };
  }

  config.eh = eventHandler;

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(data)) {
    config.data = data;
  }

  if (false) {}

  (_c = hooks.modifyPageObject) === null || _c === void 0 ? void 0 : _c.call(hooks, config);
  return config;
}

function createComponentConfig(component, componentName, data) {
  var id = componentName !== null && componentName !== void 0 ? componentName : "taro_component_".concat(pageId());
  var componentElement = null;
  var config = {
    attached: function attached() {
      var _this20 = this;

      var _a;

      perf.start(PAGE_INIT);
      var path = getPath(id, {
        id: ((_a = this.getPageId) === null || _a === void 0 ? void 0 : _a.call(this)) || pageId()
      });
      Current.app.mount(component, path, function () {
        componentElement = document$1.getElementById(path);
        Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* ensure */ "f"])(componentElement !== null, '没有找到组件实例。');
        safeExecute(path, ON_LOAD);

        if (true) {
          componentElement.ctx = _this20;
          componentElement.performUpdate(true);
        }
      });
    },
    detached: function detached() {
      var path = getPath(id, {
        id: this.getPageId()
      });
      Current.app.unmount(path, function () {
        instances.delete(path);

        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    methods: {
      eh: eventHandler
    }
  };

  if (!Object(_tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* isUndefined */ "m"])(data)) {
    config.data = data;
  }

  [OPTIONS, EXTERNAL_CLASSES, BEHAVIORS].forEach(function (key) {
    var _a;

    config[key] = (_a = component[key]) !== null && _a !== void 0 ? _a : _tarojs_shared__WEBPACK_IMPORTED_MODULE_14__[/* EMPTY_OBJ */ "b"];
  });
  return config;
}

function createRecursiveComponentConfig(componentName) {
  return {
    properties: {
      i: {
        type: Object,
        value: Object(_Users_xinhong_Code_Taro_Lib_taro_harmony_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])({}, "nn"
        /* NodeName */
        , VIEW)
      },
      l: {
        type: String,
        value: ''
      }
    },
    options: {
      addGlobalClass: true,
      virtualHost: componentName !== CUSTOM_WRAPPER
    },
    methods: {
      eh: eventHandler
    }
  };
}

function removeLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path.slice(1) : path;
}

var nextTick = function nextTick(cb, ctx) {
  var _a, _b, _c;

  var router = Current.router;

  var timerFunc = function timerFunc() {
    setTimeout(function () {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };

  if (router !== null) {
    var pageElement = null;
    var path = getPath(removeLeadingSlash(router.path), router.params);
    pageElement = document$1.getElementById(path);

    if (pageElement === null || pageElement === void 0 ? void 0 : pageElement.pendingUpdate) {
      if (false) {} else {
        pageElement.enqueueUpdateCallback(cb, ctx);
      }
    } else {
      timerFunc();
    }
  } else {
    timerFunc();
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "../taro/node_modules/process/browser.js"), __webpack_require__(/*! @tarojs/runtime */ "../taro/packages/taro-runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "../taro/packages/taro-runtime/dist/runtime.esm.js")["cancelAnimationFrame"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../taro/node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=common.js.map