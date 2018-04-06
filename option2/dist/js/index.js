/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./option2/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./option2/src/index.html":
/*!********************************!*\
  !*** ./option2/src/index.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"../index.html\";\n\n//# sourceURL=webpack:///./option2/src/index.html?");

/***/ }),

/***/ "./option2/src/index.js":
/*!******************************!*\
  !*** ./option2/src/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_component_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/component-loader */ \"./option2/src/js/component-loader.js\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./option2/src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nObject(_js_component_loader__WEBPACK_IMPORTED_MODULE_0__[\"init\"])()\n\n\n//# sourceURL=webpack:///./option2/src/index.js?");

/***/ }),

/***/ "./option2/src/js/component-loader.js":
/*!********************************************!*\
  !*** ./option2/src/js/component-loader.js ***!
  \********************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _temp_component_batch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp/component-batch.js */ \"./option2/src/js/temp/component-batch.js\");\n/* harmony import */ var _temp_component_batch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_temp_component_batch_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction init () {\n    let els = Array.from(document.querySelectorAll('[data-component]'));\n\n    els.forEach(initComponent)\n}\n\nfunction initComponent (el) {\n    let module = el.getAttribute('data-component');\n\n    _temp_component_batch_js__WEBPACK_IMPORTED_MODULE_0___default.a[module]().then((exported) => {\n        var Comp = exported.default\n        new Comp(el);\n    })\n}\n\n\n\n\n\n//# sourceURL=webpack:///./option2/src/js/component-loader.js?");

/***/ }),

/***/ "./option2/src/js/components/loucura.js":
/*!**********************************************!*\
  !*** ./option2/src/js/components/loucura.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Loucura {\n    constructor (el) {\n        var colors = ['magenta', 'cyan'],\n            color = colors[0];\n\n        setInterval(() => {\n            color = color == colors[0] ? colors[1] : colors[0]\n            el.style.backgroundColor = color\n        }, 500)\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loucura);\n\n\n\n//# sourceURL=webpack:///./option2/src/js/components/loucura.js?");

/***/ }),

/***/ "./option2/src/js/components/teste.js":
/*!********************************************!*\
  !*** ./option2/src/js/components/teste.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Teste {\n    constructor (el) {\n\n        el.innerHTML = `Dynamic text component: ${el.getAttribute('data-text')}`\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Teste);\n\n\n\n//# sourceURL=webpack:///./option2/src/js/components/teste.js?");

/***/ }),

/***/ "./option2/src/js/temp/component-batch.js":
/*!************************************************!*\
  !*** ./option2/src/js/temp/component-batch.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n        loucura: function () {\n            return Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! ./../components/loucura.js */ \"./option2/src/js/components/loucura.js\"))\n    },\n        teste: function () {\n            return Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(null, /*! ./../components/teste.js */ \"./option2/src/js/components/teste.js\"))\n    },}\n\n//# sourceURL=webpack:///./option2/src/js/temp/component-batch.js?");

/***/ })

/******/ });