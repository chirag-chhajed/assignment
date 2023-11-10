import { IsInt, Length, IsOptional } from 'class-validator';

export class UpdatePlayerDto {
    @IsOptional()
    @Length(1, 15, { message: 'name can be from 1 to 15 characters' })
    name?: string;

    @IsOptional()
    @IsInt()
    score?: number;
}
