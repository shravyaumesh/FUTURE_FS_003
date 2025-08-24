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
exports.id = "app/blog/page";
exports.ids = ["app/blog/page"];
exports.modules = {

/***/ "(rsc)/./data lazy recursive ^\\.\\/.*\\.json$":
/*!****************************************************!*\
  !*** ./data/ lazy ^\.\/.*\.json$ namespace object ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./posts.json": [
		"(rsc)/./data/posts.json",
		"_rsc_data_posts_json"
	],
	"./products.json": [
		"(rsc)/./data/products.json",
		"_rsc_data_products_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(rsc)/./data lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./action-async-storage.external":
/*!****************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!***************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external" ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fblog%2Fpage&page=%2Fblog%2Fpage&appPaths=%2Fblog%2Fpage&pagePath=private-next-app-dir%2Fblog%2Fpage.jsx&appDir=C%3A%5CUsers%5CAsus%5CDownloads%5Cpace_rebrand%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAsus%5CDownloads%5Cpace_rebrand&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fblog%2Fpage&page=%2Fblog%2Fpage&appPaths=%2Fblog%2Fpage&pagePath=private-next-app-dir%2Fblog%2Fpage.jsx&appDir=C%3A%5CUsers%5CAsus%5CDownloads%5Cpace_rebrand%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAsus%5CDownloads%5Cpace_rebrand&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   __next_app__: () => (/* binding */ __next_app__),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   pages: () => (/* binding */ pages),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   tree: () => (/* binding */ tree)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-page/module.compiled */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/module.compiled.js?d969\");\n/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/components/error-boundary */ \"(rsc)/./node_modules/next/dist/client/components/error-boundary.js\");\n/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/app-render/entry-base */ \"(rsc)/./node_modules/next/dist/server/app-render/entry-base.js\");\n/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if([\"default\",\"tree\",\"pages\",\"GlobalError\",\"originalPathname\",\"__next_app__\",\"routeModule\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\"TURBOPACK { transition: next-ssr }\";\n\n\n// We inject the tree and pages here so that we can use them in the route\n// module.\nconst tree = {\n        children: [\n        '',\n        {\n        children: [\n        'blog',\n        {\n        children: ['__PAGE__', {}, {\n          page: [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/blog/page.jsx */ \"(rsc)/./app/blog/page.jsx\")), \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\"],\n          \n        }]\n      },\n        {\n        \n        \n      }\n      ]\n      },\n        {\n        'layout': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./app/layout.jsx */ \"(rsc)/./app/layout.jsx\")), \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\"],\n'not-found': [() => Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! next/dist/client/components/not-found-error */ \"(rsc)/./node_modules/next/dist/client/components/not-found-error.js\", 23)), \"next/dist/client/components/not-found-error\"],\n        \n      }\n      ]\n      }.children;\nconst pages = [\"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\"];\n\n\nconst __next_app_require__ = __webpack_require__\nconst __next_app_load_chunk__ = () => Promise.resolve()\nconst originalPathname = \"/blog/page\";\nconst __next_app__ = {\n    require: __next_app_require__,\n    loadChunk: __next_app_load_chunk__\n};\n\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,\n        page: \"/blog/page\",\n        pathname: \"/blog\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\",\n        appPaths: []\n    },\n    userland: {\n        loaderTree: tree\n    }\n});\n\n//# sourceMappingURL=app-page.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZibG9nJTJGcGFnZSZwYWdlPSUyRmJsb2clMkZwYWdlJmFwcFBhdGhzPSUyRmJsb2clMkZwYWdlJnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYmxvZyUyRnBhZ2UuanN4JmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBc3VzJTVDRG93bmxvYWRzJTVDcGFjZV9yZWJyYW5kJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNBc3VzJTVDRG93bmxvYWRzJTVDcGFjZV9yZWJyYW5kJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsYUFBYSxzQkFBc0I7QUFDaUU7QUFDckM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHVCQUF1QixrSkFBa0c7QUFDekg7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx5QkFBeUIsNElBQThGO0FBQ3ZILG9CQUFvQiwwTkFBZ0Y7QUFDcEc7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ3VCO0FBQzZEO0FBQ3BGLDZCQUE2QixtQkFBbUI7QUFDaEQ7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ3VEO0FBQ3ZEO0FBQ08sd0JBQXdCLDhHQUFrQjtBQUNqRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNlLXJlYnJhbmQvPzk2ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJUVVJCT1BBQ0sgeyB0cmFuc2l0aW9uOiBuZXh0LXNzciB9XCI7XG5pbXBvcnQgeyBBcHBQYWdlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcGFnZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG4vLyBXZSBpbmplY3QgdGhlIHRyZWUgYW5kIHBhZ2VzIGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCB0cmVlID0ge1xuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAnJyxcbiAgICAgICAge1xuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAnYmxvZycsXG4gICAgICAgIHtcbiAgICAgICAgY2hpbGRyZW46IFsnX19QQUdFX18nLCB7fSwge1xuICAgICAgICAgIHBhZ2U6IFsoKSA9PiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXEFzdXNcXFxcRG93bmxvYWRzXFxcXHBhY2VfcmVicmFuZFxcXFxhcHBcXFxcYmxvZ1xcXFxwYWdlLmpzeFwiKSwgXCJDOlxcXFxVc2Vyc1xcXFxBc3VzXFxcXERvd25sb2Fkc1xcXFxwYWNlX3JlYnJhbmRcXFxcYXBwXFxcXGJsb2dcXFxccGFnZS5qc3hcIl0sXG4gICAgICAgICAgXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIF1cbiAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgJ2xheW91dCc6IFsoKSA9PiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXEFzdXNcXFxcRG93bmxvYWRzXFxcXHBhY2VfcmVicmFuZFxcXFxhcHBcXFxcbGF5b3V0LmpzeFwiKSwgXCJDOlxcXFxVc2Vyc1xcXFxBc3VzXFxcXERvd25sb2Fkc1xcXFxwYWNlX3JlYnJhbmRcXFxcYXBwXFxcXGxheW91dC5qc3hcIl0sXG4nbm90LWZvdW5kJzogWygpID0+IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwibmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL25vdC1mb3VuZC1lcnJvclwiKSwgXCJuZXh0L2Rpc3QvY2xpZW50L2NvbXBvbmVudHMvbm90LWZvdW5kLWVycm9yXCJdLFxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIF1cbiAgICAgIH0uY2hpbGRyZW47XG5jb25zdCBwYWdlcyA9IFtcIkM6XFxcXFVzZXJzXFxcXEFzdXNcXFxcRG93bmxvYWRzXFxcXHBhY2VfcmVicmFuZFxcXFxhcHBcXFxcYmxvZ1xcXFxwYWdlLmpzeFwiXTtcbmV4cG9ydCB7IHRyZWUsIHBhZ2VzIH07XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdsb2JhbEVycm9yIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9lcnJvci1ib3VuZGFyeVwiO1xuY29uc3QgX19uZXh0X2FwcF9yZXF1aXJlX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fXG5jb25zdCBfX25leHRfYXBwX2xvYWRfY2h1bmtfXyA9ICgpID0+IFByb21pc2UucmVzb2x2ZSgpXG5leHBvcnQgY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2Jsb2cvcGFnZVwiO1xuZXhwb3J0IGNvbnN0IF9fbmV4dF9hcHBfXyA9IHtcbiAgICByZXF1aXJlOiBfX25leHRfYXBwX3JlcXVpcmVfXyxcbiAgICBsb2FkQ2h1bms6IF9fbmV4dF9hcHBfbG9hZF9jaHVua19fXG59O1xuZXhwb3J0ICogZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYXBwLXJlbmRlci9lbnRyeS1iYXNlXCI7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBQYWdlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9QQUdFLFxuICAgICAgICBwYWdlOiBcIi9ibG9nL3BhZ2VcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2Jsb2dcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIixcbiAgICAgICAgYXBwUGF0aHM6IFtdXG4gICAgfSxcbiAgICB1c2VybGFuZDoge1xuICAgICAgICBsb2FkZXJUcmVlOiB0cmVlXG4gICAgfVxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1wYWdlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fblog%2Fpage&page=%2Fblog%2Fpage&appPaths=%2Fblog%2Fpage&pagePath=private-next-app-dir%2Fblog%2Fpage.jsx&appDir=C%3A%5CUsers%5CAsus%5CDownloads%5Cpace_rebrand%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAsus%5CDownloads%5Cpace_rebrand&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Capp%5C%5Cglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Clink.js%22%2C%22ids%22%3A%5B%22*%22%5D%7D&server=true!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Capp%5C%5Cglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Clink.js%22%2C%22ids%22%3A%5B%22*%22%5D%7D&server=true! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/link.js */ \"(ssr)/./node_modules/next/dist/client/link.js\", 23));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMkMlM0ElNUMlNUNVc2VycyU1QyU1Q0FzdXMlNUMlNUNEb3dubG9hZHMlNUMlNUNwYWNlX3JlYnJhbmQlNUMlNUNhcHAlNUMlNUNnbG9iYWxzLmNzcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZtb2R1bGVzPSU3QiUyMnJlcXVlc3QlMjIlM0ElMjJDJTNBJTVDJTVDVXNlcnMlNUMlNUNBc3VzJTVDJTVDRG93bmxvYWRzJTVDJTVDcGFjZV9yZWJyYW5kJTVDJTVDbm9kZV9tb2R1bGVzJTVDJTVDbmV4dCU1QyU1Q2Rpc3QlNUMlNUNjbGllbnQlNUMlNUNsaW5rLmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTIyKiUyMiU1RCU3RCZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsZ01BQXdIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFjZS1yZWJyYW5kLz9lMjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiQzpcXFxcVXNlcnNcXFxcQXN1c1xcXFxEb3dubG9hZHNcXFxccGFjZV9yZWJyYW5kXFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxcY2xpZW50XFxcXGxpbmsuanNcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Capp%5C%5Cglobals.css%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Clink.js%22%2C%22ids%22%3A%5B%22*%22%5D%7D&server=true!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Capp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cerror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Clayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Crender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Capp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cerror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Clayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Crender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("Promise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/app-router.js */ \"(ssr)/./node_modules/next/dist/client/components/app-router.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/client-page.js */ \"(ssr)/./node_modules/next/dist/client/components/client-page.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/error-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/error-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/layout-router.js */ \"(ssr)/./node_modules/next/dist/client/components/layout-router.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/not-found-boundary.js */ \"(ssr)/./node_modules/next/dist/client/components/not-found-boundary.js\", 23));\n;\nPromise.resolve(/*! import() eager */).then(__webpack_require__.t.bind(__webpack_require__, /*! ./node_modules/next/dist/client/components/render-from-template-context.js */ \"(ssr)/./node_modules/next/dist/client/components/render-from-template-context.js\", 23));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1jbGllbnQtZW50cnktbG9hZGVyLmpzP21vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMkMlM0ElNUMlNUNVc2VycyU1QyU1Q0FzdXMlNUMlNUNEb3dubG9hZHMlNUMlNUNwYWNlX3JlYnJhbmQlNUMlNUNub2RlX21vZHVsZXMlNUMlNUNuZXh0JTVDJTVDZGlzdCU1QyU1Q2NsaWVudCU1QyU1Q2NvbXBvbmVudHMlNUMlNUNhcHAtcm91dGVyLmpzJTIyJTJDJTIyaWRzJTIyJTNBJTVCJTVEJTdEJm1vZHVsZXM9JTdCJTIycmVxdWVzdCUyMiUzQSUyMkMlM0ElNUMlNUNVc2VycyU1QyU1Q0FzdXMlNUMlNUNEb3dubG9hZHMlNUMlNUNwYWNlX3JlYnJhbmQlNUMlNUNub2RlX21vZHVsZXMlNUMlNUNuZXh0JTVDJTVDZGlzdCU1QyU1Q2NsaWVudCU1QyU1Q2NvbXBvbmVudHMlNUMlNUNjbGllbnQtcGFnZS5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZtb2R1bGVzPSU3QiUyMnJlcXVlc3QlMjIlM0ElMjJDJTNBJTVDJTVDVXNlcnMlNUMlNUNBc3VzJTVDJTVDRG93bmxvYWRzJTVDJTVDcGFjZV9yZWJyYW5kJTVDJTVDbm9kZV9tb2R1bGVzJTVDJTVDbmV4dCU1QyU1Q2Rpc3QlNUMlNUNjbGllbnQlNUMlNUNjb21wb25lbnRzJTVDJTVDZXJyb3ItYm91bmRhcnkuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyQyUzQSU1QyU1Q1VzZXJzJTVDJTVDQXN1cyU1QyU1Q0Rvd25sb2FkcyU1QyU1Q3BhY2VfcmVicmFuZCU1QyU1Q25vZGVfbW9kdWxlcyU1QyU1Q25leHQlNUMlNUNkaXN0JTVDJTVDY2xpZW50JTVDJTVDY29tcG9uZW50cyU1QyU1Q2xheW91dC1yb3V0ZXIuanMlMjIlMkMlMjJpZHMlMjIlM0ElNUIlNUQlN0QmbW9kdWxlcz0lN0IlMjJyZXF1ZXN0JTIyJTNBJTIyQyUzQSU1QyU1Q1VzZXJzJTVDJTVDQXN1cyU1QyU1Q0Rvd25sb2FkcyU1QyU1Q3BhY2VfcmVicmFuZCU1QyU1Q25vZGVfbW9kdWxlcyU1QyU1Q25leHQlNUMlNUNkaXN0JTVDJTVDY2xpZW50JTVDJTVDY29tcG9uZW50cyU1QyU1Q25vdC1mb3VuZC1ib3VuZGFyeS5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZtb2R1bGVzPSU3QiUyMnJlcXVlc3QlMjIlM0ElMjJDJTNBJTVDJTVDVXNlcnMlNUMlNUNBc3VzJTVDJTVDRG93bmxvYWRzJTVDJTVDcGFjZV9yZWJyYW5kJTVDJTVDbm9kZV9tb2R1bGVzJTVDJTVDbmV4dCU1QyU1Q2Rpc3QlNUMlNUNjbGllbnQlNUMlNUNjb21wb25lbnRzJTVDJTVDcmVuZGVyLWZyb20tdGVtcGxhdGUtY29udGV4dC5qcyUyMiUyQyUyMmlkcyUyMiUzQSU1QiU1RCU3RCZzZXJ2ZXI9dHJ1ZSEiLCJtYXBwaW5ncyI6IkFBQUEsa09BQTBJO0FBQzFJO0FBQ0Esb09BQTJJO0FBQzNJO0FBQ0EsME9BQThJO0FBQzlJO0FBQ0Esd09BQTZJO0FBQzdJO0FBQ0Esa1BBQWtKO0FBQ2xKO0FBQ0Esc1FBQTRKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFjZS1yZWJyYW5kLz83MGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiQzpcXFxcVXNlcnNcXFxcQXN1c1xcXFxEb3dubG9hZHNcXFxccGFjZV9yZWJyYW5kXFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxcY2xpZW50XFxcXGNvbXBvbmVudHNcXFxcYXBwLXJvdXRlci5qc1wiKTtcbjtcbmltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovIFwiQzpcXFxcVXNlcnNcXFxcQXN1c1xcXFxEb3dubG9hZHNcXFxccGFjZV9yZWJyYW5kXFxcXG5vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxcY2xpZW50XFxcXGNvbXBvbmVudHNcXFxcY2xpZW50LXBhZ2UuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXEFzdXNcXFxcRG93bmxvYWRzXFxcXHBhY2VfcmVicmFuZFxcXFxub2RlX21vZHVsZXNcXFxcbmV4dFxcXFxkaXN0XFxcXGNsaWVudFxcXFxjb21wb25lbnRzXFxcXGVycm9yLWJvdW5kYXJ5LmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJDOlxcXFxVc2Vyc1xcXFxBc3VzXFxcXERvd25sb2Fkc1xcXFxwYWNlX3JlYnJhbmRcXFxcbm9kZV9tb2R1bGVzXFxcXG5leHRcXFxcZGlzdFxcXFxjbGllbnRcXFxcY29tcG9uZW50c1xcXFxsYXlvdXQtcm91dGVyLmpzXCIpO1xuO1xuaW1wb3J0KC8qIHdlYnBhY2tNb2RlOiBcImVhZ2VyXCIgKi8gXCJDOlxcXFxVc2Vyc1xcXFxBc3VzXFxcXERvd25sb2Fkc1xcXFxwYWNlX3JlYnJhbmRcXFxcbm9kZV9tb2R1bGVzXFxcXG5leHRcXFxcZGlzdFxcXFxjbGllbnRcXFxcY29tcG9uZW50c1xcXFxub3QtZm91bmQtYm91bmRhcnkuanNcIik7XG47XG5pbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXEFzdXNcXFxcRG93bmxvYWRzXFxcXHBhY2VfcmVicmFuZFxcXFxub2RlX21vZHVsZXNcXFxcbmV4dFxcXFxkaXN0XFxcXGNsaWVudFxcXFxjb21wb25lbnRzXFxcXHJlbmRlci1mcm9tLXRlbXBsYXRlLWNvbnRleHQuanNcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Capp-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cclient-page.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cerror-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Clayout-router.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Cnot-found-boundary.js%22%2C%22ids%22%3A%5B%5D%7D&modules=%7B%22request%22%3A%22C%3A%5C%5CUsers%5C%5CAsus%5C%5CDownloads%5C%5Cpace_rebrand%5C%5Cnode_modules%5C%5Cnext%5C%5Cdist%5C%5Cclient%5C%5Ccomponents%5C%5Crender-from-template-context.js%22%2C%22ids%22%3A%5B%5D%7D&server=true!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"67c0e60ecfba\");\nif (false) {}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLGNBQWM7QUFDN0IsSUFBSSxLQUFVLEVBQUUsRUFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNlLXJlYnJhbmQvLi9hcHAvZ2xvYmFscy5jc3M/ZDAyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjY3YzBlNjBlY2ZiYVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/globals.css\n");

