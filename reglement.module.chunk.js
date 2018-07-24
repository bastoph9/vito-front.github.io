webpackJsonp(["reglement.module"],{

/***/ "../../../../../src/app/reglement/reglement.edit/reglement.edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-10 col-lg-8 mx-auto\">\r\n    <div class=\"chk-block\">\r\n      <div class=\"chk-block-content\">\r\n        <form [formGroup]=\"reglementForm\" (submit)=\"annulerReglement(reglementForm.value)\">\r\n\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control text-center\" placeholder=\"Numéro\" readonly=\"true\"\r\n                   [formControl]=\"reglementForm.controls['numero']\"/>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"DD/MM/YYYY\" [formControl]=\"reglementForm.controls['date']\"\r\n                   type=\"date\" readonly=\"true\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" placeholder=\"Client\" readonly=\"true\"\r\n                   [formControl]=\"reglementForm.controls['client']\"\r\n                   type=\"text\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" readonly=\"true\" placeholder=\"Etat de paiement\"\r\n                   [formControl]=\"reglementForm.controls['etatPaiement']\"\r\n                   type=\"text\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <input class=\"form-control\" readonly=\"true\" placeholder=\"Type de paiement\"\r\n                   [formControl]=\"reglementForm.controls['typePaiement']\"\r\n                   type=\"text\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" [hidden]=\"checkTypePaiement()\">\r\n            <input class=\"form-control\" placeholder=\"Banque\" readonly=\"true\"\r\n                   [formControl]=\"reglementForm.controls['banqueLibelle']\"\r\n                   type=\"text\">\r\n          </div>\r\n\r\n          <div class=\"form-group\" [hidden]=\"checkTypePaiement()\">\r\n            <input class=\"form-control\" placeholder=\"N° Chèque\" [formControl]=\"reglementForm.controls['numeroCheque']\"\r\n                   type=\"text\" readonly=\"true\">\r\n          </div>\r\n\r\n          <div class=\"input-group form-group\">\r\n            <span class=\"input-group-addon\">MAD</span>\r\n            <input class=\"form-control\" placeholder=\"Montant\" type=\"number\" readonly=\"true\"\r\n                   [formControl]=\"reglementForm.controls['montant']\"/>\r\n            <span class=\"input-group-addon\">.00</span>\r\n          </div>\r\n\r\n          <div class=\"pad-wrap\">\r\n            <button class=\"btn btn-secondary\" type=\"button\"\r\n                    routerLink=\"/facturation/list\">\r\n              <i class=\"fa fa-arrow-left mr-2\" aria-hidden=\"true\"></i>\r\n              Retour\r\n            </button>\r\n            <div class=\"pull-right\">\r\n              <button class=\"btn btn-outline-danger\" type=\"submit\">\r\n                <i class=\"fa fa fa-close mr-2\" aria-hidden=\"true\"></i>\r\n                Annuler\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/reglement/reglement.edit/reglement.edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reglement/reglement.edit/reglement.edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglementEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_page_title_page_title_service__ = __webpack_require__("../../../../../src/app/core/page-title/page-title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_route_animation_route_animation__ = __webpack_require__("../../../../../src/app/core/route-animation/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_component_base_component__ = __webpack_require__("../../../../../src/app/core/component/base-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reglement_metier_reglement_metier__ = __webpack_require__("../../../../../src/app/reglement/metier/reglement.metier.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reglement_service_reglement_service__ = __webpack_require__("../../../../../src/app/reglement/service/reglement.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReglementEditComponent = (function (_super) {
    __extends(ReglementEditComponent, _super);
    function ReglementEditComponent(fb, route, pageTitleService, reglementService) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.route = route;
        _this.pageTitleService = pageTitleService;
        _this.reglementService = reglementService;
        return _this;
    }
    ReglementEditComponent.prototype.ngOnInit = function () {
        this.loadReglement();
        this.pageTitleService.setTitle("MODIFIER UN RÉGLEMENT");
        this.reglementForm = this.fb.group({
            numero: '',
            date: null,
            client: null, id: '',
            etatPaiement: '',
            typePaiement: '',
            montant: 0,
            facturation: null,
            banqueLibelle: null,
            numeroCheque: '',
        });
    };
    ReglementEditComponent.prototype.loadReglement = function () {
        var _this = this;
        this.route.params.switchMap(function (params) { return _this.reglementService.getReglement(+params['id']); })
            .subscribe(function (reglement) {
            _this.reglement = reglement;
            _this.reglementForm.patchValue(_this.reglement);
            _this.reglementForm.get("client").setValue(_this.reglement.facturation.client.nom);
            _this.reglementForm.get("etatPaiement").setValue(_this.reglement.facturation.etatPaiement);
            if (_this.reglement.typePaiement === 'CHEQUE') {
                _this.reglementForm.get("banqueLibelle").setValue(_this.reglement.banque.libelle);
            }
            // this.disableReglement();
        }, function (error) { return _this.showError(error.status, error.json().message); });
    };
    ReglementEditComponent.prototype.annulerReglement = function (reglementForm) {
        var _this = this;
        if (!confirm("Etes-vous de vouloir annuler ces cette reglement !")) {
            return;
        }
        this.reglement = new __WEBPACK_IMPORTED_MODULE_6__reglement_metier_reglement_metier__["a" /* Reglement */](reglementForm);
        this.reglementService.annulerReglement(this.reglement)
            .subscribe(function () {
            _this.showInfo("Annulation effectué avec succès");
            _this.router.navigate(['/facturation/list']); // Redierction vers list de facturation
        }, function (error) { return _this.showError(error.status, error.json().message); });
    };
    ReglementEditComponent.prototype.checkTypePaiement = function () {
        var typePaiement = this.reglementForm.get('typePaiement').value;
        if (typePaiement != '' && typePaiement != null) {
            if (typePaiement == 'ESPECE') {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    };
    ReglementEditComponent.prototype.reglementEditRedirect = function () {
    };
    return ReglementEditComponent;
}(__WEBPACK_IMPORTED_MODULE_4__core_component_base_component__["a" /* BaseComponent */]));
ReglementEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-reglement-edit',
        template: __webpack_require__("../../../../../src/app/reglement/reglement.edit/reglement.edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reglement/reglement.edit/reglement.edit.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            "[@fadeInAnimation]": 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_3__core_route_animation_route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_page_title_page_title_service__["a" /* PageTitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_page_title_page_title_service__["a" /* PageTitleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__reglement_service_reglement_service__["a" /* ReglementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__reglement_service_reglement_service__["a" /* ReglementService */]) === "function" && _d || Object])
], ReglementEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reglement.edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/reglement/reglement.list/reglement.list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chk-block\">\r\n  <div class=\"chk-block-content\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-middle table-hover\" [mfData]=\"reglementList\" #mf=\"mfDataTable\"\r\n             [mfRowsOnPage]=\"7\">\r\n        <thead class=\"bg-secondary\">\r\n        <tr>\r\n          <th class=\"text-center\">\r\n            <mfDefaultSorter by=\"numero\">Numéro</mfDefaultSorter>\r\n          </th>\r\n          <th class=\"text-center\">\r\n            <mfDefaultSorter by=\"date\">Date</mfDefaultSorter>\r\n          </th>\r\n          <th class=\"text-center\">\r\n            <mfDefaultSorter by=\"client\">Client</mfDefaultSorter>\r\n          </th>\r\n          <th class=\"text-center\">\r\n            <mfDefaultSorter by=\"montant\">Montant</mfDefaultSorter>\r\n          </th>\r\n          <th class=\"text-center\">\r\n            Consulter\r\n          </th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let reglement of mf.data\">\r\n          <td class=\"text-center\">{{reglement.numero}}</td>\r\n          <td class=\"text-center\">{{reglement.date | date: 'dd/MM/yyyy'}}</td>\r\n          <td>{{reglement.client}}</td>\r\n          <td class=\"text-right\">{{reglement.montant | number : '1.2-2'}}</td>\r\n          <td class=\"text-center\">\r\n            <button class=\"btn square-30 circle bg-primary fa fa-eye\" type=\"button\"\r\n                    [routerLink]=\"['/reglement/edit',reglement.id]\">\r\n            </button>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"5\" class=\"text-center\">\r\n            <mfBootstrapPaginator></mfBootstrapPaginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div><!-- table responsive closed -->\r\n  </div><!-- chk block content closed -->\r\n</div><!-- chk block closed -->\r\n"

/***/ }),

/***/ "../../../../../src/app/reglement/reglement.list/reglement.list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sorting {\n  height: 400px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reglement/reglement.list/reglement.list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglementListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_route_animation_route_animation__ = __webpack_require__("../../../../../src/app/core/route-animation/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_component_base_component__ = __webpack_require__("../../../../../src/app/core/component/base-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_reglement_service__ = __webpack_require__("../../../../../src/app/reglement/service/reglement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_page_title_page_title_service__ = __webpack_require__("../../../../../src/app/core/page-title/page-title.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__facturation_service_facturation_service__ = __webpack_require__("../../../../../src/app/facturation/service/facturation.service.ts");

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReglementListComponent = (function (_super) {
    __extends(ReglementListComponent, _super);
    function ReglementListComponent(pageTitleService, reglementService, facturationService, route) {
        var _this = _super.call(this) || this;
        _this.pageTitleService = pageTitleService;
        _this.reglementService = reglementService;
        _this.facturationService = facturationService;
        _this.route = route;
        _this.reglementList = [];
        return _this;
    }
    ReglementListComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("LISTE DES REGLEMENTS");
        this.loadReglementList();
    };
    ReglementListComponent.prototype.loadReglementList = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var facturation_id = params['facturation_id'];
            _this.facturationService.getFacturation(facturation_id)
                .subscribe(function (facturation) {
                _this.reglementService.getReglementByFacturation(facturation).subscribe(function (reglementList) {
                    _this.reglementList = reglementList;
                }, function (error) {
                    _this.showError(error.status, error.json().message);
                });
            }, function (error) { return _this.showError(error.status, error.json().message); });
        });
    };
    return ReglementListComponent;
}(__WEBPACK_IMPORTED_MODULE_2__core_component_base_component__["a" /* BaseComponent */]));
ReglementListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-reglement-list',
        template: __webpack_require__("../../../../../src/app/reglement/reglement.list/reglement.list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reglement/reglement.list/reglement.list.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            "[@fadeInAnimation]": 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__core_route_animation_route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__core_page_title_page_title_service__["a" /* PageTitleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_page_title_page_title_service__["a" /* PageTitleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_reglement_service__["a" /* ReglementService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_reglement_service__["a" /* ReglementService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__facturation_service_facturation_service__["a" /* FacturationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__facturation_service_facturation_service__["a" /* FacturationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ReglementListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reglement.list.component.js.map

/***/ }),

