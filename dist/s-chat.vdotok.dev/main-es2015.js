(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");








const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    },
    {
        path: 'chat',
        component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
        canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    { path: '**', redirectTo: 'login' },
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `<router-outlet></router-outlet>`
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/app-material/app-material.module */ "./src/app/shared/app-material/app-material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/chat/add-group/add-group.component */ "./src/app/components/chat/add-group/add-group.component.ts");
/* harmony import */ var _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/chat/new-chat/new-chat.component */ "./src/app/components/chat/new-chat/new-chat.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");


















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                maxOpened: 1,
                preventDuplicates: true
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
        _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__["AddGroupComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__["NewChatComponent"],
        _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"],
                    _components_chat_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_13__["AddGroupComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _components_chat_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_14__["NewChatComponent"],
                    _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"]
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _shared_app_material_app_material_module__WEBPACK_IMPORTED_MODULE_10__["AppMaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                        maxOpened: 1,
                        preventDuplicates: true
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/chat/add-group/add-group.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/chat/add-group/add-group.component.ts ***!
  \******************************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/FormsHandler/FormsHandler */ "./src/app/shared/FormsHandler/FormsHandler.ts");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ "./src/app/shared/services/pubsub.service.ts");
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");


















const _c0 = ["searchInput"];
function AddGroupComponent_ng_container_18_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddGroupComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddGroupComponent_ng_container_18_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r81); const user_r78 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r80.selectContact(user_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AddGroupComponent_ng_container_18_div_6_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const user_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r78.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", user_r78["selected"]);
} }
function AddGroupComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Create a group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddGroupComponent_div_19_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r82.closemodel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function AddGroupComponent_div_19_Template_form_submit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r84.addGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Name your group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "form-errors", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddGroupComponent_div_19_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r83); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r85.addGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r75.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("control", ctx_r75.form.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r75.loading);
} }
function AddGroupComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Create a group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddGroupComponent_ng_template_20_Template_img_click_5_listener() { const modal_r86 = ctx.$implicit; return modal_r86.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function AddGroupComponent_ng_template_20_Template_form_submit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r88.addGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Name your group chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "form-errors", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddGroupComponent_ng_template_20_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r90.addGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r77.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("control", ctx_r77.form.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r77.loading);
} }
class AddGroupComponent {
    constructor(pubsubService, svc, toastr, _fb, changeDetector) {
        this.pubsubService = pubsubService;
        this.svc = svc;
        this.toastr = toastr;
        this._fb = _fb;
        this.changeDetector = changeDetector;
        this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getAuthUsername();
        this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"].getUserData();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = true;
        this.addGroupModel = false;
        this.AllUsers = [];
        this.activeChat = {
            chatHistory: []
        };
        this.message = '';
        this.group_title = '';
        this.groupnameError = '';
        this.selectedUsers = [];
        this.CopyAllUsers = [];
        this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.form = this._fb.group({
            'group_title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]),
        }, { updateOn: 'change' });
        document.addEventListener("keyup", event => {
            if (event.code === 'Enter' && !this.loading) {
                this.addGroup();
            }
        });
    }
    ngAfterViewInit() {
        if (this.searchInput) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.searchInput.nativeElement, 'input')
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])((event) => event.target.value), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(1000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(value => {
                this.loading = true;
                if (!value) {
                    const data = {
                        sorting: "ORDER BY full_name ASC",
                        search_field: "full_name",
                        search_value: '',
                        condition: "contains",
                    };
                    return this.svc.post('AllUsers', data).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                        if (!(res.users && res.users.length)) {
                            res.users = [];
                        }
                        this.CopyAllUsers = [...res.users];
                        return res;
                    }));
                }
                const temparaay = [...this.CopyAllUsers];
                const filteruser = temparaay.filter(user => {
                    let searchValue = value.toLowerCase();
                    if (user.full_name.toLowerCase().startsWith(searchValue)) {
                        return -1;
                    }
                });
                const returnData = {
                    users: filteruser
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(returnData);
            }))
                .subscribe(res => {
                this.loading = false;
                if (!res.users || !res.users.length) {
                    this.toastr.error("Opps!", "No contacts found");
                    this.AllUsers = [];
                }
                else {
                    this.AllUsers = res.users;
                }
                this.setAlreadySelected();
            });
        }
    }
    setAlreadySelected() {
        this.selectedUsers.map(user => {
            const userIndex = this.AllUsers.find(alluser => alluser.user_id == user.user_id);
            if (userIndex)
                userIndex['selected'] = true;
        });
        this.changeDetector.detectChanges();
    }
    selectContact(contact) {
        this.groupnameError = '';
        contact['selected'] = !contact['selected'];
        this.changeDetector.detectChanges();
        this.selectedUsers.push(contact);
        this.selectedUsers = this.selectedUsers.filter(user => user.selected);
        this.selectedUsers = [...new Set(this.selectedUsers)];
        if (!this.selectedUsers.length) {
            this.groupnameError = 'Please Select Contacts';
        }
        else if (this.selectedUsers.length > 4) {
            this.groupnameError = 'Participants cannot be more than 4';
        }
        console.error('groupnameError', this.groupnameError);
        this.changeDetector.detectChanges();
    }
    openDialog(content) {
        this.groupnameError = '';
        this.selectedUsers = this.selectedUsers.filter(user => user.selected);
        this.changeDetector.detectChanges();
        if (!this.selectedUsers.length) {
            this.groupnameError = 'Please Select Contacts';
            return;
        }
        else if (this.selectedUsers.length > 4) {
            this.groupnameError = 'Participants cannot be more than 4';
            return;
        }
        if (this.selectedUsers.length == 1) {
            const useridArray = this.selectedUsers.map(user => user.user_id);
            let data = {
                participants: useridArray,
                auto_created: useridArray.length > 1 ? 0 : 1,
                group_title: "One to One chat",
            };
            this.svc.post('CreateGroup', data).subscribe(v => {
                this.changeDetector.detectChanges();
                if (v && v.status == 200) {
                    this.groupnameError = '';
                    this.setActiveChat.emit(v.group);
                    this.form.reset();
                }
                this.selectedUsers = [];
                this.changeDetector.detectChanges();
                this.loading = false;
                this.changeEvent.emit("THREAD");
            });
        }
        else {
            this.addGroupModel = true;
        }
    }
    addGroup() {
        src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(this.form);
        const useridArray = this.selectedUsers.map(user => user.user_id);
        if (this.form.invalid || !useridArray.length || this.loading)
            return;
        if (useridArray.length > 5) {
            this.toastr.error('OPPS!', 'participants Can not be more than 5!');
            return;
        }
        this.loading = true;
        this.changeDetector.detectChanges();
        let data = {
            participants: useridArray,
            auto_created: useridArray.length > 1 ? 0 : 1
        };
        data = Object.assign(Object.assign({}, data), this.form.value);
        this.svc.post('CreateGroup', data).subscribe(v => {
            this.changeDetector.detectChanges();
            if (v && v.status == 200) {
                this.groupnameError = '';
                this.setActiveChat.emit(v.group);
                this.toastr.success('Success!', 'The group has been created!');
                this.closemodel();
                this.form.reset();
            }
            this.selectedUsers = [];
            this.changeDetector.detectChanges();
            this.loading = false;
        });
    }
    closemodel() {
        this.selectedUsers = [];
        this.addGroupModel = false;
        this.AllUsers.forEach(element => element['selected'] = false);
        this.changeEvent.emit("THREAD");
        this.changeDetector.detectChanges();
    }
    backScreen() {
        this.changeEvent.emit("CHAT");
    }
}
AddGroupComponent.??fac = function AddGroupComponent_Factory(t) { return new (t || AddGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AddGroupComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AddGroupComponent, selectors: [["add-group"]], viewQuery: function AddGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.searchInput = _t.first);
    } }, outputs: { changeEvent: "changeEvent", setActiveChat: "setActiveChat" }, decls: 22, vars: 4, consts: [[1, "newChatContainer"], [1, "newChatHeader"], [1, "newChatLeft", "hand"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], [1, "newChatHeading"], [1, "newChatRight", "hand", 3, "click"], ["src", "./assets/images/checkmark.png", 1, "goodMark"], [1, "newChatSearchBox"], [1, "input-group"], [1, "input-group-prepend"], ["src", "./assets/images/search.png", 1, "seacrchIcon"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["searchInput", ""], [1, "newGrpChat"], [3, "ngClass"], [1, "newListContainer", "max-height"], [4, "ngFor", "ngForOf"], ["id", "myModal", "class", "modal", 4, "ngIf"], ["content", ""], [1, "contactListCard", "hand", 3, "click"], [1, "contactListCardLeft"], ["src", "./assets/images/user.png", 1, "ListCardIcon"], [1, "ListCardName", "text-capitalize", "pb-1"], ["class", "selectuser contactListCardRight", 4, "ngIf"], [1, "selectuser", "contactListCardRight"], ["src", "./assets/images/checkmark-circle.png", 1, "ListCardButton"], ["id", "myModal", 1, "modal"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"], [1, "chatPopupContent"]], template: function AddGroupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddGroupComponent_Template_img_click_3_listener() { return ctx.backScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Create Group Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddGroupComponent_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r91); const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](21); return ctx.openDialog(_r76); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, AddGroupComponent_ng_container_18_Template, 7, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, AddGroupComponent_div_19_Template, 15, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, AddGroupComponent_ng_template_20_Template, 14, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.groupnameError ? "text-danger" : "cntct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.groupnameError ? ctx.groupnameError : "Select Contacts", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.AllUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addGroupModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_15__["GetErrorsComponent"]], styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2FkZC1ncm91cC9DOlxcVXNlcnNcXFN1bW1lbiBaYWhpZFxcRGVza3RvcFxcY2FsbCB2ZG90b2sgYW5ndWxhclxcanNfY2hhdFxcSlMtY2hhdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2hhdFxcYWRkLWdyb3VwXFxhZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9hZGQtZ3JvdXAvYWRkLWdyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLCtCQUFBO0FDRUY7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2FkZC1ncm91cC9hZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbU5hbWVUZXh0IHtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgY29sb3I6ICMzMTM5NGQ7XHJcbn1cclxuLmNoYXRidG4ge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQ3ZGQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xyXG59XHJcblxyXG4uc2VsZWN0dXNlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiIsIi5yb29tTmFtZVRleHQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMzEzOTRkO1xufVxuXG4uY2hhdGJ0biB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBkN2RkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG59XG5cbi5zZWxlY3R1c2VyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'add-group',
                templateUrl: './add-group.component.html',
                styleUrls: ['./add-group.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_11__["PubsubService"] }, { type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
        }], setActiveChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helpers/helpersFunctions */ "./src/app/shared/helpers/helpersFunctions.ts");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/FormsHandler/FormsHandler */ "./src/app/shared/FormsHandler/FormsHandler.ts");
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ "./src/app/shared/services/pubsub.service.ts");
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-group/add-group.component */ "./src/app/components/chat/add-group/add-group.component.ts");
/* harmony import */ var _new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./new-chat/new-chat.component */ "./src/app/components/chat/new-chat/new-chat.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");
/* harmony import */ var _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/pipe/safeurl */ "./src/app/shared/pipe/safeurl.ts");






















