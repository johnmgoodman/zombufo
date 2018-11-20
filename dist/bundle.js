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

eval("var map = {\n\t\"./input_control.js\": \"./src/components/input_control.js\",\n\t\"./rigid_body.js\": \"./src/components/rigid_body.js\",\n\t\"./square.js\": \"./src/components/square.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/components sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src/components_sync_\\.js$?");

/***/ }),

/***/ "./src/components/input_control.js":
/*!*****************************************!*\
  !*** ./src/components/input_control.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const type_event_name_map = {\n  \"move\": \"Input Control Move Updated\"\n};\n\nconst input_types = {\n  \"up\": \"move\",\n  \"left\": \"move\",\n  \"down\": \"move\",\n  \"right\": \"move\"\n};\n\nCrafty.c('InputControl', {\n\n  init: function() {\n    this._input_control = {\n      move: []\n    };\n  },\n\n  events: {\n    'Input Started': function(data) {\n      console.log('input control received \"Input Started\"', data);\n      var input = data.input;\n      if(input_types.hasOwnProperty(input)) {\n        let input_type = input_types[input];\n        let active = this._input_control[input_type];\n        let active_index = active.indexOf(input);\n        if( active_index === -1) {\n          active.push(input);\n          this._trigger_input_controls_updated(input_type, 'started', active, input);\n        }\n      }\n    },\n    'Input Ended': function(data) {\n      console.log('input control received \"Input Ended\"', data);\n      var input = data.input;\n      if(input_types.hasOwnProperty(input)) {\n        let input_type = input_types[input];\n        let active = this._input_control[input_type];\n        let active_index = active.indexOf(input);\n        if(active_index !== -1) {\n          active.splice(active_index, 1);\n          this._trigger_input_controls_updated(input_type, 'ended', active, input);\n        }\n      }\n    }\n  },\n\n  _trigger_input_controls_updated: function(input_type, status, active_controls, changed) {\n    this.trigger(type_event_name_map[input_type], {\n      type: input_type,\n      status: status,\n      active: active_controls,\n      changed: changed\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/components/input_control.js?");

/***/ }),

/***/ "./src/components/rigid_body.js":
/*!**************************************!*\
  !*** ./src/components/rigid_body.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Crafty.c('RigidBody', {\n  init: function() {\n    this.addComponent('2D');\n    this._velocity_y = 0;\n    this._velocity_x = 0;\n    this._acceleration_y = 0;\n    this._acceleration_x = 0;\n    this._angular_velocity = 0;\n    this._mass = 0;\n  },\n\n  events: {\n    \"UpdateFrame\": function(frameData) {\n      var dt = frameData.dt / 1000; // delta time in seconds\n      this._updatePosition(dt);\n      this._updateRotation(dt);\n    }\n  },\n\n  mass: function(mass) {\n    if(typeof mass === 'undefined')\n      return this._mass;\n    this._mass = mass;\n    return this;\n  },\n\n  accelerate: function(mod_acceleration) {\n    this._acceleration_x += mod_acceleration[0];\n    this._acceleration_y += mod_acceleration[1];\n  },\n\n  acceleration: function(acceleration) {\n    if(typeof acceleration === 'undefined')\n      return [this._acceleration_x, this._acceleration_y];\n    this._acceleration_x = acceleration[0];\n    this._acceleration_y = acceleration[1];\n    return this;\n  },\n\n  velocity: function(velocity) {\n    if(typeof velocity === 'undefined')\n      return [this._velocity_x, this._velocity_y];\n    this._velocity_x = velocity[0];\n    this._velocity_y = velocity[1];\n    return this;\n  },\n\n  angular_velocity: function(angular_velocity) {\n    if(typeof angular_velocity === 'undefined')\n      return this._angular_velocity;\n    this._angular_velocity = angular_velocity;\n    return this;\n  },\n\n  \n  _updatePosition: function(dt) {\n    this._velocity_x += this._acceleration_x;\n    this._velocity_y += this._acceleration_y;\n    var dx = dt * this._velocity_x;\n    var dy = dt * this._velocity_y;\n    this.x = this._x + dx;\n    this.y = this._y + dy;\n  },\n\n  _updateRotation: function(dt) {\n    var dTheta = dt * this._angular_velocity;\n    this.rotation = (this._rotation + dTheta) % 360;\n  }\n\n});\n\n//# sourceURL=webpack:///./src/components/rigid_body.js?");

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

eval("var map = {\n\t\"./green_square.js\": \"./src/entities/green_square.js\",\n\t\"./keyboard.js\": \"./src/entities/keyboard.js\",\n\t\"./red_square.js\": \"./src/entities/red_square.js\",\n\t\"./space_background.js\": \"./src/entities/space_background.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/entities sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src/entities_sync_\\.js$?");

/***/ }),