/***/ }),

/***/ "(rsc)/./app/blog/page.jsx":
/*!***************************!*\
  !*** ./app/blog/page.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Blog),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/firebase */ \"(rsc)/./lib/firebase.js\");\n\n\nconst metadata = {\n    title: \"Blog — PACE\"\n};\nasync function Blog() {\n    const posts = await (0,_lib_firebase__WEBPACK_IMPORTED_MODULE_1__.getCollectionOrLocal)(\"posts\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-p py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-6\",\n                children: \"Blog\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-2 gap-6\",\n                children: posts.map((b)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"card p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: b.cover,\n                                alt: b.title,\n                                className: \"w-full h-48 object-cover rounded-xl\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"font-semibold mt-3\",\n                                children: b.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-sm text-gray-600\",\n                                children: b.excerpt\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, b.slug, true, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\blog\\\\page.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYmxvZy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEQ7QUFFbkQsTUFBTUMsV0FBVztJQUFFQyxPQUFPO0FBQWMsRUFBRTtBQUVsQyxlQUFlQztJQUM1QixNQUFNQyxRQUFRLE1BQU1KLG1FQUFvQkEsQ0FBQztJQUN6QyxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEwQjs7Ozs7OzBCQUN4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pGLE1BQU1JLEdBQUcsQ0FBQ0MsQ0FBQUEsa0JBQ1QsOERBQUNDO3dCQUFxQkosV0FBVTs7MENBQzlCLDhEQUFDSztnQ0FBSUMsS0FBS0gsRUFBRUksS0FBSztnQ0FBRUMsS0FBS0wsRUFBRVAsS0FBSztnQ0FBRUksV0FBVTs7Ozs7OzBDQUMzQyw4REFBQ1M7Z0NBQUdULFdBQVU7MENBQXNCRyxFQUFFUCxLQUFLOzs7Ozs7MENBQzNDLDhEQUFDYztnQ0FBRVYsV0FBVTswQ0FBeUJHLEVBQUVRLE9BQU87Ozs7Ozs7dUJBSG5DUixFQUFFUyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FBUzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFjZS1yZWJyYW5kLy4vYXBwL2Jsb2cvcGFnZS5qc3g/ODYxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDb2xsZWN0aW9uT3JMb2NhbCB9IGZyb20gJy4uLy4uL2xpYi9maXJlYmFzZSc7XG5cbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHsgdGl0bGU6ICdCbG9nIOKAlCBQQUNFJyB9O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldENvbGxlY3Rpb25PckxvY2FsKCdwb3N0cycpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXAgcHktMTBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNlwiPkJsb2c8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGdhcC02XCI+XG4gICAgICAgIHtwb3N0cy5tYXAoYiA9PiAoXG4gICAgICAgICAgPGFydGljbGUga2V5PXtiLnNsdWd9IGNsYXNzTmFtZT1cImNhcmQgcC00XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17Yi5jb3Zlcn0gYWx0PXtiLnRpdGxlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgcm91bmRlZC14bFwiLz5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIG10LTNcIj57Yi50aXRsZX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e2IuZXhjZXJwdH08L3A+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdldENvbGxlY3Rpb25PckxvY2FsIiwibWV0YWRhdGEiLCJ0aXRsZSIsIkJsb2ciLCJwb3N0cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiYiIsImFydGljbGUiLCJpbWciLCJzcmMiLCJjb3ZlciIsImFsdCIsImgzIiwicCIsImV4Y2VycHQiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/blog/page.jsx\n");

