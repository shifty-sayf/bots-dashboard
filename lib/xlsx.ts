import xlsx, { IJsonSheet } from "json-as-xlsx";
import { data } from "@/app/robots/data";

export function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: "Robots",
      columns: [
        { label: "Robot ID", value: "robotId" },
        { label: "Robot Name", value: "robotName" },
        { label: "Country", value: "country" },
        { label: "Latitude", value: "lat" },
        { label: "Longitude", value: "lng" },
        { label: "Battery", value: "battery" },
        { label: "Distance", value: "distance" },
        { label: "Test Drives", value: "testDrives" },
        { label: "Front Cam", value: "frontCam" },
        { label: "Rear Cam", value: "rearCam" },
        { label: "Mic", value: "mic" },
        { label: "Audio", value: "audio" },
        { label: "4G", value: "4g" },
        { label: "Lights", value: "lights" },
      ],
      content: data,
    },
  ];

  let settings = {
    fileName: "robots",
  };

  xlsx(columns, settings);
}