const _c0 = ["messageInputElement"];
function ChatComponent_ng_container_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "No Available ChatRoom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Tap and hold on any message to star it, so you can easily find it later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ChatComponent_ng_container_5_ng_container_9_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", group_r14.unReadCount, "");
} }
function ChatComponent_ng_container_5_ng_container_9_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](group_r14 == null ? null : group_r14.userTypingContent);
} }
function ChatComponent_ng_container_5_ng_container_9_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", group_r14.unReadCount ? "misreadMsg" : "readMsg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r17.getLastMessage(group_r14), " ");
} }
function ChatComponent_ng_container_5_ng_container_9_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", group_r14.Online ? "cardOnlineStatus" : "cardOfflineStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", group_r14.Online ? "Online" : "Offline", " ");
} }
function ChatComponent_ng_container_5_ng_container_9_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const group_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", group_r14.onlineParticipants + "/" + group_r14.TotalParticipants, " Online ");
} }
function ChatComponent_ng_container_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26); const group_r14 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r25.setActiveChat(group_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ChatComponent_ng_container_5_ng_container_9_span_6_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ChatComponent_ng_container_5_ng_container_9_p_7_Template, 2, 1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ChatComponent_ng_container_5_ng_container_9_p_8_Template, 2, 2, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26); const group_r14 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r27.openModal(group_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "EDIT GROUP NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_ng_container_5_ng_container_9_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r26); const group_r14 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r28.deleteGroup(group_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ChatComponent_ng_container_5_ng_container_9_p_17_Template, 2, 2, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ChatComponent_ng_container_5_ng_container_9_p_18_Template, 2, 1, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const group_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](group_r14.chatTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", group_r14.unReadCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", group_r14.userTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !group_r14.userTyping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", group_r14.auto_created);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !group_r14.auto_created);
} }
function ChatComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "CHATROOMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_ng_container_5_Template_h4_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r29.newChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Create +");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ChatComponent_ng_container_5_div_6_Template, 5, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ChatComponent_ng_container_5_ng_container_9_Template, 19, 6, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx_r0.AllGroups.length && !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.AllGroups);
} }
function ChatComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "add-group", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("setActiveChat", function ChatComponent_ng_container_6_Template_add_group_setActiveChat_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r31.setchat($event); })("changeEvent", function ChatComponent_ng_container_6_Template_add_group_changeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r33.changeSidebar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function ChatComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "new-chat", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("setActiveChat", function ChatComponent_ng_container_7_Template_new_chat_setActiveChat_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r34.setchat($event); })("changeEvent", function ChatComponent_ng_container_7_Template_new_chat_changeEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r36.changeSidebar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function ChatComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_img_17_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r37.backScreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ChatComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx_r4.activeChat.chatTitle, " ");
} }
function ChatComponent_ng_container_20_ng_container_1_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](chat_r40.messageBy);
} }
function ChatComponent_ng_container_20_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](chat_r40.content);
} }
function ChatComponent_ng_container_20_ng_container_1_div_5_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner", 80);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 30);
} }
function ChatComponent_ng_container_20_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChatComponent_ng_container_20_ng_container_1_div_5_mat_spinner_1_Template, 1, 1, "mat-spinner", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_ng_container_20_ng_container_1_div_5_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r51); const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r49.openImage(chat_r40.content); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !chat_r40.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 2, chat_r40.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function ChatComponent_ng_container_20_ng_container_1_div_6_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner", 80);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 30);
} }
function ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2).$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r54.checkFileType(chat_r40.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 2, chat_r40.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function ChatComponent_ng_container_20_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChatComponent_ng_container_20_ng_container_1_div_6_mat_spinner_1_Template, 1, 1, "mat-spinner", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ChatComponent_ng_container_20_ng_container_1_div_6_ng_container_2_Template, 5, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const chat_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !chat_r40.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", chat_r40.content);
} }
function ChatComponent_ng_container_20_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Read ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function ChatComponent_ng_container_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ChatComponent_ng_container_20_ng_container_1_h4_2_Template, 2, 1, "h4", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, ChatComponent_ng_container_20_ng_container_1_div_4_Template, 3, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ChatComponent_ng_container_20_ng_container_1_div_5_Template, 4, 4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ChatComponent_ng_container_20_ng_container_1_div_6_Template, 3, 2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, ChatComponent_ng_container_20_ng_container_1_ng_container_8_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const chat_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", chat_r40.from == ctx_r39.currentUserName ? "senderChatContainer" : "receiverChatContainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", chat_r40.from != ctx_r39.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", chat_r40.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", chat_r40.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", chat_r40.type != "text" && chat_r40.type != "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", chat_r40.readCount && chat_r40.from == ctx_r39.currentUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](11, 7, chat_r40.date, "shortTime"), " ");
} }
function ChatComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ChatComponent_ng_container_20_ng_container_1_Template, 12, 10, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r5.activeChat["chatHistory"]);
} }
function ChatComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "No Conversation Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Tap and hold on any message to star it, so you can easily find it later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_div_21_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r57.newChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " NEW CHAT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_div_21_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r59.getAllGroups(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " REFRESH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function ChatComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_ng_container_24_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r60.removeAttachment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r7.fileToSend.name);
} }
function ChatComponent_input_25_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 99, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("keyup", function ChatComponent_input_25_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r63.typingmessage($event); })("ngModelChange", function ChatComponent_input_25_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r65.message = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r8.message);
} }
function ChatComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_div_42_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r66.closeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "safeUrl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 1, ctx_r10.popupimagesrc), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function ChatComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Edit group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_div_43_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r68.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function ChatComponent_div_43_Template_form_submit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r70.editGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Name your group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "form-errors", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_div_43_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r71.editGroup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " DONE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r11.groupForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("control", ctx_r11.groupForm.get("group_title"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r11.loading);
} }
class ChatComponent {
    constructor(pubsubService, svc, router, elRef, dialog, toastr, changeDetector, _fb) {
        this.pubsubService = pubsubService;
        this.svc = svc;
        this.router = router;
        this.elRef = elRef;
        this.dialog = dialog;
        this.toastr = toastr;
        this.changeDetector = changeDetector;
        this._fb = _fb;
        this.editGroupModel = false;
        this.loading = true;
        this.AllGroups = [];
        this.activeChat = {
            chatHistory: []
        };
        this.message = '';
        this.currentUserName = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername();
        this.currentUserData = src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getUserData();
        this.threadType = 'THREAD';
        this.fileToSend = null;
        this.isActiveThread = false;
        this.popupimagesrc = '';
        this.screen = 'CHAT';
        this.sdkconnected = false;
        this.setToActive = null;
        this.groupForm = this._fb.group({
            'group_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
            'group_title': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(100)]),
        }, { updateOn: 'change' });
        this.pubsubService.initConfigure();
    }
    ngOnInit() {
        this.pubsubService.Client.on("connect", response => {
            console.error("connect", response);
            this.sdkconnected = true;
            if (!this.AllGroups.length) {
                this.getAllGroups();
            }
        });
        this.pubsubService.Client.on("disconnect", (response) => {
            console.log("disconnect", response);
            this.sdkconnected = false;
        });
        document.addEventListener("keyup", event => {
            if (event.code === 'Enter') {
                this.sendTextMessage();
            }
        });
    }
    ngAfterViewInit() {
        this.pubsubService.Client.on("authentication_error", (res) => {
            console.log("authentication_error", res);
        });
        this.pubsubService.Client.on("offline", response => {
            console.log("offline", response);
            this.setOfflineStatus(response);
        });
        this.pubsubService.Client.on("online", (response) => {
            console.log("online", response);
            this.setOnlineStatus(response);
        });
        this.pubsubService.Client.on("message", response => {
            response = JSON.parse(JSON.stringify(response));
            console.trace("new message", response);
            if (response.type == 'text' || response.type == 'file' || response.type == 'image' || response.type == 'audio' || response.type == 'video') {
                this.scroll();
                const chatthread = this.findChatThread(response.to);
                const isActiveThread = chatthread.id == this.activeChat.id;
                chatthread['unReadCount'] = isActiveThread ? 0 : (chatthread['unReadCount'] || 0) + 1;
                response = this.messageBy(chatthread, response);
                response['isRead'] = isActiveThread;
                response['auto_created'] = chatthread['auto_created'];
                chatthread['lastMessage'] = response.content;
                chatthread['time'] = new Date(response.id);
                chatthread['type'] = response.type;
                this.pushMessage(chatthread, response);
                this.readSingleMessage(response, isActiveThread);
                setTimeout(() => {
                    this.AllGroups.sort((a, b) => {
                        return a.id == chatthread.id ? -1 : 1;
                    });
                }, 500);
                this.changeDetector.detectChanges();
            }
            else if (response.type == 'typing') {
                this.setUserTyping(response);
            }
            else if (response.receiptType == 3) {
                let chName = response.topic || response.to;
                if (response.to != undefined)
                    chName = response.to;
                const chatthread = this.findChatThread(chName);
                let message = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(chatthread.chatHistory, 'id', response.messageId);
                if (message) {
                    message['readCount'] = (message['readCount'] || 0) + 1;
                }
                this.changeDetector.detectChanges();
            }
        });
        this.pubsubService.Client.on("subscribed", response => {
            console.log("subscribed", response);
            this.setOnlineStatusforSubscribe(response);
        });
        if (this.messageInputElement) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.messageInputElement.nativeElement, 'input')
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => event.target.value), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(3000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(data => {
                const sendMessage = {
                    status: 0,
                    size: 0,
                    type: "typing",
                    isGroupMessage: false,
                    from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
                    content: '0',
                    id: new Date().getTime().toString(),
                    key: this.activeChat.channel_key,
                    to: this.activeChat.channel_name,
                    date: new Date().getTime(),
                };
                this.pubsubService.sendMessage(sendMessage);
            });
        }
    }
    deleteGroup(group) {
        this.loading = true;
        const playload = {
            group_id: group.id
        };
        this.svc.post('DeleteGroup', playload).subscribe(v => {
            this.changeDetector.detectChanges();
            if (v && v.status == 200) {
                this.loading = false;
                this.getAllGroups();
                this.toastr.success('The group has been deleted!', 'Success!');
            }
            else {
                console.error(v.message);
                alert(v.message);
                this.changeDetector.detectChanges();
            }
        });
    }
    openModal(group) {
        if (group.auto_created) {
            alert('Can not change One to one group title');
            return;
        }
        group['group_id'] = group.id;
        this.groupForm.reset(group);
        this.editGroupModel = true;
        this.changeDetector.detectChanges();
    }
    editGroup() {
        src_app_shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_8__["default"].validateForm(this.groupForm);
        console.error("this.groupForm.", this.groupForm.invalid);
        if (this.groupForm.invalid || this.loading)
            return;
        const playload = this.groupForm.value;
        this.loading = true;
        this.svc.post('RenameGroup', playload).subscribe(v => {
            if (v && v.status == 200) {
                this.getAllGroups();
                this.editGroupModel = false;
                this.loading = false;
                this.toastr.success('The group has been updated!', 'Success!');
            }
        });
    }
    getAllGroups() {
        this.loading = true;
        this.svc.get('AllGroups').subscribe(v => {
            this.loading = false;
            if (v && v.status == 200) {
                this.AllGroups = v.groups.map(chat => {
                    if (chat['participants'].length) {
                        chat['participants'] = chat['participants'].map(r => {
                            r['username'] = r['username'] || r['full_name'];
                            return r;
                        });
                    }
                    chat['chatTitle'] = chat.auto_created ? chat['participants'][0]['full_name'] : chat.group_title;
                    chat['Online'] = false;
                    chat['key'] = chat.channel_key;
                    chat['channel'] = chat.channel_name;
                    chat['chatHistory'] = [];
                    chat['TotalParticipants'] = chat['participants'].length;
                    chat['onlineParticipants'] = 1;
                    chat['isSeen'] = true;
                    return chat;
                });
                console.error("this.activeChat.chatTitle", this.activeChat);
                if (!this.activeChat.chatTitle) {
                    this.activeChat = this.AllGroups.length ? this.AllGroups['0'] : {};
                }
                if (this.setToActive) {
                    const indexchat = this.AllGroups.find(group => group.id == this.setToActive);
                    this.activeChat = indexchat ? indexchat : this.AllGroups['0'];
                    this.setToActive = null;
                }
                this.isActiveThread = true;
                this.pubsubService.subscribeToChat(this.AllGroups);
            }
            setTimeout(() => {
                this.sortThread();
            }, 500);
            this.changeDetector.detectChanges();
        });
    }
    checkFileType(content) {
        let preview = content.includes('text/plain') ? ('./assets/images/txt.png') : content.includes('/pdf') ? ('./assets/images/pdf.png') : content.includes('/json') ? ('./assets/images/json.png') : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Icon-doc.svg/810px-Icon-doc.svg.png';
        if (content.includes('video/'))
            preview = './assets/images/video.png';
        if (content.includes('audio/'))
            preview = './assets/images/audio.png';
        return preview;
    }
    fileType(content) {
        return content.split(";")[0].split(":")[1];
    }
    findChatThread(channel) {
        return Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(this.AllGroups, 'channel_name', channel);
    }
    setActiveChat(group) {
        this.isActiveThread = group.id == this.activeChat.id;
        if (!this.isActiveThread)
            this.message = '';
        this.activeChat = group;
        group['unReadCount'] = 0;
        this.screen = 'MSG';
        this.scroll();
        group.chatHistory = group.chatHistory || [];
        this.readsendMessage(group.chatHistory);
        this.changeDetector.detectChanges();
    }
    setchat(chat) {
        this.setToActive = chat.id;
    }
    readSingleMessage(response, isActiveThread) {
        if (response.from == this.currentUserName || !isActiveThread)
            return;
        const chatobj = {
            messageId: response.id,
            receiptType: 3,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            key: response.key,
            to: response.to,
            date: new Date().getTime()
        };
        this.pubsubService.readSingleMessage(chatobj);
    }
    readsendMessage(chatHistory) {
        const unreadchatHistory = chatHistory.filter(chat => !chat.isRead).map(chat => {
            const chatobj = {
                messageId: chat.id,
                receiptType: 3,
                from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
                key: chat.key,
                to: chat.to,
                date: new Date().getTime()
            };
            return chatobj;
        });
        if (unreadchatHistory.length)
            this.pubsubService.readMessage(unreadchatHistory);
        chatHistory = chatHistory.map(chat => {
            chat.isRead = true;
            return chat;
        });
    }
    handleFileInput(files) {
        this.fileToSend = files.item(0);
    }
    invalidSize() {
        return ((this.fileToSend.size / 1024) > 6144);
    }
    removeAttachment() {
        this.fileToSend = null;
    }
    getFileType(fileR) {
        let type = "file";
        const filetype = fileR.type;
        if (filetype.includes('image'))
            type = "image";
        else if (filetype.includes('audio'))
            type = "audio";
        else if (filetype.includes('video'))
            type = "video";
        return type;
    }
    sendTextMessage() {
        if ((!(/\S/.test(this.message))) && !this.fileToSend) {
            return;
        }
        else if (this.message.length > 400) {
            this.toastr.error("Message can not be more than 400 characters", "Opps!");
            return;
        }
        else if (this.fileToSend && this.invalidSize()) {
            this.toastr.error("The maximum size of file should be 6MBs.", "Opps!");
            this.fileToSend = null;
            return;
        }
        this.scroll();
        if (!this.message && !this.fileToSend)
            return;
        if (this.fileToSend) {
            var option = {
                id: new Date().getTime().toString(),
                from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
                topic: this.activeChat.channel_name,
                to: this.activeChat.channel_name,
                key: this.activeChat.channel_key,
                type: this.getFileType(this.fileToSend),
                date: new Date().getTime(),
            };
            this.pubsubService.Client.SendFile(this.fileToSend, option);
            this.fileToSend = null;
        }
        if (!this.message)
            return;
        const sendMessage = {
            status: 1,
            size: 0,
            type: "text",
            isGroupMessage: false,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            content: this.message,
            id: new Date().getTime().toString(),
            date: new Date().getTime(),
            key: this.activeChat.channel_key,
            to: this.activeChat.channel_name
        };
        this.pubsubService.sendMessage(sendMessage);
        this.message = '';
        this.scroll();
        if (!(this.AllGroups.length && this.activeChat.id == this.AllGroups[0].id)) {
            this.sortThread();
        }
    }
    typingmessage($event) {
        if ($event.key === "Enter") {
            this.sendTextMessage();
            return;
        }
        const sendMessage = {
            status: 0,
            size: 0,
            type: "typing",
            isGroupMessage: false,
            from: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].getAuthUsername(),
            content: "1",
            id: new Date().getTime().toString(),
            key: this.activeChat.channel_key,
            to: this.activeChat.channel_name,
            date: new Date().getTime(),
        };
        this.pubsubService.sendMessage(sendMessage);
    }
    setOnlineStatusforSubscribe(response) {
        const indexchat = this.findChatThread(response.channel);
        if (indexchat) {
            let onlineNumbers = [...new Set(response.who.map(n => n.username))];
            indexchat['onlineParticipants'] = onlineNumbers && onlineNumbers.length || 1;
            if (indexchat && indexchat.auto_created)
                indexchat['Online'] = onlineNumbers.length > 1;
        }
        this.changeDetector.detectChanges();
    }
    setOnlineStatus(response) {
        let indexchat = this.findChatThread(response.channel);
        if (!indexchat)
            return;
        if (indexchat.auto_created)
            indexchat['Online'] = true;
        if (!indexchat.auto_created) {
            indexchat['onlineParticipants'] = indexchat['onlineParticipants'] < indexchat['TotalParticipants'] ? indexchat['onlineParticipants'] + 1 : indexchat['onlineParticipants'];
        }
        this.changeDetector.detectChanges();
    }
    setOfflineStatus(response) {
        const indexchat = this.findChatThread(response.channel);
        if (indexchat && indexchat.auto_created)
            indexchat['Online'] = false;
        if (!indexchat.auto_created) {
            indexchat['onlineParticipants'] = indexchat['onlineParticipants'] > 2 ? indexchat['onlineParticipants'] - 1 : 1;
        }
        this.changeDetector.detectChanges();
    }
    setUserTyping(response) {
        if (response.from == this.currentUserData.ref_id)
            return;
        let indexchat = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(this.AllGroups, 'channel_name', response.to);
        let typinguser = indexchat["participants"].find(e => e.ref_id == response.from);
        if (response.content == '1') {
            indexchat['TypingUserList'] = (indexchat['TypingUserList'] || []);
            indexchat['TypingUserList'] = [...new Set([typinguser])];
        }
        else if (response.content == '0') {
            indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(e => e.ref_id != response.from);
        }
        indexchat['userTyping'] = indexchat['TypingUserList'].length && response.content != '0';
        let nameList = indexchat['TypingUserList'].map(userObj => userObj.full_name);
        if (nameList.length == 1) {
            indexchat['userTypingContent'] = nameList + ' ' + 'is typing...';
        }
        else if (nameList.length == 2) {
            indexchat['userTypingContent'] = nameList.join() + ' ' + 'are typing...';
        }
        else if (nameList.length > 2) {
            indexchat['userTypingContent'] = nameList.filter((i, j) => j < 2).join() + ' ' + 'and other are typing...';
        }
        // if (indexchat && indexchat.auto_created) {
        //   indexchat['userTyping'] = response.content != '0' && response.from != this.currentUserData.ref_id;
        //   indexchat['userTypingContent'] = (response.content == '1') ? sender + " is typing..." : "";
        // } else if (indexchat && !indexchat.auto_created) {
        //   this.setMultiUserTyping(response, typinguser, indexchat);
        // }
        this.changeDetector.detectChanges();
    }
    setMultiUserTyping(response, typinguser, indexchat) {
        if (response.content == '1') {
            indexchat['TypingUserList'] = [...new Set(typinguser)];
        }
        else if (response.content == '0') {
            indexchat['TypingUserList'] = indexchat['TypingUserList'].filter(e => e.ref_id != response.from);
        }
        this.changeDetector.detectChanges();
    }
    scroll() {
        setTimeout(() => {
            this.elRef.nativeElement.querySelector('.messagesBox').scrollTop = this.elRef.nativeElement.querySelector('.messagesBox').scrollHeight;
        }, 500);
    }
    changeSidebar($event) {
        this.threadType = $event;
        if (this.threadType == 'THREAD') {
            this.getAllGroups();
        }
    }
    newChat() {
        this.threadType = 'CHAT';
        this.changeDetector.detectChanges();
    }
    logout() {
        this.pubsubService.Disconnect();
        src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"].clearLocalStorge();
        this.router.navigate(['login']);
    }
    sortThread() {
        if (this.activeChat.id) {
            this.AllGroups.sort((a, b) => {
                return a.id == this.activeChat.id ? -1 : 1;
            });
        }
    }
    messageBy(chatthread, response) {
        if (this.isShowName(chatthread, response)) {
            const messageByObj = Object(src_app_shared_helpers_helpersFunctions__WEBPACK_IMPORTED_MODULE_5__["FindArrayObject"])(chatthread.participants, 'ref_id', response.from);
            response['messageBy'] = messageByObj && messageByObj.full_name || '';
        }
        return response;
    }
    isShowName(chatthread, response) {
        if (chatthread['chatHistory'].length && response.from) {
            const previourmessage = chatthread['chatHistory'][chatthread['chatHistory'].length - 1];
            return previourmessage.from != response.from;
        }
        return true;
    }
    pushMessage(thread, response) {
        let newResponse = {};
        newResponse = JSON.parse(JSON.stringify(response));
        if (response.type == 'text' || !response.content) {
            thread['chatHistory'].push(newResponse);
        }
        else {
            var foundIndex = thread.chatHistory.findIndex(x => x.id == response.id);
            thread.chatHistory[foundIndex] = response;
        }
    }
    getLastMessage(group) {
        const isactivethread = group.id == this.activeChat.id;
        if (!isactivethread && group.unReadCount) {
            return "Misread messages";
        }
        else if (group.type != 'text') {
            return group.type;
        }
        return group.lastMessage;
    }
    openImage(imagesrc) {
        this.popupimagesrc = imagesrc;
        this.changeDetector.detectChanges();
    }
    closeImage() {
        this.popupimagesrc = null;
        this.changeDetector.detectChanges();
    }
    closeModal() {
        this.editGroupModel = false;
        this.changeDetector.detectChanges();
    }
    isHideThread() {
        return this.isMobile() ? this.screen != 'CHAT' : false;
    }
    isHideChatScreen() {
        return this.isMobile() ? this.screen != 'MSG' : false;
    }
    backScreen() {
        this.threadType = "THREAD";
        this.screen = "CHAT";
        this.changeDetector.detectChanges();
    }
    isMobile() {
        return window.innerWidth < 768;
    }
}
ChatComponent.??fac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_10__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"])); };
ChatComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ChatComponent, selectors: [["chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.messageInputElement = _t.first);
    } }, decls: 44, vars: 16, consts: [[1, "row", "dashboardContainer"], [1, "col-sm-4", "leftSide", 3, "hidden"], [1, "leftSideHeader"], ["src", "./assets/images/logo2.png", 1, "dashboardLogo"], [1, "leftSideListContainer"], [4, "ngIf"], [1, "leftSideFooter"], [1, "logoutContainer", 3, "click"], ["src", "./assets/images/log-out.png", 1, "logoutLogo"], [1, "logoutText"], [1, "ml-1", 3, "ngClass"], [1, "col-sm-8", "rightSide", 3, "hidden"], [1, "rightSideHeader", "alignBottom", "chatholder"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], ["src", "./assets/images/arrow-left.png", "class", "arrowLeft hand", 3, "click", 4, "ngIf"], ["class", "roomNameText text-capitalize", 4, "ngIf"], [1, "messagesBox"], ["class", "chatRoomContainer", 4, "ngIf"], [1, "sendInputContainer", 3, "hidden"], [1, "sendInputWrapper"], ["type", "text", "class", "form-control", "placeholder", "Type to reply..", 3, "ngModel", "keyup", "ngModelChange", 4, "ngIf"], [1, "sendInputButtonContainer", "dropup", 2, "border-right", "1px solid #ebedf4"], ["src", "./assets/images/attachment.png", "data-toggle", "dropdown", 1, "sendIcon", "dropdown-toggle"], [1, "attachmentpopup", "dropdown-menu", "dropdown-menu-right", "selectOptionContainer"], [1, "attachmentPopHeader", "mx-3"], [1, "attachmentHeading"], [1, "attachmentPopContent", 3, "click"], [1, "attachmentTool"], [1, "attachmentToolIcon"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon"], ["type", "file", "id", "fileinput", 1, "d-none", 3, "change"], ["fileuploader", ""], [1, "sendInputButtonContainer", 3, "click"], ["src", "./assets/images/send.png", 1, "sendIcon"], ["id", "myModal", "class", "modal", 4, "ngIf"], [1, "leftSectionHeader", 2, "align-items", "center", "margin", "0px"], [1, "leftHeading"], [1, "createText", 3, "click"], ["class", "leftSectionEmptyContainer", 4, "ngIf"], [1, "listingContainer", "fullHeight"], [1, "chatListContainer", "noHorizontalPadding"], [4, "ngFor", "ngForOf"], [1, "leftSectionEmptyContainer"], [1, "noAvailableText"], [1, "tapText"], [1, "chatsCardContainer", "hand", 3, "click"], [1, "chatsCardLeft"], [1, "chatsNameWrap"], [1, "chatName", "text-capitalize"], ["class", "unreadBadge", 4, "ngIf"], ["class", "misreadMsg", 4, "ngIf"], ["class", "misreadMsg text-capitalize", 3, "ngClass", 4, "ngIf"], [1, "chatsCardRight", "mr-1"], [1, "dropdown", "mt-1", 2, "align-self", "flex-end"], ["src", "./assets/images/more.png", 1, "moreIcon"], [1, "dropdown-content"], [1, "edit", 3, "click"], [1, "delete", 3, "click"], [3, "ngClass", 4, "ngIf"], ["class", "cardOnlineStatus", 4, "ngIf"], [1, "unreadBadge"], [1, "misreadMsg"], [1, "misreadMsg", "text-capitalize", 3, "ngClass"], [3, "ngClass"], [1, "cardOnlineStatus"], [3, "setActiveChat", "changeEvent"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", "hand", 3, "click"], [1, "roomNameText", "text-capitalize"], ["class", "msgBy text-capitalize", 4, "ngIf"], [1, "bubbleContainer"], ["class", "bubble", 4, "ngIf"], ["class", "imgbubble", 4, "ngIf"], ["class", "imgbubble file-attachment", 4, "ngIf"], [1, "time"], [1, "msgBy", "text-capitalize"], [1, "bubble"], [1, "msgText"], [1, "imgbubble"], [3, "diameter", 4, "ngIf"], [1, "w-100", "msgImage", "img-thumbnail", "img-fluid", 3, "src", "click"], [3, "diameter"], [1, "imgbubble", "file-attachment"], [1, "w-100", "msgImage", "thumbnail", "img-fluid", 3, "src"], ["download", "", 3, "href"], [1, "chatRoomContainer"], [1, "listingContainer", 2, "height", "100%"], [1, "emptyListContainer"], [1, "emptyListTop"], ["src", "./assets/images/shipping.png", 1, "shippingIcon"], [1, "noConvoTextWrapper"], [1, "noConvoText"], [1, "noConvoSub", 2, "max-width", "200px"], [1, "emptyListBottom"], ["type", "submit", 1, "btn", "newChatButton", 3, "click"], ["type", "submit", 1, "btn", "refreshButton", 3, "click"], [1, "w-100"], ["src", "./assets/images/Document.png", 1, "attachmentItemIcon", "ml-4"], [1, "ml-2"], [1, "font-weight-bolder", "hand", "ml-2", "text-danger", 3, "click"], ["type", "text", "placeholder", "Type to reply..", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["messageInputElement", ""], ["id", "myModal", 1, "modal"], [1, "close", 3, "click"], ["id", "img01", 1, "modal-content", 3, "src"], [1, "createChatPopup"], [1, "chatPopupContent", "groupPopup"], [1, "modalHeader"], [1, "modalHeading"], ["src", "./assets/images/cross.png", 1, "modalCross", "hand", 3, "click"], [1, "modalContent"], [1, "w-100", 3, "formGroup", "submit"], [1, "modalContentHeading"], ["type", "text", "placeholder", "ex: Deeper team", "formControlName", "group_title", 1, "form-control"], [3, "control"], ["type", "submit", 1, "btn", "doneButton", "mt-3", 3, "disabled", "click"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, ChatComponent_ng_container_5_Template, 10, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, ChatComponent_ng_container_6_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, ChatComponent_ng_container_7_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_Template_div_click_9_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ChatComponent_img_17_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ChatComponent_p_18_Template, 2, 1, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ChatComponent_ng_container_20_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ChatComponent_div_21_Template, 16, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ChatComponent_ng_container_24_Template, 7, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, ChatComponent_input_25_Template, 2, 1, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "ADD ATTACHMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_Template_div_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r72); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39); return _r9.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ChatComponent_Template_input_change_38_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ChatComponent_Template_div_click_40_listener() { return ctx.sendTextMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, ChatComponent_div_42_Template, 5, 3, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, ChatComponent_div_43_Template, 15, 3, "div", 34);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.isHideThread());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.threadType === "THREAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.threadType === "GROUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.threadType === "CHAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("LOG OUT ", ctx.currentUserData.full_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.sdkconnected ? "online" : "offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", ctx.isHideChatScreen());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.activeChat.chatTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.activeChat.chatTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.activeChat.chatTitle && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("hidden", !ctx.activeChat.chatTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.fileToSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.fileToSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.popupimagesrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.editGroupModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _add_group_add_group_component__WEBPACK_IMPORTED_MODULE_15__["AddGroupComponent"], _new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_16__["NewChatComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_18__["GetErrorsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _shared_pipe_safeurl__WEBPACK_IMPORTED_MODULE_19__["SafeUrlPipe"]], styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.attachmentpopup[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  padding: 15px 5px;\n}\n\n.msgText[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n          hyphens: auto;\n  padding: 0;\n  margin: 0;\n  font-family: inter-regular;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  width: 60px !important;\n}\n\n\n\n.modal[_ngcontent-%COMP%] {\n  display: block;\n  \n  position: fixed;\n  \n  z-index: 1;\n  \n  padding-top: 100px;\n  \n  left: 0;\n  top: 0;\n  width: 100%;\n  \n  height: 100%;\n  \n  overflow: auto;\n  \n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.9);\n  \n}\n\n\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  width: 80%;\n  max-width: 700px;\n  border-radius: 6px !important;\n}\n\n@-webkit-keyframes zoom {\n  from {\n    -webkit-transform: scale(0);\n  }\n  to {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes zoom {\n  from {\n    transform: scale(0);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n\n\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 35px;\n  color: #f1f1f1;\n  font-size: 40px;\n  font-weight: bold;\n  transition: 0.3s;\n}\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  color: #bbb;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n\n@media only screen and (max-width: 700px) {\n  .modal-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.editgroup[_ngcontent-%COMP%] {\n  width: 485px;\n  margin: auto;\n}\n\n.chatholder[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.online[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background-color: green;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.offline[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  background: red;\n  border-radius: 50%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxqc19jaGF0XFxKUy1jaGF0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtVQUFBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0Usc0JBQUE7QUNHRjs7QURBQSwyQkFBQTs7QUFDQTtFQUNFLGNBQUE7RUFBZ0Isc0JBQUE7RUFDaEIsZUFBQTtFQUFpQixrQkFBQTtFQUNqQixVQUFBO0VBQVksZUFBQTtFQUNaLGtCQUFBO0VBQW9CLHdCQUFBO0VBQ3BCLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUFhLGVBQUE7RUFDYixZQUFBO0VBQWMsZ0JBQUE7RUFDZCxjQUFBO0VBQWdCLDRCQUFBO0VBQ2hCLHVCQUFBO0VBQWdDLG1CQUFBO0VBQ2hDLG9DQUFBO0VBQXNDLHFCQUFBO0FDWXhDOztBRFRBLDBCQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ1lGOztBRFRBO0VBQ0U7SUFDRSwyQkFBQTtFQ1lGO0VEVkE7SUFDRSwyQkFBQTtFQ1lGO0FBQ0Y7O0FEVEE7RUFDRTtJQUNFLG1CQUFBO0VDV0Y7RURUQTtJQUNFLG1CQUFBO0VDV0Y7QUFDRjs7QURSQSxxQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURQQTs7RUFFRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUEEsd0NBQUE7O0FBQ0E7RUFDRTtJQUNFLFdBQUE7RUNVRjtBQUNGOztBRFBBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNTRjs7QUROQTtFQUNFLDJCQUFBO0FDU0Y7O0FETEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1FGOztBREpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbU5hbWVUZXh0IHtcclxuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgY29sb3I6ICMzMTM5NGQ7XHJcbn1cclxuLmNoYXRidG4ge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGQ3ZGQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xyXG59XHJcblxyXG4uYXR0YWNobWVudHBvcHVwIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggNXB4O1xyXG59XHJcblxyXG4ubXNnVGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgaHlwaGVuczogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogaW50ZXItcmVndWxhcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLnRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQgKGltYWdlKSAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb20ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb20ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIHJpZ2h0OiAzNXB4O1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICNiYmI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmVkaXRncm91cCB7XHJcbiAgd2lkdGg6IDQ4NXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNoYXRob2xkZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuXHJcbi5vbmxpbmUge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLm9mZmxpbmUge1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsIi5yb29tTmFtZVRleHQge1xuICBmb250LWZhbWlseTogbWFucm9wZS1zZW1pYm9sZDtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XG4gIGNvbG9yOiAjMzEzOTRkO1xufVxuXG4uY2hhdGJ0biB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmVkZjQ7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBkN2RkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XG59XG5cbi5hdHRhY2htZW50cG9wdXAge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbn1cblxuLm1zZ1RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBoeXBoZW5zOiBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBpbnRlci1yZWd1bGFyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi50aHVtYm5haWwge1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4ubW9kYWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDE7XG4gIC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG4vKiBNb2RhbCBDb250ZW50IChpbWFnZSkgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgem9vbSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMzVweDtcbiAgY29sb3I6ICNmMWYxZjE7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jbG9zZTpob3Zlcixcbi5jbG9zZTpmb2N1cyB7XG4gIGNvbG9yOiAjYmJiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogMTAwJSBJbWFnZSBXaWR0aCBvbiBTbWFsbGVyIFNjcmVlbnMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZWRpdGdyb3VwIHtcbiAgd2lkdGg6IDQ4NXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jaGF0aG9sZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ub25saW5lIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ub2ZmbGluZSB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_9__["PubsubService"] }, { type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_10__["BaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }]; }, { messageInputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['messageInputElement']
        }] }); })();