/***/ }),

/***/ "(rsc)/./app/layout.jsx":
/*!************************!*\
  !*** ./app/layout.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RootLayout),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(rsc)/./app/globals.css\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(rsc)/./node_modules/next/dist/api/link.js\");\n\n\n\n\nconst metadata = {\n    title: \"PACE — Move Bold. Move Better.\",\n    description: \"A modern, AI-branded redesign of a famous sports brand. Built with Next.js + Tailwind, powered by Firebase/JSON content.\",\n    metadataBase: new URL(\"https://example.com\"),\n    openGraph: {\n        title: \"PACE — Move Bold. Move Better.\",\n        description: \"AI-forward redesign with modern UX.\",\n        images: [\n            \"/og.svg\"\n        ],\n        type: \"website\"\n    },\n    icons: {\n        icon: \"/fevicon.jpg\"\n    }\n};\nfunction Nav() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"container-p py-4 flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/\",\n                className: \"flex items-center gap-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/brand/logo.svg\",\n                    alt: \"PACE logo\",\n                    className: \"h-8 w-auto\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex items-center gap-6 text-sm font-medium\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/products\",\n                        className: \"hover:text-brand-600\",\n                        children: \"Products\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/blog\",\n                        className: \"hover:text-brand-600\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#contact\",\n                        className: \"inline-flex items-center rounded-xl px-3 py-2 bg-brand-600 text-white\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"mt-24 border-t\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-p py-10 text-sm text-gray-600 flex flex-col sm:flex-row justify-between gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"\\xa9 \",\n                        new Date().getFullYear(),\n                        \" PACE. Educational redesign.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/robots.txt\",\n                            children: \"Robots\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/sitemap.xml\",\n                            children: \"Sitemap\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\nfunction RootLayout({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Nav, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Asus\\\\Downloads\\\\pace_rebrand\\\\app\\\\layout.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGF5b3V0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUI7QUFDUztBQUNIO0FBRXRCLE1BQU1FLFdBQVc7SUFDdEJDLE9BQU87SUFDUEMsYUFBYTtJQUNiQyxjQUFjLElBQUlDLElBQUk7SUFDdEJDLFdBQVc7UUFDVEosT0FBTztRQUNQQyxhQUFhO1FBQ2JJLFFBQVE7WUFBQztTQUFVO1FBQ25CQyxNQUFNO0lBQ1I7SUFDQUMsT0FBTztRQUFFQyxNQUFNO0lBQWU7QUFDaEMsRUFBRTtBQUVGLFNBQVNDO0lBQ1AscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ2IsaURBQUlBO2dCQUFDYyxNQUFLO2dCQUFJRCxXQUFVOzBCQUN2Qiw0RUFBQ0U7b0JBQUlDLEtBQUk7b0JBQWtCQyxLQUFJO29CQUFZSixXQUFVOzs7Ozs7Ozs7OzswQkFFdkQsOERBQUNLO2dCQUFJTCxXQUFVOztrQ0FDYiw4REFBQ2IsaURBQUlBO3dCQUFDYyxNQUFLO3dCQUFZRCxXQUFVO2tDQUF1Qjs7Ozs7O2tDQUN4RCw4REFBQ2IsaURBQUlBO3dCQUFDYyxNQUFLO3dCQUFRRCxXQUFVO2tDQUF1Qjs7Ozs7O2tDQUNwRCw4REFBQ007d0JBQUVMLE1BQUs7d0JBQVdELFdBQVU7a0NBQXdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0c7QUFFQSxTQUFTTztJQUNQLHFCQUNFLDhEQUFDQztRQUFPUixXQUFVO2tCQUNoQiw0RUFBQ1M7WUFBSVQsV0FBVTs7OEJBQ2IsOERBQUNVOzt3QkFBRTt3QkFBRyxJQUFJQyxPQUFPQyxXQUFXO3dCQUFHOzs7Ozs7OzhCQUMvQiw4REFBQ0g7b0JBQUlULFdBQVU7O3NDQUNiLDhEQUFDTTs0QkFBRUwsTUFBSztzQ0FBYzs7Ozs7O3NDQUN0Qiw4REFBQ0s7NEJBQUVMLE1BQUs7c0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pDO0FBRWUsU0FBU1ksV0FBVyxFQUFFQyxRQUFRLEVBQUU7SUFDN0MscUJBQ0UsOERBQUNDO1FBQUtDLE1BQUs7a0JBQ1QsNEVBQUNDOzs4QkFDQyw4REFBQ25COzs7Ozs4QkFDRCw4REFBQ29COzhCQUFNSjs7Ozs7OzhCQUNQLDhEQUFDUDs7Ozs7Ozs7Ozs7Ozs7OztBQUlUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFjZS1yZWJyYW5kLy4vYXBwL2xheW91dC5qc3g/MGM4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICduZXh0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgdGl0bGU6ICdQQUNFIOKAlCBNb3ZlIEJvbGQuIE1vdmUgQmV0dGVyLicsXG4gIGRlc2NyaXB0aW9uOiAnQSBtb2Rlcm4sIEFJLWJyYW5kZWQgcmVkZXNpZ24gb2YgYSBmYW1vdXMgc3BvcnRzIGJyYW5kLiBCdWlsdCB3aXRoIE5leHQuanMgKyBUYWlsd2luZCwgcG93ZXJlZCBieSBGaXJlYmFzZS9KU09OIGNvbnRlbnQuJyxcbiAgbWV0YWRhdGFCYXNlOiBuZXcgVVJMKCdodHRwczovL2V4YW1wbGUuY29tJyksXG4gIG9wZW5HcmFwaDoge1xuICAgIHRpdGxlOiAnUEFDRSDigJQgTW92ZSBCb2xkLiBNb3ZlIEJldHRlci4nLFxuICAgIGRlc2NyaXB0aW9uOiAnQUktZm9yd2FyZCByZWRlc2lnbiB3aXRoIG1vZGVybiBVWC4nLFxuICAgIGltYWdlczogWycvb2cuc3ZnJ10sXG4gICAgdHlwZTogJ3dlYnNpdGUnXG4gIH0sXG4gIGljb25zOiB7IGljb246ICcvZmV2aWNvbi5qcGcnIH1cbn07XG5cbmZ1bmN0aW9uIE5hdigpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lci1wIHB5LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2JyYW5kL2xvZ28uc3ZnXCIgYWx0PVwiUEFDRSBsb2dvXCIgY2xhc3NOYW1lPVwiaC04IHctYXV0b1wiIC8+XG4gICAgICA8L0xpbms+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC02IHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYnJhbmQtNjAwXCI+UHJvZHVjdHM8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYnJhbmQtNjAwXCI+QmxvZzwvTGluaz5cbiAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQteGwgcHgtMyBweS0yIGJnLWJyYW5kLTYwMCB0ZXh0LXdoaXRlXCI+Q29udGFjdDwvYT5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJtdC0yNCBib3JkZXItdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcCBweS0xMCB0ZXh0LXNtIHRleHQtZ3JheS02MDAgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgPHA+wqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUEFDRS4gRWR1Y2F0aW9uYWwgcmVkZXNpZ24uPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiL3JvYm90cy50eHRcIj5Sb2JvdHM8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIi9zaXRlbWFwLnhtbFwiPlNpdGVtYXA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb3RMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFkYXRhIiwiTGluayIsIm1ldGFkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1ldGFkYXRhQmFzZSIsIlVSTCIsIm9wZW5HcmFwaCIsImltYWdlcyIsInR5cGUiLCJpY29ucyIsImljb24iLCJOYXYiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwibmF2IiwiYSIsIkZvb3RlciIsImZvb3RlciIsImRpdiIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJSb290TGF5b3V0IiwiY2hpbGRyZW4iLCJodG1sIiwibGFuZyIsImJvZHkiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/layout.jsx\n");

/***/ }),

