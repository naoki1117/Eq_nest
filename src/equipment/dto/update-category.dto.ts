import { IsNotEmpty, IsString } from 'class-validator';

export class updateCategory {
  @IsNotEmpty()
  @IsString()
  name: string;
}
