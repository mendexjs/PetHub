(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pet_match_pet_match_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pet-match/pet-match.component */ "./src/app/pet-match/pet-match.component.ts");
/* harmony import */ var _pet_care_pet_care_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet-care/pet-care.component */ "./src/app/pet-care/pet-care.component.ts");
/* harmony import */ var _pet_maps_pet_maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pet-maps/pet-maps.component */ "./src/app/pet-maps/pet-maps.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pet_match_add_pet_match_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pet-match-add/pet-match-add.component */ "./src/app/pet-match-add/pet-match-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _details_pet_details_pet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details-pet/details-pet.component */ "./src/app/details-pet/details-pet.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ng2_page_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-page-scroll */ "./node_modules/ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _my_pets_my_pets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-pets/my-pets.component */ "./src/app/my-pets/my-pets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: 'petmatch', component: _pet_match_pet_match_component__WEBPACK_IMPORTED_MODULE_3__["PetMatchComponent"] },
    { path: 'home', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__["PerfilComponent"] },
    { path: 'home/:id', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__["PerfilComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'petmatch/add', component: _pet_match_add_pet_match_add_component__WEBPACK_IMPORTED_MODULE_9__["PetMatchAddComponent"] },
    { path: 'petmatch/details-pet/:id', component: _details_pet_details_pet_component__WEBPACK_IMPORTED_MODULE_11__["DetailsPetComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pet_match_pet_match_component__WEBPACK_IMPORTED_MODULE_3__["PetMatchComponent"],
                _pet_care_pet_care_component__WEBPACK_IMPORTED_MODULE_4__["PetCareComponent"],
                _pet_maps_pet_maps_component__WEBPACK_IMPORTED_MODULE_5__["PetMapsComponent"],
                _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_6__["PerfilComponent"],
                _pet_match_add_pet_match_add_component__WEBPACK_IMPORTED_MODULE_9__["PetMatchAddComponent"],
                _details_pet_details_pet_component__WEBPACK_IMPORTED_MODULE_11__["DetailsPetComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _my_pets_my_pets_component__WEBPACK_IMPORTED_MODULE_15__["MyPetsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes, { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ng2_page_scroll__WEBPACK_IMPORTED_MODULE_13__["Ng2PageScrollModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details-pet/details-pet.component.css":
/*!*******************************************************!*\
  !*** ./src/app/details-pet/details-pet.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-family: 'open sans';\n    overflow-x: hidden; }\n\nimg {\n    max-width: 100%;\n    border-radius: 5px;\n}\n\n.preview {\n    display: flex;\n    flex-direction: column; }\n\n@media screen and (max-width: 996px) {\n    .preview {\n        margin-bottom: 20px; } }\n\n/*.preview-pic {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1; }\n*/\n\n.preview-thumbnail.nav-tabs {\n    border: none;\n    margin-top: 15px; }\n\n.preview-thumbnail.nav-tabs li {\n    width: 18%;\n    margin-right: 2.5%; }\n\n.preview-thumbnail.nav-tabs li img {\n    max-width: 100%;\n    display: block; }\n\n.preview-thumbnail.nav-tabs li a {\n    padding: 0;\n    margin: 0; }\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n    margin-right: 0; }\n\n.tab-content {\n    overflow: hidden; }\n\n.tab-content img {\n    width: 100%;\n    -webkit-animation-name: opacity;\n    animation-name: opacity;\n    -webkit-animation-duration: .3s;\n    animation-duration: .3s; }\n\n.card {\n    margin-top: 50px;\n    background: #eee;\n    padding: 3em;\n    line-height: 1.5em; }\n\n@media screen and (min-width: 997px) {\n    .wrapper {\n        display: flex; } }\n\n.details {\n    display: flex;\n    flex-direction: column; }\n\n.colors {\n    flex-grow: 1;\n    padding-top: 20px;\n}\n\n.product-title, .price, .sizes, .colors {\n    text-transform: UPPERCASE;\n    font-weight: bold; }\n\n.checked, .price span {\n    color: #ff9f1a; }\n\n.product-title, .rating, .product-description, .price, .vote, .sizes {\n    margin-bottom: 15px; }\n\n.product-description{\n    padding-top: 20px;\n}\n\ntable td{\n    margin-top: 20px;\n    border: 1px solid black;\n}\n\n.local{\n    padding-top: 50px;\n}\n\n.product-title {\n    margin-top: 0; }\n\n.size {\n    font-size: 16px;\n    padding-left: 15px;\n}\n\n.btnVoltar{\n    margin-top: 50px;\n}\n\n#id{\n    font-size: 14px;\n}\n\n.color {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    height: 2em;\n    width: 2em;\n    border-radius: 2px; }\n\n.add-to-cart, .like {\n    background: #ff9f1a;\n    padding: 1.2em 1.5em;\n    border: none;\n    text-transform: UPPERCASE;\n    font-weight: bold;\n    color: #fff;\n    transition: background .3s ease; }\n\n.add-to-cart:hover, .like:hover {\n    background: #b36800;\n    color: #fff; }\n\n.not-available {\n    text-align: center;\n    line-height: 2em; }\n\n.not-available:before {\n    font-family: fontawesome;\n    content: \"\\f00d\";\n    color: #fff; }\n\n.purple {\n    background: #9a43ad;\n    width: 30px;\n    height: 30px;\n}\n\n.blue {\n    background: #3bad9e;\n    width: 30px;\n    height: 30px;\n}\n\n.tooltip-inner {\n    padding: 1.3em; }\n\n@-webkit-keyframes opacity {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(3);\n        transform: scale(3); }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1); } }\n\n@keyframes opacity {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(3);\n        transform: scale(3); }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1); } }\n\n.informacoes{\n    padding-top: 20px;\n}\n\n.informacoes-mobile{\n    padding-top: 30px;\n}\n\n.informacoes-mobile p{\n    font-size: 16px;\n}\n\n.local-md{\n    display: none;\n}\n\n.informacoes-grande{\n    margin-top: 20px;\n}\n\ni{\n    color: #2bb44a;\n    padding-right: 30px;\n    font-size: 35px;\n}\n\n.header {\n    padding: 15px 20px 15px 20px;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);\n    position: fixed;\n    top: 0;\n    z-index: 99;\n    left: 0;\n    background-color: #fff;\n}\n\n.header h1, h4{\n    color: #1c7430;\n    display: inline;\n\n}\n\n@media screen and (min-width: 480px){\n    i{\n        font-size: 45px;\n    }\n\n}\n\n@media screen and (max-width: 370px) {\n    .lista-info{\n        display: block;\n    }\n    .tabela-breakpoint, .tabela-grande{\n        display: none;\n    }\n\n}\n\n@media screen and (max-width: 398px) {\n    .header #petmatch{\n        display: none;\n    }\n    .header #addLabel{\n        font-size: 26px;\n    }\n}\n\n@media screen and (max-width: 508px){\n    .header #petmatch{\n        font-size: 26px;\n    }\n    .header #addLabel{\n        font-size: 20px;\n    }\n}\n\n@media screen and (max-height: 320px) {\n    .header h1{\n        font-size: 0px;\n    }\n}\n\n@media screen and (min-width: 371px) and (max-width: 575px) {\n    .tabela-breakpoint{\n        display: block;\n    }\n    .lista-info, .tabela-grande{\n        display: none;\n    }\n}\n\n@media screen and (min-width: 768px) and (max-width: 991px) {\n    .tabela-breakpoint{\n        display: block;\n    }\n    .lista-info, .tabela-grande{\n        display: none;\n    }\n\n\n    table{\n        margin-top: 25px;\n    }\n    .local-md{\n        margin: 0 auto;\n        display: block;\n        margin-top: 20px;\n    }\n    .local{\n        display: none;\n    }\n}\n\n@media screen and (min-width: 576px) and (max-width: 767px){\n    .tabela-grande{\n        display: block;\n    }\n    .tabela-breakpoint, .lista-info{\n        display: none;\n    }\n}\n\n@media screen and (min-width: 992px){\n    .tabela-grande{\n        display: block;\n    }\n    .tabela-breakpoint, .lista-info{\n        display: none;\n    }\n}\n\n@media screen and (max-width: 767px){\n    .informacoes-grande{\n        display: none;\n    }\n    .informacoes-mobile{\n        display: block;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .informacoes-grande{\n        display: block;\n    }\n    .informacoes-mobile{\n        display: none;\n    }\n}"

/***/ }),

/***/ "./src/app/details-pet/details-pet.component.html":
/*!********************************************************!*\
  !*** ./src/app/details-pet/details-pet.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-12 header\">\n        <i class=\"fas fa-chevron-left fa-3x\" [routerLink]=\"['../../']\"></i>\n        <h1 id=\"petmatch\">Pet Match: </h1>\n        <h4 id=\"addLabel\">Detalhes: {{pet['nome_pet']}}</h4>\n    </div>\n    <div class=\"card\">\n        <div class=\"container-fliud\">\n            <div class=\"wrapper row\">\n                <div class=\"preview col-md-6\">\n\n                    <div class=\" tab-content\">\n                        <div class=\"tab-pane active\" id=\"pic-1\"><img src=\"{{serverUrl}}/imagem/{{pet['imagem']}}\"/></div>\n                    </div>\n\n\n                    <div class=\"informacoes-grande\">\n                        <h5 class=\"sizes\">CONTATO:\n                            <span class=\"size\" data-toggle=\"tooltip\" title=\"small\">{{pet['tel_contato']}}</span>\n                        </h5>\n                        <h5 class=\"colors\">Site:\n                            <span *ngIf=\"pet['site_contato'] != null\" class=\"size\" data-toggle=\"tooltip\" title=\"small\">{{pet['site_contato']}}</span>\n                            <span *ngIf=\"pet['site_contato'] == null\" class=\"size\" data-toggle=\"tooltip\" title=\"small\"> Não disponível</span>\n                        </h5>\n                        <h5 class=\"colors\" *ngIf=\"pet['comercial'] == 1\">\n                            <span class=\"color purple\" data-toggle=\"tooltip\" title=\"Este pet pertence a alguma ONG/Canil certificado.\"></span>Conta institucional\n                        </h5>\n                        <h5 class=\"colors\" *ngIf=\"pet['comercial'] == 0\">\n                            <span class=\"color blue\" data-toggle=\"tooltip\" title=\"Este pet pertence a um usuário comum da plataforma.\"></span>Conta de usuário\n                        </h5>\n                    </div>\n\n                </div>\n                <div class=\"details col-md-6\">\n                    <strong id=\"id\">ID: #{{ pet['id'] }}</strong>\n                    <h4 class=\"product-title\"> {{pet['nome_pet'] }},<span style=\"font-size: 16px;\"> {{ idade }} ano(s)</span></h4>\n\n                    <p class=\"product-description\"> {{ pet['descricao'] }}</p>\n                    <br/>\n                    <div class=\"tabela-grande\">\n                        <table class=\"table\">\n                            <thead class=\"thead-dark\">\n                            <p>Informações</p>\n                                <tr>\n                                    <th>Castrado</th>\n                                    <th>Pelagem</th>\n                                    <th>Sexo</th>\n                                    <th>Porte</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td *ngIf=\"pet['castrado'] ==0\"> Não é castrado. </td>\n                                    <td *ngIf=\"pet['castrado'] ==1\"> É castrado. </td>\n                                    <td> {{ pet['pelagem'] }} </td>\n                                    <td *ngIf=\"pet['sexo'] =='M'\"> Macho</td>\n                                    <td *ngIf=\"pet['sexo'] =='F'\"> Fêmea</td>\n                                    <td> {{ pet['porte'] }} </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n\n                    <div class=\"tabela-breakpoint\">\n                        <table class=\"table\">\n                            <thead class=\"thead-dark\">\n                            <p>Informações</p>\n                                <tr>\n                                    <th>Castrado</th>\n                                    <td *ngIf=\"pet['castrado'] ==0\"> Não é castrado. </td>\n                                    <td *ngIf=\"pet['castrado'] ==1\"> É castrado. </td>\n                                </tr>\n                            </thead>\n                            <thead class=\"thead-dark\">\n                                <tr>\n                                    <th>Pelagem</th>\n                                    <td>{{ pet['pelagem']}}</td>\n                                </tr>\n                            </thead>\n                            <thead class=\"thead-dark\">\n                                <tr>\n                                    <th>Sexo</th>\n                                    <td *ngIf=\"pet['sexo'] =='M'\"> Macho</td>\n                                    <td *ngIf=\"pet['sexo'] =='F'\"> Fêmea</td>\n                                </tr>\n                            </thead>\n                            <thead class=\"thead-dark\">\n                                <tr>\n                                    <th>Porte</th>\n                                    <td> {{ pet['porte'] }} </td>\n                                </tr>\n                            </thead>\n                        </table>\n                    </div>\n\n                    <div class=\"lista-info\">\n                        <p>Informações: </p>\n                        <ul>\n                            <li *ngIf=\"pet['castrado'] ==0\"> Não é castrado. </li>\n                            <li *ngIf=\"pet['castrado'] ==1\"> É castrado. </li>\n                            <li>Pelagem: {{pet['pelagem']}}</li>\n                            <li>Sexo: {{pet['sexo']}}</li>\n                            <li>Porte: {{pet['porte']}}</li>\n                        </ul>\n                    </div>\n                    <div class=\"local\">\n                        <h5 class=\"price\">Localização: <span class=\"size\"> {{ pet['endereco'] }} - {{ pet['cidade'] }}</span></h5>\n                        <p class=\"vote\"> Responsável: {{pet['nome_user']}} <strong> {{ pet['nota_avaliacao']}} ****º</strong></p>\n                    </div>\n\n                    <div class=\"informacoes-mobile\">\n                        <p class=\"sizes\">CONTATO:\n                            <span  data-toggle=\"tooltip\" title=\"Informações de Contato\">{{pet['tel_contato']}}</span>\n                        </p>\n                        <p class=\"sizes\">Site:\n                            <span *ngIf=\"pet['site_contato'] != null\"  data-toggle=\"tooltip\" title=\"Site para mais informações\">{{pet['site_contato']}}</span>\n                            <span *ngIf=\"pet['site_contato'] == null\"  data-toggle=\"tooltip\" title=\"Site não informado\"> Não disponível</span>\n                        </p>\n                        <p class=\"colors\" *ngIf=\"pet['comercial'] == 1\">\n                            <span class=\"color purple\" data-toggle=\"tooltip\" title=\"Este pet pertence a alguma ONG/Canil certificado.\"></span>Conta institucional\n                        </p>\n                        <p class=\"colors\" *ngIf=\"pet['comercial'] == 0\">\n                            <span class=\"color blue\" data-toggle=\"tooltip\" title=\"Este pet pertence a um usuário comum da plataforma.\"></span>Conta de usuário\n                        </p>\n                        <button [routerLink]=\"['../../']\" class=\"btn btn-dark col-sm-12 col-md-3 btnVoltar\"> < Voltar</button>\n                    </div>\n                </div>\n                <div class=\"local-md\">\n                    <h5 class=\"price\">Localização: <span class=\"size\"> {{ pet['endereco'] }} - {{ pet['cidade'] }}</span></h5>\n                    <p class=\"vote\"> Responsável: {{pet['nome_user']}} <strong> {{ pet['nota_avaliacao']}} ****º</strong></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\">"

/***/ }),

/***/ "./src/app/details-pet/details-pet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/details-pet/details-pet.component.ts ***!
  \******************************************************/
/*! exports provided: DetailsPetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPetComponent", function() { return DetailsPetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsPetComponent = /** @class */ (function () {
    function DetailsPetComponent(http, route, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.serverUrl = "http://54.233.88.185";
        this.id = null;
        this.pet = [];
        this.year = new Date().getFullYear();
        this.idade = null;
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
    }
    DetailsPetComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('user_id') || !localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
        this.http.get(this.serverUrl + "/api/doacao/" + this.id)
            .subscribe(function (data) {
            _this.pet = data[0];
            _this.idade = _this.year - data[0].ano_nascimento;
        });
        var tempo = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["timer"])(5000, 60000);
        this.subscription = tempo.subscribe(function (data) {
            _this.http.get(_this.serverUrl + "/api/auth/refresh/?token=" + localStorage.getItem('token'))
                .subscribe(function (data) {
                localStorage.setItem('token', data['newToken']);
            }, function (e) {
                _this.router.navigate(['/']);
            });
        });
    };
    DetailsPetComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DetailsPetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-pet',
            template: __webpack_require__(/*! ./details-pet.component.html */ "./src/app/details-pet/details-pet.component.html"),
            styles: [__webpack_require__(/*! ./details-pet.component.css */ "./src/app/details-pet/details-pet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsPetComponent);
    return DetailsPetComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav{\n    background-color: #071d0c;\n    padding-top: 50px;\n    padding-bottom: 160px;\n}\n.logo{\n    margin: 0 auto;\n}\n.logo h1{\n    font-family: 'Annie Use Your Telescope', cursive;\n    color: white;\n    display: inline;\n    font-size: 60px;\n    padding-left: 20px;\n}\n.conteudo h3{\n    font-family: 'Handlee', cursive;\n    font-size: 25px;\n    text-align: center;\n    color: #2bb34a;\n}\n.conteudo{\n    margin: 0 auto;\n    margin-top: 80px;\n}\n.conteudo p{\n    font-family: 'Delius', cursive;\n    font-size: 16px;\n    color: white;\n}\n#labelCadastro{\n    text-align: center;\n    font-size: 20px;\n    margin-top: 50px;\n}\ni{\n    color: #2bb34a;\n}\n.main{\n    padding-top: 30px;\n    background-color: white;\n}\n.errorDiv {\n    margin-bottom: 0px;\n}\n.fdb .ng-valid {\n    border-left: 5px solid #42A948; /* green */\n}\n.selects {\n    display:-ms-inline-grid;\n    display:inline-grid;\n}\n#fem, #masc{\n    width:15px;\n    display: inline;\n    box-shadow: 0 0 0 0, 0 0 0 0;\n}\n.fem, .masc{\n    display: inline-block;\n    margin: 0 auto;\n}\n#lblMasc, #lblFem{\n    font-size: 22px;\n    position: absolute;\n    padding-left: 10px;\n}\ninput, select, textarea{\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.19);\n}\n.popUp{\n    position: fixed;\n    border-radius: 8px;\n    background-color: #1a3219;\n    z-index: 200;\n    top: 25%;\n    color: #fff;\n    padding: 15px;\n}\n.header {\n    /* padding: 15px 20px 15px 20px; */\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);\n    position: fixed;\n    top: 0;\n    z-index: 99;\n    left: 0;\n    background-color: #fff;\n}\n#setaB{\n    display: none;\n}\n.header{\n    display: none;\n}\n#entrar{\n    float: right;\n    font-size: 22px;\n    padding: 3px 20px 8px 20px;\n}\n#cadastro{\n    float: left;\n    font-size: 22px;\n    padding: 3px 20px 8px 20px;\n}\n.popUp{\n    position: fixed;\n    border-radius: 8px;\n    border: 2px solid #2ec95c;\n    background-color: #fff;\n    z-index: 200;\n    top: 20%;\n    color: #000;\n    padding: 15px;\n}\n.popUp button{\n    width: 80px;\n}\n#fechar{\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding-right:20px;\n    padding-top: 10px;\n    cursor: pointer;\n}\n@media screen and (min-width: 768px) and (max-width: 1023px){\n    .popUp{\n        width: 300px;\n        right: 0;\n        margin-right: 5%;\n    }\n\n}\n@media screen and (min-width: 1024px) {\n    .popUp{\n        width: 400px;\n        right: 0;\n        margin-right: 11%;\n    }\n}\n@media screen and (min-width: 1400px) {\n    .popUp{\n        width: 400px;\n        right: 0;\n        margin-right: 15%;\n    }\n}\n@media screen and (min-width: 576px) and (max-width: 767px){\n    .popUp{\n        width: 400px;\n        left: calc(50% - 200px);\n    }\n\n}\n@media screen and (max-width: 768px){\n    #setaB{\n        display: block;\n    }\n    #setaA{\n        display: none;\n    }\n    .main{\n        padding-top: 100px;\n    }\n    .header{\n        display: block;\n    }\n    .row{\n        margin-top: 20px;\n    }\n\n}\n@media screen and (max-width: 991px){\n    .logo h1{\n        font-size: 40px;\n    }\n}\n.popUp button{\n    width: 80px;\n}\n.formulario-div{\n    margin: 0 auto;\n}\n#membro{\n    text-align: center;\n    padding-top: 25px;\n}\n#loginLabel{\n    cursor: pointer;\n\n    color: #007bff;\n}\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n        <div class=\"col-12 header col-xl-12\">\n            <a pageScroll href=\"#main\" id=\"cadastro\" class=\"btn\">Cadastro</a>\n            <a href=\"#\" id=\"entrar\" (click)=\"popupLogin=true\" class=\"btn\">Entrar</a>\n        </div>\n        <div class=\"col-12 col-md-10\" *ngIf=\"popupLogin\" style=\"margin: 0 auto;\">\n            <div class=\"popUp col-11 col-sm-8 col-md-5 col-lg-4 col-xl-4\" >\n                <div class=\"modal-header\">\n                    <h2 id=\"fechar\" (click)=\"popupLogin=false\">X</h2>\n                    <h5 class=\"modal-title\">Entrar: </h5>\n                </div>\n                <div class=\"modal-body\">\n                    <form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"loginSubmit()\">\n                        <input type=\"text\" id=\"email-login\" class=\"form-control\" placeholder=\"Seu email\" formControlName=\"email\" required>\n                        <input type=\"password\" id=\"senha_login\" class=\"form-control\" placeholder=\"Senha de acesso\" required formControlName=\"password\">\n                        <button type=\"submit\" [disabled]=\"loginForm.invalid || loginForm.pristine || loading\" class=\"btn btn-success\">Logar!</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"popUp col-9\" *ngIf=\"popup\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">PetHub!</h5>\n            </div>\n            <div class=\"modal-body\">\n                <p>{{msgPop}}</p>\n                <button (click)=\"popup=false\" class=\"btn btn-success\">OK!</button>\n            </div>\n        </div>\n\n    <div class=\"sidenav col-12 col-md-7 col-lg-7 col-xl-7\">\n        <div class=\"col-md-10 logo\">\n            <img class=\"col-6\" src=\"{{serverUrl}}/imagem/users/icon.png\">\n            <h1>Pet Hub</h1>\n        </div>\n\n        <div class=\"conteudo col-md-10\">\n            <h3>Bem vindo à maior plataforma para dono de Pets!</h3><br>\n            <p>&nbsp;&nbsp;&nbsp;Deseja <i>doar</i> um animal de estimação, ou até mesmo <i>adotar</i> um? <br>\n                &nbsp;&nbsp;&nbsp;Procurando <i>dicas</i> de cuidados, ou <i>estabelecimentos</i> por perto?<br>\n            </p>\n            <p id=\"labelCadastro\">Cadastre-se para obter acesso! &nbsp; <span id=\"setaA\" style=\"font-size: 28px;\">&#10144;</span><span id=\"setaB\" style=\"font-size: 28px;\">&#8681;</span></p>\n        </div>\n    </div>\n\n\n\n    <div class=\"main col-12 col-md-5 col-lg-5 col-xl-5\" id=\"main\">\n        <div class=\"col-11 formulario-div\">\n            <h3>Abrir uma conta</h3><br>\n            <form [formGroup]=\"formulario\" novalidate (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group fdb\" [ngClass]=\"aplicaCssErro('nome_user')\">\n                    <input type=\"text\" id=\"nome_user\" class=\"form-control\" placeholder=\"Nome\"\n                           formControlName=\"nome_user\">\n                    <div *ngIf=\"verificaValidTouched('nome_user')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Qual é o sem nome?</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group fdb\" [ngClass]=\"aplicaCssErro('email')\">\n                    <input type=\"text\" id=\"email\" class=\"form-control\" placeholder=\"Email \"\n                           formControlName=\"email\">\n                    <div *ngIf=\"verificaValidTouched('email')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Você precisará dele para se conectar.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group fdb\" [ngClass]=\"aplicaCssErro('senha')\">\n                    <input type=\"password\" id=\"senha\" class=\"form-control\" (input)=\"confirmaSenha()\" placeholder=\"Nova senha\"\n                           formControlName=\"senha\">\n                    <div *ngIf=\"verificaValidTouched('senha')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Crie uma nova senha de no mínimo 6 caracteres.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group fdb\" [ngClass]=\"aplicaCssErro('confirma_senha')\">\n                    <input type=\"password\" id=\"confirma_senha\" class=\"form-control\" placeholder=\"Repita sua nova senha\"\n                           formControlName=\"confirma_senha\" (input)=\"confirmaSenha()\">\n                    <div *ngIf=\"verificaValidTouched('confirma_senha') || confirmaPass\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>As senhas não coincidem.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group fdb\" [ngClass]=\"aplicaCssErro('localizacao')\">\n                    <input type=\"texy\" id=\"localizacao\" class=\"form-control\" placeholder=\"Digite sua cidade.\"\n                           formControlName=\"localizacao\">\n                    <div *ngIf=\"verificaValidTouched('localizacao')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Informe a cidade em que reside.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"col-12\" [ngClass]=\"aplicaCssErro('sexo')\">\n                        <div class=\"fem col-12 col-md-6\">\n                            <input type=\"radio\" name=\"sexo\" value=\"F\" class=\"form-control\" formControlName=\"sexo\" id=\"fem\">\n                            <label for=\"fem\" id=\"lblFem\">Feminino</label>\n                        </div>\n                        <div class=\"masc col-12 col-lg-6\">\n                            <input type=\"radio\" name=\"sexo\" value=\"M\" class=\"form-control\" formControlName=\"sexo\" id=\"masc\">\n                            <label for=\"masc\" id=\"lblMasc\">Masculino</label>\n                        </div>\n                        <div  *ngIf=\"verificaValidTouched('sexo')\">\n                            <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                            <span class=\"sr-only\">(error)</span>\n                            <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                                <p>Informe seu sexo.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label>Data de Nascimento</label>\n                    <br>\n                    <div class=\"col-4 selects\" [ngClass]=\"aplicaCssErro('dia_nasc')\">\n                        <select id=\"dia_nasc\" formControlName=\"dia_nasc\" class=\"form-control\">\n                            <option value=\"\">Dia</option>\n                            <option value=\"1\">1</option>\n                        </select>\n                        <div  *ngIf=\"verificaValidTouched('dia_nasc')\">\n                            <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                            <span class=\"sr-only\">(error)</span>\n                            <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                                <p>Selecione o dia que nasceu.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-4 selects\" [ngClass]=\"aplicaCssErro('mes_nasc')\">\n                        <select id=\"mes_nasc\" formControlName=\"mes_nasc\" class=\"form-control\">\n                            <option value=\"\">Mês</option>\n                            <option value=\"2\">2</option>\n                        </select>\n                        <div  *ngIf=\"verificaValidTouched('mes_nasc')\">\n                            <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                            <span class=\"sr-only\">(error)</span>\n                            <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                                <p>Selecione o mês que nasceu.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-4 selects\" [ngClass]=\"aplicaCssErro('ano_nasc')\">\n                        <select id=\"ano_nasc\" formControlName=\"ano_nasc\" class=\"form-control\">\n                            <option value=\"\">Ano</option>\n                            <option value=\"12\">2012</option>\n                        </select>\n                        <div  *ngIf=\"verificaValidTouched('ano_nasc')\">\n                            <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                            <span class=\"sr-only\">(error)</span>\n                            <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                                <p>Selecione o ano que nasceu.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-12\"> <button type=\"submit\" [disabled]=\"formulario.invalid || formulario.pristine || loading || confirmaPass\"  class=\"btn btn-success col-12\" >Cadastre-se <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"loading\"></i></button></div>\n            </form>\n            <p id=\"membro\"> Já é um membro? <span id=\"loginLabel\" (click)=\"popupLogin=true\">Faça login</span> </p>\n        </div>\n    </div>\n</div>\n<link href=\"https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Delius|Handlee\" rel=\"stylesheet\">"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, fb) {
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.serverUrl = "http://54.233.88.185";
        this.popupLogin = false;
        this.popup = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //checando se está autenticado
        this.http.get(this.serverUrl + "/api/auth/check/?token=" + localStorage.getItem('token'))
            .subscribe(function (data) {
            _this.router.navigate(['/home']);
        }, function (e) {
            localStorage.removeItem('token');
            localStorage.removeItem('user_id');
        });
        this.createForm();
        this.createLoginForm();
    };
    LoginComponent.prototype.createForm = function () {
        this.formulario = this.fb.group({
            nome_user: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            senha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirma_senha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            localizacao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sexo: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dia_nasc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2)]],
            mes_nasc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(2)]],
            ano_nasc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(4)]]
        });
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.loading = true;
        this.http.post(this.serverUrl + '/api/auth/login', {
            "email": this.loginForm.get('email').value,
            "password": this.loginForm.get('password').value
        })
            .subscribe(function (data) {
            _this.loading = false;
            if (data['status']) {
                _this.popUp("Usuário ou senha incorretos");
            }
            else {
                console.log("login success");
                localStorage.setItem('user_id', data['user_id']);
                localStorage.setItem('token', data['access_token']);
                _this.router.navigate(['/home']);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        //this.criarForm(form);
        this.http.post(this.serverUrl + '/api/user', formModel)
            .subscribe(function (data) {
            _this.loading = false;
            if (data['status'] == 424) {
                _this.popUp("Preencha o formulario corretamente");
            }
            else {
                _this.popUp("Cadastrado efetuado com Sucesso!");
                _this.http.post(_this.serverUrl + '/api/auth/login', {
                    "email": _this.formulario.get('email').value,
                    "password": _this.formulario.get('senha').value
                })
                    .subscribe(function (data) {
                    console.log("login success");
                    localStorage.setItem('user_id', data['user_id']);
                    localStorage.setItem('token', data['access_token']);
                    _this.router.navigate(['/home']);
                });
            }
        });
    };
    LoginComponent.prototype.popUp = function (msg) {
        this.msgPop = msg;
        this.popup = true;
    };
    LoginComponent.prototype.confirmaSenha = function () {
        this.confirmaPass = (this.formulario.get('senha').value != this.formulario.get('confirma_senha').value);
    };
    LoginComponent.prototype.prepareSave = function () {
        var nasc = this.formulario.get('ano_nasc').value + "-" + this.formulario.get('mes_nasc').value + "-" + this.formulario.get('dia_nasc').value;
        var form = new FormData();
        form.append('nome_user', this.formulario.get('nome_user').value);
        form.append('email', this.formulario.get('email').value);
        form.append('senha', this.formulario.get('senha').value);
        form.append('localizacao', this.formulario.get('localizacao').value);
        form.append('sexo', this.formulario.get('sexo').value);
        form.append('data_nasc', nasc);
        return form;
    };
    LoginComponent.prototype.verificaValidTouched = function (campo) {
        return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
    };
    LoginComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo),
        };
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-pets/my-pets.component.css":
/*!***********************************************!*\
  !*** ./src/app/my-pets/my-pets.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerPets{\n    padding: 5px;\n    margin-top: 25px;\n}\n.img-pet{\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);\n    margin-bottom: 2%;\n    background-color: #fcfcfc;\n    height: 250px;\n    padding: 10px 15px 0px 15px;\n\n}\n.corte{\n    cursor: pointer;\n    width: 100%;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n    border-radius: 5px;\n    margin-top: 5px;\n}\n.ghost{\n    margin: 0 auto;\n}\n.nomePet{\n    position: absolute;\n    bottom: 0;\n    left: 35px;\n    font-size: 17px;\n}\n.controlMyPets{\n    margin-bottom: 15px;\n}\n.labelMyPets h1{\n    margin:0 auto;\n    color: #10451d;\n    font-family: 'Annie Use Your Telescope', cursive;\n}\n.deletar{\n    font-size: 22px;\n    position: absolute;\n    right: 10px;\n    color: #b61e00;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/my-pets/my-pets.component.html":
/*!************************************************!*\
  !*** ./src/app/my-pets/my-pets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container containerPets\">\n\n  <div class=\"row labelMyPets\"> <h1>Seus Pets</h1></div>\n  <hr>\n\n  <div class=\"row controlMyPets\">\n    <button class=\"btn btn-success col-8\" [routerLink]=\"['/petmatch/add']\"> Adicionar Pet</button>\n    <button *ngIf=\"delete==0\" class=\"btn btn-danger col-4\" (click)=\"deleteVisible()\">Excluir Pet</button>\n    <button *ngIf=\"delete==1\" class=\"btn btn-outline-info col-4\" (click)=\"deleteInvisible()\">Concluir</button>\n  </div>\n\n  <div class=\"containerFotos row\">\n    <div class=\"card col-xl-4 col-lg-6 col-md-6 col-sm-12  img-pet\" *ngFor=\"let pet of pets\"  [routerLink]=\"['/petmatch/details-pet/' + pet.id]\">\n        <i class=\"fas fa-trash-alt deletar\" *ngIf=\"delete==1\" (click)=\"open(content, pet.id, pet.nome_pet)\"></i>\n        <img class=\"corte\" src=\"{{serverUrl}}/imagem/{{pet.imagem}}\">\n        <span class=\"nomePet\">{{ pet.nome_pet }}</span>\n    </div>\n  </div>\n\n  <!-- ghost -->\n  <div class=\"col-xl-3 col-lg-4 col-md-5 col-sm-6  ghost\"></div>\n  <div class=\"col-xl-3 col-lg-4 col-md-5 col-sm-6  ghost\"></div>\n  <div class=\"col-xl-3 col-lg-4 col-md-5 col-sm-6  ghost\"></div>\n</div>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Excluir!</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"this.modalService.dismissAll()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Você tem certeza que quer deletar: {{deletarPetNome}}?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-danger\" (click)=\"this.modalService.dismissAll()\">Cancelar</button>\n    <button class=\"btn btn-success\" (click)=\"deletar(deletarPet)\">Confirmar</button>\n  </div>\n</ng-template>\n<link href=\"https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Delius|Handlee\" rel=\"stylesheet\">"

/***/ }),

