webpackHotUpdate_N_E("pages/products/[slug]",{

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Image */ \"./node_modules/react-bootstrap/esm/Image.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/products/[slug].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // Sanity.io\n\n\n // Bootstrap\n\n\n\nvar ProductDetails = function ProductDetails(props) {\n  _s();\n\n  var title = props.title,\n      price = props.price,\n      sizes = props.sizes,\n      description = props.description,\n      image = props.image,\n      imageUrl = props.imageUrl;\n  var product = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([{\n    name: {\n      title: title\n    },\n    price: {\n      price: price\n    },\n    quantity: 1,\n    image: {\n      imageUrl: imageUrl\n    },\n    size: {\n      size: size\n    }\n  }]);\n  return __jsx(\"div\", {\n    id: \"product-details-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"OJOS | \", title), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"product-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: \"products\",\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"$\", price), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, size), __jsx(\"button\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"Add to Cart\"), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, description), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, \"Shipping\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"))));\n}; // Fetching data from Sanity.io with GROQ query\n\n\n_s(ProductDetails, \"B7j84aRrvTjuK32ZuXYg/ZXtBtY=\");\n\n_c = ProductDetails;\n\nProductDetails.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var _context$query$slug, slug;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? \" \" : _context$query$slug;\n            _context.next = 3;\n            return _client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fetch(\"\\n    *[_type == \\\"product\\\" && slug.current == $slug][0]{title, price, sizes, description, image, slug, \\\"imageUrl\\\": image.asset->url}\\n  \", {\n              slug: slug\n            });\n\n          case 3:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW3NsdWddLmpzP2I5NGYiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJwcm9wcyIsInRpdGxlIiwicHJpY2UiLCJzaXplcyIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJpbWFnZVVybCIsInByb2R1Y3QiLCJSZWFjdCIsInVzZVN0YXRlIiwibmFtZSIsInF1YW50aXR5Iiwic2l6ZSIsInVybEZvciIsInF1YWxpdHkiLCJ1cmwiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiLCJzbHVnIiwiY2xpZW50IiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ3hCQyxLQUR3QixHQUM4QkQsS0FEOUIsQ0FDeEJDLEtBRHdCO0FBQUEsTUFDakJDLEtBRGlCLEdBQzhCRixLQUQ5QixDQUNqQkUsS0FEaUI7QUFBQSxNQUNWQyxLQURVLEdBQzhCSCxLQUQ5QixDQUNWRyxLQURVO0FBQUEsTUFDSEMsV0FERyxHQUM4QkosS0FEOUIsQ0FDSEksV0FERztBQUFBLE1BQ1VDLEtBRFYsR0FDOEJMLEtBRDlCLENBQ1VLLEtBRFY7QUFBQSxNQUNpQkMsUUFEakIsR0FDOEJOLEtBRDlCLENBQ2lCTSxRQURqQjtBQUdoQyxNQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUM3QjtBQUNFQyxRQUFJLEVBQUU7QUFBRVQsV0FBSyxFQUFMQTtBQUFGLEtBRFI7QUFFRUMsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBTEE7QUFBRixLQUZUO0FBR0VTLFlBQVEsRUFBRSxDQUhaO0FBSUVOLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQVJBO0FBQUYsS0FKVDtBQUtFTSxRQUFJLEVBQUU7QUFBRUEsVUFBSSxFQUFKQTtBQUFGO0FBTFIsR0FENkIsQ0FBZixDQUFoQjtBQVVBLFNBQ0U7QUFBSyxNQUFFLEVBQUMsc0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWVYLEtBQWYsQ0FERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0U7QUFBSyxNQUFFLEVBQUMsMkJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLGVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxhQUFTLEVBQUMsVUFEWjtBQUVFLFNBQUssTUFGUDtBQUdFLE9BQUcsRUFBRVksZ0VBQU0sQ0FBQ1IsS0FBRCxDQUFOLENBQWNTLE9BQWQsQ0FBc0IsR0FBdEIsRUFBMkJDLEdBQTNCLEVBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFRRTtBQUFLLE1BQUUsRUFBQyxpQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLZCxLQUFMLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUtDLEtBQUwsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVUsSUFBSixDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlSLFdBQUosQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDROQVJGLENBUkYsQ0FMRixDQURGO0FBZ0NELENBN0NELEMsQ0ErQ0E7OztHQS9DTUwsYzs7S0FBQUEsYzs7QUFnRE5BLGNBQWMsQ0FBQ2lCLGVBQWY7QUFBQSw4TEFBaUMsaUJBQWdCQyxPQUFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQ1JBLE9BQU8sQ0FBQ0MsS0FEQSxDQUN2QkMsSUFEdUIsRUFDdkJBLElBRHVCLG9DQUNoQixHQURnQjtBQUFBO0FBQUEsbUJBRWxCQywrQ0FBTSxDQUFDQyxLQUFQLGlKQUlYO0FBQUVGLGtCQUFJLEVBQUpBO0FBQUYsYUFKVyxDQUZrQjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWpDOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVlcEIsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vIFNhbml0eS5pb1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XG5pbXBvcnQgdXJsRm9yIGZyb20gXCIuLi8uLi9pbWFnZVVybEJ1aWxkZXJcIjtcblxuLy8gQm9vdHN0cmFwXG5pbXBvcnQgSW1hZ2UgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9JbWFnZVwiO1xuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBwcmljZSwgc2l6ZXMsIGRlc2NyaXB0aW9uLCBpbWFnZSwgaW1hZ2VVcmwgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSBSZWFjdC51c2VTdGF0ZShbXG4gICAge1xuICAgICAgbmFtZTogeyB0aXRsZSB9LFxuICAgICAgcHJpY2U6IHsgcHJpY2UgfSxcbiAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgaW1hZ2U6IHsgaW1hZ2VVcmwgfSxcbiAgICAgIHNpemU6IHsgc2l6ZSB9LFxuICAgIH0sXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInByb2R1Y3QtZGV0YWlscy1wYWdlXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCB7dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD1cInByb2R1Y3QtZGV0YWlscy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cInByb2R1Y3QtaW1hZ2VcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3RzXCJcbiAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZSkucXVhbGl0eSgxMDApLnVybCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdC1kZXRhaWxzXCI+XG4gICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgIDxwPiR7cHJpY2V9PC9wPlxuICAgICAgICAgIDxwPntzaXplfTwvcD5cbiAgICAgICAgICA8YnV0dG9uPkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgPGg0PkRlc2NyaXB0aW9uPC9oND5cbiAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxoND5TaGlwcGluZzwvaDQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDb21wbGltZW50YXJ5IGdyb3VuZCBzaGlwcGluZyBvbiBhbGwgZG9tZXN0aWMgb3JkZXJzLiBSZXR1cm5zXG4gICAgICAgICAgICBhY2NlcHRlZCB3aXRoaW4gNyBkYXlzIG9mIGRlbGl2ZXJ5IG9uIGZ1bGwgcHJpY2UgaXRlbXMuIEFsbCBzYWxlXG4gICAgICAgICAgICBpdGVtcyBhbmQgbWFza3MgYXJlIGZpbmFsIHNhbGUuIEludGVybmF0aW9uYWwgc2hpcHBpbmcgYXZhaWxhYmxlIHRvXG4gICAgICAgICAgICBzZWxlY3QgY291bnRyaWVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vIEZldGNoaW5nIGRhdGEgZnJvbSBTYW5pdHkuaW8gd2l0aCBHUk9RIHF1ZXJ5XG5Qcm9kdWN0RGV0YWlscy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCB7IHNsdWcgPSBcIiBcIiB9ID0gY29udGV4dC5xdWVyeTtcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBgXG4gICAgKltfdHlwZSA9PSBcInByb2R1Y3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde3RpdGxlLCBwcmljZSwgc2l6ZXMsIGRlc2NyaXB0aW9uLCBpbWFnZSwgc2x1ZywgXCJpbWFnZVVybFwiOiBpbWFnZS5hc3NldC0+dXJsfVxuICBgLFxuICAgIHsgc2x1ZyB9XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ })

})