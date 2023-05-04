import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { healthModule } from '../docs/common/health/index';
import { HealthCheck } from '@nestjs/terminus';
import { GetHealResponseDto } from './dto';
import { HealthService } from './health.service';

const { NAME, ENDPOINTS } = healthModule;

@ApiTags(NAME)
@Controller('/health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  @HealthCheck()
  @ApiOperation({ summary: ENDPOINTS.GET_HEALTH.SUMMARY })
  @ApiResponse({
    ...ENDPOINTS.GET_HEALTH.OK_RESPONSE,
    type: GetHealResponseDto,
  })
  check() {
    return this.healthService.getGeneralHealth();
  }
  @Get('db')
  @HealthCheck()
  @ApiOperation({ summary: ENDPOINTS.GET_DATABASE_HEALTH.SUMMARY })
  @ApiResponse({
    ...ENDPOINTS.GET_DATABASE_HEALTH.OK_RESPONSE,
    type: GetHealResponseDto,
  })
  checkDb() {
    return this.healthService.getDatabaseConnectionHealth();
  }
}
