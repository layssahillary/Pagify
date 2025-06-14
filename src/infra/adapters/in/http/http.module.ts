import { Module } from '@nestjs/common';

import { AppController } from './controllers/book/app.controller';
import { AppService } from 'src/application/book/usecase/createBook';

@Module({
  imports: [], // Aqui você pode importar outros módulos, ex: DatabaseModule, AuthModule...
  controllers: [AppController], // Controllers das rotas HTTP
  providers: [AppService], // Use cases e providers injetáveis
})
export class HttpModule {}