/***/ }),

/***/ "./src/app/components/chat/new-chat/new-chat.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/chat/new-chat/new-chat.component.ts ***!
  \****************************************************************/
/*! exports provided: NewChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChatComponent", function() { return NewChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/fromEvent */ "./node_modules/rxjs/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "./node_modules/rxjs/internal/operators/debounceTime.js");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/distinctUntilChanged */ "./node_modules/rxjs/internal/operators/distinctUntilChanged.js");
/* harmony import */ var rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/mergeMap */ "./node_modules/rxjs/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/pubsub.service */ "./src/app/shared/services/pubsub.service.ts");
/* harmony import */ var src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["searchInput"];
function NewChatComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NewChatComponent_ng_container_22_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r96); const user_r94 = ctx.$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r95.startChat(user_r94); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const user_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](user_r94.full_name);
} }
class NewChatComponent {
    constructor(pubsubService, svc, dialog, toastr) {
        this.pubsubService = pubsubService;
        this.svc = svc;
        this.dialog = dialog;
        this.toastr = toastr;
        this.loading = true;
        this.AllUsers = [];
        this.CopyAllUsers = [];
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.setActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.searchInput) {
            Object(rxjs_internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'input')
                .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => event.target.value), Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_internal_operators_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_internal_operators_mergeMap__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(value => {
                this.loading = true;
                if (!value) {
                    const data = {
                        sorting: "ORDER BY full_name ASC",
                        search_field: "full_name",
                        search_value: '',
                        condition: "contains",
                    };
                    return this.svc.post('AllUsers', data).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
                        if (!(res.users && res.users.length)) {
                            res.users = [];
                        }
                        this.CopyAllUsers = [...res.users];
                        return res;
                    }));
                }
                const temparaay = [...this.CopyAllUsers];
                const filteruser = temparaay.filter(user => {
                    let searchValue = value.toLowerCase();
                    if (user.full_name.toLowerCase().startsWith(searchValue)) {
                        return -1;
                    }
                });
                const returnData = {
                    users: filteruser
                };
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(returnData);
            }))
                .subscribe(res => {
                this.loading = false;
                if (!res.users || !res.users.length) {
                    this.toastr.error("No contacts found", "Opps!");
                    this.AllUsers = [];
                }
                else {
                    this.AllUsers = res.users;
                }
            });
        }
    }
    backScreen() {
        this.changeEvent.emit("THREAD");
    }
    addGroupEvent() {
        this.changeEvent.emit("GROUP");
    }
    startChat(user) {
        if (this.loading)
            return;
        this.loading = true;
        let data = {
            group_title: user.full_name,
            participants: [user.user_id],
            auto_created: 1
        };
        this.svc.post('CreateGroup', data).subscribe(v => {
            if (v && v.status == 200) {
                let subscribedata = Object.assign(Object.assign({}, v.group), { key: v.group['channel_key'], channel: v.group['channel_name'] });
                let data = [];
                data.push(subscribedata);
                this.pubsubService.subscribeToChat(data);
                this.changeEvent.emit("THREAD");
                this.setActiveChat.emit(v.group);
                this.loading = false;
            }
        });
    }
}
NewChatComponent.??fac = function NewChatComponent_Factory(t) { return new (t || NewChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__["PubsubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"])); };
NewChatComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NewChatComponent, selectors: [["new-chat"]], viewQuery: function NewChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.searchInput = _t.first);
    } }, outputs: { changeEvent: "changeEvent", setActiveChat: "setActiveChat" }, decls: 23, vars: 1, consts: [[1, "newChatHeader"], [1, "newChatLeft", "hand"], ["src", "./assets/images/arrow-left.png", 1, "arrowLeft", 3, "click"], [1, "newChatHeading"], [1, "newChatRight", "hand"], ["src", "./assets/images/checkmark.png", 1, "goodMark"], [1, "newChatSearchBox"], [1, "input-group"], [1, "input-group-prepend"], ["src", "./assets/images/search.png", 1, "seacrchIcon"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["searchInput", ""], [1, "addGrpChat"], [1, "addGrpChatTop", "hand", 3, "click"], ["src", "./assets/images/Group Chat.png", 1, "addgrpIcon"], [1, "addGrpTitle"], [1, "addGrpSep"], [1, "cntct"], [1, "contactListContainer", "max-height"], [4, "ngFor", "ngForOf"], [1, "contactListCard", "hand", 3, "click"], [1, "contactListCardLeft"], ["src", "./assets/images/user.png", 1, "ListCardIcon"], [1, "ListCardName", "text-capitalize", "pb-1"], [1, "contactListCardRight", "justify-content-end", "pl-1"], ["src", "./assets/images/chat.png", 1, "pl-1", "ListCardButton", "hand"]], template: function NewChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NewChatComponent_Template_img_click_2_listener() { return ctx.backScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "New Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NewChatComponent_Template_div_click_14_listener() { return ctx.addGroupEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Add Group Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, NewChatComponent_ng_container_22_Template, 8, 1, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.AllUsers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]], styles: [".roomNameText[_ngcontent-%COMP%] {\n  font-family: manrope-semibold;\n  font-size: 34px;\n  line-height: 38px;\n  letter-spacing: -0.12px;\n  color: #31394d;\n}\n\n.chatbtn[_ngcontent-%COMP%] {\n  border-right: 1px solid #ebedf4;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #b0d7dd !important;\n  border: 1px solid #2196f3;\n}\n\n.selectuser[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  min-width: 30px;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L25ldy1jaGF0L0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxqc19jaGF0XFxKUy1jaGF0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGF0XFxuZXctY2hhdFxcbmV3LWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9uZXctY2hhdC9uZXctY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC9uZXctY2hhdC9uZXctY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tTmFtZVRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLXNlbWlib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBsaW5lLWhlaWdodDogMzhweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcclxuICBjb2xvcjogIzMxMzk0ZDtcclxufVxyXG4uY2hhdGJ0biB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWRmNDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdkZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5zZWxlY3R1c2VyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn0iLCIucm9vbU5hbWVUZXh0IHtcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtc2VtaWJvbGQ7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzMxMzk0ZDtcbn1cblxuLmNoYXRidG4ge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlZGY0O1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwZDdkZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xufVxuXG4uc2VsZWN0dXNlciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NewChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'new-chat',
                templateUrl: './new-chat.component.html',
                styleUrls: ['./new-chat.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_pubsub_service__WEBPACK_IMPORTED_MODULE_8__["PubsubService"] }, { type: src_app_shared_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"] }]; }, { changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchInput']
        }], setActiveChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/FormsHandler/FormsHandler */ "./src/app/shared/FormsHandler/FormsHandler.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");









