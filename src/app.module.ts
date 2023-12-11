import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CpuinfoModule } from './cpuinfo/cpuinfo.module';

@Module({
  imports: [CpuinfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