/***/ "(rsc)/./lib/firebase.js":
/*!*************************!*\
  !*** ./lib/firebase.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCollectionOrLocal: () => (/* binding */ getCollectionOrLocal),\n/* harmony export */   getDb: () => (/* binding */ getDb)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(rsc)/./node_modules/firebase/app/dist/index.mjs\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(rsc)/./node_modules/firebase/firestore/dist/index.mjs\");\n\n\nconst firebaseConfig = {\n    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || \"demo\",\n    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || \"demo.firebaseapp.com\",\n    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || \"demo\",\n    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || \"demo.appspot.com\",\n    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || \"0\",\n    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || \"0\"\n};\nfunction getDb() {\n    const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0] : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\n}\nasync function getCollectionOrLocal(name) {\n    try {\n        if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID === \"demo\") {\n            throw new Error(\"Using local data\");\n        }\n        const db = getDb();\n        const snap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, name));\n        const out = [];\n        snap.forEach((doc)=>out.push({\n                id: doc.id,\n                ...doc.data()\n            }));\n        if (out.length) return out;\n        throw new Error(\"Empty\");\n    } catch (e) {\n        // Fallback to local JSON\n        const res = await __webpack_require__(\"(rsc)/./data lazy recursive ^\\\\.\\\\/.*\\\\.json$\")(`./${name}.json`);\n        return res.default;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZmlyZWJhc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzRDtBQUNpQjtBQUV2RSxNQUFNSyxpQkFBaUI7SUFDckJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsNEJBQTRCLElBQUk7SUFDcERDLFlBQVlILFFBQVFDLEdBQUcsQ0FBQ0csZ0NBQWdDLElBQUk7SUFDNURDLFdBQVdMLFFBQVFDLEdBQUcsQ0FBQ0ssK0JBQStCLElBQUk7SUFDMURDLGVBQWVQLFFBQVFDLEdBQUcsQ0FBQ08sbUNBQW1DLElBQUk7SUFDbEVDLG1CQUFtQlQsUUFBUUMsR0FBRyxDQUFDUyx3Q0FBd0MsSUFBSTtJQUMzRUMsT0FBT1gsUUFBUUMsR0FBRyxDQUFDVywyQkFBMkIsSUFBSTtBQUNwRDtBQUVPLFNBQVNDO0lBQ2QsTUFBTUMsTUFBTXBCLHFEQUFPQSxHQUFHcUIsTUFBTSxHQUFHckIscURBQU9BLEVBQUUsQ0FBQyxFQUFFLEdBQUdELDJEQUFhQSxDQUFDSztJQUM1RCxPQUFPSCxnRUFBWUEsQ0FBQ21CO0FBQ3RCO0FBRU8sZUFBZUUscUJBQXFCQyxJQUFJO0lBQzdDLElBQUk7UUFDRixJQUFJLENBQUNqQixRQUFRQyxHQUFHLENBQUNLLCtCQUErQixJQUFJTixRQUFRQyxHQUFHLENBQUNLLCtCQUErQixLQUFLLFFBQVE7WUFDMUcsTUFBTSxJQUFJWSxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsS0FBS047UUFDWCxNQUFNTyxPQUFPLE1BQU12QiwyREFBT0EsQ0FBQ0QsOERBQVVBLENBQUN1QixJQUFJRjtRQUMxQyxNQUFNSSxNQUFNLEVBQUU7UUFDZEQsS0FBS0UsT0FBTyxDQUFDQyxDQUFBQSxNQUFPRixJQUFJRyxJQUFJLENBQUM7Z0JBQUVDLElBQUlGLElBQUlFLEVBQUU7Z0JBQUUsR0FBR0YsSUFBSUcsSUFBSSxFQUFFO1lBQUM7UUFDekQsSUFBSUwsSUFBSU4sTUFBTSxFQUFFLE9BQU9NO1FBQ3ZCLE1BQU0sSUFBSUgsTUFBTTtJQUNsQixFQUFFLE9BQU9TLEdBQUc7UUFDVix5QkFBeUI7UUFDekIsTUFBTUMsTUFBTSxNQUFNLHFFQUFPLEdBQVMsRUFBRVgsS0FBSyxNQUFNLENBQUM7UUFDaEQsT0FBT1csSUFBSUMsT0FBTztJQUNwQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFjZS1yZWJyYW5kLy4vbGliL2ZpcmViYXNlLmpzP2FiNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwcyB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIHx8ICdkZW1vJyxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4gfHwgJ2RlbW8uZmlyZWJhc2VhcHAuY29tJyxcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEIHx8ICdkZW1vJyxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQgfHwgJ2RlbW8uYXBwc3BvdC5jb20nLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCB8fCAnMCcsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQgfHwgJzAnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGIoKSB7XG4gIGNvbnN0IGFwcCA9IGdldEFwcHMoKS5sZW5ndGggPyBnZXRBcHBzKClbMF0gOiBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgcmV0dXJuIGdldEZpcmVzdG9yZShhcHApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbk9yTG9jYWwobmFtZSkge1xuICB0cnkge1xuICAgIGlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCB8fCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9QUk9KRUNUX0lEID09PSAnZGVtbycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNpbmcgbG9jYWwgZGF0YScpO1xuICAgIH1cbiAgICBjb25zdCBkYiA9IGdldERiKCk7XG4gICAgY29uc3Qgc25hcCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgbmFtZSkpO1xuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIHNuYXAuZm9yRWFjaChkb2MgPT4gb3V0LnB1c2goeyBpZDogZG9jLmlkLCAuLi5kb2MuZGF0YSgpIH0pKTtcbiAgICBpZiAob3V0Lmxlbmd0aCkgcmV0dXJuIG91dDtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtcHR5Jyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBGYWxsYmFjayB0byBsb2NhbCBKU09OXG4gICAgY29uc3QgcmVzID0gYXdhaXQgaW1wb3J0KGAuLi9kYXRhLyR7bmFtZX0uanNvbmApO1xuICAgIHJldHVybiByZXMuZGVmYXVsdDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBcHBzIiwiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEIiwiZ2V0RGIiLCJhcHAiLCJsZW5ndGgiLCJnZXRDb2xsZWN0aW9uT3JMb2NhbCIsIm5hbWUiLCJFcnJvciIsImRiIiwic25hcCIsIm91dCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiaWQiLCJkYXRhIiwiZSIsInJlcyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/firebase.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@firebase","vendor-chunks/next","vendor-chunks/@grpc","vendor-chunks/protobufjs","vendor-chunks/long","vendor-chunks/@protobufjs","vendor-chunks/lodash.camelcase","vendor-chunks/idb","vendor-chunks/@swc","vendor-chunks/firebase"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fblog%2Fpage&page=%2Fblog%2Fpage&appPaths=%2Fblog%2Fpage&pagePath=private-next-app-dir%2Fblog%2Fpage.jsx&appDir=C%3A%5CUsers%5CAsus%5CDownloads%5Cpace_rebrand%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAsus%5CDownloads%5Cpace_rebrand&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();