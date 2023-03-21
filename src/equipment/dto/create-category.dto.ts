import { IsNotEmpty, IsString } from 'class-validator';

export class createCategory {
  @IsNotEmpty()
  @IsString()
  name: string;
}
