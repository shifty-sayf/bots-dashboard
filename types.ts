type DeviceStatus = "OK" | "Service Soon" | "Not Working";

export type Robot = {
  robotId: string;
  robotName: string;
  country: string;
  lat: string;
  lng: string;
  battery: number;
  distance: number;
  testDrives: number;
  frontCam: DeviceStatus;
  rearCam: DeviceStatus;
  mic: DeviceStatus;
  audio: DeviceStatus;
  "4g": DeviceStatus;
  lights: DeviceStatus;
};
