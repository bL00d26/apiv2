export declare enum InvoiceStatusEnum {
    DRAFT = "DRAFT",
    OPEN = "OPEN",
    PAID = "PAID",
    VOID = "VOID",
    UNCOLLECTIBLE = "UNCOLLECTIBLE",
    OVERDUE = "OVERDUE"
}
export declare const InvoiceHistoryEvents: {
    EMAIL_SENT: (status: string) => string;
    NOTE_ADDED: string;
    OVERDUE: string;
    PAID: string;
    FINALIZED: string;
    VOIDED: string;
    UPDATED: string;
    UNCOLLECTIBLE: string;
};
