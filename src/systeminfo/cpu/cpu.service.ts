import { Injectable } from '@nestjs/common';
import { CpuInfo, getStaticServerInfo } from 'src/common';
import { cpu, cpuTemperature, currentLoad } from 'systeminformation';

@Injectable()
export class CpuService {

  normalizeCpuModel(cpuModel: string) {
    return cpuModel
      .replace(/Processor/g, '')
      .replace(/[A-Za-z0-9]*-Core/g, '')
      .trim();
  };

  async getDynamicInfo() {
    const cpuLoad = await currentLoad();
    const cpuTemp = await cpuTemperature()
    return {
      load: cpuLoad,
      temp: cpuTemp,
    }
  }
  async getStaticInfo(): Promise<CpuInfo> {
    const cpuInfo = await cpu()
    return {
      brand: cpuInfo.manufacturer,
      model: this.normalizeCpuModel(cpuInfo.brand),
      cores: cpuInfo.physicalCores,
      ecores: cpuInfo.efficiencyCores,
      pcores: cpuInfo.performanceCores,
      threads: cpuInfo.cores,
      frequency: cpuInfo.speed,
    }
  }
}