/***/ "./src/app/my-pets/my-pets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/my-pets/my-pets.component.ts ***!
  \**********************************************/
/*! exports provided: MyPetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPetsComponent", function() { return MyPetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyPetsComponent = /** @class */ (function () {
    function MyPetsComponent(http, router, modalService) {
        this.http = http;
        this.router = router;
        this.modalService = modalService;
        this.serverUrl = "http://54.233.88.185";
        this.pets = [];
        this.delete = 0;
        this.deletarPet = null;
        this.deletarPetNome = null;
    }
    MyPetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.serverUrl + "/api/perfil/doacao?token=" + localStorage.getItem('token'))
            .subscribe(function (data) {
            _this.pets = data;
        });
    };
    MyPetsComponent.prototype.open = function (content, id, nomePet) {
        this.deletarPet = id;
        this.deletarPetNome = nomePet;
        this.modalService.open(content);
    };
    MyPetsComponent.prototype.deleteVisible = function () {
        this.deletarPet = null;
        this.deletarPetNome = null;
        this.delete = 1;
    };
    MyPetsComponent.prototype.deleteInvisible = function () {
        this.deletarPetNome = null;
        this.deletarPet = null;
        this.delete = 0;
    };
    MyPetsComponent.prototype.deletar = function (idPet) {
        var _this = this;
        this.http.delete(this.serverUrl + "/api/doacao/" + idPet + "/?token=" + localStorage.getItem('token'))
            .subscribe(function (data) {
            _this.ngOnInit();
        });
    };
    MyPetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-pets',
            template: __webpack_require__(/*! ./my-pets.component.html */ "./src/app/my-pets/my-pets.component.html"),
            styles: [__webpack_require__(/*! ./my-pets.component.css */ "./src/app/my-pets/my-pets.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], MyPetsComponent);
    return MyPetsComponent;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.component.css":
/*!*********************************************!*\
  !*** ./src/app/perfil/perfil.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".perfil{\n    height: 800px;\n    padding: 10px;\n}\n.perfil{\n    background-color: #eeeeee;\n}\n.lateral-nav{\n    background-color: #e5e5e5;\n    position: fixed;\n    right: 20px;\n    padding: 10px;\n}\n.petmatch, .petcare, .petmaps{\n    height: 190px;\n    margin-bottom: 20px;\n    cursor: pointer;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.4), 0 2px 10px 0 rgba(0,0,0,0.28);\n}\n.petmatch{\n    background-color: #149a45;\n}\n.petcare{\n    background-color: #0c8e9e;\n}\n.petmaps{\n    background-color: #6313ca;\n}\n.fotoPerfil{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);\n}\n.glyphicon {  margin-bottom: 10px;margin-right: 10px;}\nsmall {\n    display: block;\n    line-height: 1.428571429;\n    color: #999;\n}\n.star{\n    color: #c8a400;\n}\nsmall{\n    font-size: 14px;\n}\n.dadosPerfil{\n    padding-left: 30px;\n}\n.cardPerfil{\n    padding: 8px;\n    background-color: #f7f7f7;\n    border-radius: 5px;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);\n}\n.iconesCard{\n    color: #eeeeee;\n}\n.tituloCard{\n    color: #eeeeee;\n    font-size: 28px;\n}\n.headerCard{\n    padding: 30px;\n}\n.descricao{\n    color: #fff;\n    font-style: italic;\n    font-size: 18px;\n\n}\n.myPets{\n    padding: 10px;\n}\n.sair{\n    position: absolute;\n    right: 15px;\n    color: #c13b18;\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/perfil/perfil.component.html":
/*!**********************************************!*\
  !*** ./src/app/perfil/perfil.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row conteudo\">\n    <div class=\"col-8 perfil\">\n\n        <div class=\"container cardPerfil\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <div class=\"well well-sm\">\n                        <div class=\"row\">\n                            <div class=\"col-3\">\n                                <img src=\"{{serverUrl}}/imagem/users/{{user['imagem']}}\" class=\"img-rounded img-responsive fotoPerfil\" />\n                            </div>\n                            <div class=\"col-9 dadosPerfil\">\n                                <i class=\"fas fa-power-off fa-2x sair\" ngbTooltip=\"Sair\" placement=\"right\" (click)=\"sair()\"></i>\n                                <h4> {{ user['nome_user'] }}<span placement=\"right\" ngbTooltip=\"Sua nota de avaliação\"><i class=\"fas fa-star star\"></i><i class=\"fas fa-star star\"></i><i class=\"fas fa-star star\"></i><i class=\"fas fa-star-half-alt star\"></i><i class=\"far fa-star star\"></i></span></h4>\n                                <small><cite>Bragança Paulista, SP &nbsp;<i class=\"fas fa-map-marker-alt\">\n                                </i></cite></small>\n                                <p>\n                                    <i class=\"fas fa-envelope\"></i> {{ user['email']}}\n                                    <br />\n                                    <span *ngIf=\"user['comercial']==0\"><i class=\"fas fa-user\"></i> Usuário Normal</span>\n                                    <span *ngIf=\"user['comercial']==1\"><i class=\"fas fa-user-tie\"></i> Usuário Comercial</span>\n                                    <br />\n                                    <i class=\"fas fa-sync-alt\"></i> Atualizado em: {{user['updated_at']}}</p>\n                                <div class=\"col\">\n                                    <div ngbDropdown class=\"d-inline-block\"  ngbTooltip=\"Atualize seus dados\">\n                                        <button class=\"btn btn-outline-dark\" id=\"dropdownEditar\" ngbDropdownToggle ><i class=\"fas fa-pen\"></i> Editar</button>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownEditar\">\n                                            <button class=\"dropdown-item\">Atualizar perfil</button>\n                                            <button class=\"dropdown-item\">Trocar foto</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"myPets\">\n            <app-my-pets></app-my-pets>\n        </div>\n    </div>\n    <div class=\"col-4 lateral-nav\">\n        <div class=\"col-12 petmatch\" [routerLink]=\"['/petmatch']\">\n            <div class=\"headerCard\"><i class=\"fas fa-hand-holding-heart fa-4x iconesCard\"></i> <span class=\"tituloCard\"> #PetMatch</span></div>\n            <p class=\"descricao\"> Busque por adoção de Pets por perto de você!</p>\n        </div>\n        <div class=\"col-12 petcare\" [routerLink]=\"['#']\">\n            <div class=\"headerCard\"><i class=\"fas fa-paw fa-4x iconesCard\"></i><span class=\"tituloCard\"> #PetCare</span></div>\n            <p class=\"descricao\"> Uma sessão de dicas e guias para te ajudar a cuidar melhor do seu amigo!</p>\n        </div>\n        <div class=\"col-12 petmaps\" [routerLink]=\"['#']\">\n            <div class=\"headerCard\"><i class=\"fas fa-map-signs fa-4x iconesCard\"></i><span class=\"tituloCard\"> #PetMaps</span></div>\n            <p class=\"descricao\"> Um mapa completo para te ajudar a encontrar clínicas, petshops e muito mais!</p>\n        </div>\n    </div>\n\n</div>\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\">"

/***/ }),

