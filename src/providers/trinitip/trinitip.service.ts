import { Injectable } from '@nestjs/common';

@Injectable()
export class TrinitipService {
  async createOrder(order: any): Promise<any> {
    return order;
  }
}
