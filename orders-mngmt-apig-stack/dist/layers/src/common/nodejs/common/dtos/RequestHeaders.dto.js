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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInstallationHeadersDto = exports.RequestHeadersDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const cors_options_constants_1 = require("../constants/cors-options.constants");
class RequestHeadersDto {
}
_a = cors_options_constants_1.XTRINITIP_ORGANIZATION_ID, _b = cors_options_constants_1.CONTENT_TYPE;
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)({ name: cors_options_constants_1.XTRINITIP_ORGANIZATION_ID }),
    __metadata("design:type", String)
], RequestHeadersDto.prototype, _a, void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Expose)({ name: cors_options_constants_1.CONTENT_TYPE }),
    __metadata("design:type", String)
], RequestHeadersDto.prototype, _b, void 0);
exports.RequestHeadersDto = RequestHeadersDto;
class AppInstallationHeadersDto {
}
_c = cors_options_constants_1.X_TRINITIP_APP_INSTALLATION_ID, _d = cors_options_constants_1.X_TRINITIP_API_KEY;
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)({ name: cors_options_constants_1.X_TRINITIP_APP_INSTALLATION_ID }),
    __metadata("design:type", String)
], AppInstallationHeadersDto.prototype, _c, void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)({ name: cors_options_constants_1.X_TRINITIP_API_KEY }),
    __metadata("design:type", String)
], AppInstallationHeadersDto.prototype, _d, void 0);
exports.AppInstallationHeadersDto = AppInstallationHeadersDto;
//# sourceMappingURL=RequestHeaders.dto.js.map