/***/ "./src/app/perfil/perfil.component.ts":
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(http, route, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.serverUrl = "http://54.233.88.185";
        this.id = null;
        this.user = [];
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        //verificando autenticação
        this.http.get(this.serverUrl + "/api/auth/check/?token=" + localStorage.getItem('token'))
            .subscribe(function (data) {
            true;
        }, function (e) {
            _this.router.navigate(['/']);
        });
        // seu perfil
        if (this.id != null) {
            this.http.get(this.serverUrl + "/api/perfil/" + this.id)
                .subscribe(function (data) {
                _this.user = data[0];
            });
        }
        else {
            this.http.get(this.serverUrl + "/api/perfil?token=" + localStorage.getItem('token'))
                .subscribe(function (data) {
                _this.user = data[0];
            }, function (e) {
                _this.router.navigate(['/']);
            });
        }
        var tempo = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["timer"])(5000, 60000);
        this.subscription = tempo.subscribe(function (data) {
            _this.http.get(_this.serverUrl + "/api/auth/refresh/?token=" + localStorage.getItem('token'))
                .subscribe(function (data) {
                localStorage.setItem('token', data['newToken']);
            }, function (e) {
                _this.router.navigate(['/']);
            });
        });
    };
    PerfilComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PerfilComponent.prototype.sair = function () {
        this.subscription.unsubscribe();
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/pet-care/pet-care.component.css":
/*!*************************************************!*\
  !*** ./src/app/pet-care/pet-care.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pet-care/pet-care.component.html":
/*!**************************************************!*\
  !*** ./src/app/pet-care/pet-care.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pet-care works!\n</p>\n"

/***/ }),

