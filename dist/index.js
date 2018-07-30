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
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Express = __webpack_require__(/*! express */ \"express\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\r\nvar hello_1 = __webpack_require__(/*! ./public/hello */ \"./src/public/hello.tsx\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar app = Express();\r\napp.use('/static', Express.static(path.resolve(__dirname, 'public')));\r\napp.get('/*', function (req, res) {\r\n    var name = 'Marvelous Wololo1';\r\n    var context = {};\r\n    var component = ReactDOMServer.renderToString(React.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },\r\n        React.createElement(hello_1.Hello, { name: name })));\r\n    var html = \"\\n  <!doctype html>\\n    <html>\\n    <head>\\n      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />\\n      <script>window.__INITIAL__DATA__ = \" + JSON.stringify({ name: name }) + \"</script>\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\" + component + \"</div>\\n      <script src=\\\"/static/home.js\\\"></script>\\n    </body>\\n    </html>\\n  \";\r\n    if (context.url) {\r\n        res.writeHead(301, { Location: context.url });\r\n        res.end();\r\n    }\r\n    else {\r\n        res.send(html);\r\n    }\r\n});\r\napp.get('*', function (_a, res) {\r\n    return res\r\n        .status(404)\r\n        .send(\"<body style=\\\"background-color: #3c3c3c;\\\"><h1 style=\\\"font-family: sans-serif; color: #c7c7c7; text-align: center;\\\">404 - Not Found</h1></body>\");\r\n});\r\nvar _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;\r\nconsole.log(\"We are starting on port: \" + PORT);\r\napp.listen(PORT, function () { return console.log('######## app running ########'); });\r\n\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/public/hello.tsx":
/*!******************************!*\
  !*** ./src/public/hello.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar routes_1 = __webpack_require__(/*! ../routes */ \"./src/routes.tsx\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar history_1 = __webpack_require__(/*! history */ \"history\");\r\n// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;\r\n// const history = createBrowserHistory({ basename: baseUrl });\r\nvar Hello = /** @class */ (function (_super) {\r\n    __extends(Hello, _super);\r\n    function Hello() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.store = configureStore(history_1.createMemoryHistory(), { story: { stories: [] } });\r\n        return _this;\r\n    }\r\n    Hello.prototype.render = function () {\r\n        return React.createElement(\"div\", null,\r\n            React.createElement(\"h1\", null,\r\n                \"Hello, \",\r\n                this.props.name,\r\n                \"!\"),\r\n            React.createElement(\"ul\", null,\r\n                React.createElement(\"li\", null,\r\n                    React.createElement(react_router_dom_1.Link, { to: \"/\" }, \"Page 1\")),\r\n                React.createElement(\"li\", null,\r\n                    React.createElement(react_router_dom_1.Link, { to: \"/page2\" }, \"Page 2\")),\r\n                React.createElement(\"li\", null,\r\n                    React.createElement(react_router_dom_1.Link, { to: \"/page3\" }, \"Page 3\"))),\r\n            React.createElement(\"hr\", null),\r\n            React.createElement(react_redux_1.Provider, { store: this.store },\r\n                React.createElement(routes_1.Routes, null)));\r\n    };\r\n    return Hello;\r\n}(React.Component));\r\nexports.Hello = Hello;\r\nvar redux_thunk_1 = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\r\nvar react_router_redux_1 = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\r\nvar store_1 = __webpack_require__(/*! ../state/store */ \"./src/state/store.tsx\");\r\nfunction configureStore(history, initialState) {\r\n    // const windowIfDefined = typeof window === 'undefined' ? null : window as any;\r\n    // If devTools is installed, connect to it\r\n    // const devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__ as () => StoreEnhancer;\r\n    var createStoreWithMiddleware = redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default, react_router_redux_1.routerMiddleware(history)))(redux_1.createStore);\r\n    // Combine all reducers and instantiate the app-wide store instance\r\n    var allReducers = buildRootReducer(store_1.reducers);\r\n    var store = createStoreWithMiddleware(allReducers, initialState);\r\n    return store;\r\n}\r\nfunction buildRootReducer(allReducers) {\r\n    return redux_1.combineReducers(Object.assign({}, allReducers, { routing: react_router_redux_1.routerReducer }));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/public/hello.tsx?");

