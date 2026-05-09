import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerTestModule } from './server-test/server-test.module';

@Module({
  imports: [ServerTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