/***/ "./src/app/pet-care/pet-care.component.ts":
/*!************************************************!*\
  !*** ./src/app/pet-care/pet-care.component.ts ***!
  \************************************************/
/*! exports provided: PetCareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetCareComponent", function() { return PetCareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PetCareComponent = /** @class */ (function () {
    function PetCareComponent() {
    }
    PetCareComponent.prototype.ngOnInit = function () {
    };
    PetCareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-care',
            template: __webpack_require__(/*! ./pet-care.component.html */ "./src/app/pet-care/pet-care.component.html"),
            styles: [__webpack_require__(/*! ./pet-care.component.css */ "./src/app/pet-care/pet-care.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PetCareComponent);
    return PetCareComponent;
}());



/***/ }),

/***/ "./src/app/pet-maps/pet-maps.component.css":
/*!*************************************************!*\
  !*** ./src/app/pet-maps/pet-maps.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pet-maps/pet-maps.component.html":
/*!**************************************************!*\
  !*** ./src/app/pet-maps/pet-maps.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pet-maps works!\n</p>\n"

/***/ }),

/***/ "./src/app/pet-maps/pet-maps.component.ts":
/*!************************************************!*\
  !*** ./src/app/pet-maps/pet-maps.component.ts ***!
  \************************************************/
/*! exports provided: PetMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetMapsComponent", function() { return PetMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PetMapsComponent = /** @class */ (function () {
    function PetMapsComponent() {
    }
    PetMapsComponent.prototype.ngOnInit = function () {
    };
    PetMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-maps',
            template: __webpack_require__(/*! ./pet-maps.component.html */ "./src/app/pet-maps/pet-maps.component.html"),
            styles: [__webpack_require__(/*! ./pet-maps.component.css */ "./src/app/pet-maps/pet-maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PetMapsComponent);
    return PetMapsComponent;
}());



/***/ }),

