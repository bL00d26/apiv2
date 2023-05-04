import { Injectable } from '@nestjs/common';

import { TrinitipProvider } from './trinitip/trinitip.provider';

import { ProviderStrategy } from './interfaces/provider-strategy';
import { providerType } from './constants/providers';

@Injectable()
export class ProviderFactory {
  constructor(private trinitipProvider: TrinitipProvider) {}

  createProvider(type: string): ProviderStrategy {
    console.log(type);
    switch (type) {
      case providerType.TRINITIP:
        return this.trinitipProvider;
      default:
        throw new Error('Invalid provider type');
    }
  }
}
