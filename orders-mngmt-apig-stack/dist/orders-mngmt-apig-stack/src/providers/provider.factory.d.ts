import { TrinitipProvider } from './trinitip/trinitip.provider';
import { ProviderStrategy } from './interfaces/provider-strategy';
export declare class ProviderFactory {
    private trinitipProvider;
    constructor(trinitipProvider: TrinitipProvider);
    createProvider(type: string): ProviderStrategy;
}
