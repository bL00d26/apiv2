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
exports.TrinitipProvider = void 0;
const common_1 = require("@nestjs/common");
const trinitip_service_1 = require("./trinitip.service");
let TrinitipProvider = class TrinitipProvider {
    constructor(trinitipService) {
        this.trinitipService = trinitipService;
    }
    async createOrder(order) {
        return await this.trinitipService.createOrder(order);
    }
    async modifyBefore(order) {
        throw new Error('Method not implemented.');
    }
    async modifyAfter(order) {
        throw new Error('Method not implemented.');
    }
    async placeOrder(order) {
        throw new Error('Method not implemented.');
    }
    async deleteOrder(order) {
        throw new Error('Method not implemented.');
    }
    getOrder(order) {
        throw new Error('Method not implemented.');
    }
};
TrinitipProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [trinitip_service_1.TrinitipService])
], TrinitipProvider);
exports.TrinitipProvider = TrinitipProvider;
//# sourceMappingURL=trinitip.provider.js.map