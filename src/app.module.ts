import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SysteminfoModule } from './systeminfo/systeminfo.module';

@Module({
  imports: [SysteminfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