class LoginComponent {
    constructor(router, _fb, auth) {
        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.loading = false;
        this.formError = '';
    }
    ngOnInit() {
        if (this.auth.islogin()) {
            this.router.navigate(['chat']);
        }
        this.buildForm();
        document.addEventListener("keyup", event => {
            if (event.code === 'Enter') {
                this.onLogin();
            }
        });
    }
    buildForm() {
        this.loginForm = this._fb.group({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14)])
        }, { updateOn: 'change' });
    }
    onLogin() {
        _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_3__["default"].validateForm(this.loginForm);
        if (this.loginForm.invalid)
            return;
        const saveData = this.loginForm.value;
        saveData.project_id = '123DGDVB';
        this.loading = true;
        this.formError = null;
        this.auth.login(saveData).subscribe(v => {
            this.loading = false;
            if (v && v.status == 200) {
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setUserData(v);
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setAuthToken(v.auth_token);
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].setAuthUsername(v.ref_id);
                this.router.navigate(['chat']);
                this.loginForm.reset();
            }
            else {
                this.formError = v.message;
            }
        });
    }
    ngOnDestroy() {
        this.loginForm.reset();
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["ngx-login"]], decls: 21, vars: 5, consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "email", "placeholder", "Email/Username", "formControlName", "email", 1, "form-control"], [3, "control"], ["type", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/signup"], [1, "text-muted"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function LoginComponent_Template_form_submit_8_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Version:2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("control", ctx.loginForm.get("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("control", ctx.loginForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_6__["GetErrorsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXFN1bW1lbiBaYWhpZFxcRGVza3RvcFxcY2FsbCB2ZG90b2sgYW5ndWxhclxcanNfY2hhdFxcSlMtY2hhdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlckhlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgICBjb2xvcjogIzE3MTcyNTtcclxufSIsIi53cmFwcGVySGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBtYW5yb3BlLW1lZGl1bTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMnB4O1xuICBjb2xvcjogIzE3MTcyNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/FormsHandler/FormsHandler */ "./src/app/shared/FormsHandler/FormsHandler.ts");
/* harmony import */ var src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/validators */ "./src/app/shared/validators.ts");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");










class SignUpComponent {
    constructor(router, _fb, auth) {
        this.router = router;
        this._fb = _fb;
        this.auth = auth;
        this.loading = false;
    }
    ngOnInit() {
        this.buildForm();
        document.addEventListener("keyup", event => {
            if (event.code === 'Enter') {
                this.onLogin();
            }
        });
    }
    buildForm() {
        this.loginForm = this._fb.group({
            'full_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].usernameValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]),
            'device_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'device_model': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('web', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'device_os_ver': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](navigator.platform, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [src_app_shared_validators__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }, { updateOn: 'change' });
        console.log('this.signupForm', this.loginForm);
    }
    onLogin() {
        _shared_FormsHandler_FormsHandler__WEBPACK_IMPORTED_MODULE_2__["default"].validateForm(this.loginForm);
        if (this.loginForm.invalid)
            return;
        const saveData = this.loginForm.value;
        saveData.project_id = '123DGDVB';
        this.loading = true;
        this.formError = null;
        this.auth.signup(saveData).subscribe(v => {
            this.loading = false;
            if (v && v.status == 200) {
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setUserData(v);
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setAuthToken(v.auth_token);
                src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].setAuthUsername(v.ref_id);
                this.router.navigate(['chat']);
                this.loginForm.reset();
            }
            else {
                this.formError = v.message;
            }
        });
    }
}
SignUpComponent.??fac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
SignUpComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SignUpComponent, selectors: [["sign-up"]], decls: 21, vars: 6, consts: [[1, "containerWrapper"], ["src", "./assets/images/logo2.png", 1, "logo"], [1, "innerWrapper"], [1, "wrapperHeading"], [1, "text-danger", "text-capitalize"], [1, "inputsContainer", "form-group"], [1, "w-100", 3, "formGroup", "submit"], ["type", "text", "placeholder", "Your Username", "formControlName", "full_name", 1, "form-control"], [3, "control"], ["type", "email", "placeholder", "Your Email", "formControlName", "email", 1, "form-control"], ["type", "password", "placeholder", "Your Password", "formControlName", "password", 1, "form-control"], [1, "buttonsContainer"], ["type", "submit", 1, "signButton", 3, "disabled", "click"], [1, "bottomLink"], ["routerLink", "/login"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Sign Up to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function SignUpComponent_Template_form_submit_8_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "form-errors", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignUpComponent_Template_button_click_16_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.formError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("control", ctx.loginForm.get("full_name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("control", ctx.loginForm.get("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("control", ctx.loginForm.get("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_7__["GetErrorsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".wrapperHeading[_ngcontent-%COMP%] {\n  font-family: manrope-medium;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 27px;\n  line-height: 32px;\n  text-align: center;\n  letter-spacing: -0.12px;\n  color: #171725;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwL0M6XFxVc2Vyc1xcU3VtbWVuIFphaGlkXFxEZXNrdG9wXFxjYWxsIHZkb3RvayBhbmd1bGFyXFxqc19jaGF0XFxKUy1jaGF0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaWduLXVwXFxzaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVySGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6IG1hbnJvcGUtbWVkaXVtO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEycHg7XHJcbiAgY29sb3I6ICMxNzE3MjU7XHJcbn0iLCIud3JhcHBlckhlYWRpbmcge1xuICBmb250LWZhbWlseTogbWFucm9wZS1tZWRpdW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTJweDtcbiAgY29sb3I6ICMxNzE3MjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/FormsHandler/FormsHandler.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/FormsHandler/FormsHandler.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormsHandler; });
class FormsHandler {
    /**
     * This method is use to validate Form
     * @param formErrors string
     * @param form  form instance | object
     * @return errors as string
     * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
     **/
    static validateForm(form) {
        if (form.valid) {
            return true;
        }
        else {
            if (form.controls) {
                for (const field in form.controls) {
                    const control = form.get(field);
                    if (control.invalid) {
                        control.markAsTouched({ onlySelf: true });
                    }
                }
            }
            return false;
        }
    }
    /**
    * this method is use to validate Form Array
    * @param formErrors string
    * @param form  form instance | object
    * @return errors as string
    * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
    **/
    static validateFormArray(form) {
        if (form.valid) {
            return true;
        }
        else {
            if (form.controls) {
                for (const group in form.controls) {
                    const groupFiled = form.get(group);
                    for (const field in groupFiled.controls) {
                        const control = groupFiled.get(field);
                        if (control.invalid) {
                            control.markAsTouched({ onlySelf: true });
                        }
                    }
                }
            }
            return false;
        }
    }
    static deleteEmptyFileds(data) {
        if (data) {
            for (const key in data) {
                if (data[key] == '' || data[key] == null) {
                    delete data[key];
                }
                if (data[key] && typeof data[key] === 'string') {
                    data[key] = data[key].trim();
                }
            }
            return data;
        }
    }
}


/***/ }),

/***/ "./src/app/shared/FormsHandler/get-errors.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/FormsHandler/get-errors.component.ts ***!
  \*************************************************************/
/*! exports provided: GetErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetErrorsComponent", function() { return GetErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GetErrorsComponent {
    hasErrors() {
        return this.control && this.control.errors && (this.control.dirty || this.control.touched);
    }
    listOfErrors() {
        const errors = Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
        return errors.length ? errors[0] : errors;
    }
    getMessage(type, params) {
        return GetErrorsComponent.errorMessages[type](params);
    }
}
GetErrorsComponent.errorMessages = {
    'required': () => 'The specified information is required.',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message,
    'invalidNumber': () => 'The specified information is invalid.',
    'emptySpaces': () => 'The specified information is invalid.',
    'email': () => 'Email is not valid',
    'invalidPassword': () => 'Password must be a minimum of 8 characters and contain at least 1 uppercase character and 1 numeric value',
    'invalidUsernameCharacters': () => 'invalid user name',
    'invalidInputCharacters': () => 'The specified information is invalid.',
    'invalidEmailAddress': () => 'Email is not valid',
};
GetErrorsComponent.??fac = function GetErrorsComponent_Factory(t) { return new (t || GetErrorsComponent)(); };
GetErrorsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: GetErrorsComponent, selectors: [["form-errors"]], inputs: { control: "control" }, decls: 2, vars: 1, consts: [[1, "text-danger"]], template: function GetErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.hasErrors() ? ctx.listOfErrors() : "", " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GetErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-errors',
                template: `
    <p class='text-danger'>
     {{hasErrors() ? listOfErrors() : ''}}
    </p>`,
            }]
    }], null, { control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/app-material/app-material.module.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/app-material/app-material.module.ts ***!
  \************************************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");



























const globalRippleConfig = { disabled: true };
class AppMaterialModule {
}
AppMaterialModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppMaterialModule });
AppMaterialModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppMaterialModule_Factory(t) { return new (t || AppMaterialModule)(); }, providers: [
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_RIPPLE_GLOBAL_OPTIONS"], useValue: globalRippleConfig }
    ], imports: [[
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
        ],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppMaterialModule, { imports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]], exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
                ],
                declarations: [],
                entryComponents: [],
                providers: [
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MAT_RIPPLE_GLOBAL_OPTIONS"], useValue: globalRippleConfig }
                ],
                exports: [
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["PlatformModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        const isAuthenticated = this.authService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AuthService {
    constructor(http) {
        this.http = http;
        this.userSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    login(data) {
        return this.http.post('Login', data);
    }
    signup(data) {
        return this.http.post('SignUp', data);
    }
    logout() {
        _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].clearLocalStorge();
    }
    getToken() {
        return _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].getAuthToken();
    }
    isAuthenticated() {
        return !!this.getToken();
    }
    islogin() {
        return !!this.getToken();
    }
    resetUser() {
        this.currentUserId = null;
        this.userRequest = null;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    getUserId() {
        const userdata = _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"].getUserData();
        return userdata._id;
    }
    isAuthUser() {
        return this.http.get('users/current-user');
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/helpers/helpersFunctions.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/helpers/helpersFunctions.ts ***!
  \****************************************************/
/*! exports provided: isEmptyObj, isEmptyArray, isEmail, FindObjectByValue, FindArrayObject, AutoUnsubscribe, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObj", function() { return isEmptyObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindObjectByValue", function() { return FindObjectByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindArrayObject", function() { return FindArrayObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoUnsubscribe", function() { return AutoUnsubscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
function isEmptyObj(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
function isEmptyArray(array) {
    if (!Array.isArray(array) || !array.length) {
        return true;
    }
    else {
        return false;
    }
}
function isEmail(email) {
    const emailLowercase = email.toLowerCase();
    if (email == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
        return true;
    }
    else {
        return false;
    }
}
function FindObjectByValue(inputArray, value) {
    return inputArray.find(e => e == value);
}
function FindArrayObject(inputArray, key, value) {
    return inputArray.find(e => e[key] == value);
}
function AutoUnsubscribe(constructor) {
    const original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
        for (const prop in this) {
            if (prop) {
                const property = this[prop];
                if (property && (typeof property.unsubscribe === 'function')) {
                    property.unsubscribe();
                }
            }
        }
        if (original && typeof original === 'function') {
            original.apply(this, arguments);
        }
        ;
    };
}
function isMobile() {
    return window.innerWidth < 768;
}


/***/ }),

/***/ "./src/app/shared/pipe/filter.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipe/filter.ts ***!
  \***************************************/
/*! exports provided: filterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPipe", function() { return filterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/base.service */ "./src/app/shared/services/base.service.ts");






class filterPipe {
    constructor(toastr, svc) {
        this.toastr = toastr;
        this.svc = svc;
    }
    transform(items, value) {
        if (!items)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        if (!value)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(items);
        const data = {
            "search_field": "full_name",
            "search_value": value,
            "condition": "contains",
        };
        return this.svc.post('AllUsers', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            if (res.status == 400) {
                this.toastr.error("No contacts found", "Opps!");
                return [];
            }
            return res.users;
        }));
    }
}
filterPipe.??fac = function filterPipe_Factory(t) { return new (t || filterPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"])); };
filterPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "filter", type: filterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](filterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipe/safeurl.ts":
/*!****************************************!*\
  !*** ./src/app/shared/pipe/safeurl.ts ***!
  \****************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafeUrlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.??fac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeUrlPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeUrl'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class BaseService {
    constructor(http) {
        this.http = http;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.userData$ = this.userData.asObservable();
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isLoadingResponse = this.isLoading.asObservable();
    }
    /**
    * This method is used to Call API using Http GET method.
    * @param URL
    * @return obserables responsce
    * @author  Muhammad Mukhtiar  <muhammad.mukhtiar@norgic.com>
    **/
    get(URL) {
        return this.http.get(URL);
    }
    /**
    * This method is use to add or update data using API
    * @param formData
    * @return obserables responsce
    * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
    **/
    save(URL, data = {}) {
        return this.http.post(URL, data);
    }
    /**
    * This method is used to Call API using Http Post method.
    * @param URL
    * @param URL
    * @return obserables responsce
    * @author  Mukhtiar Hussain <muhammad.mukhtiar@norgic.com>
    **/
    post(URL, payload = {}) {
        return this.http.post(URL, payload);
    }
}
BaseService.??fac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BaseService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: BaseService, factory: BaseService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](BaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/http.service.ts ***!
  \*************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");









class HttpService {
    constructor(router, svc) {
        this.router = router;
        this.svc = svc;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl;
    }
    intercept(req, next) {
        req = this.getModifiedReq(req);
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                if (event && event.body) {
                    const serRes = event.body;
                    this.svc.isLoading.next(false);
                    if (serRes.code === 401) {
                        _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].clearLocalStorge();
                        this.showErrorMsg(serRes.message);
                        this.router.navigate(['/login']);
                    }
                    else if (serRes.code === 407) {
                        // StorageService.clearLocalStorge();
                        this.showErrorMsg(serRes.message);
                        // this.router.navigate(['/auth/login']);
                    }
                    else if (serRes.code === 200 || serRes.code === 201) {
                    }
                    else {
                        this.showErrorMsg(serRes.message);
                    }
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(errorRes => {
            this.svc.isLoading.next(false);
            console.log('this should print your error!', errorRes.error);
            if (errorRes instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (errorRes.status === 500) {
                    // this.toastrService.danger('Opps!', "Something went wrong");
                }
                else {
                    this.showErrorMsg(errorRes.message);
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorRes);
        }));
    }
    ;
    getModifiedReq(req) {
        req = req.clone({ url: this.baseUrl + req.url });
        const formdata = JSON.stringify(req.body);
        const auth_token = _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"].getAuthToken();
        if (auth_token)
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + auth_token) });
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        req = req.clone({ body: formdata });
        return req;
    }
    showErrorMsg(errorResponse) {
        if (typeof errorResponse == 'string') {
            // this.toastrService.danger('Opps!', errorResponse);
        }
    }
}
HttpService.??fac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"])); };
HttpService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: HttpService, factory: HttpService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/pubsub.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/pubsub.service.ts ***!
  \***************************************************/
