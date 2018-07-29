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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Express = __webpack_require__(/*! express */ "express");
var path = __webpack_require__(/*! path */ "path");
var React = __webpack_require__(/*! react */ "react");
var ReactDOMServer = __webpack_require__(/*! react-dom/server */ "react-dom/server");
var hello_1 = __webpack_require__(/*! ./public/hello */ "./src/public/hello.tsx");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var app = Express();
app.use('/static', Express.static(path.resolve(__dirname, 'public')));
app.get('/*', function (req, res) {
    var name = 'Marvelous Wololo1';
    var context = {};
    var component = ReactDOMServer.renderToString(React.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },
        React.createElement(hello_1.Hello, { name: name })));
    var html = "\n  <!doctype html>\n    <html>\n    <head>\n      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />\n      <script>window.__INITIAL__DATA__ = " + JSON.stringify({ name: name }) + "</script>\n    </head>\n    <body>\n      <div id=\"root\">" + component + "</div>\n      <script src=\"/static/home.js\"></script>\n    </body>\n    </html>\n  ";
    if (context.url) {
        res.writeHead(301, { Location: context.url });
        res.end();
    }
    else {
        res.send(html);
    }
});
app.get('*', function (_a, res) {
    return res
        .status(404)
        .send("<body style=\"background-color: #3c3c3c;\"><h1 style=\"font-family: sans-serif; color: #c7c7c7; text-align: center;\">404 - Not Found</h1></body>");
});
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
console.log("We are starting on port: " + PORT);
app.listen(PORT, function () { return console.log('######## app running ########'); });


/***/ }),

/***/ "./src/public/hello.tsx":
/*!******************************!*\
  !*** ./src/public/hello.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var routes_1 = __webpack_require__(/*! ../routes */ "./src/routes.tsx");
exports.Hello = function (props) { return React.createElement("div", null,
    React.createElement("h1", null,
        "Hello, ",
        props.name,
        "!"),
    React.createElement("ul", null,
        React.createElement("li", null,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Page 1")),
        React.createElement("li", null,
            React.createElement(react_router_dom_1.Link, { to: "/page2" }, "Page 2"))),
    React.createElement("hr", null),
    React.createElement(routes_1.Routes, null)); };


/***/ }),

/***/ "./src/public/page1.tsx":
/*!******************************!*\
  !*** ./src/public/page1.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
exports.Page1 = function () { return React.createElement("div", null, "I'm page 1"); };
exports.Page2 = function () { return React.createElement("div", null, "I'm page 23"); };


/***/ }),

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var page1_1 = __webpack_require__(/*! ./public/page1 */ "./src/public/page1.tsx");
exports.Routes = function () { return React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: page1_1.Page1 }),
    React.createElement(react_router_dom_1.Route, { exact: true, path: "/page2", component: page1_1.Page2 })); };


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map