import { Module } from '@nestjs/common';
import { TrinitipProvider } from './trinitip.provider';
import { TrinitipService } from './trinitip.service';

@Module({
  providers: [TrinitipProvider, TrinitipService],
  exports: [TrinitipProvider],
})
export class TrinitipModule {}
