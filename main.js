/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/fr-title.ttf */ \"./src/fonts/fr-title.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/fr-fal1.ttf */ \"./src/fonts/fr-fal1.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ComicPanels-ByvG.ttf */ \"./src/fonts/ComicPanels-ByvG.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: \\\"Futurama-title\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"Futurama-fal1\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"Comic-Panels\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n/* HEADER */\\r\\n\\r\\n.header {\\r\\n  width: 100vw;\\r\\n  height: 100px;\\r\\n  background-color: purple;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  align-items: flex-end;\\r\\n}\\r\\n\\r\\n.navigation-div {\\r\\n  width: 400px;\\r\\n  height: 57px;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.navigation {\\r\\n  height: 55px;\\r\\n  width: 100px;\\r\\n  background-color: yellow;\\r\\n  border: 1px solid #000;\\r\\n  border-top-left-radius: 25px;\\r\\n  border-top-right-radius: 25px;\\r\\n  font-family: Futurama-title, sans-serif;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 900;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.navigation:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.pressed {\\r\\n  background-color: lightskyblue;\\r\\n  border-bottom: 1px solid lightskyblue;\\r\\n}\\r\\n\\r\\n/* MAIN */\\r\\n\\r\\n.content {\\r\\n  width: 940px;\\r\\n  height: calc(100vh - 100px);\\r\\n  background-color: lightskyblue;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n/* HOME */\\r\\n\\r\\n.logo_container {\\r\\n  margin-top: 70px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.logo_text {\\r\\n  font-family: Comic-Panels, sans-serif;\\r\\n  font-size: 1.5rem;\\r\\n  color: green;\\r\\n  margin-top: 30px;\\r\\n}\\r\\n\\r\\n.warning_container {\\r\\n  text-align: center;\\r\\n  font-family: Futurama-fal1;\\r\\n  font-size: 1.7rem;\\r\\n  font-weight: 600;\\r\\n  width: 50%;\\r\\n  margin-top: 60px;\\r\\n}\\r\\n\\r\\n/* MENU */\\r\\n\\r\\n.slurm {\\r\\n  margin-top: 100px;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.slurm_text {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  font-family: Futurama-fal1;\\r\\n  font-size: 1.7rem;\\r\\n  font-weight: 600;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.shipping {\\r\\n  margin-top: 200px;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.shipping_text {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  font-family: Futurama-fal1;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 600;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n/* CONTACT */\\r\\n\\r\\n.mackenzie,\\r\\n.queen {\\r\\n  margin-top: 100px;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n.mackenzie_text,\\r\\n.queen_text {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-start;\\r\\n  font-family: Futurama-fal1;\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 600;\\r\\n  width: 40%;\\r\\n  overflow-wrap: anywhere;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearContact\": () => (/* binding */ clearContact),\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n/* harmony import */ var _src_images_slurms_mackenzie_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/images/slurms_mackenzie.png */ \"./src/images/slurms_mackenzie.png\");\n/* harmony import */ var _src_images_slurm_queen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/images/slurm_queen.png */ \"./src/images/slurm_queen.png\");\n\r\n\r\n\r\n\r\nfunction createContact() {\r\n    createMacKenzie();\r\n    createQueen();\r\n}\r\n\r\nfunction clearContact() {\r\n    const mac = document.querySelector('.mackenzie');\r\n    const queen = document.querySelector('.queen');\r\n    if(mac && queen) {\r\n        _template__WEBPACK_IMPORTED_MODULE_0__.main.removeChild(mac);\r\n        _template__WEBPACK_IMPORTED_MODULE_0__.main.removeChild(queen);\r\n    }\r\n\r\n}\r\n\r\nfunction createMacKenzie() {\r\n    const container = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('mackenzie');\r\n    const image = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createImage)(_src_images_slurms_mackenzie_png__WEBPACK_IMPORTED_MODULE_1__, '250px');\r\n    const text = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('mackenzie_text');\r\n    text.textContent = 'Slurms MacKenzie marketing director 555-555-555 macslurmzie@slurm.galaxy'\r\n    _template__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(container);\r\n    container.appendChild(image);\r\n    container.appendChild(text);\r\n}\r\n\r\nfunction createQueen() {\r\n    const container = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('queen');\r\n    const text = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('queen_text');\r\n    const logo = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createImage)(_src_images_slurm_queen_png__WEBPACK_IMPORTED_MODULE_2__, '300px');\r\n    _template__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(container);\r\n    text.textContent = 'Slurm Queen head of production department 555-555-555 your_slurmjesty@slurm.galaxy';\r\n    container.appendChild(text);\r\n    container.appendChild(logo);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearHome\": () => (/* binding */ clearHome),\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n/* harmony import */ var _src_images_slurm_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/images/slurm_logo.png */ \"./src/images/slurm_logo.png\");\n\r\n\r\n\r\nfunction createHome() {\r\n    createSlurmLogo();\r\n    createLogoText();\r\n    createWarningText();\r\n}\r\n\r\nfunction clearHome() {\r\n    const logo = document.querySelector('.logo_container');\r\n    const warning = document.querySelector('.warning_container');\r\n    if (logo && warning) {\r\n        _template__WEBPACK_IMPORTED_MODULE_0__.main.removeChild(logo);\r\n        _template__WEBPACK_IMPORTED_MODULE_0__.main.removeChild(warning);\r\n    }\r\n}\r\n\r\nfunction createSlurmLogo() {\r\n    const logo = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createImage)(_src_images_slurm_logo_png__WEBPACK_IMPORTED_MODULE_1__, '200px');\r\n    const container = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('logo_container');\r\n    _template__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(container);\r\n    container.appendChild(logo);\r\n}\r\n\r\nfunction createLogoText() {\r\n    const container = document.querySelector('.logo_container');\r\n    const textContainer = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('logo_text');\r\n    textContainer.textContent = 'It\\'s highly addictive!';\r\n    container.appendChild(textContainer);\r\n}\r\n\r\nfunction createWarningText() {\r\n    const container = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('warning_container');\r\n    container.textContent = 'The following species are ineligible: space wasps, space beavers, any other animal with the word \"space\" in front of it, space chickens, and the elusive yak-face.';\r\n    _template__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(container);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template.js */ \"./src/template.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_template_js__WEBPACK_IMPORTED_MODULE_1__.createTemplate)();\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createHome)();\r\n\r\nfunction handleClick() {\r\n    resetButtons();\r\n    this.classList.add('pressed');\r\n    switch (this.textContent) {\r\n        case 'Home':\r\n            clearContent();\r\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createHome)();\r\n            break;\r\n        case 'Menu':\r\n            clearContent();\r\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.createMenu)();\r\n            break;\r\n        case 'Contact':\r\n            clearContent();\r\n            (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.createContact)();\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n}\r\n\r\nfunction clearContent() {\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.clearHome)();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.clearMenu)();\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.clearContact)();\r\n}\r\n\r\nfunction resetButtons() {\r\n    const buttons = document.querySelectorAll('.navigation');\r\n    buttons.forEach(button => button.classList.remove('pressed'));\r\n}\r\n\r\n\r\ndocument.querySelectorAll('.navigation').forEach(e => e.addEventListener('click', handleClick));\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearMenu\": () => (/* binding */ clearMenu),\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n/* harmony import */ var _src_images_slurm_can_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/images/slurm_can.png */ \"./src/images/slurm_can.png\");\n/* harmony import */ var _src_images_planet_express_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/images/planet-express.png */ \"./src/images/planet-express.png\");\n\r\n\r\n\r\n\r\nfunction createMenu() {\r\n    createSlurmOffer();\r\n    createShippingOffer();\r\n}\r\n\r\nfunction clearMenu() {\r\n    const slurm = document.querySelector('.slurm');\r\n    const shipping = document.querySelector('.shipping');\r\n    if (slurm && shipping) {\r\n        _template__WEBPACK_IMPORTED_MODULE_0__.main.removeChild(slurm);\r\n        _template__WEBPACK_IMPORTED_MODULE_0__.main.removeChild(shipping);\r\n    }\r\n}\r\n\r\nfunction createSlurmOffer() {\r\n    const container = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('slurm');\r\n    const image = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createImage)(_src_images_slurm_can_png__WEBPACK_IMPORTED_MODULE_1__, '270px');\r\n    const text = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('slurm_text');\r\n    text.textContent = '12oz of Slurm for ONLY $1.99!'\r\n    _template__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(container);\r\n    container.appendChild(image);\r\n    container.appendChild(text);\r\n}\r\n\r\nfunction createShippingOffer() {\r\n    const container = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('shipping');\r\n    const text = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createContainer)('shipping_text');\r\n    const image = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createImage)(_src_images_planet_express_png__WEBPACK_IMPORTED_MODULE_2__, '120px');\r\n    _template__WEBPACK_IMPORTED_MODULE_0__.main.appendChild(container);\r\n    text.textContent = 'We ship Slurm anywhere in the galaxy via Planet Express.';\r\n    container.appendChild(text);\r\n    container.appendChild(image);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContainer\": () => (/* binding */ createContainer),\n/* harmony export */   \"createImage\": () => (/* binding */ createImage),\n/* harmony export */   \"createTemplate\": () => (/* binding */ createTemplate),\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\nconst main = document.createElement('main');\r\nconst body = document.querySelector('body');\r\nconst header = document.createElement('header');\r\n\r\nfunction createTemplate(){\r\n    createHeaderLayout();\r\n    createHeaderNavigation();\r\n    createMainLayout();\r\n}\r\n\r\nfunction createContainer (className) {\r\n    const container = document.createElement('div');\r\n    container.classList.add(className);\r\n    return container;\r\n}\r\n\r\nfunction createImage(src, height) {\r\n    const image = new Image();\r\n    image.src = src;\r\n    image.setAttribute('height', height);\r\n    return image;\r\n}\r\n\r\nfunction createHeaderLayout() {\r\n    header.classList.add('header');\r\n    body.appendChild(header);\r\n}\r\n\r\nfunction createHeaderNavigation() {\r\n    const navbar = document.createElement('div');\r\n    navbar.classList.add('navigation-div');\r\n    header.appendChild(navbar);\r\n    createHeaderButtons(navbar);\r\n    setHomeDefault();\r\n}\r\n\r\nfunction createHeaderButtons(navbar) {\r\n    const buttonNames = ['Home', 'Menu', 'Contact'];\r\n    for (let i = 0; i < buttonNames.length; i++) {\r\n        const navButton = document.createElement('div');\r\n        navButton.textContent = buttonNames[i];\r\n        navButton.classList.add('navigation', `button_${buttonNames[i].toLowerCase()}`);\r\n        navbar.appendChild(navButton);\r\n    };\r\n}\r\n\r\nfunction setHomeDefault(){\r\n    const homeButton = document.querySelector('.button_home');\r\n    homeButton.classList.add('pressed');\r\n}\r\n\r\nfunction createMainLayout() {\r\n    main.classList.add('content');\r\n    body.appendChild(main);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/template.js?");

