"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmodule_federation_subapp1"] = self["webpackChunkmodule_federation_subapp1"] || []).push([["src_bootstrap_js"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var app1_Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app1/Navigation */ \"webpack/container/remote/app1/Navigation\");\n/* harmony import */ var app1_Navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(app1_Navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routers */ \"./src/routers.js\");\n/* harmony import */ var app1_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app1/routes */ \"webpack/container/remote/app1/routes\");\n/* harmony import */ var app1_routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(app1_routes__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst routes = [..._routers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], ...(app1_routes__WEBPACK_IMPORTED_MODULE_3___default())];\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", null, \"App 2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((app1_Navigation__WEBPACK_IMPORTED_MODULE_0___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, \"Loading...\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, routes.map(route => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n    key: route.path,\n    path: route.path,\n    component: route.component,\n    exact: route.exact\n  })))))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://module-federation-subapp1/./src/app.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById(\"app\"));\n\n//# sourceURL=webpack://module-federation-subapp1/./src/bootstrap.js?");

/***/ }),

/***/ "./src/routers.js":
/*!************************!*\
  !*** ./src/routers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nconst AboutPage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => __webpack_require__.e(/*! import() */ \"src_AboutPage_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./AboutPage */ \"./src/AboutPage.js\")));\nconst routes = [{\n  path: '/about',\n  component: AboutPage\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://module-federation-subapp1/./src/routers.js?");

/***/ })

}]);