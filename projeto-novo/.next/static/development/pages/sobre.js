(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/sobre.js"],{

/***/ "./components/Titulo.js":
/*!******************************!*\
  !*** ./components/Titulo.js ***!
  \******************************/
/*! exports provided: Titulo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Titulo", function() { return Titulo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mario.souto/Desktop/projeto-wd47/projeto-novo/components/Titulo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Criar componentes é criar funções criam tags do HTML
function Titulo(props) {
  // Componente
  return __jsx("h1", {
    style: {
      color: props.cor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, "Titulo da p\xE1gina \xE9:", props.children);
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsobre&absolutePagePath=%2FUsers%2Fmario.souto%2FDesktop%2Fprojeto-wd47%2Fprojeto-novo%2Fpages%2Fsobre.js&hotRouterUpdates=true!./":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsobre&absolutePagePath=%2FUsers%2Fmario.souto%2FDesktop%2Fprojeto-wd47%2Fprojeto-novo%2Fpages%2Fsobre.js&hotRouterUpdates=true ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/sobre",
      function () {
        var mod = __webpack_require__(/*! ./pages/sobre.js */ "./pages/sobre.js");
        if (true) {
          module.hot.accept(/*! ./pages/sobre.js */ "./pages/sobre.js", function () {
            if (!next.router.components["/sobre"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/sobre.js */ "./pages/sobre.js");
            next.router.update("/sobre", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/sobre.js":
/*!************************!*\
  !*** ./pages/sobre.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Titulo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Titulo */ "./components/Titulo.js");
var _jsxFileName = "/Users/mario.souto/Desktop/projeto-wd47/projeto-novo/pages/sobre.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function PaginaSobre() {
  // Componente
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_components_Titulo__WEBPACK_IMPORTED_MODULE_1__["Titulo"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Sobre"), __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Home"));
}

/* harmony default export */ __webpack_exports__["default"] = (PaginaSobre);

/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fsobre&absolutePagePath=%2FUsers%2Fmario.souto%2FDesktop%2Fprojeto-wd47%2Fprojeto-novo%2Fpages%2Fsobre.js&hotRouterUpdates=true ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fsobre&absolutePagePath=%2FUsers%2Fmario.souto%2FDesktop%2Fprojeto-wd47%2Fprojeto-novo%2Fpages%2Fsobre.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsobre&absolutePagePath=%2FUsers%2Fmario.souto%2FDesktop%2Fprojeto-wd47%2Fprojeto-novo%2Fpages%2Fsobre.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=sobre.js.map