/***/ "./src/app/pet-match-add/pet-match-add.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pet-match-add/pet-match-add.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#file_name{\n    height: 100%;\n}\n.container{\n    background-color: #f6f6f6;\n    padding: 10px;\n    border-radius: 5px;\n}\n#labelForm{\n    padding: 20px;\n    font-family: 'Annie Use Your Telescope', cursive;\n    color: #3a8526;\n}\nbutton{\n    float: right;\n}\n.errorDiv {\n    margin-bottom: 0px;\n}\ni{\n    color: #2bb44a;\n    padding-right: 30px;\n    font-size: 35px;\n}\n.fdb .ng-valid {\n    border-left: 5px solid #42A948; /* green */\n}\n.selects {\n   display: -ms-inline-grid;\n   display: inline-grid;\n}\n.voltarSeta{\n    cursor: pointer;\n}\ntextarea{\n    border-radius: 5px;\n}\n@media screen and (min-width: 480px){\n    i{\n        font-size: 45px;\n    }\n\n}\n@media screen and (max-width: 480px) {\n    .header #petmatch{\n        font-size: 26px;\n    }\n    .header #addLabel{\n        font-size: 20px;\n    }\n}\n@media screen and (max-width: 380px) {\n    .header #petmatch{\n        display: none;\n    }\n    .header #addLabel{\n        font-size: 26px;\n    }\n}\n@media screen and (max-height: 320px) {\n    .header h1{\n        font-size: 0px;\n    }\n}\n.header {\n    padding: 12px 0px 18px 0px;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);\n    position: fixed;\n    top: 0;\n    z-index: 99;\n    left: 0;\n    background-color: #fff;\n}\n.header h1, h4{\n    color: #1c7430;\n    display: inline;\n\n}\ninput, select, textarea{\n    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 1px 3px 0 rgba(0,0,0,0.19);\n}\n.popUp{\n    position: fixed;\n    border-radius: 8px;\n    background-color: #1a3219;\n    z-index: 200;\n    top: 25%;\n    color: #fff;\n    padding: 15px;\n}\n@media screen and (min-width: 768px){\n    .popUp{\n        left: calc(50% - 150px);\n    }\n\n}\n.popUp button{\n    width: 80px;\n}\n"

