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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class BaseEventDto {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            OrderID: '62ebea7f43d20f0009407adf',
            Version: '/v1',
            PaymentID: 'f0b0628d-b985-4999-8a1d-ac2002422c34',
        },
    }),
    __metadata("design:type", Object)
], BaseEventDto.prototype, "detail", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event name',
        example: 'ExecuteStripePayment',
    }),
    __metadata("design:type", String)
], BaseEventDto.prototype, "detail-type", void 0);
exports.BaseEventDto = BaseEventDto;
//# sourceMappingURL=event.dto.js.map