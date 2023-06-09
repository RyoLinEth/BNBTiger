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

/***/ "./components/HomeMap/HomeMap.js":
/*!***************************************!*\
  !*** ./components/HomeMap/HomeMap.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst HomeMap = ()=>{\n    _s();\n    const link = \"https://api.dexscreener.com/latest/dex/pairs/bsc/0x5e1aab9d49f6c7122df7de4d6dbd5b03c1ebb0b7\";\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"0\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const NumberConversion = (originalData)=>{\n        const stringToNum = Number(originalData);\n        const scientificNotation = stringToNum.toExponential();\n        //  提取次方\n        const match = scientificNotation.match(/e\\+?(-?\\d+)/);\n        const exponent = parseInt(match[1], 10);\n        const zeroCount = Math.abs(exponent) - 1;\n        //  提取最後幾位\n        const tempString = originalData.slice(-(originalData.length - zeroCount - 2));\n        console.log(tempString);\n        const convertedData = \"0.0(\".concat(zeroCount, \")\").concat(tempString);\n        return convertedData;\n    };\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(link);\n            const tempData = await response.json();\n            const tempPrice = tempData.pair.priceUsd;\n            const convertedPrice = NumberConversion(tempPrice);\n            setPrice(convertedPrice);\n        } catch (error) {\n            console.log(\"Error fetching data:\", error);\n        }\n    };\n    const buttons = [\n        {\n            title: \"Buy On PancakeSwap\",\n            link: \"https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D\",\n            className: \"time-count day\"\n        },\n        {\n            title: \"Buy With Card\",\n            link: \"https://flooz.xyz/trade/0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D?network=bsc&selectedTab=ACTIVITIES\",\n            className: \"time-count hour\"\n        },\n        {\n            title: \"Whitepaper\",\n            link: \"https://www.bnbtiger.top/static/upload/file/20230203/1675386735503028.pdf\",\n            className: \"time-count min\"\n        },\n        {\n            title: \"BNBTiger Audit\",\n            link: \"https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_BNBTIGER.pdf\",\n            className: \"time-count sec\"\n        },\n        {\n            title: \"Price Chart\",\n            link: \"https://www.dextools.io/app/en/bnb/pair-explorer/0x5e1aab9d49f6c7122df7de4d6dbd5b03c1ebb0b7\",\n            className: \"time-count sec\"\n        }\n    ];\n    const features = [\n        {\n            imageURL: \"../img/svg/CoinGeckoLogo.svg\",\n            imageLink: \"https://www.coingecko.com/en/coins/bnb-tiger-inu\",\n            imageAlt: \"CG\"\n        },\n        {\n            imageURL: \"../img/svg/cmc.png\",\n            imageLink: \"https://coinmarketcap.com/currencies/bnbtiger/\",\n            imageAlt: \"CMC\"\n        }\n    ];\n    const lists = [\n        {\n            imageURL: \"../img/svg/flooz.png\",\n            imageLink: \"https://flooz.xyz/trade/0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D?network=bsc\",\n            imageAlt: \"Flooz\"\n        },\n        {\n            imageURL: \"../img/svg/xt.png\",\n            imageLink: \"https://pancakeswap.finance/swap?outputCurrency=0xAC68931B666E086E9de380CFDb0Fb5704a35dc2D\",\n            imageAlt: \"PancakeSwap\"\n        },\n        {\n            imageURL: \"../img/svg/bitmart.png\",\n            imageLink: \"https://www.bitmart.com/trade/en-US?layout=basic&theme=dark&symbol=BNBTIGER%281M%29_USDT\",\n            imageAlt: \"BitMart\"\n        },\n        {\n            imageURL: \"../img/svg/bkex.png\",\n            imageLink: \"https://www.bkex.com/en/trade/BNBTiger_USDT\",\n            imageAlt: \"BKEX\"\n        }\n    ];\n    const display = {\n        display: \"flex\",\n        flexDirection: \"row\",\n        flexWrap: \"wrap\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    };\n    const maxStyle = {\n        maxWidth: \"60px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: display,\n                children: buttons.map((button, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"coming-time\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: button.link,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: button.className,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        color: \"#00C4F4\"\n                                    },\n                                    children: button.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                                lineNumber: 130,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                            lineNumber: 129,\n                            columnNumber: 29\n                        }, undefined)\n                    }, button.title, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                        lineNumber: 128,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 142,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/img/icon/fire.png\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 144,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"title\",\n                children: [\n                    \"BNBTiger : \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: price\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                        lineNumber: 147,\n                        columnNumber: 28\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 146,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 151,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: \" Featured On\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 152,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: display,\n                children: features.map((feature, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"coming-time\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: feature.imageURL,\n                                alt: feature.imageAlt,\n                                className: \"time-count\",\n                                style: maxStyle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                                lineNumber: 159,\n                                columnNumber: 33\n                            }, undefined)\n                        }, feature.imageAlt, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                            lineNumber: 158,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                        lineNumber: 157,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 154,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 167,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: \" Listed On\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 168,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: display,\n                children: lists.map((list, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"coming-time\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: list.imageURL,\n                                alt: list.imageAlt,\n                                className: \"time-count\",\n                                style: maxStyle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                                lineNumber: 175,\n                                columnNumber: 33\n                            }, undefined)\n                        }, list.imageAlt, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                            lineNumber: 174,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                        lineNumber: 173,\n                        columnNumber: 25\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n                lineNumber: 170,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\HomeMap\\\\HomeMap.js\",\n        lineNumber: 123,\n        columnNumber: 9\n    }, undefined);\n};\n_s(HomeMap, \"lDVQiCkUTXYWMnFwwvmRyTxdI0I=\");\n_c = HomeMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeMap);\nvar _c;\n$RefreshReg$(_c, \"HomeMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPakIsS0FBSzs7Ozs7Z0JBVTlCOzs7Ozs7MEJBSUosOERBQUNxQjs7Ozs7MEJBRUQsOERBQUNDO2dCQUFJQyxLQUFLO2dCQUFzQkMsS0FBSTs7Ozs7OzBCQUNwQyw4REFBQ0g7Ozs7OzBCQUNELDhEQUFDSTtnQkFBR3hCLFdBQVU7O29CQUFRO2tDQUNQLDhEQUFDeUI7a0NBQU16RDs7Ozs7Ozs7Ozs7OzBCQUl0Qiw4REFBQ29EOzs7OzswQkFDRCw4REFBQ1A7Z0JBQUliLFdBQVU7MEJBQVE7Ozs7OzswQkFFdkIsOERBQUNhO2dCQUFJQyxPQUFPUjswQkFDUEwsU0FBU2MsR0FBRyxDQUFDLENBQUNXLFNBQVNULFFBQVU7b0JBQzlCLHFCQUNJLDhEQUFDSjtrQ0FDRyw0RUFBQ0E7NEJBQTJCYixXQUFVO3NDQUNsQyw0RUFBQ3FCO2dDQUFJQyxLQUFLSSxRQUFReEIsUUFBUTtnQ0FBRXFCLEtBQUtHLFFBQVF0QixRQUFRO2dDQUFFSixXQUFVO2dDQUFhYyxPQUFPSDs7Ozs7OzJCQUQzRWUsUUFBUXRCLFFBQVE7Ozs7Ozs7Ozs7Z0JBS3RDOzs7Ozs7MEJBSUosOERBQUNnQjs7Ozs7MEJBQ0QsOERBQUNQO2dCQUFJYixXQUFVOzBCQUFROzs7Ozs7MEJBRXZCLDhEQUFDYTtnQkFBSUMsT0FBT1I7MEJBQ1BELE1BQU1VLEdBQUcsQ0FBQyxDQUFDWSxNQUFNVixRQUFVO29CQUN4QixxQkFDSSw4REFBQ0o7a0NBQ0csNEVBQUNBOzRCQUF3QmIsV0FBVTtzQ0FDL0IsNEVBQUNxQjtnQ0FBSUMsS0FBS0ssS0FBS3pCLFFBQVE7Z0NBQUVxQixLQUFLSSxLQUFLdkIsUUFBUTtnQ0FBRUosV0FBVTtnQ0FBYWMsT0FBT0g7Ozs7OzsyQkFEckVnQixLQUFLdkIsUUFBUTs7Ozs7Ozs7OztnQkFLbkM7Ozs7Ozs7Ozs7OztBQU1oQjtHQXJMTXRDO0tBQUFBO0FBdUxOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZU1hcC9Ib21lTWFwLmpzP2ZjMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgSG9tZU1hcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpbmsgPSBcImh0dHBzOi8vYXBpLmRleHNjcmVlbmVyLmNvbS9sYXRlc3QvZGV4L3BhaXJzL2JzYy8weDVlMWFhYjlkNDlmNmM3MTIyZGY3ZGU0ZDZkYmQ1YjAzYzFlYmIwYjdcIjtcclxuXHJcbiAgICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKFwiMFwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBOdW1iZXJDb252ZXJzaW9uID0gKG9yaWdpbmFsRGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0cmluZ1RvTnVtID0gTnVtYmVyKG9yaWdpbmFsRGF0YSk7XHJcbiAgICAgICAgY29uc3Qgc2NpZW50aWZpY05vdGF0aW9uID0gc3RyaW5nVG9OdW0udG9FeHBvbmVudGlhbCgpO1xyXG5cclxuICAgICAgICAvLyAg5o+Q5Y+W5qyh5pa5XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBzY2llbnRpZmljTm90YXRpb24ubWF0Y2goL2VcXCs/KC0/XFxkKykvKTtcclxuICAgICAgICBjb25zdCBleHBvbmVudCA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XHJcbiAgICAgICAgY29uc3QgemVyb0NvdW50ID0gTWF0aC5hYnMoZXhwb25lbnQpIC0gMTtcclxuXHJcbiAgICAgICAgLy8gIOaPkOWPluacgOW+jOW5vuS9jVxyXG4gICAgICAgIGNvbnN0IHRlbXBTdHJpbmcgPSBvcmlnaW5hbERhdGEuc2xpY2UoLShvcmlnaW5hbERhdGEubGVuZ3RoIC0gemVyb0NvdW50IC0gMikpXHJcbiAgICAgICAgY29uc29sZS5sb2codGVtcFN0cmluZylcclxuXHJcbiAgICAgICAgY29uc3QgY29udmVydGVkRGF0YSA9IGAwLjAoJHt6ZXJvQ291bnR9KSR7dGVtcFN0cmluZ31gO1xyXG5cclxuICAgICAgICByZXR1cm4gY29udmVydGVkRGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobGluayk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVtcFByaWNlID0gdGVtcERhdGEucGFpci5wcmljZVVzZFxyXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRQcmljZSA9IE51bWJlckNvbnZlcnNpb24odGVtcFByaWNlKVxyXG5cclxuICAgICAgICAgICAgc2V0UHJpY2UoY29udmVydGVkUHJpY2UpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJCdXkgT24gUGFuY2FrZVN3YXBcIixcclxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3BhbmNha2Vzd2FwLmZpbmFuY2Uvc3dhcD9vdXRwdXRDdXJyZW5jeT0weEFDNjg5MzFCNjY2RTA4NkU5ZGUzODBDRkRiMEZiNTcwNGEzNWRjMkRcIixcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcInRpbWUtY291bnQgZGF5XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkJ1eSBXaXRoIENhcmRcIixcclxuICAgICAgICAgICAgbGluazogXCJodHRwczovL2Zsb296Lnh5ei90cmFkZS8weEFDNjg5MzFCNjY2RTA4NkU5ZGUzODBDRkRiMEZiNTcwNGEzNWRjMkQ/bmV0d29yaz1ic2Mmc2VsZWN0ZWRUYWI9QUNUSVZJVElFU1wiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwidGltZS1jb3VudCBob3VyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIldoaXRlcGFwZXJcIixcclxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3d3dy5ibmJ0aWdlci50b3Avc3RhdGljL3VwbG9hZC9maWxlLzIwMjMwMjAzLzE2NzUzODY3MzU1MDMwMjgucGRmXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0aW1lLWNvdW50IG1pblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJCTkJUaWdlciBBdWRpdFwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9UZWNoLUF1ZGl0L1NtYXJ0LUNvbnRyYWN0LUF1ZGl0cy9ibG9iL21haW4vVEVDSEFVRElUX0JOQlRJR0VSLnBkZlwiLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwidGltZS1jb3VudCBzZWNcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiUHJpY2UgQ2hhcnRcIixcclxuICAgICAgICAgICAgbGluazogXCJodHRwczovL3d3dy5kZXh0b29scy5pby9hcHAvZW4vYm5iL3BhaXItZXhwbG9yZXIvMHg1ZTFhYWI5ZDQ5ZjZjNzEyMmRmN2RlNGQ2ZGJkNWIwM2MxZWJiMGI3XCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJ0aW1lLWNvdW50IHNlY1wiLFxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBmZWF0dXJlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlVVJMOiBcIi4uL2ltZy9zdmcvQ29pbkdlY2tvTG9nby5zdmdcIixcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImh0dHBzOi8vd3d3LmNvaW5nZWNrby5jb20vZW4vY29pbnMvYm5iLXRpZ2VyLWludVwiLFxyXG4gICAgICAgICAgICBpbWFnZUFsdDogXCJDR1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZVVSTDogXCIuLi9pbWcvc3ZnL2NtYy5wbmdcIixcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImh0dHBzOi8vY29pbm1hcmtldGNhcC5jb20vY3VycmVuY2llcy9ibmJ0aWdlci9cIixcclxuICAgICAgICAgICAgaW1hZ2VBbHQ6IFwiQ01DXCIsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBsaXN0cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlVVJMOiBcIi4uL2ltZy9zdmcvZmxvb3oucG5nXCIsXHJcbiAgICAgICAgICAgIGltYWdlTGluazogXCJodHRwczovL2Zsb296Lnh5ei90cmFkZS8weEFDNjg5MzFCNjY2RTA4NkU5ZGUzODBDRkRiMEZiNTcwNGEzNWRjMkQ/bmV0d29yaz1ic2NcIixcclxuICAgICAgICAgICAgaW1hZ2VBbHQ6IFwiRmxvb3pcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2VVUkw6IFwiLi4vaW1nL3N2Zy94dC5wbmdcIixcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImh0dHBzOi8vcGFuY2FrZXN3YXAuZmluYW5jZS9zd2FwP291dHB1dEN1cnJlbmN5PTB4QUM2ODkzMUI2NjZFMDg2RTlkZTM4MENGRGIwRmI1NzA0YTM1ZGMyRFwiLFxyXG4gICAgICAgICAgICBpbWFnZUFsdDogXCJQYW5jYWtlU3dhcFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZVVSTDogXCIuLi9pbWcvc3ZnL2JpdG1hcnQucG5nXCIsXHJcbiAgICAgICAgICAgIGltYWdlTGluazogXCJodHRwczovL3d3dy5iaXRtYXJ0LmNvbS90cmFkZS9lbi1VUz9sYXlvdXQ9YmFzaWMmdGhlbWU9ZGFyayZzeW1ib2w9Qk5CVElHRVIlMjgxTSUyOV9VU0RUXCIsXHJcbiAgICAgICAgICAgIGltYWdlQWx0OiBcIkJpdE1hcnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2VVUkw6IFwiLi4vaW1nL3N2Zy9ia2V4LnBuZ1wiLFxyXG4gICAgICAgICAgICBpbWFnZUxpbms6IFwiaHR0cHM6Ly93d3cuYmtleC5jb20vZW4vdHJhZGUvQk5CVGlnZXJfVVNEVFwiLFxyXG4gICAgICAgICAgICBpbWFnZUFsdDogXCJCS0VYXCIsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBkaXNwbGF5ID0ge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1heFN0eWxlID0ge1xyXG4gICAgICAgIG1heFdpZHRoOiAnNjBweCcsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogQnV0dG9ucyBTdGFydCAqL31cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17ZGlzcGxheX0+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9ucy5tYXAoKGJ1dHRvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YnV0dG9uLnRpdGxlfSBjbGFzc05hbWU9XCJjb21pbmctdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YnV0dG9uLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidXR0b24uY2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMDBDNEY0JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2J1dHRvbi50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogQnV0dG9ucyBFbmQgKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9pbWcvaWNvbi9maXJlLnBuZ1wifSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIEJOQlRpZ2VyIDogPHNwYW4+e3ByaWNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBGZWF0dXJlIFN0YXJ0ICovfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz4gRmVhdHVyZWQgT248L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2Rpc3BsYXl9PlxyXG4gICAgICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZlYXR1cmUuaW1hZ2VBbHR9IGNsYXNzTmFtZT1cImNvbWluZy10aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZlYXR1cmUuaW1hZ2VVUkx9IGFsdD17ZmVhdHVyZS5pbWFnZUFsdH0gY2xhc3NOYW1lPVwidGltZS1jb3VudFwiIHN0eWxlPXttYXhTdHlsZX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogRmVhdHVyZSBFbmQgKi99XHJcbiAgICAgICAgICAgIHsvKiBMaXN0IFN0YXJ0ICovfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz4gTGlzdGVkIE9uPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtkaXNwbGF5fT5cclxuICAgICAgICAgICAgICAgIHtsaXN0cy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0LmltYWdlQWx0fSBjbGFzc05hbWU9XCJjb21pbmctdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0LmltYWdlVVJMfSBhbHQ9e2xpc3QuaW1hZ2VBbHR9IGNsYXNzTmFtZT1cInRpbWUtY291bnRcIiBzdHlsZT17bWF4U3R5bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogTGlzdCBFbmQgKi99XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lTWFwXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkhvbWVNYXAiLCJsaW5rIiwicHJpY2UiLCJzZXRQcmljZSIsImZldGNoRGF0YSIsIk51bWJlckNvbnZlcnNpb24iLCJvcmlnaW5hbERhdGEiLCJzdHJpbmdUb051bSIsIk51bWJlciIsInNjaWVudGlmaWNOb3RhdGlvbiIsInRvRXhwb25lbnRpYWwiLCJtYXRjaCIsImV4cG9uZW50IiwicGFyc2VJbnQiLCJ6ZXJvQ291bnQiLCJNYXRoIiwiYWJzIiwidGVtcFN0cmluZyIsInNsaWNlIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNvbnZlcnRlZERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwidGVtcERhdGEiLCJqc29uIiwidGVtcFByaWNlIiwicGFpciIsInByaWNlVXNkIiwiY29udmVydGVkUHJpY2UiLCJlcnJvciIsImJ1dHRvbnMiLCJ0aXRsZSIsImNsYXNzTmFtZSIsImZlYXR1cmVzIiwiaW1hZ2VVUkwiLCJpbWFnZUxpbmsiLCJpbWFnZUFsdCIsImxpc3RzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1heFN0eWxlIiwibWF4V2lkdGgiLCJkaXYiLCJzdHlsZSIsIm1hcCIsImJ1dHRvbiIsImluZGV4IiwiaHJlZiIsImNvbG9yIiwiYnIiLCJpbWciLCJzcmMiLCJhbHQiLCJoMiIsInNwYW4iLCJmZWF0dXJlIiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HomeMap/HomeMap.js\n"));

/***/ })

});