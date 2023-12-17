import { Controller, Get } from '@nestjs/common';
import { CpuService } from './cpu.service';

@Controller('systeminfo/cpu')
export class CpuController {
  constructor(private readonly cpuService: CpuService) { }
  @Get()
  async getCpuInfo() {
    return this.cpuService.dynamic();
  }
}