/***/ }),

/***/ "./src/public/page1.tsx":
/*!******************************!*\
  !*** ./src/public/page1.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nexports.Page1 = function () { return React.createElement(\"div\", null, \"I'm page 1\"); };\r\nexports.Page2 = function () { return React.createElement(\"div\", null, \"I'm page 23\"); };\r\n\n\n//# sourceURL=webpack:///./src/public/page1.tsx?");

/***/ }),

/***/ "./src/public/page3.tsx":
/*!******************************!*\
  !*** ./src/public/page3.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar story_1 = __webpack_require__(/*! ../state/story */ \"./src/state/story.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar Page3 = /** @class */ (function (_super) {\r\n    __extends(Page3, _super);\r\n    function Page3() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Page3.prototype.render = function () {\r\n        return React.createElement(\"div\", null,\r\n            React.createElement(\"h3\", null, \"I'm page 3\"),\r\n            React.createElement(\"button\", { onClick: this.props.search }, \"Search\"),\r\n            React.createElement(\"ul\", null, this.props.stories && this.props.stories.map(function (x) { return React.createElement(\"li\", null, x.id); })));\r\n    };\r\n    return Page3;\r\n}(React.Component));\r\nexports.default = react_redux_1.connect(function (state) { return state.story; }, story_1.actionCreators)(Page3);\r\n\n\n//# sourceURL=webpack:///./src/public/page3.tsx?");

/***/ }),

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __webpack_require__(/*! react */ \"react\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar page1_1 = __webpack_require__(/*! ./public/page1 */ \"./src/public/page1.tsx\");\r\nvar page3_1 = __webpack_require__(/*! ./public/page3 */ \"./src/public/page3.tsx\");\r\nexports.Routes = function () { return React.createElement(\"div\", null,\r\n    React.createElement(react_router_dom_1.Route, { exact: true, path: \"/\", component: page1_1.Page1 }),\r\n    React.createElement(react_router_dom_1.Route, { exact: true, path: \"/page2\", component: page1_1.Page2 }),\r\n    React.createElement(react_router_dom_1.Route, { exact: true, path: \"/page3\", component: page3_1.default })); };\r\n\n\n//# sourceURL=webpack:///./src/routes.tsx?");

/***/ }),

/***/ "./src/state/store.tsx":
/*!*****************************!*\
  !*** ./src/state/store.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar StoryStore = __webpack_require__(/*! ./story */ \"./src/state/story.ts\");\r\n// Whenever an action is dispatched, Redux will update each top-level application state property using\r\n// the reducer with the matching name. It's important that the names match exactly, and that the reducer\r\n// acts on the corresponding ApplicationState property type.\r\nexports.reducers = {\r\n    story: StoryStore.reducer,\r\n};\r\n\n\n//# sourceURL=webpack:///./src/state/store.tsx?");

/***/ }),

/***/ "./src/state/story.ts":
/*!****************************!*\
  !*** ./src/state/story.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar defaultState = {\r\n    stories: []\r\n};\r\nexports.actionCreators = {\r\n    search: function () { return function (dispatch) {\r\n        dispatch({ type: \"SEARCH\" });\r\n        var story = {\r\n            id: \"storyId\"\r\n        };\r\n        dispatch({ type: \"SEARCH_SUCCESS\", stories: [story] });\r\n    }; }\r\n};\r\nexports.reducer = function (state, action) {\r\n    var myAction = action;\r\n    switch (myAction.type) {\r\n        case \"SEARCH\":\r\n            return { stories: state.stories };\r\n        case \"SEARCH_SUCCESS\":\r\n            return { stories: action.stories };\r\n        default: return defaultState;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/state/story.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-redux\");\n\n//# sourceURL=webpack:///external_%22react-router-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });