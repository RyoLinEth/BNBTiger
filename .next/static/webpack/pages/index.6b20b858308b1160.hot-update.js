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

/***/ "./components/WhyChooseUs/WhyChooseUs.jsx":
/*!************************************************!*\
  !*** ./components/WhyChooseUs/WhyChooseUs.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_LanguageProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/LanguageProvider */ \"./components/Context/LanguageProvider.jsx\");\n/* harmony import */ var _SlickSlider_SlickSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SlickSlider/SlickSlider */ \"./components/SlickSlider/SlickSlider.jsx\");\n/* harmony import */ var _WhyChooseUsItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WhyChooseUsItem */ \"./components/WhyChooseUs/WhyChooseUsItem.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst WhyChooseUs = ()=>{\n    _s();\n    const { selectedLanguage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_LanguageProvider__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const slickSettings = {\n        dots: false,\n        infinite: true,\n        speed: 1000,\n        autoplay: true,\n        arrows: false,\n        slidesToShow: 2,\n        slidesToScroll: 4,\n        responsive: [\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 1,\n                    infinite: true\n                }\n            },\n            {\n                breakpoint: 992,\n                settings: {\n                    slidesToShow: 2,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 767,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false\n                }\n            },\n            {\n                breakpoint: 575,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    arrows: false\n                }\n            }\n        ]\n    };\n    const slider_items = [\n        {\n            src: \"/img/nft/1.jpg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Mobile payment make easy\",\n            description: \"Add new, trending and rare artwork to your collection.\"\n        },\n        {\n            src: \"/img/nft/2.jpg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Lifetime free transaction\",\n            description: \"Add new, trending and rare artwork to your collection.\"\n        },\n        {\n            src: \"/img/nft/3.jpg\",\n            alt: \"\",\n            link: \"/\",\n            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"Protect the identity\"\n            }, void 0, false),\n            description: \"Add new, trending and rare artwork to your collection.\"\n        },\n        {\n            src: \"/img/nft/4.jpg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Sercurity & control over money\",\n            description: \"Add new, trending and rare artwork to your collection.\"\n        },\n        {\n            src: \"/img/nft/5.jpg\",\n            alt: \"\",\n            link: \"/\",\n            title: \"Lifetime free transaction\",\n            description: \"Add new, trending and rare artwork to your collection.\"\n        }\n    ];\n    const initalState = 0;\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initalState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCount((old)=>old == 6 ? 0 : old + 1);\n        }, 3000);\n        return ()=>clearInterval(interval);\n    }, []);\n    const toMultiply = 100 / slider_items.length;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"choose-area pb-130\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row justify-content-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-xl-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"section-title text-center mb-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"title\",\n                                children: [\n                                    \"BNBTiger \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"NFTs\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 26\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row choose-active\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SlickSlider_SlickSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        settings: slickSettings,\n                        children: slider_items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-lg-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WhyChooseUsItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    item: item\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slide-progressbar\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            // width: `${count * toMultiply}%`,\n                            backgroundSize: \"\".concat(count * toMultiply, \"% 100%\")\n                        },\n                        className: \"slide-filler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        justifyContent: \"space-evenly\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"https://opensea.io/collection/bnbtiger-nft\",\n                            className: \"btn\",\n                            children: selectedLanguage === \"EN\" ? \"Buy on Opensea\" : \"Compre na Opensea\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"https://nft.bitkeep.com/en/collection/bnb/0xbD0beb9F745f9E667623C691da5Ab5C2e1CD0081\",\n                            className: \"btn\",\n                            children: selectedLanguage === \"EN\" ? \"Buy on Bitkeep\" : \"Compre na Bitkeep\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                            lineNumber: 147,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Sam Lin\\\\OneDrive - A.S. Mazzocchi\\\\桌面\\\\ThemeForestZips\\\\IDO模板\\\\bigtech\\\\components\\\\WhyChooseUs\\\\WhyChooseUs.jsx\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WhyChooseUs, \"GiEu8LVyKyQhWE7stlX6S6NfPJY=\");\n_c = WhyChooseUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WhyChooseUs);\nvar _c;\n$RefreshReg$(_c, \"WhyChooseUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1doeUNob29zZVVzL1doeUNob29zZVVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDakI7QUFDdUI7QUFDSjtBQUNMO0FBQ25CO0FBRTdCLE1BQU1RLGNBQWMsSUFBTTs7SUFDeEIsTUFBTSxFQUFDQyxpQkFBZ0IsRUFBQyxHQUFHTixpREFBVUEsQ0FBQ0MsaUVBQWVBO0lBQ3JELE1BQU1NLGdCQUFnQjtRQUNwQkMsTUFBTSxLQUFLO1FBQ1hDLFVBQVUsSUFBSTtRQUNkQyxPQUFPO1FBQ1BDLFVBQVUsSUFBSTtRQUNkQyxRQUFRLEtBQUs7UUFDYkMsY0FBYztRQUNkQyxnQkFBZ0I7UUFDaEJDLFlBQVk7WUFDVjtnQkFDRUMsWUFBWTtnQkFDWkMsVUFBVTtvQkFDUkosY0FBYztvQkFDZEMsZ0JBQWdCO29CQUNoQkwsVUFBVSxJQUFJO2dCQUNoQjtZQUNGO1lBQ0E7Z0JBQ0VPLFlBQVk7Z0JBQ1pDLFVBQVU7b0JBQ1JKLGNBQWM7b0JBQ2RDLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUNBO2dCQUNFRSxZQUFZO2dCQUNaQyxVQUFVO29CQUNSSixjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCRixRQUFRLEtBQUs7Z0JBQ2Y7WUFDRjtZQUNBO2dCQUNFSSxZQUFZO2dCQUNaQyxVQUFVO29CQUNSSixjQUFjO29CQUNkQyxnQkFBZ0I7b0JBQ2hCRixRQUFRLEtBQUs7Z0JBQ2Y7WUFDRjtTQUNEO0lBQ0g7SUFFQSxNQUFNTSxlQUFlO1FBQ25CO1lBQ0VDLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsYUFBYTtRQUNmO1FBQ0E7WUFDRUosS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFSixLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxxQkFBTzswQkFBRTs7WUFDVEMsYUFBYTtRQUNmO1FBQ0E7WUFDRUosS0FBSztZQUNMQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxhQUFhO1FBQ2Y7UUFDQTtZQUNFSixLQUFLO1lBQ0xDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLGFBQWE7UUFDZjtLQUNEO0lBRUQsTUFBTUMsY0FBYztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBRzNCLCtDQUFRQSxDQUFDeUI7SUFFbkMxQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTTZCLFdBQVdDLFlBQVksSUFBTTtZQUNqQ0YsU0FBUyxDQUFDRyxNQUFTQSxPQUFPLElBQUksSUFBSUEsTUFBTSxDQUFDO1FBQzNDLEdBQUc7UUFFSCxPQUFPLElBQU1DLGNBQWNIO0lBQzdCLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGFBQWEsTUFBTWIsYUFBYWMsTUFBTTtJQUU1QyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNDOzRCQUFJRCxXQUFVO3NDQUViLDRFQUFDRTtnQ0FBR0YsV0FBVTs7b0NBQVE7a0RBQ1gsOERBQUNHO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTXZCLDhEQUFDRjtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ2hDLGdFQUFXQTt3QkFBQ2UsVUFBVVY7a0NBQ3BCVyxhQUFhb0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN2Qiw4REFBQ0w7Z0NBQWdCRCxXQUFVOzBDQUN6Qiw0RUFBQy9CLHdEQUFlQTtvQ0FBQ29DLE1BQU1BOzs7Ozs7K0JBRGZDOzs7Ozs7Ozs7Ozs7Ozs7OEJBT2hCLDhEQUFDTDtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQ0NNLE9BQU87NEJBQ0wsbUNBQW1DOzRCQUNuQ0MsZ0JBQWdCLEdBQXNCLE9BQW5CakIsUUFBUU0sWUFBVzt3QkFDeEM7d0JBQ0FHLFdBQVU7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDUzs7Ozs7OEJBQ0QsOERBQUNSO29CQUFJTSxPQUFPO3dCQUFFRyxTQUFTO3dCQUFRQyxlQUFlO3dCQUFPQyxnQkFBZ0I7b0JBQWU7O3NDQUNsRiw4REFBQzFDLGtEQUFJQTs0QkFBQzJDLE1BQUs7NEJBQTZDYixXQUFVO3NDQUU5RDVCLHFCQUFxQixPQUNuQixtQkFDQSxtQkFBbUI7Ozs7OztzQ0FJekIsOERBQUNGLGtEQUFJQTs0QkFBQzJDLE1BQUs7NEJBQXVGYixXQUFVO3NDQUV4RzVCLHFCQUFxQixPQUNuQixtQkFDQSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25DO0dBdEpNRDtLQUFBQTtBQXdKTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1doeUNob29zZVVzL1doeUNob29zZVVzLmpzeD8xMGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gXCIuLi9Db250ZXh0L0xhbmd1YWdlUHJvdmlkZXJcIlxyXG5pbXBvcnQgU2xpY2tTbGlkZXIgZnJvbSBcIi4uL1NsaWNrU2xpZGVyL1NsaWNrU2xpZGVyXCI7XHJcbmltcG9ydCBXaHlDaG9vc2VVc0l0ZW0gZnJvbSBcIi4vV2h5Q2hvb3NlVXNJdGVtXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IFdoeUNob29zZVVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtzZWxlY3RlZExhbmd1YWdlfSA9IHVzZUNvbnRleHQoTGFuZ3VhZ2VDb250ZXh0KTtcclxuICBjb25zdCBzbGlja1NldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNTc1LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2xpZGVyX2l0ZW1zID0gW1xyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltZy9uZnQvMS5qcGdcIixcclxuICAgICAgYWx0OiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgdGl0bGU6IFwiTW9iaWxlIHBheW1lbnQgbWFrZSBlYXN5XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBuZXcsIHRyZW5kaW5nIGFuZCByYXJlIGFydHdvcmsgdG8geW91ciBjb2xsZWN0aW9uLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWcvbmZ0LzIuanBnXCIsXHJcbiAgICAgIGFsdDogXCJcIixcclxuICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgIHRpdGxlOiBcIkxpZmV0aW1lIGZyZWUgdHJhbnNhY3Rpb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQWRkIG5ldywgdHJlbmRpbmcgYW5kIHJhcmUgYXJ0d29yayB0byB5b3VyIGNvbGxlY3Rpb24uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltZy9uZnQvMy5qcGdcIixcclxuICAgICAgYWx0OiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgdGl0bGU6IDw+UHJvdGVjdCB0aGUgaWRlbnRpdHk8Lz4sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBuZXcsIHRyZW5kaW5nIGFuZCByYXJlIGFydHdvcmsgdG8geW91ciBjb2xsZWN0aW9uLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWcvbmZ0LzQuanBnXCIsXHJcbiAgICAgIGFsdDogXCJcIixcclxuICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgIHRpdGxlOiBcIlNlcmN1cml0eSAmIGNvbnRyb2wgb3ZlciBtb25leVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBZGQgbmV3LCB0cmVuZGluZyBhbmQgcmFyZSBhcnR3b3JrIHRvIHlvdXIgY29sbGVjdGlvbi5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1nL25mdC81LmpwZ1wiLFxyXG4gICAgICBhbHQ6IFwiXCIsXHJcbiAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICB0aXRsZTogXCJMaWZldGltZSBmcmVlIHRyYW5zYWN0aW9uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFkZCBuZXcsIHRyZW5kaW5nIGFuZCByYXJlIGFydHdvcmsgdG8geW91ciBjb2xsZWN0aW9uLlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBpbml0YWxTdGF0ZSA9IDA7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShpbml0YWxTdGF0ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0Q291bnQoKG9sZCkgPT4gKG9sZCA9PSA2ID8gMCA6IG9sZCArIDEpKTtcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHRvTXVsdGlwbHkgPSAxMDAgLyBzbGlkZXJfaXRlbXMubGVuZ3RoO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hvb3NlLWFyZWEgcGItMTMwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGUgdGV4dC1jZW50ZXIgbWItNTBcIj5cclxuICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwic3ViLXRpdGxlXCI+IDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICBCTkJUaWdlciA8c3Bhbj5ORlRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNob29zZS1hY3RpdmVcIj5cclxuICAgICAgICAgIDxTbGlja1NsaWRlciBzZXR0aW5ncz17c2xpY2tTZXR0aW5nc30+XHJcbiAgICAgICAgICAgIHtzbGlkZXJfaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxXaHlDaG9vc2VVc0l0ZW0gaXRlbT17aXRlbX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NsaWNrU2xpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLXByb2dyZXNzYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgLy8gd2lkdGg6IGAke2NvdW50ICogdG9NdWx0aXBseX0lYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogYCR7Y291bnQgKiB0b011bHRpcGx5fSUgMTAwJWAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlLWZpbGxlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScgfX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9vcGVuc2VhLmlvL2NvbGxlY3Rpb24vYm5idGlnZXItbmZ0XCIgY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZExhbmd1YWdlID09PSBcIkVOXCIgXHJcbiAgICAgICAgICAgICAgPyBcIkJ1eSBvbiBPcGVuc2VhXCJcclxuICAgICAgICAgICAgICA6IFwiQ29tcHJlIG5hIE9wZW5zZWFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbmZ0LmJpdGtlZXAuY29tL2VuL2NvbGxlY3Rpb24vYm5iLzB4YkQwYmViOUY3NDVmOUU2Njc2MjNDNjkxZGE1QWI1QzJlMUNEMDA4MVwiIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkTGFuZ3VhZ2UgPT09IFwiRU5cIiBcclxuICAgICAgICAgICAgICA/IFwiQnV5IG9uIEJpdGtlZXBcIlxyXG4gICAgICAgICAgICAgIDogXCJDb21wcmUgbmEgQml0a2VlcFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoeUNob29zZVVzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJMYW5ndWFnZUNvbnRleHQiLCJTbGlja1NsaWRlciIsIldoeUNob29zZVVzSXRlbSIsIkxpbmsiLCJXaHlDaG9vc2VVcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJzbGlja1NldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJhdXRvcGxheSIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInNsaWRlcl9pdGVtcyIsInNyYyIsImFsdCIsImxpbmsiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5pdGFsU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm9sZCIsImNsZWFySW50ZXJ2YWwiLCJ0b011bHRpcGx5IiwibGVuZ3RoIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwic3BhbiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WhyChooseUs/WhyChooseUs.jsx\n"));

/***/ })

});