/***/ "../../../../../src/app/reglement/reglement.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglementModule", function() { return ReglementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_archwizard__ = __webpack_require__("../../../../ng2-archwizard/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reglement_routing__ = __webpack_require__("../../../../../src/app/reglement/reglement.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_reglement_service__ = __webpack_require__("../../../../../src/app/reglement/service/reglement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reglement_edit_reglement_edit_component__ = __webpack_require__("../../../../../src/app/reglement/reglement.edit/reglement.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reglement_list_reglement_list_component__ = __webpack_require__("../../../../../src/app/reglement/reglement.list/reglement.list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__facturation_service_facturation_service__ = __webpack_require__("../../../../../src/app/facturation/service/facturation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ReglementModule = (function () {
    function ReglementModule() {
    }
    return ReglementModule;
}());
ReglementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_archwizard__["a" /* WizardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__reglement_routing__["a" /* ReglementRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__reglement_edit_reglement_edit_component__["a" /* ReglementEditComponent */],
            __WEBPACK_IMPORTED_MODULE_9__reglement_list_reglement_list_component__["a" /* ReglementListComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__service_reglement_service__["a" /* ReglementService */],
            __WEBPACK_IMPORTED_MODULE_10__facturation_service_facturation_service__["a" /* FacturationService */],
        ],
    })
], ReglementModule);

//# sourceMappingURL=reglement.module.js.map

/***/ }),

/***/ "../../../../../src/app/reglement/reglement.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReglementRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reglement_edit_reglement_edit_component__ = __webpack_require__("../../../../../src/app/reglement/reglement.edit/reglement.edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reglement_list_reglement_list_component__ = __webpack_require__("../../../../../src/app/reglement/reglement.list/reglement.list.component.ts");


var ReglementRoutes = [{
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    }, {
        path: '',
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_1__reglement_list_reglement_list_component__["a" /* ReglementListComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_0__reglement_edit_reglement_edit_component__["a" /* ReglementEditComponent */] },
        ]
    }];
//# sourceMappingURL=reglement.routing.js.map

/***/ })

});
//# sourceMappingURL=reglement.module.chunk.js.map