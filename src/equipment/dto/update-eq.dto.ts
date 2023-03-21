import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class updateEq {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  categoryId?: number;
}
