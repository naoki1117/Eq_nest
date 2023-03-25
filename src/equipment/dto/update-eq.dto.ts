import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class updateEq {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  category: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;
}
