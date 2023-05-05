import { ProviderFactory } from './providers/provider.factory';
import { Request, Response } from 'express';
export declare class AppController {
    private readonly providerFactory;
    constructor(providerFactory: ProviderFactory);
    findAll(req: Request, res: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
