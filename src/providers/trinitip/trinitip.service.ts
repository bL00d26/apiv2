import { Injectable } from '@nestjs/common';
import { loggerFromLayer } from '/opt/nodejs/utils/logger';
import { generateId } from '/opt/nodejs/utils/generate-id';
@Injectable()
export class TrinitipService {
  async createOrder(order: any): Promise<any> {
    const id = generateId();
    loggerFromLayer(order);
    loggerFromLayer(id);
    return order;
  }
}
