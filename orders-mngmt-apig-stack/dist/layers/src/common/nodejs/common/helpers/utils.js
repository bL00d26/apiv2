"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeDiffsForPayments = exports.buildFreedompayItems = exports.hashPurchaserCode = exports.getAppVersion = exports.capitalizeFirstLetter = exports.generateTestConnection = exports.findCredentials = exports.prepareTransactionParams = exports.generateDueDateForInvoice = exports.validateDto = exports.validateDtoInstance = exports.validateCertificateFile = exports.validateTypeFileFromMimeType = exports.getLatestVersionFromSpecificApp = exports.removeCommasfromAmount = exports.generateMaskedNumberFromLast4 = exports.generateUUID = exports.normalizeText = exports.buildQueryParams = exports.isFullName = exports.isNcrID = exports.isEmail = exports.isObjectId = exports.patchSubDocumentMongo = exports.toObjectId = exports.generateRandomString = void 0;
const common_1 = require("@nestjs/common");
const child_process_1 = require("child_process");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const crypto_1 = require("crypto");
const index_1 = require("../plugins/index");
const generateRandomString = (length) => {
    let randomString = '';
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return randomString;
};
exports.generateRandomString = generateRandomString;
const toObjectId = (id) => {
    try {
        return new index_1.mongoose.Types.ObjectId(id);
    }
    catch (error) {
        return error;
    }
};
exports.toObjectId = toObjectId;
const patchSubDocumentMongo = (key, obj) => {
    const toPatch = {};
    Object.keys(obj).forEach((k) => {
        toPatch[`${key}.$.${k}`] = obj[k];
    });
    return toPatch;
};
exports.patchSubDocumentMongo = patchSubDocumentMongo;
const isObjectId = (id) => {
    const { ObjectId } = index_1.mongoose.Types;
    const objectIdValid = (id) => ObjectId.isValid(id)
        ? String(new ObjectId(id) === id)
            ? true
            : false
        : false;
    const isValidByRegex = /^[0-9a-fA-F]{24}$/.test(id);
    const isvalidByMongoose = objectIdValid(id);
    return isvalidByMongoose && isValidByRegex;
};
exports.isObjectId = isObjectId;
const isEmail = (emailAdress) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailAdress.match(regexEmail) ? true : false;
};
exports.isEmail = isEmail;
const isNcrID = (ncrId) => {
    const regexncrId = /^\d{20}/;
    return regexncrId.test(ncrId);
};
exports.isNcrID = isNcrID;
const isFullName = (fullName) => {
    return fullName.search(/\s/) !== -1;
};
exports.isFullName = isFullName;
function buildQueryParams(queryParams) {
    let queryString = '';
    if (queryParams) {
        const queryKeys = Object.keys(queryParams);
        queryKeys.forEach((key, index) => {
            if (index === 0) {
                queryString += `?${key}=${queryParams[key]}`;
                return;
            }
            queryString += `&${key}=${queryParams[key]}`;
        });
    }
    return queryString;
}
exports.buildQueryParams = buildQueryParams;
function normalizeText(text) {
    return text.toLowerCase().trim().replace(/\s/g, '');
}
exports.normalizeText = normalizeText;
const generateUUID = () => {
    const randomStr = (0, exports.generateRandomString)(32);
    const requestId = (0, index_1.uuidv5)(randomStr, index_1.uuidv5.URL);
    return requestId;
};
exports.generateUUID = generateUUID;
const generateMaskedNumberFromLast4 = (last4) => `${new Array(12).join('X')}${last4}`;
exports.generateMaskedNumberFromLast4 = generateMaskedNumberFromLast4;
const removeCommasfromAmount = (amount) => Number(amount.toFixed(2).toString().replace('.', ''));
exports.removeCommasfromAmount = removeCommasfromAmount;
const getLatestVersionFromSpecificApp = (appTagName) => `git tag --list --sort=-version:refname "${appTagName}*" | head -n 1 `;
exports.getLatestVersionFromSpecificApp = getLatestVersionFromSpecificApp;
const validateTypeFileFromMimeType = (validFileTypes, fileType) => validFileTypes.includes(fileType.split('/')[1]);
exports.validateTypeFileFromMimeType = validateTypeFileFromMimeType;
const validateCertificateFile = (validFileTypes, file) => {
    if (!file) {
        const err = {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: `Missing File`,
            error: 'Bad Request',
        };
        throw new common_1.BadRequestException(err);
    }
    const isValidFile = (0, exports.validateTypeFileFromMimeType)(validFileTypes, file.mimetype);
    if (!isValidFile) {
        const err = {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: `Invalid File type, only ${validFileTypes.join(',')} are allowed`,
            error: 'Bad Request',
        };
        throw new common_1.BadRequestException(err);
    }
    const isMaxSize = file.size / 1000 > 5000;
    if (isMaxSize) {
        const err = {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: `File size exceeded, max 5mb`,
            error: 'Bad Request',
        };
        throw new common_1.BadRequestException(err);
    }
};
exports.validateCertificateFile = validateCertificateFile;
const validateDtoInstance = async (instance, plainValue) => {
    const dto = (0, class_transformer_1.plainToInstance)(instance, plainValue, {
        excludeExtraneousValues: true,
    });
    const errors = await (0, class_validator_1.validate)(dto);
    if (errors.length > 0) {
        const validationErrors = errors.map((obj) => Object.values(obj.constraints));
        const message = `Validation failed with following Errors: ${validationErrors}`;
        return new common_1.HttpException(message, common_1.HttpStatus.BAD_REQUEST);
    }
};
exports.validateDtoInstance = validateDtoInstance;
const validateDto = async (instance, plainValue) => {
    return (0, class_transformer_1.plainToInstance)(instance, plainValue, {
        excludeExtraneousValues: true,
    });
};
exports.validateDto = validateDto;
const generateDueDateForInvoice = (pickupDate, isDev) => {
    const date = new Date(pickupDate);
    const additionalDays = isDev ? 1 : 30;
    const overdueDate = date.setDate(date.getDate() + additionalDays);
    const unixDate = overdueDate / 1000;
    return unixDate;
};
exports.generateDueDateForInvoice = generateDueDateForInvoice;
const prepareTransactionParams = (TableName, AppInstallationID) => ({
    TableName,
    Key: {
        AppInstallationID,
    },
    ConsistentRead: true,
});
exports.prepareTransactionParams = prepareTransactionParams;
const findCredentials = (AppInstallation, ApiKey) => AppInstallation.Parameters.apiKeys.find((apikey) => apikey._id.toString() === ApiKey).credentials;
exports.findCredentials = findCredentials;
const generateTestConnection = (url, env) => {
    const originalConnectionUrl = new URL(url);
    const connectionPath = originalConnectionUrl.pathname.split('/').slice(1)[0];
    const testPath = `${connectionPath.replace(/env/g, '')}test`;
    const testConnectionUrl = url.replace(connectionPath, testPath);
    return testConnectionUrl;
};
exports.generateTestConnection = generateTestConnection;
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const getAppVersion = (tagName) => {
    var _a;
    return (_a = (0, child_process_1.execSync)((0, exports.getLatestVersionFromSpecificApp)(tagName)).toString().trim()) !== null && _a !== void 0 ? _a : `@${tagName}v0.0.0`;
};
exports.getAppVersion = getAppVersion;
function hashPurchaserCode(email) {
    if (email) {
        const hash = (0, crypto_1.createHash)('sha256');
        hash.update(email);
        return hash.digest('hex');
    }
    return '';
}
exports.hashPurchaserCode = hashPurchaserCode;
function buildFreedompayItems(items) {
    if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
        const itemsByRequest = [];
        let orderLineIds = items.map((item) => item.productId.value);
        const newOrderLines = [];
        orderLineIds = Array.from(new Set(orderLineIds));
        orderLineIds.map((id) => {
            const result = items.filter((item) => item.productId.value === id);
            if (result) {
                const newResult = JSON.parse(JSON.stringify(result));
                newResult.map((product, index) => {
                    if (index === 0) {
                        product.quantity.value = result.length;
                        newOrderLines.push(product);
                    }
                    return product;
                });
            }
            return id;
        });
        newOrderLines.map((item) => {
            const { productId, comments, description, unitPrice, quantity } = item;
            const totalAmount = (unitPrice * quantity.value).toFixed(2);
            itemsByRequest.push({
                productSKU: productId.value,
                productName: comments,
                productDescription: description,
                saleCode: 'S',
                unitPrice: unitPrice,
                quantity: quantity.value,
                totalAmount: parseFloat(totalAmount).toFixed(2),
                taxIncludedFlag: 'N',
                discountFlag: 'N',
            });
            return item;
        });
        return itemsByRequest.filter((item) => item.unitPrice !== 0 || parseFloat(item.totalAmount) !== 0);
    }
    return [];
}
exports.buildFreedompayItems = buildFreedompayItems;
function getTimeDiffsForPayments(newDate, previousDate) {
    const newDateMilis = new Date(newDate).getTime();
    const previousDateMilis = new Date(previousDate).getTime();
    const diffInMilis = newDateMilis - previousDateMilis;
    const diffInHours = Math.round(diffInMilis / 3600000);
    const diffInDays = Math.round(diffInHours / 24);
    const today = Date.now();
    const diffInMilisFromToday = newDateMilis - today;
    const diffInHoursFromToday = Math.round(diffInMilisFromToday / 3600000);
    const diffInDaysFromToday = Math.round(diffInHoursFromToday / 24);
    return {
        diffInHours,
        diffInDays,
        newDateMilis,
        diffInDaysFromToday,
    };
}
exports.getTimeDiffsForPayments = getTimeDiffsForPayments;
//# sourceMappingURL=utils.js.map