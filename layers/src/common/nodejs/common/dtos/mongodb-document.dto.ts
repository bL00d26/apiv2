import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class MongoDbDocumentDto {
  @Expose()
  @ApiProperty({
    description: 'The date in which the document was created on the database.',
    example: '2022-06-16T23:34:35.517Z',
    readOnly: true,
  })
  createdAt: Date;
  @Expose()
  @ApiProperty({
    description: 'The date in which the document was updated on the database.',
    example: '2022-06-16T23:34:35.517Z',
    readOnly: true,
  })
  updatedAt: Date;

  @Expose()
  @ApiProperty({
    description: 'The mongoDB ID from the object',
    example: '507f191e810c19729de860ea',
    readOnly: true,
  })
  _id: ObjectId;
}
