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

/***/ "./components/Sales/Sales.jsx":
/*!************************************!*\
  !*** ./components/Sales/Sales.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_LanguageProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/LanguageProvider */ \"./components/Context/LanguageProvider.jsx\");\n/* harmony import */ var _SalesTabButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SalesTabButton */ \"./components/Sales/SalesTabButton.jsx\");\n/* harmony import */ var _SalesTabContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SalesTabContent */ \"./components/Sales/SalesTabContent.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sales = ()=>{\n    _s();\n    const { selectedLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_LanguageProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const LiqBurn = selectedLanguage === \"EN\" ? \"Liq Burn: \" : \"Queima de Liq: \";\n    const LiqLocked = selectedLanguage === \"EN\" ? \"Liq Locked::\" : \"Liq bloqueado: \";\n    const chart_info_list = [\n        \"\".concat(LiqBurn, \" 74.3710%\"),\n        \"\".concat(LiqLocked, \" 24.4021%\")\n    ];\n    const totalSupply = selectedLanguage === \"EN\" ? \"Total Supply: \" : \"Fornecimento total: \";\n    const burnSupply = selectedLanguage === \"EN\" ? \"Burn Supply: \" : \"Fornecimento de queima: \";\n    const maxSupply = selectedLanguage === \"EN\" ? \"Max Supply: \" : \"Fornecimento m\\xe1ximo: \";\n    const circulatingSupply = selectedLanguage === \"EN\" ? \"Circulating Supply: \" : \"Fornecimento circulante: \";\n    const taxDescrip = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"9% Tax \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 23,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 23,\n                columnNumber: 20\n            }, undefined),\n            \"2% Backflow 2% Buyback 2% Marketing \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 24,\n                columnNumber: 43\n            }, undefined),\n            \"3% Philanthropy\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n    const TokenDescrip = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            totalSupply,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 30,\n                columnNumber: 20\n            }, undefined),\n            \"10,000,000,000,000,000,000,000,000 \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 31,\n                columnNumber: 42\n            }, undefined),\n            burnSupply,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 33,\n                columnNumber: 20\n            }, undefined),\n            \"5,613,347,139,019,740,000,000,000 \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 34,\n                columnNumber: 41\n            }, undefined),\n            maxSupply,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 36,\n                columnNumber: 19\n            }, undefined),\n            \"4,386,652,860,980,260,000,000,000 \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 37,\n                columnNumber: 41\n            }, undefined),\n            circulatingSupply,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 39,\n                columnNumber: 27\n            }, undefined),\n            \"4,386,652,860,980,260,000,000,000\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n    const pancakeLink = \"https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"tokenomics\",\n        className: \"chart-area chart-bg \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"chart-inner\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row align-items-center justify-content-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-lg-6 col-md-10 order-0 order-lg-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chart-wrap wow fadeInRight\",\n                                \"data-wow-delay\": \".2s\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"Title\",\n                                        children: selectedLanguage === \"EN\" ? \"Total Security\" : \"Seguran\\xe7a Total\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/img/images/chart.png\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        children: chart_info_list.map((x, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: x\n                                            }, index, false, {\n                                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-lg-6 col-md-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chart-content wow fadeInLeft\",\n                                \"data-wow-delay\": \".2s\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"nav nav-tabs\",\n                                        id: \"myTab\",\n                                        role: \"tablist\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SalesTabButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                title: selectedLanguage === \"EN\" ? \"Tax Allocation\" : \"Aloca\\xe7\\xe3o de Imposto\",\n                                                className: \"active\",\n                                                id: \"funding-tab\",\n                                                target: \"#funding\",\n                                                ariaControls: \"funding\",\n                                                ariaSelected: true\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SalesTabButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                title: selectedLanguage === \"EN\" ? \"Token Allocation\" : \"Aloca\\xe7\\xe3o de token\",\n                                                className: \"\",\n                                                id: \"token-tab\",\n                                                target: \"#token\",\n                                                ariaControls: \"token\",\n                                                ariaSelected: false\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"tab-content\",\n                                        id: \"myTabContent\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SalesTabContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                className: \"show active\",\n                                                id: \"funding\",\n                                                ariaLabel: \"funding-tab\",\n                                                title: selectedLanguage === \"EN\" ? \"Tax\" : \"Imposto\",\n                                                description: taxDescrip,\n                                                link: pancakeLink\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SalesTabContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                className: \"\",\n                                                id: \"token\",\n                                                ariaLabel: \"token-tab\",\n                                                title: selectedLanguage === \"EN\" ? \"Token\" : \"S\\xedmbolo\",\n                                                description: TokenDescrip,\n                                                link: pancakeLink\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Sales\\\\Sales.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sales, \"+3qoxuUTePUTRNoJNzqPFZAFiuc=\");\n_c = Sales;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sales);\nvar _c;\n$RefreshReg$(_c, \"Sales\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1wQjs7Ozs7OzBEQUdSLDhEQUFDZCx3REFBZUE7Z0RBQ2RpQixXQUFXO2dEQUNYRCxJQUFHO2dEQUNIZ0IsV0FBVTtnREFDVkosT0FBTzFCLHFCQUFxQixPQUFPLFVBQVUsWUFBUztnREFDdEQrQixhQUFhcEI7Z0RBQ2JxQixNQUFNcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTFCO0dBakhNYjtLQUFBQTtBQW1ITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NhbGVzL1NhbGVzLmpzeD84YTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMYW5ndWFnZUNvbnRleHQgZnJvbSBcIi4uL0NvbnRleHQvTGFuZ3VhZ2VQcm92aWRlclwiXHJcbmltcG9ydCBTYWxlc1RhYkJ1dHRvbiBmcm9tIFwiLi9TYWxlc1RhYkJ1dHRvblwiO1xyXG5pbXBvcnQgU2FsZXNUYWJDb250ZW50IGZyb20gXCIuL1NhbGVzVGFiQ29udGVudFwiO1xyXG5cclxuY29uc3QgU2FsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZWxlY3RlZExhbmd1YWdlIH0gPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XHJcbiAgY29uc3QgTGlxQnVybiA9IHNlbGVjdGVkTGFuZ3VhZ2UgPT09IFwiRU5cIiA/IFwiTGlxIEJ1cm46IFwiIDogXCJRdWVpbWEgZGUgTGlxOiBcIlxyXG4gIGNvbnN0IExpcUxvY2tlZCA9IHNlbGVjdGVkTGFuZ3VhZ2UgPT09IFwiRU5cIiA/IFwiTGlxIExvY2tlZDo6XCIgOiBcIkxpcSBibG9xdWVhZG86IFwiXHJcbiAgY29uc3QgY2hhcnRfaW5mb19saXN0ID0gW1xyXG4gICAgYCR7TGlxQnVybn0gNzQuMzcxMCVgLFxyXG4gICAgYCR7TGlxTG9ja2VkfSAyNC40MDIxJWAsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdG90YWxTdXBwbHkgPSBzZWxlY3RlZExhbmd1YWdlID09PSBcIkVOXCIgPyBcIlRvdGFsIFN1cHBseTogXCIgOiBcIkZvcm5lY2ltZW50byB0b3RhbDogXCJcclxuICBjb25zdCBidXJuU3VwcGx5ID0gc2VsZWN0ZWRMYW5ndWFnZSA9PT0gXCJFTlwiID8gXCJCdXJuIFN1cHBseTogXCIgOiBcIkZvcm5lY2ltZW50byBkZSBxdWVpbWE6IFwiXHJcbiAgY29uc3QgbWF4U3VwcGx5ID0gc2VsZWN0ZWRMYW5ndWFnZSA9PT0gXCJFTlwiID8gXCJNYXggU3VwcGx5OiBcIiA6IFwiRm9ybmVjaW1lbnRvIG3DoXhpbW86IFwiXHJcbiAgY29uc3QgY2lyY3VsYXRpbmdTdXBwbHkgPSBzZWxlY3RlZExhbmd1YWdlID09PSBcIkVOXCIgPyBcIkNpcmN1bGF0aW5nIFN1cHBseTogXCIgOiBcIkZvcm5lY2ltZW50byBjaXJjdWxhbnRlOiBcIlxyXG5cclxuICBjb25zdCB0YXhEZXNjcmlwID1cclxuICAgIDxkaXY+XHJcbiAgICAgIDklIFRheCA8YnIgLz48YnIgLz5cclxuICAgICAgMiUgQmFja2Zsb3cgMiUgQnV5YmFjayAyJSBNYXJrZXRpbmcgPGJyIC8+XHJcbiAgICAgIDMlIFBoaWxhbnRocm9weVxyXG4gICAgPC9kaXY+XHJcblxyXG4gIGNvbnN0IFRva2VuRGVzY3JpcCA9XHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dG90YWxTdXBwbHl9PGJyIC8+XHJcbiAgICAgIDEwLDAwMCwwMDAsMDAwLDAwMCwwMDAsMDAwLDAwMCwwMDAgPGJyIC8+XHJcblxyXG4gICAgICB7YnVyblN1cHBseX0gPGJyIC8+XHJcbiAgICAgIDUsNjEzLDM0NywxMzksMDE5LDc0MCwwMDAsMDAwLDAwMCA8YnIgLz5cclxuXHJcbiAgICAgIHttYXhTdXBwbHl9IDxiciAvPlxyXG4gICAgICA0LDM4Niw2NTIsODYwLDk4MCwyNjAsMDAwLDAwMCwwMDAgPGJyIC8+XHJcblxyXG4gICAgICB7Y2lyY3VsYXRpbmdTdXBwbHl9IDxiciAvPlxyXG4gICAgICA0LDM4Niw2NTIsODYwLDk4MCwyNjAsMDAwLDAwMCwwMDBcclxuICAgIDwvZGl2PlxyXG5cclxuICBjb25zdCBwYW5jYWtlTGluayA9IFwiaHR0cHM6Ly9wYW5jYWtlc3dhcC5maW5hbmNlL3N3YXA/b3V0cHV0Q3VycmVuY3k9MHhBQzY4OTMxQjY2NkUwODZFOWRlMzgwQ0ZEYjBGYjU3MDRhMzVkYzJEXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInRva2Vub21pY3NcIiBjbGFzc05hbWU9XCJjaGFydC1hcmVhIGNoYXJ0LWJnIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEwIG9yZGVyLTAgb3JkZXItbGctMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcnQtd3JhcCB3b3cgZmFkZUluUmlnaHRcIiBkYXRhLXdvdy1kZWxheT1cIi4yc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYW5ndWFnZSA9PT0gXCJFTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiVG90YWwgU2VjdXJpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlNlZ3VyYW7Dp2EgVG90YWxcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltZy9pbWFnZXMvY2hhcnQucG5nXCJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGFydF9pbmZvX2xpc3QubWFwKCh4LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57eH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTBcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGFydC1jb250ZW50IHdvdyBmYWRlSW5MZWZ0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiLjJzXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJteVRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTYWxlc1RhYkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3RlZExhbmd1YWdlID09PSBcIkVOXCIgPyBcIlRheCBBbGxvY2F0aW9uXCIgOiBcIkFsb2Nhw6fDo28gZGUgSW1wb3N0b1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmdW5kaW5nLXRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiI2Z1bmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFDb250cm9scz1cImZ1bmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFTZWxlY3RlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxTYWxlc1RhYkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzZWxlY3RlZExhbmd1YWdlID09PSBcIkVOXCIgPyBcIlRva2VuIEFsbG9jYXRpb25cIiA6IFwiQWxvY2HDp8OjbyBkZSB0b2tlblwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2tlbi10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIiN0b2tlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUNvbnRyb2xzPVwidG9rZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFTZWxlY3RlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIiBpZD1cIm15VGFiQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2FsZXNUYWJDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInNob3cgYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmdW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJmdW5kaW5nLXRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdGVkTGFuZ3VhZ2UgPT09IFwiRU5cIiA/IFwiVGF4XCIgOiBcIkltcG9zdG9cIn1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGF4RGVzY3JpcH1cclxuICAgICAgICAgICAgICAgICAgICBsaW5rPXtwYW5jYWtlTGlua31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxTYWxlc1RhYkNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0b2tlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsPVwidG9rZW4tdGFiXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0ZWRMYW5ndWFnZSA9PT0gXCJFTlwiID8gXCJUb2tlblwiIDogXCJTw61tYm9sb1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtUb2tlbkRlc2NyaXB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGluaz17cGFuY2FrZUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24gPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTYWxlcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkxhbmd1YWdlQ29udGV4dCIsIlNhbGVzVGFiQnV0dG9uIiwiU2FsZXNUYWJDb250ZW50IiwiU2FsZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiTGlxQnVybiIsIkxpcUxvY2tlZCIsImNoYXJ0X2luZm9fbGlzdCIsInRvdGFsU3VwcGx5IiwiYnVyblN1cHBseSIsIm1heFN1cHBseSIsImNpcmN1bGF0aW5nU3VwcGx5IiwidGF4RGVzY3JpcCIsImRpdiIsImJyIiwiVG9rZW5EZXNjcmlwIiwicGFuY2FrZUxpbmsiLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJkYXRhLXdvdy1kZWxheSIsImltZyIsInNyYyIsImFsdCIsInVsIiwibWFwIiwieCIsImluZGV4IiwibGkiLCJyb2xlIiwidGl0bGUiLCJ0YXJnZXQiLCJhcmlhQ29udHJvbHMiLCJhcmlhU2VsZWN0ZWQiLCJhcmlhTGFiZWwiLCJkZXNjcmlwdGlvbiIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sales/Sales.jsx\n"));

/***/ })

});