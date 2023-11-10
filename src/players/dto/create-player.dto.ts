import { IsInt, Length } from 'class-validator';

export class CreatePlayerDto {
    id: string;
    @Length(1, 15, { message: 'name can be from 1 to 15 characters' })
    name: string;
    @Length(2, 2, { message: 'country code must be 2 characters' })
    country: string;
    @IsInt()
    score: number;

    createdAt: string;

    updatedAt: string;
}
