import { time } from "systeminformation";
import { HardwareInfo } from ".";
import { BehaviorSubject } from "rxjs";

const STATIC_INFO = new BehaviorSubject<HardwareInfo>({
  os: {
    arch: '',
    distro: '',
    kernel: '',
    platform: '',
    release: '',
    uptime: 0,
    dash_buildhash: '',
    dash_version: '',
  },
  cpu: {
    brand: '',
    model: '',
    cores: 0,
    ecores: 0,
    pcores: 0,
    threads: 0,
    frequency: 0,
  },
  ram: {
    size: 0,
    layout: [],
  },
  storage: [],
  network: {
    interfaceSpeed: 0,
    speedDown: 0,
    speedUp: 0,
    type: '',
    publicIp: '',
  },
  gpu: {
    layout: [],
  },
});

const promIf = (condition: boolean, func: () => Promise<any>): Promise<any> => {
  return condition ? func() : Promise.resolve(null);
};

export const loadInfo = <
  T extends 'os' | 'cpu' | 'storage' | 'ram' | 'network' | 'gpu',
  B extends boolean
>(
  info: T,
  loader: () => Promise<
    B extends true ? Partial<HardwareInfo[T]> : HardwareInfo[T]
  >,
  append: B
) => {
  return promIf(true, async () => {
    STATIC_INFO.next({
      ...STATIC_INFO.getValue(),
      [info]: append
        ? {
          ...STATIC_INFO.getValue()[info],
          ...(await loader()),
        }
        : await loader(),
    });
  });
};

export const getStaticServerInfo = (): any => {
  return {
    ...STATIC_INFO.getValue(),
    os: {
      ...STATIC_INFO.getValue().os,
      uptime: +time().uptime,
    },
  };
};
