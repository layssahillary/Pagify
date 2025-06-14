import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from 'src/application/book/usecase/createBook';

@ApiTags('Books')
@Controller('book')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(): string {
    return this.appService.getHello();
  }
}
