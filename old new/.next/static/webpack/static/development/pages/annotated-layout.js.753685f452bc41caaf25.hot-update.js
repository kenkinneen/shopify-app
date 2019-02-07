webpackHotUpdate("static/development/pages/annotated-layout.js",{

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_2__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



console.log(store_js__WEBPACK_IMPORTED_MODULE_2___default.a);
var shopify = new Shopify({
  shopName: 'eken-2',
  accessToken: 'your-oauth-token'
});

var AnnotatedLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnnotatedLayout, _React$Component);

  function AnnotatedLayout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AnnotatedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AnnotatedLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      discount: '10%',
      enabled: false,
      value: 12,
      firstText: 'Order within ',
      secondText: 'to recieve your order in 3 business days'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChanges", function (value) {
      _this.setState({
        value: value
      });

      localStorage.setItem('value', value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFirstTextChange", function (value) {
      _this.setState({
        firstText: value
      });

      localStorage.setItem('firstText', value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSecondTextChange", function (value) {
      _this.setState({
        secondText: value
      });

      localStorage.setItem('secondText', value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buttonPressed", function (value) {
      console.log("pressed");
      console.log(value);
      Shopify.get('/admin/products.json', query_data, function (err, data, headers) {
        console.log(data); // Data contains product json information

        console.log(headers); // Headers returned from request
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      _this.setState({
        discount: _this.state.discount
      });

      console.log('submission', _this.state);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (field) {
      return function (value) {
        return _this.setState(_defineProperty({}, field, value));
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggle", function () {
      _this.setState(function (_ref) {
        var enabled = _ref.enabled;
        return {
          enabled: !enabled
        };
      });
    });

    return _this;
  }

  _createClass(AnnotatedLayout, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          discount = _this$state.discount,
          enabled = _this$state.enabled;
      var contentStatus = enabled ? 'Disable' : 'Enable';
      var textStatus = enabled ? 'enabled' : 'disabled';
      console.log("gotten");
      var suffixStyles = {
        minWidth: '24px',
        textAlign: 'right'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        title: "Text Settings",
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["DisplayText"], {
        size: "small"
      }, this.state.firstText, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
        variation: "strong"
      }, "1 hour and 23 minutes "), this.state.secondText)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"].Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        value: this.state.firstText,
        onChange: this.handleFirstTextChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        value: this.state.secondText,
        onChange: this.handleSecondTextChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RangeSlider"], {
        label: "Cut Off Time",
        min: 0,
        max: 24,
        value: this.state.value,
        onChange: this.handleChanges,
        suffix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          style: suffixStyles
        }, this.state.value, ":00 Hours")
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        primary: true,
        onClick: this.buttonPressed
      }, "Save theme"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
        title: "Default discount",
        description: "When you add a product to Sample App, it will automatically be discounted by this percentage."
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        sectioned: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        value: discount,
        onChange: this.handleChange('discount'),
        label: "Discount percentage",
        type: "discount"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        distribution: "trailing"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        primary: true,
        submit: true
      }, "Save")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
        title: "Price updates",
        description: "Temporarily disable all Sample App price updates"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
        action: {
          content: contentStatus,
          onAction: this.handleToggle
        },
        enabled: enabled
      }, "This setting is", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
        variation: "strong"
      }, textStatus), "."))));
    }
  }]);

  return AnnotatedLayout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/annotated-layout")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=annotated-layout.js.753685f452bc41caaf25.hot-update.js.map