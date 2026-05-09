import { Module } from '@nestjs/common';
import { ServerTestController } from './server-test.controller';
import { ServerTestService } from './server-test.service';

@Module({
  controllers: [ServerTestController],
  providers: [ServerTestService]
})
export class ServerTestModule {}
