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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var routes_1 = __webpack_require__(/*! ../routes */ "./src/routes.tsx");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var redux_1 = __webpack_require__(/*! redux */ "redux");
var allReducers_1 = __webpack_require__(/*! ../state/allReducers */ "./src/state/allReducers.ts");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.store = redux_1.createStore(allReducers_1.default);
        return _this;
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h1", null,
                "Hello, ",
                this.props.name,
                "!"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Page 1")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/page2" }, "Page 2")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/page3" }, "Page 3"))),
            React.createElement("hr", null),
            React.createElement(react_redux_1.Provider, { store: this.store },
                React.createElement(routes_1.Routes, null)));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;


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

/***/ "./src/public/page3.tsx":
/*!******************************!*\
  !*** ./src/public/page3.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var story_1 = __webpack_require__(/*! ../state/story */ "./src/state/story.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var Page3 = /** @class */ (function (_super) {
    __extends(Page3, _super);
    function Page3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page3.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h3", null, "I'm page 3"),
            React.createElement("button", { onClick: this.props.search }, "Search"),
            React.createElement("ul", null, this.props.stories && this.props.stories.map(function (x) { return React.createElement("li", null, x.id); })));
    };
    return Page3;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return state; }, story_1.actionCreators)(Page3);


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
var page3_1 = __webpack_require__(/*! ./public/page3 */ "./src/public/page3.tsx");
exports.Routes = function () { return React.createElement("div", null,
    React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: page1_1.Page1 }),
    React.createElement(react_router_dom_1.Route, { exact: true, path: "/page2", component: page1_1.Page2 }),
    React.createElement(react_router_dom_1.Route, { exact: true, path: "/page3", component: page3_1.default })); };


/***/ }),

/***/ "./src/state/allReducers.ts":
/*!**********************************!*\
  !*** ./src/state/allReducers.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(/*! redux */ "redux");
var story_1 = __webpack_require__(/*! ./story */ "./src/state/story.ts");
exports.default = redux_1.combineReducers({ reducer: story_1.reducer });


/***/ }),

/***/ "./src/state/story.ts":
/*!****************************!*\
  !*** ./src/state/story.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultState = {
    stories: []
};
exports.actionCreators = {
    search: function () { return function (dispatch) {
        dispatch({ type: "SEARCH" });
        var story = {
            id: "storyId"
        };
        dispatch({ type: "SEARCH_SUCCESS", stories: [story] });
    }; }
};
exports.reducer = function (state, action) {
    var myAction = action;
    switch (myAction.type) {
        case "SEARCH":
            return { stories: state.stories };
        case "SEARCH_SUCCESS":
            return { stories: action.stories };
        default: return defaultState;
    }
};


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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map