import { IsNumber } from 'class-validator';

export class ArithmeticInputDto {
  @IsNumber()
  A: number;
  @IsNumber()
  B: number;
}
