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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: zelementId, height, width, default */
/***/ (function(module) {

eval("module.exports = {\"zelementId\":\"zombufo\",\"height\":300,\"width\":300};\n\n//# sourceURL=webpack:///./config.json?");

/***/ }),

/***/ "./src/components sync recursive \\.js$":
/*!***********************************!*\
  !*** ./src/components sync \.js$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./square.js\": \"./src/components/square.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/components sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src/components_sync_\\.js$?");

/***/ }),

/***/ "./src/components/square.js":
/*!**********************************!*\
  !*** ./src/components/square.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Crafty.c('Square', {\n  init: function() {\n    this.addComponent('2D, DOM');\n  },\n\n  size: function(square_size) {\n    if(typeof square_size === 'undefined')\n      return this._size;\n\n    this.w = square_size;\n    this.h = square_size;\n    this._size = square_size;\n    return this;\n  }\n});\n\n//# sourceURL=webpack:///./src/components/square.js?");

/***/ }),

/***/ "./src/entities sync recursive \\.js$":
/*!*********************************!*\
  !*** ./src/entities sync \.js$ ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./green_square.js\": \"./src/entities/green_square.js\",\n\t\"./red_square.js\": \"./src/entities/red_square.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/entities sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src/entities_sync_\\.js$?");

/***/ }),

/***/ "./src/entities/green_square.js":
/*!**************************************!*\
  !*** ./src/entities/green_square.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("zombufo.e('GreenSquare', function() {\n  return Crafty.e('Square, Color')\n    .color('#00FF00');\n});\n\n//# sourceURL=webpack:///./src/entities/green_square.js?");

/***/ }),

/***/ "./src/entities/red_square.js":
/*!************************************!*\
  !*** ./src/entities/red_square.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("zombufo.e('RedSquare', function() {\n  return Crafty.e('Square, Color')\n    .color('#FF0000');\n});\n\n//# sourceURL=webpack:///./src/entities/red_square.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar initialize_crafty = function(config, zelement) {\n  Crafty.init(config.width, config.height, zelement);\n};\n\nvar initialize_zombufo = function(config) {\n  var z = window.zombufo = __webpack_require__(/*! ./zombufo */ \"./src/zombufo.js\");\n};\n\nvar load_components = function() {\n  import_all(__webpack_require__(\"./src/components sync recursive \\\\.js$\"));\n};\n\nvar load_entities = function() {\n  import_all(__webpack_require__(\"./src/entities sync recursive \\\\.js$\"));\n};\n\nvar load_scenes = function() {\n  import_all(__webpack_require__(\"./src/scenes sync recursive \\\\.js$\"));\n};\n\nvar import_all = function(rctx) {\n  rctx.keys().forEach(rctx);\n}\n\nmodule.exports = function(config, zelement) {\n  if(typeof Crafty === 'undefined') throw('Crafty is undefined!');\n  initialize_crafty(config, zelement);\n  initialize_zombufo(config);\n  load_components();\n  load_entities();\n  load_scenes();\n  Crafty.enterScene('Level 1');\n};\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(config, game) {\n  var initializer = function() {\n    window.removeEventListener('load', initializer);\n    game(config, window.document.getElementById(config.zelementId));\n  };\n  window.addEventListener('load', initializer);\n})(__webpack_require__(/*! ../config */ \"./config.json\"), __webpack_require__(/*! ./game */ \"./src/game.js\"));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scenes sync recursive \\.js$":
/*!*******************************!*\
  !*** ./src/scenes sync \.js$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./level_1.js\": \"./src/scenes/level_1.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/scenes sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src/scenes_sync_\\.js$?");

/***/ }),

/***/ "./src/scenes/level_1.js":
/*!*******************************!*\
  !*** ./src/scenes/level_1.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Crafty.defineScene('Level 1', function(setup) {\n  console.log('Level 1!');\n  zombufo.e('GreenSquare')\n    .attr({x: 0, y:0})\n    .size(30);\n  zombufo.e('RedSquare')\n    .attr({x: 30, y:10})\n    .size(24);\n});\n\n//# sourceURL=webpack:///./src/scenes/level_1.js?");

/***/ }),

/***/ "./src/zombufo.js":
/*!************************!*\
  !*** ./src/zombufo.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var z = function() {\n  // todo\n};\n\nz.entity = z.e = __webpack_require__(/*! ./zombufo/entity */ \"./src/zombufo/entity.js\");\n\nmodule.exports = z;\n\n//# sourceURL=webpack:///./src/zombufo.js?");

/***/ }),

/***/ "./src/zombufo/entity.js":
/*!*******************************!*\
  !*** ./src/zombufo/entity.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var define_entity = function(entity_name, constructor) {\n  e.entity_constructors[entity_name] = constructor;\n};\n\nvar construct_entity = function(entity_name, attr) {\n  return e.entity_constructors[entity_name](attr);\n};\n\nvar e = module.exports = function(entity_name, arg1) {\n  if(typeof arg1 === 'function') {\n    return define_entity(entity_name, arg1);\n  }\n\n  return construct_entity(entity_name, arg1);\n};\n\ne.entity_constructors = {};\n\n//# sourceURL=webpack:///./src/zombufo/entity.js?");

/***/ })

/******/ });