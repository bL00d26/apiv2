import { ProviderStrategy } from '../interfaces/provider-strategy';
import { TrinitipService } from './trinitip.service';
export declare class TrinitipProvider implements ProviderStrategy {
    private readonly trinitipService;
    constructor(trinitipService: TrinitipService);
    createOrder(order: any): Promise<any>;
    modifyBefore(order: any): Promise<any>;
    modifyAfter(order: any): Promise<any>;
    placeOrder(order: any): Promise<any>;
    deleteOrder(order: any): Promise<any>;
    getOrder(order: any): Promise<any>;
}
