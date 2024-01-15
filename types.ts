export type Robot = {
  robotId: string;
  robotName: string;
  country: string;
  lat: string;
  lng: string;
  battery: number;
  distance: number;
  testDrives: number;
  frontCam: "OK" | "Service Soon" | "Not Working";
  rearCam: "OK" | "Service Soon" | "Not Working";
  mic: "OK" | "Service Soon" | "Not Working";
  audio: "OK" | "Service Soon" | "Not Working";
  "4g": "OK" | "Service Soon" | "Not Working";
  lights: "OK" | "Service Soon" | "Not Working";
};
