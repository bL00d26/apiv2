"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrinitipService = void 0;
const common_1 = require("@nestjs/common");
const logger_1 = require("../../../layer/nodejs/logger");
const generate_id_1 = require("../../../layer/nodejs/generate-id");
const utils_1 = require("../../../../layers/src/common/nodejs/common/helpers/utils");
let TrinitipService = class TrinitipService {
    async createOrder(order) {
        const id = (0, generate_id_1.generateId)();
        const string = (0, utils_1.generateRandomString)(5);
        (0, logger_1.loggerFromLayer)(order);
        (0, logger_1.loggerFromLayer)(id);
        (0, logger_1.loggerFromLayer)(string);
        return order;
    }
};
TrinitipService = __decorate([
    (0, common_1.Injectable)()
], TrinitipService);
exports.TrinitipService = TrinitipService;
//# sourceMappingURL=trinitip.service.js.map