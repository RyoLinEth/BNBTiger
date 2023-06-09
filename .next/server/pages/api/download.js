"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/download";
exports.ids = ["pages/api/download"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/download.js":
/*!*******************************!*\
  !*** ./pages/api/download.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst path = __webpack_require__(/*! path */ \"path\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nfunction handler(req, res) {\n    const filePath = path.join(process.cwd(), \"public\", \"files\", \"Whitepaper.pdf\");\n    const fileStream = fs.createReadStream(filePath);\n    res.setHeader(\"Content-Type\", \"application/pdf\");\n    res.setHeader(\"Content-Disposition\", \"attachment; filename=BNBTiger_Whitepaper.pdf\");\n    fileStream.pipe(res);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZG93bmxvYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE9BQU9DLG1CQUFPQSxDQUFDO0FBQ3JCLE1BQU1DLEtBQUtELG1CQUFPQSxDQUFDO0FBRUosU0FBU0UsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsTUFBTUMsV0FBV04sS0FBS08sSUFBSSxDQUFDQyxRQUFRQyxHQUFHLElBQUksVUFBVSxTQUFTO0lBQzdELE1BQU1DLGFBQWFSLEdBQUdTLGdCQUFnQixDQUFDTDtJQUV2Q0QsSUFBSU8sU0FBUyxDQUFDLGdCQUFnQjtJQUM5QlAsSUFBSU8sU0FBUyxDQUFDLHVCQUF1QjtJQUVyQ0YsV0FBV0csSUFBSSxDQUFDUjtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlndGVjaF9uZXh0Ly4vcGFnZXMvYXBpL2Rvd25sb2FkLmpzPzE0YTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYycsICdmaWxlcycsICdXaGl0ZXBhcGVyLnBkZicpO1xyXG4gICAgY29uc3QgZmlsZVN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZVBhdGgpO1xyXG5cclxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9wZGYnKTtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtRGlzcG9zaXRpb24nLCAnYXR0YWNobWVudDsgZmlsZW5hbWU9Qk5CVGlnZXJfV2hpdGVwYXBlci5wZGYnKTtcclxuXHJcbiAgICBmaWxlU3RyZWFtLnBpcGUocmVzKTtcclxufSJdLCJuYW1lcyI6WyJwYXRoIiwicmVxdWlyZSIsImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlU3RyZWFtIiwiY3JlYXRlUmVhZFN0cmVhbSIsInNldEhlYWRlciIsInBpcGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/download.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/download.js"));
module.exports = __webpack_exports__;

})();