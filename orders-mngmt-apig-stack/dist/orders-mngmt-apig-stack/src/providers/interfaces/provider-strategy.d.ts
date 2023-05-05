export interface ProviderStrategy {
    createOrder(order: any): Promise<any>;
    modifyBefore(order: any): Promise<any>;
    modifyAfter(order: any): Promise<any>;
    placeOrder(order: any): Promise<any>;
    deleteOrder(order: any): Promise<any>;
    getOrder(order: any): Promise<any>;
}