/*! exports provided: PubsubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubsubService", function() { return PubsubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");



class PubsubService {
    constructor() {
    }
    ngOnDestroy() {
        this.wsSubscription.unsubscribe();
    }
    initConfigure() {
        let user = _storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"].getUserData();
        this.Client = new MVDOTOK.Client({
            projectID: "123DGDVB",
            secret: "462a4b478d515fd35eae075eea059d89",
            host: `${user.messaging_server_map.protocol}://${user.messaging_server_map.host}:${user.messaging_server_map.port}`
        });
        this.Client.Register(user.ref_id.toString(), user.authorization_token.toString());
    }
    sendMessage(message) {
        this.Client.SendMessage(message);
    }
    subscribeToChat(groups) {
        groups.map(chanelObj => {
            this.Client.Subscribe(chanelObj);
        });
    }
    unsubscribeToChat(groups) {
        this.Client.UnSubscribe(groups);
    }
    Disconnect() {
        this.Client.Disconnect();
    }
    readMessage(chatMessages) {
        chatMessages.map(chat => {
            this.Client.SendReceipt(chat);
        });
    }
    readSingleMessage(chatMessages) {
        this.Client.SendReceipt(chatMessages);
    }
}
PubsubService.??fac = function PubsubService_Factory(t) { return new (t || PubsubService)(); };
PubsubService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: PubsubService, factory: PubsubService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PubsubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, { wsSubscription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
class StorageService {
    static clearLocalStorge() {
        localStorage.clear();
        sessionStorage.clear();
        return;
    }
    static getAuthToken() {
        return localStorage.getItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
    }
    static setAuthToken(token) {
        localStorage.setItem(StorageService.STORAGE_KEY_AUTH_TOKEN, token);
    }
    static removeAuthToken() {
        localStorage.removeItem(StorageService.STORAGE_KEY_AUTH_TOKEN);
    }
    static getAuthUsername() {
        return localStorage.getItem(StorageService.STORAGE_KEY_USER_NAME);
    }
    static setAuthUsername(username) {
        localStorage.setItem(StorageService.STORAGE_KEY_USER_NAME, username);
    }
    static removeAuthUsername() {
        localStorage.removeItem(StorageService.STORAGE_KEY_USER_NAME);
    }
    static setUserData(userData) {
        localStorage.setItem(StorageService.STORAGE_KEY_USER_DATA, JSON.stringify(userData));
    }
    static getUserData() {
        return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY_USER_DATA));
    }
    static removeUserData() {
        localStorage.removeItem(StorageService.STORAGE_KEY_USER_DATA);
    }
}
StorageService.STORAGE_KEY_AUTH_TOKEN = 'auth_token';
StorageService.STORAGE_KEY_USER_NAME = 'username';
StorageService.STORAGE_KEY_USER_DATA = 'user_data';


/***/ }),

