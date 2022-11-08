import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ArithmeticInputDto } from './request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  calculate(@Body() input: ArithmeticInputDto) {
    const { A, B } = input;

    if (A < -105) return 'value for A cannot be less than -105';
    if (B > 105) return 'value for B cannot be greater than 105';

    const calculations = [];
    if (isFinite(A * B)) calculations.push(A * B);
    else return 'Undefined Behavior';
    if (isFinite(A - B)) calculations.push(A - B);
    else return 'Undefined Behavior';
    if (isFinite(A / B)) calculations.push(A / B);
    else return 'Undefined Behavior';
    if (isFinite(A + B)) calculations.push(A + B);
    else return 'Undefined Behavior';

    return Math.max(...calculations);
  }
}
