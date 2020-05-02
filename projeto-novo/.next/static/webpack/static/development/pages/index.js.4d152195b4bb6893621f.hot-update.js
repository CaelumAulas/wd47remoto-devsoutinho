webpackHotUpdate("static/development/pages/index.js",{

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Titulo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Titulo */ "./components/Titulo.js");
var _jsxFileName = "/Users/mario.souto/Desktop/projeto-wd47/projeto-novo/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HomePage() {
  // Componente
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_components_Titulo__WEBPACK_IMPORTED_MODULE_1__["Titulo"], {
    cor: 'red',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Home"), __jsx("a", {
    href: "/sobre",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Sobre"));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.4d152195b4bb6893621f.hot-update.js.map