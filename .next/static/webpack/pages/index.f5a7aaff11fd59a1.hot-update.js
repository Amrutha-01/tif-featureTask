"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/containers/home/HomeLayout.tsx":
/*!********************************************!*\
  !*** ./src/containers/home/HomeLayout.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_without_properties.mjs */ \"./node_modules/@swc/helpers/src/_object_without_properties.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InterviewSettingsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InterviewSettingsForm */ \"./src/containers/home/InterviewSettingsForm.tsx\");\n/* harmony import */ var _JobDetailsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobDetailsForm */ \"./src/containers/home/JobDetailsForm.tsx\");\n/* harmony import */ var _RequisitionDetailsForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequisitionDetailsForm */ \"./src/containers/home/RequisitionDetailsForm.tsx\");\n/* harmony import */ var _PreviewCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PreviewCard */ \"./src/containers/home/PreviewCard.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CustomTab = function(_param) {\n    var children = _param.children, props = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_param, [\n        \"children\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Tab, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n        p: \"1rem\",\n        fontFamily: \"Poppins\"\n    }, props), {\n        children: children\n    }), void 0, false, {\n        fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = CustomTab;\nvar HomeLayout = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), tabIndex = ref[0], setTabIndex = ref[1];\n    var handleNextTab = function(ind) {\n        setTabIndex(ind);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, [\n        tabIndex\n    ]);\n    console.log(tabIndex);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n        w: \"100%\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n            maxW: \"1200px\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                    fontFamily: \"Poppins\",\n                    fontSize: \"1.5rem\",\n                    my: \"2rem\",\n                    children: \"Create Candidate Requisition\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Tabs, {\n                    index: tabIndex,\n                    onChange: function(index) {\n                        return setTabIndex(index);\n                    },\n                    isLazy: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.TabList, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTab, {\n                                    children: \"Requistion Details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTab, {\n                                    children: \"Job Details\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTab, {\n                                    children: \"Interview Settings\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            display: \"grid\",\n                            gridTemplateColumns: \"3fr 2fr\",\n                            gap: \"24px\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.TabPanels, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.TabPanel, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RequisitionDetailsForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                handleNextTab: handleNextTab\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.TabPanel, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_JobDetailsForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                handleNextTab: handleNextTab\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.TabPanel, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InterviewSettingsForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                                fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PreviewCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\tif-featuretask\\\\src\\\\containers\\\\home\\\\HomeLayout.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomeLayout, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c1 = HomeLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLayout);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomTab\");\n$RefreshReg$(_c1, \"HomeLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9ob21lL0hvbWVMYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBVzBCO0FBQ2U7QUFDUjtBQUMyQjtBQUNkO0FBQ1M7QUFDZjtBQUV4QyxJQUFNZ0IsU0FBUyxHQUF1QixpQkFBNEI7UUFBekJDLFFBQVEsVUFBUkEsUUFBUSxFQUFLQyxLQUFLO1FBQWxCRCxVQUFROztJQUMvQyxxQkFDRSw4REFBQ2QsaURBQUc7UUFBQ2dCLENBQUMsRUFBQyxNQUFNO1FBQUNDLFVBQVUsRUFBQyxTQUFTO09BQUtGLEtBQUs7a0JBQ3pDRCxRQUFROzs7OzthQUNMLENBQ047Q0FDSDtBQU5LRCxLQUFBQSxTQUFTO0FBUWYsSUFBTUssVUFBVSxHQUFHLFdBQU07O0lBQ3ZCLElBQWdDVixHQUFtQixHQUFuQkEsK0NBQVEsQ0FBUyxDQUFDLENBQUMsRUFBNUNXLFFBQVEsR0FBaUJYLEdBQW1CLEdBQXBDLEVBQUVZLFdBQVcsR0FBSVosR0FBbUIsR0FBdkI7SUFFNUIsSUFBTWEsYUFBYSxHQUFHLFNBQUNDLEdBQVcsRUFBSztRQUNyQ0YsV0FBVyxDQUFDRSxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUVEZixnREFBUyxDQUFDLFdBQU0sRUFBRSxFQUFFO1FBQUNZLFFBQVE7S0FBQyxDQUFDLENBQUM7SUFDaENJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxRQUFRLENBQUMsQ0FBQztJQUN0QixxQkFDRSw4REFBQ2YsaURBQUc7UUFBQ3FCLENBQUMsRUFBQyxNQUFNO2tCQUNYLDRFQUFDNUIsdURBQVM7WUFBQzZCLElBQUksRUFBQyxRQUFROzs4QkFDdEIsOERBQUN2QixxREFBTztvQkFBQ2MsVUFBVSxFQUFDLFNBQVM7b0JBQUNVLFFBQVEsRUFBQyxRQUFRO29CQUFDQyxFQUFFLEVBQUMsTUFBTTs4QkFBQyw4QkFFMUQ7Ozs7O3lCQUFVOzhCQUNWLDhEQUFDOUIsa0RBQUk7b0JBQ0grQixLQUFLLEVBQUVWLFFBQVE7b0JBQ2ZXLFFBQVEsRUFBRSxTQUFDRCxLQUFhOytCQUFLVCxXQUFXLENBQUNTLEtBQUssQ0FBQztxQkFBQTtvQkFDL0NFLE1BQU07O3NDQUVOLDhEQUFDaEMscURBQU87OzhDQUNOLDhEQUFDYyxTQUFTOzhDQUFDLG9CQUFrQjs7Ozs7eUNBQVk7OENBQ3pDLDhEQUFDQSxTQUFTOzhDQUFDLGFBQVc7Ozs7O3lDQUFZOzhDQUNsQyw4REFBQ0EsU0FBUzs4Q0FBQyxvQkFBa0I7Ozs7O3lDQUFZOzs7Ozs7aUNBQ2pDO3NDQUNWLDhEQUFDUixrREFBSTs0QkFBQzJCLE9BQU8sRUFBQyxNQUFNOzRCQUFDQyxtQkFBbUIsRUFBQyxTQUFTOzRCQUFDQyxHQUFHLEVBQUMsTUFBTTs7OENBQzNELDhEQUFDakMsdURBQVM7O3NEQUNSLDhEQUFDQyxzREFBUTtzREFDUCw0RUFBQ1MsK0RBQWU7Z0RBQUNVLGFBQWEsRUFBRUEsYUFBYTs7Ozs7cURBQUk7Ozs7O2lEQUN4QztzREFDWCw4REFBQ25CLHNEQUFRO3NEQUNQLDRFQUFDUSx1REFBYztnREFBQ1csYUFBYSxFQUFFQSxhQUFhOzs7OztxREFBSTs7Ozs7aURBQ3ZDO3NEQUNYLDhEQUFDbkIsc0RBQVE7c0RBQ1AsNEVBQUNPLDhEQUFxQjs7OztxREFBRzs7Ozs7aURBQ2hCOzs7Ozs7eUNBQ0Q7OENBQ1osOERBQUNHLG9EQUFXOzs7O3lDQUFHOzs7Ozs7aUNBQ1Y7Ozs7Ozt5QkFDRjs7Ozs7O2lCQUNHOzs7OzthQUNSLENBQ047Q0FDSDtHQTNDS00sVUFBVTtBQUFWQSxNQUFBQSxVQUFVO0FBNkNoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250YWluZXJzL2hvbWUvSG9tZUxheW91dC50c3g/OGI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb250YWluZXIsXG4gIFRhYnMsXG4gIFRhYkxpc3QsXG4gIFRhYixcbiAgVGFiUGFuZWxzLFxuICBUYWJQYW5lbCxcbiAgSGVhZGluZyxcbiAgVGFiUHJvcHMsXG4gIEJveCxcbiAgR3JpZCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW50ZXJ2aWV3U2V0dGluZ3NGb3JtIGZyb20gXCIuL0ludGVydmlld1NldHRpbmdzRm9ybVwiO1xuaW1wb3J0IEpvYkRldGFpbHNGb3JtIGZyb20gXCIuL0pvYkRldGFpbHNGb3JtXCI7XG5pbXBvcnQgUmVxdWlzaXRpb25Gb3JtIGZyb20gXCIuL1JlcXVpc2l0aW9uRGV0YWlsc0Zvcm1cIjtcbmltcG9ydCBEaXNwbGF5Q2FyZCBmcm9tIFwiLi9QcmV2aWV3Q2FyZFwiO1xuXG5jb25zdCBDdXN0b21UYWI6IFJlYWN0LkZDPFRhYlByb3BzPiA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRhYiBwPVwiMXJlbVwiIGZvbnRGYW1pbHk9XCJQb3BwaW5zXCIgey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhYj5cbiAgKTtcbn07XG5cbmNvbnN0IEhvbWVMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWJJbmRleCwgc2V0VGFiSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBoYW5kbGVOZXh0VGFiID0gKGluZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VGFiSW5kZXgoaW5kKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFt0YWJJbmRleF0pO1xuICBjb25zb2xlLmxvZyh0YWJJbmRleCk7XG4gIHJldHVybiAoXG4gICAgPEJveCB3PVwiMTAwJVwiPlxuICAgICAgPENvbnRhaW5lciBtYXhXPVwiMTIwMHB4XCI+XG4gICAgICAgIDxIZWFkaW5nIGZvbnRGYW1pbHk9XCJQb3BwaW5zXCIgZm9udFNpemU9XCIxLjVyZW1cIiBteT1cIjJyZW1cIj5cbiAgICAgICAgICBDcmVhdGUgQ2FuZGlkYXRlIFJlcXVpc2l0aW9uXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPFRhYnNcbiAgICAgICAgICBpbmRleD17dGFiSW5kZXh9XG4gICAgICAgICAgb25DaGFuZ2U9eyhpbmRleDogbnVtYmVyKSA9PiBzZXRUYWJJbmRleChpbmRleCl9XG4gICAgICAgICAgaXNMYXp5XG4gICAgICAgID5cbiAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgIDxDdXN0b21UYWI+UmVxdWlzdGlvbiBEZXRhaWxzPC9DdXN0b21UYWI+XG4gICAgICAgICAgICA8Q3VzdG9tVGFiPkpvYiBEZXRhaWxzPC9DdXN0b21UYWI+XG4gICAgICAgICAgICA8Q3VzdG9tVGFiPkludGVydmlldyBTZXR0aW5nczwvQ3VzdG9tVGFiPlxuICAgICAgICAgIDwvVGFiTGlzdD5cbiAgICAgICAgICA8R3JpZCBkaXNwbGF5PVwiZ3JpZFwiIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCIzZnIgMmZyXCIgZ2FwPVwiMjRweFwiPlxuICAgICAgICAgICAgPFRhYlBhbmVscz5cbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxSZXF1aXNpdGlvbkZvcm0gaGFuZGxlTmV4dFRhYj17aGFuZGxlTmV4dFRhYn0gLz5cbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxKb2JEZXRhaWxzRm9ybSBoYW5kbGVOZXh0VGFiPXtoYW5kbGVOZXh0VGFifSAvPlxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPEludGVydmlld1NldHRpbmdzRm9ybSAvPlxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgPC9UYWJQYW5lbHM+XG4gICAgICAgICAgICA8RGlzcGxheUNhcmQgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvVGFicz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUxheW91dDtcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJUYWJzIiwiVGFiTGlzdCIsIlRhYiIsIlRhYlBhbmVscyIsIlRhYlBhbmVsIiwiSGVhZGluZyIsIkJveCIsIkdyaWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW50ZXJ2aWV3U2V0dGluZ3NGb3JtIiwiSm9iRGV0YWlsc0Zvcm0iLCJSZXF1aXNpdGlvbkZvcm0iLCJEaXNwbGF5Q2FyZCIsIkN1c3RvbVRhYiIsImNoaWxkcmVuIiwicHJvcHMiLCJwIiwiZm9udEZhbWlseSIsIkhvbWVMYXlvdXQiLCJ0YWJJbmRleCIsInNldFRhYkluZGV4IiwiaGFuZGxlTmV4dFRhYiIsImluZCIsImNvbnNvbGUiLCJsb2ciLCJ3IiwibWF4VyIsImZvbnRTaXplIiwibXkiLCJpbmRleCIsIm9uQ2hhbmdlIiwiaXNMYXp5IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/home/HomeLayout.tsx\n"));

/***/ })

});