/***/ }),

/***/ "./src/app/pet-match-add/pet-match-add.component.html":
/*!************************************************************!*\
  !*** ./src/app/pet-match-add/pet-match-add.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 90px;\">\n    <div class=\"col-12 header\">\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <i class=\"fas fa-chevron-left voltarSeta\" [routerLink]=\"['../']\"></i>\n        <h1 id=\"petmatch\">Pet Match: </h1>\n        <h4 id=\"addLabel\">Adicionando Pet</h4>\n    </div>\n\n    <div class=\"col-10 container\" style=\"margin: 0 auto\">\n        <div class=\"popUp col-9\" *ngIf=\"popup\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">PetHub!</h5>\n            </div>\n            <div class=\"modal-body\">\n                <p>{{msgPop}}</p>\n                <button (click)=\"popup=false\" class=\"btn btn-success\">OK!</button>\n            </div>\n        </div>\n        <h2 id=\"labelForm\">Preencha o formulario! </h2>\n        <hr>\n\n        <form [formGroup]=\"formulario\" novalidate (ngSubmit)=\"onSubmit()\" class=\"formUpload\">\n            <div class=\"form-group fdb\" [ngClass]=\"aplicaCssErroIm()\">\n                <label for=\"file_name\">Foto do Pet *</label>\n                <input type=\"file\" id=\"file_name\" class=\"form-control\" (change)=\"handleFile($event)\" #fileInput>\n                <div *ngIf=\"verificaValidFoto()\">\n                    <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                    <span class=\"sr-only\">(error)</span>\n                    <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                        <p>A imagem é obrigatória.</p>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"form-group fdb\" [ngClass]=\"aplicaCssErro('nome_pet')\">\n                <label for=\"nome_pet\">Nome *</label>\n                <input type=\"text\" id=\"nome_pet\" class=\"form-control\" placeholder=\"Ex: Brutus \"\n                formControlName=\"nome_pet\">\n                <div *ngIf=\"verificaValidTouched('nome_pet')\">\n                    <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                    <span class=\"sr-only\">(error)</span>\n                    <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                        <p>Nome do pet é obrigatório.</p>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"form-group\">\n                <div class=\"col-md-4 col-sm-6 col-12 selects\" [ngClass]=\"aplicaCssErro('porte')\">\n                    <label for=\"porte\">Porte *</label>\n                    <select id=\"porte\" formControlName=\"porte\" class=\"form-control\">\n                        <option value=\"\">Selecione</option>\n                        <option value=\"pequeno\">Pequeno</option>\n                        <option value=\"medio\">Médio</option>\n                        <option value=\"grande\">Grande</option>\n                    </select>\n                    <div  *ngIf=\"verificaValidTouched('porte')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Selecione o porte do Pet.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6 col-12 selects\" [ngClass]=\"aplicaCssErro('pelagem')\">\n                    <label for=\"pelagem\">Pelagem *</label>\n                    <select id=\"pelagem\" formControlName=\"pelagem\" class=\"form-control\">\n                        <option value=\"\">Selecione</option>\n                        <option value=\"curto\">Curto</option>\n                        <option value=\"longo\">Longo</option>\n                    </select>\n                    <div  *ngIf=\"verificaValidTouched('pelagem')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Selecione a pelagem do pet.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 col-sm-6 col-12 selects\" [ngClass]=\"aplicaCssErro('castrado')\">\n                    <label for=\"castrado\">Castrado *</label>\n                    <select id=\"castrado\" formControlName=\"castrado\" class=\"form-control\">\n                        <option value=\"\">Selecione</option>\n                        <option value=\"1\">Castrado</option>\n                        <option value=\"0\">Não castrado</option>\n                    </select>\n                    <div  *ngIf=\"verificaValidTouched('castrado')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Infome se o pet é castrado.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6 col-12 selects\" [ngClass]=\"aplicaCssErro('ano_nascimento')\">\n                    <label for=\"ano_nascimento\">Nascimento *</label>\n                    <select id=\"ano_nascimento\" formControlName=\"ano_nascimento\" class=\"form-control\">\n                        <option value=\"\">Selecione</option>\n                        <option *ngFor=\"let ano of years\" value=\"{{ano.value}}\">{{ ano.value }}</option>\n                    </select>\n                    <div  *ngIf=\"verificaValidTouched('ano_nascimento')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Que ano o Pet nasceu?</p>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"col-md-4 col-sm-6 col-12 selects\" [ngClass]=\"aplicaCssErro('tipo')\">\n                    <label for=\"tipo\">Cão ou Gato? *</label>\n                    <select id=\"tipo\" formControlName=\"tipo\" class=\"form-control\">\n                        <option value=\"\">Selecione</option>\n                        <option value=\"cachorro\">Cão</option>\n                        <option value=\"gato\">Gato</option>\n                    </select>\n                    <div  *ngIf=\"verificaValidTouched('tipo')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Cão ou Gato ?</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 col-sm-6 col-12 selects\" [ngClass]=\"aplicaCssErro('sexo')\">\n                    <label for=\"sexo\">Sexo *</label>\n                    <select id=\"sexo\" formControlName=\"sexo\" class=\"form-control\">\n                        <option value=\"\">Selecione</option>\n                        <option value=\"F\">Fêmea</option>\n                        <option value=\"M\">Macho</option>\n                    </select>\n                    <div  *ngIf=\"verificaValidTouched('sexo')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Informe o sexo do pet</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"form-group fdb\" [ngClass]=\"aplicaCssErro('descricao')\">\n                <label for=\"descricao\">Descrição *</label><br>\n                <textarea id=\"descricao\" class=\"form-control\" rows=\"4\" placeholder=\"Conte mais um pouco sobre o Pet, os usuários gostam de detalhes!\" formControlName=\"descricao\"></textarea>\n                <div *ngIf=\"verificaValidTouched('descricao')\">\n                    <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                    <span class=\"sr-only\">(error)</span>\n                    <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                        <p>Conte mais um pouco sobre o Pet, os usuários gostam de detalhes!</p>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <div class=\"form-group\">\n                <div class=\"col-12 col-md-4 selects fdb\" [ngClass]=\"aplicaCssErro('tel_contato')\">\n                    <label for=\"telefone\">Telefone *</label>\n                    <input type=\"text\" id=\"telefone\" formControlName=\"tel_contato\" class=\"form-control\" placeholder=\"Ex: 11 999999999\">\n                    <div *ngIf=\"verificaValidTouched('tel_contato')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Insira seu telefone com DDD. (somente números)</p>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"col-12 col-md-8 selects fdb\" [ngClass]=\"aplicaCssErro('site_contato')\">\n                    <label for=\"site\">(opcional) Site: </label>\n                    <input type=\"text\" id=\"site\" formControlName=\"site_contato\" class=\"form-control\" placeholder=\"Deixe em branco se não tiver.\">\n                </div>\n            </div>\n            <hr>\n            <div class=\"form-group fdb\">\n                <div class=\"col-12 col-md-6 selects\" [ngClass]=\"aplicaCssErro('cidade')\">\n                    <label for=\"cidade\">Cidade *</label>\n                    <input type=\"text\" id=\"cidade\" formControlName=\"cidade\" class=\"form-control\" placeholder=\"Ex: São Paulo\">\n                    <div *ngIf=\"verificaValidTouched('cidade')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Digite sua cidade.</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-12 col-md-6 selects fdb\" [ngClass]=\"aplicaCssErro('endereco')\">\n                    <label for=\"endereco\"> Bairro *</label>\n                    <input type=\"text\" id=\"endereco\" formControlName=\"endereco\" class=\"form-control\" placeholder=\"Ex: \">\n                    <div *ngIf=\"verificaValidTouched('endereco')\">\n                        <span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n                        <span class=\"sr-only\">(error)</span>\n                        <div class=\"alert alert-danger errorDiv\" role=\"alert\">\n                            <p>Informe seu bairro.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\"> <button type=\"submit\" [disabled]=\"formulario.invalid || formulario.pristine || loading\"  class=\"btn btn-success col-sm-12 col-md-3\" >Cadastrar <i class=\"fa fa-spinner fa-pulse fa-fw\" *ngIf=\"loading\"></i></button><button (click)=\"voltar()\" class=\"btn btn-dark col-sm-12 col-md-3\"> < Voltar</button></div>\n        </form>\n    </div>\n</div>\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\">\n<link href=\"https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Delius|Handlee\" rel=\"stylesheet\">"

/***/ }),