/***/ "./src/app/shared/services/websocket.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/websocket.service.ts ***!
  \******************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class WebsocketService {
    constructor() {
        this.ready = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    initSocket(url) {
        this.webSocket = new WebSocket('wss://' + 'vtest3.vdotok.com:8443' + '/call');
        this.webSocket.onopen = () => this.ready.next();
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](observer => {
            this.webSocket.onmessage = (event) => observer.next(event);
            this.webSocket.onerror = (event) => observer.error(event);
            this.webSocket.onclose = (event) => observer.complete();
            // Callback invoked on unsubscribe
            return () => this.webSocket.close();
        });
    }
    send(message) {
        // if (this.webSocket.readyState === WebSocket.OPEN) {
        //   this.webSocket.send(message);
        // }
    }
    initPUBSUBSocket() {
        return new PUBSUB.Client({
            host: "ws://emit1.togee.io",
            port: "8080",
            credentials: {
                username: "john",
                password: ""
            },
            clientId: "12345",
            reConnectivity: true,
            secret: "cWV91camkwd99XO9rvHmamvXxGdyeHK5"
        });
    }
}
WebsocketService.??fac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: WebsocketService, factory: WebsocketService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, { ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/websocket.service */ "./src/app/shared/services/websocket.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/http.service */ "./src/app/shared/services/http.service.ts");
/* harmony import */ var _services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/pubsub.service */ "./src/app/shared/services/pubsub.service.ts");
/* harmony import */ var _FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormsHandler/get-errors.component */ "./src/app/shared/FormsHandler/get-errors.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _pipe_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/filter */ "./src/app/shared/pipe/filter.ts");
/* harmony import */ var _pipe_safeurl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe/safeurl */ "./src/app/shared/pipe/safeurl.ts");
















