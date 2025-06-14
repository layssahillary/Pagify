import { Module } from '@nestjs/common';
import { HttpModule } from 'src/infra/adapters/in/http/http.module';

@Module({
  imports: [HttpModule],
})
export class AppModule {}
