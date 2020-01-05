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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = App;\n\nvar _Home = _interopRequireDefault(__webpack_require__(/*! ./Components/Home.jsx */ \"./src/Components/Home.jsx\"));\n\nvar _Dashboard = _interopRequireDefault(__webpack_require__(/*! ./Components/Dashboard.jsx */ \"./src/Components/Dashboard.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction App() {\n  var Router = window.ReactRouterDOM.HashRouter;\n  var Link = window.ReactRouterDOM.Link;\n  var Switch = window.ReactRouterDOM.Switch;\n  var Route = window.ReactRouterDOM.Route;\n  return React.createElement(Router, null, React.createElement(\"div\", null, React.createElement(\"nav\", {\n    className: \"nav\"\n  }, React.createElement(\"ul\", null, React.createElement(\"li\", null, React.createElement(Link, {\n    to: \"/\"\n  }, \"Home\")), React.createElement(\"li\", null, React.createElement(Link, {\n    to: \"/dashboard\"\n  }, \"Dashboard\")))), React.createElement(Switch, null, React.createElement(Route, {\n    path: \"/\",\n    component: _Home[\"default\"],\n    exact: true\n  }), React.createElement(Route, {\n    path: \"/dashboard\",\n    component: _Dashboard[\"default\"]\n  }), React.createElement(Route, null, React.createElement(\"h1\", null, \"404\")))));\n}\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/Components/Dashboard.jsx":
/*!**************************************!*\
  !*** ./src/Components/Dashboard.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Dashboard =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Dashboard, _React$Component);\n\n  function Dashboard(props) {\n    _classCallCheck(this, Dashboard);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));\n  }\n\n  _createClass(Dashboard, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"dashboard\"\n      }, React.createElement(\"h1\", null, \"Dashboard\"));\n    }\n  }]);\n\n  return Dashboard;\n}(React.Component);\n\nvar _default = Dashboard;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/Components/Dashboard.jsx?");

/***/ }),

/***/ "./src/Components/Home.jsx":
/*!*********************************!*\
  !*** ./src/Components/Home.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Home =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home(props) {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));\n    _this.state = {\n      pets: {},\n      currentPetNum: 0,\n      currentPetId: 0,\n      currentPicSrc: '#',\n      currentDistance: null\n    };\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var pets = window.localStorage.getItem('pets');\n\n      if (pets === null) {\n        pets = this.fetchPets();\n      } else {\n        pets = JSON.parse(pets);\n      }\n\n      this.setState({\n        'pets': pets\n      }, function () {\n        _this2.setPet(0);\n      });\n      console.log(pets);\n    }\n  }, {\n    key: \"fetchPets\",\n    value: function fetchPets() {\n      fetch('/api').then(function (response) {\n        return response.json();\n      }).then(function (json) {\n        var petsWithPics = json.filter(function (pet) {\n          if (pet.photos.length > 0) {\n            return pet;\n          }\n        });\n        console.log('# original pets', json.length);\n        console.log('# pets with pics', petsWithPics.length);\n        console.log('pets with pics', petsWithPics);\n        var pets = JSON.stringify(petsWithPics);\n        window.localStorage.setItem('pets', pets);\n        return petsWithPics;\n      });\n    }\n  }, {\n    key: \"nextPet\",\n    value: function nextPet() {\n      console.log('Next pet!');\n      var newcurrentPetNum = this.state.currentPetNum + 1;\n\n      if (newcurrentPetNum > this.state.pets.length - 1) {\n        newcurrentPetNum = 0;\n      }\n\n      this.setState({\n        currentPetNum: newcurrentPetNum\n      });\n      this.setPet(newcurrentPetNum);\n    }\n  }, {\n    key: \"setPet\",\n    value: function setPet(currentPetNum) {\n      var currentPicSrc = '#';\n\n      if (this.state.pets[currentPetNum].photos.length > 0) {\n        currentPicSrc = this.state.pets[currentPetNum].photos[0].medium;\n      }\n\n      this.setState({\n        currentPetId: this.state.pets[currentPetNum].id,\n        currentPicSrc: currentPicSrc,\n        currentDistance: this.state.pets[currentPetNum].distance\n      });\n    }\n  }, {\n    key: \"savePet\",\n    value: function savePet() {\n      var storage = window.localStorage;\n      var newPetId = this.state.currentPetId;\n      var myPets = storage.getItem('myPets') ? JSON.parse(storage.getItem('myPets')) : [];\n\n      if (!myPets.includes(newPetId)) {\n        myPets.push(newPetId);\n        console.log(myPets);\n        myPets = JSON.stringify(myPets);\n        storage.setItem('myPets', myPets);\n      } // window.localStorage.getItem('myPets')\n\n    }\n  }, {\n    key: \"clearPets\",\n    value: function clearPets() {\n      window.localStorage.removeItem('myPets');\n      console.log('No more saved pets :(');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var distanceMessage = \"Location wasn't provided.\";\n\n      if (this.state.currentDistance !== null) {\n        distanceMessage = \"You are \".concat(this.state.currentDistance, \" miles away from this pet.\");\n      }\n\n      return React.createElement(\"div\", {\n        className: \"home\"\n      }, React.createElement(\"img\", {\n        className: \"pic\",\n        src: this.state.currentPicSrc\n      }), React.createElement(\"div\", {\n        className: \"info\"\n      }, React.createElement(\"b\", null, \"Distance from your location:\"), React.createElement(\"br\", null), distanceMessage), React.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this3.nextPet();\n        }\n      }, \"Noop\"), React.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this3.savePet();\n        }\n      }, \"Boop\"), React.createElement(\"div\", null, React.createElement(\"b\", null, \"Dev Tools:\"), React.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this3.fetchPets();\n        }\n      }, \"Fetch Pets\"), React.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this3.clearPets();\n        }\n      }, \"Clear Boops\")));\n    }\n  }]);\n\n  return Home;\n}(React.Component);\n\nvar _default = Home;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/Components/Home.jsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App.jsx */ \"./src/App.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar domContainer = document.querySelector('#root');\nReactDOM.render(React.createElement(_App[\"default\"], null), domContainer);\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ })

/******/ });