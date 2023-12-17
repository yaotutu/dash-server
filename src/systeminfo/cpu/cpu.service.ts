import { Injectable } from '@nestjs/common';
import { cpuTemperature, currentLoad } from 'systeminformation';

@Injectable()
export class CpuService {


  async dynamic() {
    const cpuLoad = await currentLoad();
    const cpuTemp = await cpuTemperature()
    return {
      load: cpuLoad,
      temp: cpuTemp,
    }
  }
}
