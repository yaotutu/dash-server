import { Module } from '@nestjs/common';
import { SysteminfoService } from './systeminfo.service';
import { SysteminfoController } from './systeminfo.controller';
import { CpuModule } from './cpu/cpu.module';

@Module({
  controllers: [SysteminfoController],
  providers: [SysteminfoService],
  imports: [CpuModule],
})
export class SysteminfoModule {}
