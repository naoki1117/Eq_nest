import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class createEq {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  limitCount?: string;

  @IsString()
  @IsNotEmpty()
  quantity: string;
}
