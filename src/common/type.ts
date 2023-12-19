export type CpuInfo = {
  brand: string;
  model: string;
  cores: number;
  ecores: number;
  pcores: number;
  threads: number;
  frequency: number;
};
export type CpuLoad = {
  core: number;
  load: number;
  temp: number;
}[];

export type RamInfo = {
  size: number;
  layout: {
    brand?: string;
    type?: string;
    frequency?: number;
  }[];
};
export type RamLoad = number;

export enum RaidType {
  ZERO = 0,
  ONE = 1,
}
export type StorageInfo = {
  raidType?: RaidType;
  raidLabel?: string;
  raidName?: string;
  size: number;
  virtual?: boolean;

  disks: {
    device: string;
    brand: string;
    type: string;
  }[];
}[];
export type StorageLoad = number[];

export type NetworkInfo = {
  interfaceSpeed: number;
  speedDown: number;
  speedUp: number;
  type: string;
  publicIp: string;
};
export type NetworkLoad = {
  up: number;
  down: number;
};

export type GpuInfo = {
  layout: {
    brand: string;
    model: string;
    memory: number;
  }[];
};
export type GpuLoad = {
  layout: {
    load: number;
    memory: number;
  }[];
};

export type OsInfo = {
  platform: string;
  distro: string;
  release: string;
  kernel: string;
  arch: string;
  uptime: number;
  dash_version: string;
  dash_buildhash: string;
};

export type HardwareInfo = {
  os: OsInfo;
  cpu: CpuInfo;
  ram: RamInfo;
  storage: StorageInfo;
  network: NetworkInfo;
  gpu: GpuInfo;
};
