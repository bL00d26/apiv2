import { Injectable } from '@nestjs/common';
import { ProviderStrategy } from '../interfaces/provider-strategy';
import { TrinitipService } from './trinitip.service';

@Injectable()
export class TrinitipProvider implements ProviderStrategy {
  constructor(private readonly trinitipService: TrinitipService) {}
  async createOrder(order: any): Promise<any> {
    return await this.trinitipService.createOrder(order);
  }
  async modifyBefore(order: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async modifyAfter(order: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async placeOrder(order: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async deleteOrder(order: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getOrder(order: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
