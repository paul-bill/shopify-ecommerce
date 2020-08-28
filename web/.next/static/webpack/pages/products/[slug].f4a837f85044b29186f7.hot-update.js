webpackHotUpdate_N_E("pages/products/[slug]",{

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/products/[slug].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n // Sanity.io\n\n\n // Bootstrap\n\n // if quantity is 0 then set soldout sign and disable add to cart button\n\nvar ProductDetails = function ProductDetails(props) {\n  _s();\n\n  var title = props.title,\n      price = props.price,\n      sizes = props.sizes,\n      description = props.description,\n      image = props.image,\n      imageUrl = props.imageUrl;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      size = _React$useState2[0],\n      setSize = _React$useState2[1];\n\n  var product = [{\n    name: {\n      title: title\n    },\n    price: {\n      price: price\n    },\n    quantity: 1,\n    image: {\n      imageUrl: imageUrl\n    },\n    size: {\n      size: size\n    }\n  }];\n  console.log(product);\n\n  var handleChange = function handleChange(event) {\n    setSize({\n      size: event.target.value\n    });\n  };\n\n  return __jsx(\"div\", {\n    id: \"product-details-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"OJOS | \", title), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"product-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: \"products\",\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \"$\", price), __jsx(\"select\", {\n    onChange: handleChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, sizes && sizes.map(function (size) {\n    return __jsx(\"option\", {\n      value: size,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 43\n      }\n    }, size);\n  })), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, \"Add to Cart\"), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, description), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, \"Sizing\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Shipping\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"))));\n}; // Fetching data from Sanity.io with GROQ query\n\n\n_s(ProductDetails, \"G8v3k1GPq6KElqwTS3VEs7wtmHU=\");\n\n_c = ProductDetails;\n\nProductDetails.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \" \" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_5__[\"default\"].fetch(\"\\n    *[_type == \\\"product\\\" && slug.current == $slug][0]{title, price, sizes, description, image, slug, \\\"imageUrl\\\": image.asset->url}\\n  \", {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzP2I5NGYiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJwcm9wcyIsInRpdGxlIiwicHJpY2UiLCJzaXplcyIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJpbWFnZVVybCIsIlJlYWN0IiwidXNlU3RhdGUiLCJzaXplIiwic2V0U2l6ZSIsInByb2R1Y3QiLCJuYW1lIiwicXVhbnRpdHkiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVybEZvciIsInF1YWxpdHkiLCJ1cmwiLCJtYXAiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJzbHVnIiwiY2xpZW50IiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtDQUdBOztDQUdBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDeEJDLEtBRHdCLEdBQzhCRCxLQUQ5QixDQUN4QkMsS0FEd0I7QUFBQSxNQUNqQkMsS0FEaUIsR0FDOEJGLEtBRDlCLENBQ2pCRSxLQURpQjtBQUFBLE1BQ1ZDLEtBRFUsR0FDOEJILEtBRDlCLENBQ1ZHLEtBRFU7QUFBQSxNQUNIQyxXQURHLEdBQzhCSixLQUQ5QixDQUNISSxXQURHO0FBQUEsTUFDVUMsS0FEVixHQUM4QkwsS0FEOUIsQ0FDVUssS0FEVjtBQUFBLE1BQ2lCQyxRQURqQixHQUM4Qk4sS0FEOUIsQ0FDaUJNLFFBRGpCOztBQUFBLHdCQUVSQyw0Q0FBSyxDQUFDQyxRQUFOLEVBRlE7QUFBQTtBQUFBLE1BRXpCQyxJQUZ5QjtBQUFBLE1BRW5CQyxPQUZtQjs7QUFJaEMsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsUUFBSSxFQUFFO0FBQUVYLFdBQUssRUFBTEE7QUFBRixLQURSO0FBRUVDLFNBQUss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RGdCO0FBQUE7QUFBQSxtQkFFbEJDLCtDQUFNLENBQUNDLEtBQVAsaUpBSVg7QUFBRUYsa0JBQUksRUFBSkE7QUFBRixhQUpXLENBRmtCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBakM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWU1Qiw2RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuLy8gU2FuaXR5LmlvXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcbmltcG9ydCB1cmxGb3IgZnJvbSBcIi4uLy4uL2ltYWdlVXJsQnVpbGRlclwiO1xuXG4vLyBCb290c3RyYXBcbmltcG9ydCBJbWFnZSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0ltYWdlXCI7XG5cbi8vIGlmIHF1YW50aXR5IGlzIDAgdGhlbiBzZXQgc29sZG91dCBzaWduIGFuZCBkaXNhYmxlIGFkZCB0byBjYXJ0IGJ1dHRvblxuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBwcmljZSwgc2l6ZXMsIGRlc2NyaXB0aW9uLCBpbWFnZSwgaW1hZ2VVcmwgfSA9IHByb3BzO1xuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSBbXG4gICAge1xuICAgICAgbmFtZTogeyB0aXRsZSB9LFxuICAgICAgcHJpY2U6IHsgcHJpY2UgfSxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgaW1hZ2U6IHsgaW1hZ2VVcmwgfSxcbiAgICAgIHNpemU6IHsgc2l6ZSB9LFxuICAgIH0sXG4gIF07XG5cbiAgY29uc29sZS5sb2cocHJvZHVjdCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2l6ZSh7IHNpemU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWRldGFpbHMtcGFnZVwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PSk9TIHwge3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWRldGFpbHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWltYWdlXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0c1wiXG4gICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInByb2R1Y3QtZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cbiAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAge3NpemVzICYmIHNpemVzLm1hcCgoc2l6ZSkgPT4gPG9wdGlvbiB2YWx1ZT17c2l6ZX0+e3NpemV9PC9vcHRpb24+KX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnV0dG9uPkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgPGg0PkRlc2NyaXB0aW9uPC9oND5cbiAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxoND5TaXppbmc8L2g0PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQ29tcGxpbWVudGFyeSBncm91bmQgc2hpcHBpbmcgb24gYWxsIGRvbWVzdGljIG9yZGVycy4gUmV0dXJuc1xuICAgICAgICAgICAgYWNjZXB0ZWQgd2l0aGluIDcgZGF5cyBvZiBkZWxpdmVyeSBvbiBmdWxsIHByaWNlIGl0ZW1zLiBBbGwgc2FsZVxuICAgICAgICAgICAgaXRlbXMgYW5kIG1hc2tzIGFyZSBmaW5hbCBzYWxlLiBJbnRlcm5hdGlvbmFsIHNoaXBwaW5nIGF2YWlsYWJsZSB0b1xuICAgICAgICAgICAgc2VsZWN0IGNvdW50cmllcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGg0PlNoaXBwaW5nPC9oND5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIENvbXBsaW1lbnRhcnkgZ3JvdW5kIHNoaXBwaW5nIG9uIGFsbCBkb21lc3RpYyBvcmRlcnMuIFJldHVybnNcbiAgICAgICAgICAgIGFjY2VwdGVkIHdpdGhpbiA3IGRheXMgb2YgZGVsaXZlcnkgb24gZnVsbCBwcmljZSBpdGVtcy4gQWxsIHNhbGVcbiAgICAgICAgICAgIGl0ZW1zIGFuZCBtYXNrcyBhcmUgZmluYWwgc2FsZS4gSW50ZXJuYXRpb25hbCBzaGlwcGluZyBhdmFpbGFibGUgdG9cbiAgICAgICAgICAgIHNlbGVjdCBjb3VudHJpZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gRmV0Y2hpbmcgZGF0YSBmcm9tIFNhbml0eS5pbyB3aXRoIEdST1EgcXVlcnlcblByb2R1Y3REZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHsgc2x1ZyA9IFwiIFwiIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGBcbiAgICAqW190eXBlID09IFwicHJvZHVjdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17dGl0bGUsIHByaWNlLCBzaXplcywgZGVzY3JpcHRpb24sIGltYWdlLCBzbHVnLCBcImltYWdlVXJsXCI6IGltYWdlLmFzc2V0LT51cmx9XG4gIGAsXG4gICAgeyBzbHVnIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ })

})