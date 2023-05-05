"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const provider_factory_1 = require("./providers/provider.factory");
const provider_type_interceptor_1 = require("./interceptors/provider-type.interceptor");
let AppController = class AppController {
    constructor(providerFactory) {
        this.providerFactory = providerFactory;
    }
    async findAll(req, res, id) {
        const { orderType } = req;
        const provider = this.providerFactory.createProvider(orderType);
        console.log('id', id);
        const order = await provider.createOrder({ orderType });
        return res.status(200).json(order);
    }
};
__decorate([
    (0, common_1.Get)('test/:id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
AppController = __decorate([
    (0, common_1.UseInterceptors)(provider_type_interceptor_1.OrderProviderTypeInterceptor),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [provider_factory_1.ProviderFactory])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map