/***/ "./src/app/pet-match-add/pet-match-add.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pet-match-add/pet-match-add.component.ts ***!
  \**********************************************************/
/*! exports provided: PetMatchAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetMatchAddComponent", function() { return PetMatchAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PetMatchAddComponent = /** @class */ (function () {
    function PetMatchAddComponent(http, router, fb) {
        this.http = http;
        this.router = router;
        this.fb = fb;
        this.serverUrl = "http://54.233.88.185";
        this.year = new Date().getFullYear();
        this.range = [];
        this.years = [];
        this.popup = false;
        this.loading = false;
    }
    PetMatchAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('user_id') || !localStorage.getItem('token')) {
            this.router.navigate(['/']);
        }
        this.createForm();
        for (var i = 0; i <= 18; i++) {
            this.range.push({
                label: this.year - i,
                value: parseInt(String(this.year - i))
            });
        }
        this.years = this.range;
        var tempo = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["timer"])(5000, 60000);
        this.subscription = tempo.subscribe(function (data) {
            _this.http.get(_this.serverUrl + "/api/auth/refresh/?token=" + localStorage.getItem('token'))
                .subscribe(function (data) {
                localStorage.setItem('token', data['newToken']);
            }, function (e) {
                _this.router.navigate(['/']);
            });
        });
    };
    PetMatchAddComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PetMatchAddComponent.prototype.createForm = function () {
        this.formulario = this.fb.group({
            porte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pelagem: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            castrado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ano_nascimento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descricao: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tel_contato: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(12)]],
            site_contato: [null,],
            endereco: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cidade: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nome_pet: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imagem: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.fileInput.nativeElement.value = '';
    };
    PetMatchAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        //this.criarForm(form);
        if (this.http.post(this.serverUrl + '/api/doacao?token=' + localStorage.getItem('token'), formModel)
            .subscribe(function (data) {
            _this.loading = false;
            if (data['status'] == 424) {
                _this.popUp("Preencha o formulario corretamente");
                return null;
            }
            _this.popUp("Cadastrado com Sucesso!");
            _this.createForm();
        }) == null) {
            console.log("aaa");
        }
    };
    PetMatchAddComponent.prototype.handleFile = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.formulario.get('imagem').setValue(file);
        }
    };
    PetMatchAddComponent.prototype.popUp = function (msg) {
        this.msgPop = msg;
        this.popup = true;
    };
    PetMatchAddComponent.prototype.prepareSave = function () {
        var form = new FormData();
        form.append('id_usuario', localStorage.getItem('user_id'));
        form.append('porte', this.formulario.get('porte').value);
        form.append('pelagem', this.formulario.get('pelagem').value);
        form.append('castrado', this.formulario.get('castrado').value);
        form.append('tipo', this.formulario.get('tipo').value);
        form.append('ano_nascimento', this.formulario.get('ano_nascimento').value);
        form.append('descricao', this.formulario.get('descricao').value);
        form.append('tel_contato', this.formulario.get('tel_contato').value);
        form.append('site_contato', this.formulario.get('site_contato').value);
        form.append('endereco', this.formulario.get('endereco').value);
        form.append('cidade', this.formulario.get('cidade').value);
        form.append('nome_pet', this.formulario.get('nome_pet').value);
        form.append('imagem', this.formulario.get('imagem').value);
        form.append('sexo', this.formulario.get('sexo').value);
        return form;
    };
    PetMatchAddComponent.prototype.voltar = function () {
        this.formulario.reset();
        this.router.navigate(['petmatch']);
    };
    PetMatchAddComponent.prototype.verificaValidTouched = function (campo) {
        return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
    };
    PetMatchAddComponent.prototype.verificaValidFoto = function () {
        return !this.formulario.get('imagem').valid;
    };
    PetMatchAddComponent.prototype.aplicaCssErro = function (campo) {
        return {
            'has-error': this.verificaValidTouched(campo),
            'has-feedback': this.verificaValidTouched(campo),
        };
    };
    PetMatchAddComponent.prototype.aplicaCssErroIm = function () {
        return {
            'has-error': this.verificaValidFoto(),
            'has-feedback': this.verificaValidFoto(),
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PetMatchAddComponent.prototype, "fileInput", void 0);
    PetMatchAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-match-add',
            template: __webpack_require__(/*! ./pet-match-add.component.html */ "./src/app/pet-match-add/pet-match-add.component.html"),
            styles: [__webpack_require__(/*! ./pet-match-add.component.css */ "./src/app/pet-match-add/pet-match-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PetMatchAddComponent);
    return PetMatchAddComponent;
}());



/***/ }),

