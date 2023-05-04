import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class GetHealDto {}
enum statusEnum {
  UP = 'up',
  DOWN = 'down',
}

class InfoStatusObject {
  @ApiProperty({
    name: 'status',
    enum: statusEnum,
  })
  status: string;
}

export class GetHealResponseDto extends GetHealDto {
  @Expose()
  @ApiProperty({
    name: 'status',
    example: 'ok',
  })
  status: string;

  @Expose()
  @ApiProperty({
    description: 'Info from the status of the service',
    example: {
      'nesJs-docs': InfoStatusObject,
    },
  })
  info: { [key: string]: InfoStatusObject };
  @Expose()
  @ApiProperty({
    description: 'Errors from the status of the service',
    example: {
      'nesJs-docs': InfoStatusObject,
    },
  })
  error: { [key: string]: InfoStatusObject };
  @ApiProperty({
    description: 'Details of the status of the service',
    example: {
      'nesJs-docs': InfoStatusObject,
    },
  })
  details: { [key: string]: InfoStatusObject };
}
