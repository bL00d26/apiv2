"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceHistoryEvents = exports.InvoiceStatusEnum = void 0;
const utils_1 = require("../helpers/utils");
var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    InvoiceStatusEnum["DRAFT"] = "DRAFT";
    InvoiceStatusEnum["OPEN"] = "OPEN";
    InvoiceStatusEnum["PAID"] = "PAID";
    InvoiceStatusEnum["VOID"] = "VOID";
    InvoiceStatusEnum["UNCOLLECTIBLE"] = "UNCOLLECTIBLE";
    InvoiceStatusEnum["OVERDUE"] = "OVERDUE";
})(InvoiceStatusEnum = exports.InvoiceStatusEnum || (exports.InvoiceStatusEnum = {}));
exports.InvoiceHistoryEvents = {
    EMAIL_SENT: (status) => `${(0, utils_1.capitalizeFirstLetter)(status.toLocaleLowerCase())}InvoiceEmailSent`,
    NOTE_ADDED: 'NoteAdded',
    OVERDUE: 'InvoiceMarkedAsOverdue',
    PAID: 'InvoicePaid',
    FINALIZED: 'InvoiceFinalized',
    VOIDED: 'InvoiceVoided',
    UPDATED: 'InvoiceUpdated',
    UNCOLLECTIBLE: 'InvoiceMarkedAsUncollectible',
};
//# sourceMappingURL=invoice-status.enum.js.map