/***/ }),

/***/ "./src/fonts/ComicPanels-ByvG.ttf":
/*!****************************************!*\
  !*** ./src/fonts/ComicPanels-ByvG.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8159ff9457c0cf515dbf.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/ComicPanels-ByvG.ttf?");

/***/ }),

/***/ "./src/fonts/fr-fal1.ttf":
/*!*******************************!*\
  !*** ./src/fonts/fr-fal1.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6785b8568577471861c3.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/fr-fal1.ttf?");

/***/ }),

/***/ "./src/fonts/fr-title.ttf":
/*!********************************!*\
  !*** ./src/fonts/fr-title.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"70529ff617360eab0da5.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/fr-title.ttf?");

/***/ }),

/***/ "./src/images/planet-express.png":
/*!***************************************!*\
  !*** ./src/images/planet-express.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40a68543dbf01afa6ef2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/planet-express.png?");

/***/ }),

/***/ "./src/images/slurm_can.png":
/*!**********************************!*\
  !*** ./src/images/slurm_can.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"64443152d1a9c19b3b42.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/slurm_can.png?");

/***/ }),

/***/ "./src/images/slurm_logo.png":
/*!***********************************!*\
  !*** ./src/images/slurm_logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"900149d671df4ec32c4d.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/slurm_logo.png?");

/***/ }),

/***/ "./src/images/slurm_queen.png":
/*!************************************!*\
  !*** ./src/images/slurm_queen.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"73282e8b6e431f5ea3f5.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/slurm_queen.png?");

/***/ }),

/***/ "./src/images/slurms_mackenzie.png":
/*!*****************************************!*\
  !*** ./src/images/slurms_mackenzie.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb815a14e5f1645f659e.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/slurms_mackenzie.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;