import { PayloadDto } from './payload.dto';
export declare class ActivityLogDto {
    event: string;
    payload?: PayloadDto;
    createdAt?: Date;
}
