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
exports.InvoiceManagerCoreLambdaEvent = exports.InvoiceManagerCoreLambdaEventDetail = exports.CronJobSuspendHouseAccountCoreLambdaEventDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enum_1 = require("../../enum");
const event_dto_1 = require("./event.dto");
class CronJobSuspendHouseAccountCoreLambdaEventDetail {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The date to query',
        example: '2022-09-14',
    }),
    __metadata("design:type", String)
], CronJobSuspendHouseAccountCoreLambdaEventDetail.prototype, "invoicesDueDate", void 0);
class CronJobSuspendHouseAccountCoreLambdaEventDto extends (0, swagger_1.OmitType)(event_dto_1.BaseEventDto, ['detail']) {
}
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'The event execution payload',
        example: {
            invoicesDueDate: '2022-09-14',
        },
    }),
    __metadata("design:type", CronJobSuspendHouseAccountCoreLambdaEventDetail)
], CronJobSuspendHouseAccountCoreLambdaEventDto.prototype, "detail", void 0);
exports.CronJobSuspendHouseAccountCoreLambdaEventDto = CronJobSuspendHouseAccountCoreLambdaEventDto;
class InvoiceManagerCoreLambdaEventDetail {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], InvoiceManagerCoreLambdaEventDetail.prototype, "OrderID", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], InvoiceManagerCoreLambdaEventDetail.prototype, "OrderDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", Number)
], InvoiceManagerCoreLambdaEventDetail.prototype, "Amount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], InvoiceManagerCoreLambdaEventDetail.prototype, "PaymentID", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], InvoiceManagerCoreLambdaEventDetail.prototype, "provider", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], InvoiceManagerCoreLambdaEventDetail.prototype, "invoice", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], InvoiceManagerCoreLambdaEventDetail.prototype, "request", void 0);
exports.InvoiceManagerCoreLambdaEventDetail = InvoiceManagerCoreLambdaEventDetail;
class InvoiceManagerCoreLambdaEvent {
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", InvoiceManagerCoreLambdaEventDetail)
], InvoiceManagerCoreLambdaEvent.prototype, "detail", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], InvoiceManagerCoreLambdaEvent.prototype, "detail-type", void 0);
exports.InvoiceManagerCoreLambdaEvent = InvoiceManagerCoreLambdaEvent;
//# sourceMappingURL=customer-management-service.events.dto.js.map