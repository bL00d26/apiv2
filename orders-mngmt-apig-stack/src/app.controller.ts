import {
  Controller,
  Get,
  Param,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ProviderFactory } from './providers/provider.factory';
import { OrderProviderTypeInterceptor } from './interceptors/provider-type.interceptor';
import { Request, Response } from 'express';

@UseInterceptors(OrderProviderTypeInterceptor)
@Controller()
export class AppController {
  constructor(private readonly providerFactory: ProviderFactory) {}
  @Get('test/:id')
  async findAll(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    const { orderType } = req as any; //interface que herede de Request
    const provider = this.providerFactory.createProvider(orderType);
    console.log('id', id);
    const order = await provider.createOrder({ orderType });
    return res.status(200).json(order);
  }
}