/***/ "./src/app/pet-match/pet-match.component.css":
/*!***************************************************!*\
  !*** ./src/app/pet-match/pet-match.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Styling pets preview image*/\n.corte{\n    width: 100%;\n    height: 280px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: center;\n       object-position: center;\n    border-radius: 5px;\n    padding-bottom:40px;\n}\n.img-pet{\n    cursor: pointer;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);\n    margin: 0 auto;\n    margin-bottom: 2%;\n    height: 320px;\n    background-color: #fcfcfc;\n    width: 50%;\n}\n#header-hor{\n    display: none;\n}\n#containerMini{\n    background-color: #f6f6f6;\n    padding: 30px;\n    border-radius: 5px;\n}\n.ghost{\n    margin: 0 auto;\n\n}\ni{\n    color: #2bb44a;\n    font-size: 35px;\n}\n/* Pet's name label*/\nh3{\n    bottom: 0;\n    position: absolute;\n    font-size: 100%;\n    font-weight: bold;\n    padding: 15px;\n}\nselect{\n    float: right;\n    min-width: 110px;\n    margin-bottom: 2%;\n\n}\ntable{\n    width: 100%;\n}\n.header {\n    padding: 15px 20px 15px 20px;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.19);\n    position: fixed;\n    top: 0;\n    z-index: 99;\n    left: 0;\n    background-color: #fff;\n}\n.header h1{\n    color: #1c7430;\n    display: inline;\n}\n.voltarSeta{\n    cursor: pointer;\n}\n.header button{\n    float: right;\n}\n@media screen and (min-width: 480px){\n    i{\n        font-size: 45px;\n    }\n\n}\n@media screen and (max-width: 480px) {\n    .img-pet{\n        width: 91%;\n        height: 350px;\n    }\n    .header h1{\n        font-size: 18px;\n    }\n}\n@media screen and (max-height: 420px) {\n    #header{\n        display: none;\n    }\n    #header-hor{\n        display: block;\n    }\n    #header-hor button{\n        height: 45px;\n    }\n}\n"

/***/ }),

/***/ "./src/app/pet-match/pet-match.component.html":
/*!****************************************************!*\
  !*** ./src/app/pet-match/pet-match.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 100px;\">\n\n    <div class=\"col-12 header\" id=\"header\">\n        <i class=\"fas fa-home fa-3x voltarSeta\" [routerLink]=\"['/home']\"></i>\n        <h1> Pet Match</h1>\n        <button class=\"btn btn-danger col-sm-3 col-md-2 col-12\" (click)=\"logout()\">Sair</button>\n        <button class=\"btn btn-success col-sm-4 col-md-3 col-12\" id=\"btnAdd\" [routerLink]=\"['add']\">Adicionar um Pet</button>\n    </div>\n    <div class=\"col-12 header\" id=\"header-hor\">\n        <button class=\"btn btn-success col-12\" id=\"btnAdd\" [routerLink]=\"['add']\">Adicionar um Pet</button>\n    </div>\n    <div class=\"row col-12\" id=\"containerMini\" style=\"margin-bottom: 10px;\">\n    <div class=\" col-xl-3 col-lg-4 col-md-5 col-sm-6  col-11 img-pet\">\n        <br><br>\n        <table>\n            <thead>\n                <tr>\n                    <th>Filtrar busca</th>\n                </tr>\n            </thead>\n            <br><br>\n            <tbody>\n                <tr>\n                    <td>\n                        <div class=\"col-12\">\n                            Pet\n                            <select   [(ngModel)]=\"tipo\" (change)=\"filtro()\">\n                                <option value=\"0\">Todos</option>\n                                <option value=\"1\">Cães</option>\n                                <option value=\"2\">Gatos</option>\n                            </select>\n                        </div>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <div class=\"col-12\">\n                            Castrados\n                            <select   [(ngModel)]=\"castrado\" (change)=\"filtro()\">\n                                <option value=\"0\">Todos</option>\n                                <option value=\"1\">Sim</option>\n                                <option value=\"2\">Não</option>\n                            </select>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-12\">\n                            Porte\n                            <select [(ngModel)]=\"porte\" (change)=\"filtro()\">\n                                <option value=\"0\">Todos</option>\n                                <option value=\"1\">Pequeno</option>\n                                <option value=\"2\">Medio</option>\n                                <option value=\"3\">Grande</option>\n                            </select>\n                        </div>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>\n                        <div class=\"col-12\">\n                            Pelagem\n                            <select [(ngModel)]=\"pelagem\" (change)=\"filtro()\">\n                                <option value=\"0\">Todos</option>\n                                <option value=\"1\">Curto</option>\n                                <option value=\"2\">Longo </option>\n                            </select>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <br>\n    </div>\n\n        <div class=\"card col-xl-3 col-lg-4 col-md-5 col-sm-6  img-pet\" *ngFor=\"let pet of pets\"  [routerLink]=\"['details-pet/' + pet.id]\">\n            <div class=\"card-body\">\n                <img class=\"corte\" src=\"{{serverUrl}}/imagem/{{pet.imagem}}\">\n                <h3>{{ pet.nome_pet }}</h3>\n            </div>\n        </div>\n\n     <!-- ghost -->\n    <div class=\"col-xl-3 col-lg-4 col-md-5 col-sm-6  ghost\"></div>\n    <div class=\"col-xl-3 col-lg-4 col-md-5 col-sm-6  ghost\"></div>\n    <div class=\"col-xl-3 col-lg-4 col-md-5 col-sm-6  ghost\"></div>\n    </div>\n</div>\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\">"

/***/ }),

/***/ "./src/app/pet-match/pet-match.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pet-match/pet-match.component.ts ***!
  \**************************************************/
/*! exports provided: PetMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetMatchComponent", function() { return PetMatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PetMatchComponent = /** @class */ (function () {
    function PetMatchComponent(http, router) {
        this.http = http;
        this.router = router;
        this.serverUrl = "http://54.233.88.185";
        this.pets = [];
        this.pelagem = "0";
        this.porte = "0";
        this.tipo = "0";
        this.castrado = "0";
    }
    PetMatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        //verificando autenticação
        this.http.get(this.serverUrl + "/api/auth/check/?token=" + localStorage.getItem('token'))
            .subscribe(function (data) {
            return true;
        }, function (e) {
            return _this.router.navigate(['/']);
        });
        this.http.get(this.serverUrl + "/api/busca/doacao/Braganca")
            .subscribe(function (data) { return _this.pets = data; });
        var tempo = Object(rxjs_index__WEBPACK_IMPORTED_MODULE_3__["timer"])(5000, 60000);
        this.subscription = tempo.subscribe(function (data) {
            _this.http.get(_this.serverUrl + "/api/auth/refresh/?token=" + localStorage.getItem('token'))
                .subscribe(function (data) {
                localStorage.setItem('token', data['newToken']);
            }, function (e) {
                _this.router.navigate(['/']);
            });
        });
    };
    PetMatchComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PetMatchComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    PetMatchComponent.prototype.filtro = function () {
        var _this = this;
        this.http.get(this.serverUrl + "/api/busca/doacao/Braganca/" + this.porte + "/" + this.pelagem + "/" + this.castrado + "/" + this.tipo)
            .subscribe(function (data) { return _this.pets = data; });
    };
    PetMatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet-match',
            template: __webpack_require__(/*! ./pet-match.component.html */ "./src/app/pet-match/pet-match.component.html"),
            styles: [__webpack_require__(/*! ./pet-match.component.css */ "./src/app/pet-match/pet-match.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PetMatchComponent);
    return PetMatchComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mendex/git/pethub/angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map