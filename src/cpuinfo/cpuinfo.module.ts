import { Module } from '@nestjs/common';
import { CpuinfoService } from './cpuinfo.service';
import { CpuinfoController } from './cpuinfo.controller';

@Module({
  controllers: [CpuinfoController],
  providers: [CpuinfoService],
})
export class CpuinfoModule {}
