export interface IOrderPaymentRequest {
    OrderID: string;
    AdditionalReferences?: AdditionalReferences | any;
    CreatedAt?: string;
    Payments?: PaymentsEntity[] | null;
    RefundRequestCreated?: boolean;
    VoidRequestCreated?: boolean;
    SalesChannel?: string;
    TaxAmount?: number;
    TotalAmount?: number;
    Version: string;
}
export interface AdditionalReferences {
    rewards: Rewards;
    pickupDate: string;
}
export interface Rewards {
    authenticationToken: string;
    externalUid: string;
    menuItems?: MenuItemsEntity[] | null;
    punchhKey: string;
    receiptAmount: number;
    receiptDatetime: string;
    storeNumber: string;
    subtotalAmount: number;
    transactionNo: string;
    userAgent: string;
    xTrinitipApiKey: string;
    xTrinitipAppInstallationId: string;
}
export interface MenuItemsEntity {
    itemAmount: number;
    itemName: string;
    itemQty: number;
    menuFamily: string;
    menuItemId: string;
    menuItemType: string;
    menuMajorGroup: string;
    serialNumber: string;
}
export interface PaymentsEntity {
    Amount: Amount;
    BillingAddress: BillingAddress;
    CreatedAt: string;
    EventType: string;
    IsPrimary: boolean;
    LineID: string;
    Masked: string;
    PaymentID: string;
    PaymentMethod: any;
    PaymentResponse: any;
    State: string;
    User: User;
    XTrinitipApiKey: string;
    XTrinitipAppInstallationId: string;
    SchedulingError?: any;
}
export interface BillingAddress {
    City: string;
    Country: string;
    Email: string;
    Phone: Phone;
    PostalCode: string;
    StateOrProvince: string;
    Street: string;
}
export interface Amount {
    Currency: string;
    Value: number;
}
export interface BillingAddress {
    City: string;
    Country: string;
    Email: string;
    Phone: Phone;
    PostalCode: string;
    StateOrProvince: string;
    Street: string;
}
export interface Phone {
    Number: string;
    Type: string;
}
export interface User {
    Email: string;
    UserID: string;
}