const components = [
    _FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_11__["GetErrorsComponent"],
    _pipe_filter__WEBPACK_IMPORTED_MODULE_13__["filterPipe"],
    _pipe_safeurl__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"]
];
class SharedModule {
}
SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
        _services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"],
        _services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__["PubsubService"],
        _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"],
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], multi: true },
    ], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SharedModule, { declarations: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_11__["GetErrorsComponent"],
        _pipe_filter__WEBPACK_IMPORTED_MODULE_13__["filterPipe"],
        _pipe_safeurl__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_FormsHandler_get_errors_component__WEBPACK_IMPORTED_MODULE_11__["GetErrorsComponent"],
        _pipe_filter__WEBPACK_IMPORTED_MODULE_13__["filterPipe"],
        _pipe_safeurl__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [...components],
                exports: [...components],
                providers: [
                    _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
                    _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
                    _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                    _services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"],
                    _services_pubsub_service__WEBPACK_IMPORTED_MODULE_10__["PubsubService"],
                    _services_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"],
                    { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"], useClass: _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], multi: true },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/validators.ts":
/*!**************************************!*\
  !*** ./src/app/shared/validators.ts ***!
  \**************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
class ValidationService {
    static specialCharValidator(control) {
        if (control.value == null || control.value.match(/^[a-zA-Z0-9._]*$/)) {
            return null;
        }
        else {
            return { 'invalidCharacters': true };
        }
    }
    static uppercaseCharacterRule(amount) {
        return function validate(control) {
            const value = control.value;
            if (value.length === 0) {
                return undefined;
            }
            const pattern = /[^A-Z]+/g;
            const stripped = value.replace(pattern, '');
            if (stripped.length < amount) {
                return { 'uppercaseCharacterRule': true };
            }
            return undefined;
        };
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const emailLowercase = control.value.toLowerCase();
        if (control.value == null || emailLowercase.match(/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
    }
    static emptySpacesValidator(control) {
        console.log('emptySpacesValidator', control, control.value);
        if (control.value.match(/([^\s])/)) {
            return null;
        }
        else {
            return { 'emptySpaces': true };
        }
    }
    static removeSpace(value) {
        return value.trim();
    }
    static englishWordsValidator(control) {
        console.log('englishWordsValidator', control);
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const tempstring = ValidationService.removeSpace(control.value);
        if (tempstring.match(/^[a-zA-Z]+( [\&a-zA-Z]+)*$/)) {
            return null;
        }
        else {
            return { 'invalidCharacters': true };
        }
    }
    static nameValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$/)) {
            return null;
        }
        else {
            return { 'invalidNameCharacters': true };
        }
    }
    static whiteSpaceValidator(control) {
        // RFC 2822 compliant regex
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^[-a-zA-Z\u0600-\u06FF0-9-()]+(\s+[-a-zA-Z\u0600-\u06FF0-9-()]+)*$/)) {
            return null;
        }
        else {
            return { 'invalidWhiteSpace': true };
        }
    }
    static phoneValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^\+?[0-9]+$/g)) {
            return null;
        }
        else {
            return { 'invalidPhone': true };
        }
    }
    static phoneUsernameEmailValidator(control) {
        if (control.value == null)
            return;
        let validEmail = true, validPhone = true, validUsername = true;
        if (ValidationService.emailValidator(control) != null) {
            validEmail = false;
        }
        if (!control.value.match(/^[a-zA-Z0-9]{5,17}$/)) {
            validUsername = false;
        }
        if (!control.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) {
            validPhone = false;
        }
        console.log('phoneUsernameEmailValidator', ValidationService.emailValidator(control), validEmail, validUsername, validPhone);
        if (validEmail || validUsername || validPhone)
            return null;
        return { 'invalidUsernameEmail': true };
    }
    static usernameValidator(control) {
        // RFC 2822 compliant regex
        if (control.value == null || control.value.match(/^[a-zA-Z0-9]+$/)) {
            return null;
        }
        else {
            return { 'invalidUsernameCharacters': true };
        }
    }
    static passwordValidator(control) {
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value && !ValidationService.uppercaseCharacterRule(1)(control) && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
    static MatchPassword(control, crud) {
        if (control.value == null)
            return null;
        return control.root.get('password').value != control.value ? { passworMismatch: true } : null;
    }
    static pinCodeValidator(control) {
        if (control.value && control.value.match(/^[0-9]{4}$/)) {
            return null;
        }
        else {
            return { 'invalidPinCode': true };
        }
    }
    static trimData(data) {
        if (data) {
            for (const key in data) {
                if (data[key] && typeof data[key] == "string") {
                    data[key] = data[key].trim();
                }
            }
            return data;
        }
    }
    static checkInteger(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (parseFloat(control.value) == 0 || (parseFloat(control.value) || parseInt(control.value)) && !isNaN(control.value)) {
            return null;
        }
        else {
            return { 'invalidNumber': true };
        }
    }
    static alphnumericValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (ValidationService.whiteSpaceValidator(control.value))
            return;
        // if (control.value.match(/^[^??!@??$%^&*_+???????#???????????????\\/<>?:;|=.,0-9]{1,500}$/)) {
        if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
        }
        else {
            return { 'invalidInputCharacters': true };
        }
    }
    static stringvalidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
            return null;
        }
        else {
            return { 'invalidInputCharacters': true };
        }
    }
    static disallowspecial(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^[A-Za-z0-9 ]+$/)) {
            return null;
        }
        else {
            return { 'invalidInputCharacters': true };
        }
    }
    static alphValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (control.value.match(/^\+?[A-Za-z]+$/g)) {
            return null;
        }
        else {
            return { 'invalidString': true };
        }
    }
    static numericValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        if (ValidationService.whiteSpaceValidator(control.value))
            return;
        const value = control.value.toString();
        if (value.match(/^\+?[0-9]+$/g)) {
            return null;
        }
        else {
            return { 'invalidNumeric': true };
        }
    }
    static floatNumberValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^[+-]?\d+(\.\d+)?$/g)) {
            return null;
        }
        else {
            return { 'invalidNumeric': true };
        }
    }
    static mackAddressValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
            return null;
        }
        else {
            return { 'invalidMackAddress': true };
        }
    }
    static gatewayAddressValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/g)) {
            return null;
        }
        else {
            return { 'invalidMackAddress': true };
        }
    }
    static ipValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/g)) {
            return null;
        }
        else {
            return { 'invalidIp': true };
        }
    }
    static domainNameValidator(control) {
        if (ValidationService.isEmptyInputValue(control.value))
            return null;
        const value = control.value.toString();
        if (value.match(/^(?=^.{1,254}$)(^(?:(?!\d+\.)[a-zA-Z0-9_\-]{1,63}\.?)+(?:[a-zA-Z]{2,})$)/g)) {
            return null;
        }
        else {
            return { 'invalidDomainName': true };
        }
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'https://s-tenant.vdotok.dev/API/v0/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Summen Zahid\Desktop\call vdotok angular\js_chat\JS-chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map