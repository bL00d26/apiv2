"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvidersModule = void 0;
const common_1 = require("@nestjs/common");
const provider_factory_1 = require("./provider.factory");
const trinitip_module_1 = require("./trinitip/trinitip.module");
let ProvidersModule = class ProvidersModule {
};
ProvidersModule = __decorate([
    (0, common_1.Module)({
        imports: [trinitip_module_1.TrinitipModule],
        providers: [provider_factory_1.ProviderFactory],
        exports: [provider_factory_1.ProviderFactory],
    })
], ProvidersModule);
exports.ProvidersModule = ProvidersModule;
//# sourceMappingURL=provider.module.js.map