/***/ "./src/entities/green_square.js":
/*!**************************************!*\
  !*** ./src/entities/green_square.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("zombufo.e('GreenSquare', function() {\n  return Crafty.e('Square, Color, RigidBody')\n    .color('#00FF00')\n    .angular_velocity(20);\n});\n\n//# sourceURL=webpack:///./src/entities/green_square.js?");

/***/ }),

/***/ "./src/entities/keyboard.js":
/*!**********************************!*\
  !*** ./src/entities/keyboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const key_input_map = {\n  \"87\": { \"type\": \"move\", \"input\": \"up\" },       // \"w\"\n  \"65\": { \"type\": \"move\", \"input\": \"left\" },     // \"a\"\n  \"83\": { \"type\": \"move\", \"input\": \"down\" },     // \"s\"\n  \"68\": { \"type\": \"move\", \"input\": \"right\" }     // \"d\"\n};\n\nvar handle_key_down = function(keyboard_event) {\n  console.log('keyboard received \"KeyDown\"', keyboard_event);\n  var key = keyboard_event.key;\n  if(key_input_map.hasOwnProperty(key)) {\n    Crafty.trigger('Input Started', key_input_map[key]);\n  }\n};\n\nvar handle_key_up = function(keyboard_event) {\n  console.log('keyboard received \"KeyUp\"', keyboard_event);\n  var key = keyboard_event.key;\n  if(key_input_map.hasOwnProperty(key)) {\n    Crafty.trigger('Input Ended', key_input_map[key]);\n  }\n};\n\nzombufo.e('Keyboard', function() {\n  return Crafty.e('Input, KeyboardInput')\n    .bind('KeyDown', handle_key_down)\n    .bind('KeyUp', handle_key_up);\n});\n\n//# sourceURL=webpack:///./src/entities/keyboard.js?");

/***/ }),

/***/ "./src/entities/red_square.js":
/*!************************************!*\
  !*** ./src/entities/red_square.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var calc_from_active_keys = function(active, max_acc) {\n  var horizontalctl = (active.indexOf('left') === -1 ? 0 : -1) + (active.indexOf('right') === -1 ? 0 : 1);\n  var verticalctl = (active.indexOf('up') === -1 ? 0 : -1) + (active.indexOf('down') === -1 ? 0 : 1);\n  \n  if(horizontalctl === 0 || verticalctl === 0 ) {\n    return [max_acc * horizontalctl, max_acc * verticalctl];\n  } else {\n    return [max_acc * (Math.PI/4) * horizontalctl, max_acc * (Math.PI/4) * verticalctl];\n  }\n};\n\nzombufo.e('RedSquare', function() {\n  var red_square = Crafty.e('Square, Color, RigidBody, InputControl')\n    .color('#FF0000');\n  \n  red_square.uniqueBind('Input Control Move Updated', function(data) {\n    console.log('red square received \"Input Control Move Updated\"', data);\n    var active = data.active;\n    this.acceleration(calc_from_active_keys(active, 1.0));\n  });\n  \n  return red_square;\n});\n\n//# sourceURL=webpack:///./src/entities/red_square.js?");

/***/ }),

/***/ "./src/entities/space_background.js":
/*!******************************************!*\
  !*** ./src/entities/space_background.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("zombufo.e('Space Setting', function() {\n  return Crafty.e('Space, Color')\n    .background('zombufo/src/assets/space_background.jpg');\n});\n\n\n//# sourceURL=webpack:///./src/entities/space_background.js?");

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

eval("var map = {\n\t\"./level_1.0.js\": \"./src/scenes/level_1.0.js\",\n\t\"./level_1.js\": \"./src/scenes/level_1.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/scenes sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src/scenes_sync_\\.js$?");

/***/ }),

/***/ "./src/scenes/level_1.0.js":
/*!*********************************!*\
  !*** ./src/scenes/level_1.0.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Crafty.defineScene('Level 1.0', function(setup) {\n  console.log('Level 1.0!');\n  zombufo.e('Space Setting')\n    .attr({x: 0, y:0})\n    .size(30);\n});\n\n\n//# sourceURL=webpack:///./src/scenes/level_1.0.js?");

/***/ }),

/***/ "./src/scenes/level_1.js":
/*!*******************************!*\
  !*** ./src/scenes/level_1.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Crafty.defineScene('Level 1', function(setup) {\n  console.log('Level 1!');\n  zombufo.e('Keyboard');\n  zombufo.e('GreenSquare')\n    .attr({x: 50, y:50})\n    .size(30)\n    .origin('center');\n  zombufo.e('RedSquare')\n    .attr({x: 30, y:10})\n    .size(24);\n});\n\n//# sourceURL=webpack:///./src/scenes/level_1.js?");

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