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

/***/ "./components/Banner/Banner.jsx":
/*!**************************************!*\
  !*** ./components/Banner/Banner.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CountDown_CountDownOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CountDown/CountDownOne */ \"./components/CountDown/CountDownOne.jsx\");\n/* harmony import */ var _HomeMap_HomeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HomeMap/HomeMap */ \"./components/HomeMap/HomeMap.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Banner = ()=>{\n    _s();\n    const link = \"https://api.dexscreener.com/latest/dex/pairs/bsc/0x5e1aab9d49f6c7122df7de4d6dbd5b03c1ebb0b7\";\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const NumberConversion = (originalData)=>{\n        const stringToNum = Number(originalData);\n        const scientificNotation = stringToNum.toExponential();\n        //  提取次方\n        const match = scientificNotation.match(/e\\+?(-?\\d+)/);\n        const exponent = parseInt(match[1], 10);\n        const zeroCount = Math.abs(exponent) - 1;\n        //  提取最後幾位\n        const tempString = originalData.slice(-(originalData.length - zeroCount - 2));\n        console.log(tempString);\n        const convertedData = \"0.0(\".concat(zeroCount, \")\").concat(tempString);\n        return convertedData;\n    };\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(link);\n            const tempData = await response.json();\n            const tempPrice = tempData.pair.priceUsd;\n            const convertedPrice = NumberConversion(tempPrice);\n            setPrice(convertedPrice);\n        } catch (error) {\n            console.log(\"Error fetching data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"banner-area banner-bg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"banner-shape-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/img/banner/banner_shape01.png\",\n                        alt: \"\",\n                        className: \"img-one\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/img/banner/banner_shape02.png\",\n                        alt: \"\",\n                        className: \"img-two\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/img/banner/banner_shape03.png\",\n                        alt: \"\",\n                        className: \"img-three\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-lg-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"banner-content text-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/img/svg/Logo.png\",\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"title\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"BNBTiger\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 38\n                                            }, undefined),\n                                            \"Fierce.Firm.Victory\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row justify-content-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-xl-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"banner-countdown-wrap text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HomeMap_HomeMap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\Banner\\\\Banner.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Banner, \"lDVQiCkUTXYWMnFwwvmRyTxdI0I=\");\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci9CYW5uZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNFO0FBQ1o7QUFFekMsTUFBTUssU0FBUyxJQUFNOztJQUVuQixNQUFNQyxPQUFPO0lBRWIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRO0lBQ0YsR0FBRyxFQUFFO0lBR0wsTUFBTUMsbUJBQW1CLENBQUNDLGVBQWlCO1FBQ3pDLE1BQU1DLGNBQWNDLE9BQU9GO1FBQzNCLE1BQU1HLHFCQUFxQkYsWUFBWUcsYUFBYTtRQUVwRCxRQUFRO1FBQ1IsTUFBTUMsUUFBUUYsbUJBQW1CRSxLQUFLLENBQUM7UUFDdkMsTUFBTUMsV0FBV0MsU0FBU0YsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNRyxZQUFZQyxLQUFLQyxHQUFHLENBQUNKLFlBQVk7UUFFdkMsVUFBVTtRQUNWLE1BQU1LLGFBQWFYLGFBQWFZLEtBQUssQ0FBQyxDQUFFWixDQUFBQSxhQUFhYSxNQUFNLEdBQUdMLFlBQVk7UUFDMUVNLFFBQVFDLEdBQUcsQ0FBQ0o7UUFFWixNQUFNSyxnQkFBZ0IsT0FBb0JMLE9BQWJILFdBQVUsS0FBYyxPQUFYRztRQUUxQyxPQUFPSztJQUNUO0lBRUEsTUFBTWxCLFlBQVksVUFBWTtRQUM1QixJQUFJO1lBQ0YsTUFBTW1CLFdBQVcsTUFBTUMsTUFBTXZCO1lBQzdCLE1BQU13QixXQUFXLE1BQU1GLFNBQVNHLElBQUk7WUFFcEMsTUFBTUMsWUFBWUYsU0FBU0csSUFBSSxDQUFDQyxRQUFRO1lBQ3hDLE1BQU1DLGlCQUFpQnpCLGlCQUFpQnNCO1lBRXhDeEIsU0FBUzJCO1FBQ1gsRUFBRSxPQUFPQyxPQUFPO1lBQ2RYLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JVO1FBQ3RDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDQyxLQUFLO3dCQUNMQyxLQUFJO3dCQUNKSixXQUFVOzs7Ozs7a0NBRVosOERBQUNFO3dCQUNDQyxLQUFLO3dCQUNMQyxLQUFJO3dCQUNKSixXQUFVOzs7Ozs7a0NBRVosOERBQUNFO3dCQUNDQyxLQUFLO3dCQUNMQyxLQUFJO3dCQUNKSixXQUFVOzs7Ozs7Ozs7Ozs7MEJBSWQsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFJQyxLQUFLO3dDQUFxQkMsS0FBSTs7Ozs7O2tEQUVuQyw4REFBQ0M7d0NBQUdMLFdBQVU7OzBEQUNaLDhEQUFDTTswREFBSzs7Ozs7OzBEQUFlLDhEQUFDQzs7Ozs7NENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVNsQyw4REFBQ047d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDQztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ2xDLHdEQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEI7R0F6Rk1DO0tBQUFBO0FBMkZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFubmVyL0Jhbm5lci5qc3g/N2UxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ291bnREb3duT25lIGZyb20gXCIuLi9Db3VudERvd24vQ291bnREb3duT25lXCI7XHJcbmltcG9ydCBIb21lTWFwIGZyb20gXCIuLi9Ib21lTWFwL0hvbWVNYXBcIjtcclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgbGluayA9IFwiaHR0cHM6Ly9hcGkuZGV4c2NyZWVuZXIuY29tL2xhdGVzdC9kZXgvcGFpcnMvYnNjLzB4NWUxYWFiOWQ0OWY2YzcxMjJkZjdkZTRkNmRiZDViMDNjMWViYjBiN1wiO1xyXG5cclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiMFwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IE51bWJlckNvbnZlcnNpb24gPSAob3JpZ2luYWxEYXRhKSA9PiB7XHJcbiAgICBjb25zdCBzdHJpbmdUb051bSA9IE51bWJlcihvcmlnaW5hbERhdGEpO1xyXG4gICAgY29uc3Qgc2NpZW50aWZpY05vdGF0aW9uID0gc3RyaW5nVG9OdW0udG9FeHBvbmVudGlhbCgpO1xyXG5cclxuICAgIC8vICDmj5Dlj5bmrKHmlrlcclxuICAgIGNvbnN0IG1hdGNoID0gc2NpZW50aWZpY05vdGF0aW9uLm1hdGNoKC9lXFwrPygtP1xcZCspLyk7XHJcbiAgICBjb25zdCBleHBvbmVudCA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcbiAgICBjb25zdCB6ZXJvQ291bnQgPSBNYXRoLmFicyhleHBvbmVudCkgLSAxO1xyXG5cclxuICAgIC8vICDmj5Dlj5bmnIDlvozlub7kvY1cclxuICAgIGNvbnN0IHRlbXBTdHJpbmcgPSBvcmlnaW5hbERhdGEuc2xpY2UoLShvcmlnaW5hbERhdGEubGVuZ3RoIC0gemVyb0NvdW50IC0gMikpXHJcbiAgICBjb25zb2xlLmxvZyh0ZW1wU3RyaW5nKVxyXG5cclxuICAgIGNvbnN0IGNvbnZlcnRlZERhdGEgPSBgMC4wKCR7emVyb0NvdW50fSkke3RlbXBTdHJpbmd9YDtcclxuXHJcbiAgICByZXR1cm4gY29udmVydGVkRGF0YTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpbmspO1xyXG4gICAgICBjb25zdCB0ZW1wRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IHRlbXBQcmljZSA9IHRlbXBEYXRhLnBhaXIucHJpY2VVc2RcclxuICAgICAgY29uc3QgY29udmVydGVkUHJpY2UgPSBOdW1iZXJDb252ZXJzaW9uKHRlbXBQcmljZSlcclxuXHJcbiAgICAgIHNldFByaWNlKGNvbnZlcnRlZFByaWNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmFubmVyLWFyZWEgYmFubmVyLWJnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXNoYXBlLXdyYXBcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e1wiL2ltZy9iYW5uZXIvYmFubmVyX3NoYXBlMDEucG5nXCJ9XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLW9uZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e1wiL2ltZy9iYW5uZXIvYmFubmVyX3NoYXBlMDIucG5nXCJ9XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXR3b1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e1wiL2ltZy9iYW5uZXIvYmFubmVyX3NoYXBlMDMucG5nXCJ9XHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXRocmVlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY29udGVudCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9pbWcvc3ZnL0xvZ28ucG5nXCJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtcIi9pbWcvaWNvbi9maXJlLnBuZ1wifSBhbHQ9XCJcIiAvPiAqL31cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkJOQlRpZ2VyPC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICBGaWVyY2UuRmlybS5WaWN0b3J5XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICB7LyogPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBCTkJUaWdlciA6IDxzcGFuPntwcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9oMj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItY291bnRkb3duLXdyYXAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8SG9tZU1hcCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvdW50RG93bk9uZSIsIkhvbWVNYXAiLCJCYW5uZXIiLCJsaW5rIiwicHJpY2UiLCJzZXRQcmljZSIsImZldGNoRGF0YSIsIk51bWJlckNvbnZlcnNpb24iLCJvcmlnaW5hbERhdGEiLCJzdHJpbmdUb051bSIsIk51bWJlciIsInNjaWVudGlmaWNOb3RhdGlvbiIsInRvRXhwb25lbnRpYWwiLCJtYXRjaCIsImV4cG9uZW50IiwicGFyc2VJbnQiLCJ6ZXJvQ291bnQiLCJNYXRoIiwiYWJzIiwidGVtcFN0cmluZyIsInNsaWNlIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNvbnZlcnRlZERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwidGVtcERhdGEiLCJqc29uIiwidGVtcFByaWNlIiwicGFpciIsInByaWNlVXNkIiwiY29udmVydGVkUHJpY2UiLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsInNwYW4iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Banner/Banner.jsx\n"));

/***/ })

});