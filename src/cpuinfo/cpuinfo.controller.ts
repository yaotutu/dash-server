import { Controller, Get } from '@nestjs/common';
import { CpuinfoService } from './cpuinfo.service';
import { cpu } from 'systeminformation'

@Controller('cpuinfo')
export class CpuinfoController {
  constructor(private readonly cpuinfoService: CpuinfoService) { }

  @Get()
  async getCpuInfo() {
    return await cpu() 
  }
}
