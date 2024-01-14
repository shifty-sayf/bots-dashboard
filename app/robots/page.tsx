"use client";

import PageTitle from "@/components/PageTitle";
import { RobotsTable } from "@/components/RobotsTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";

type Robot = {
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

const columns: ColumnDef<Robot>[] = [
  {
    accessorKey: "robotId",
    header: "RobotId",
  },
  {
    accessorKey: "robotName",
    header: "RobotName",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${row.getValue(
              "robotName"
            )}`}
            alt="robot-image"
          />
          <p>{row.getValue("robotName")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "lat",
    header: "Lat",
  },
  {
    accessorKey: "lng",
    header: "Lng",
  },
  {
    accessorKey: "battery",
    header: "Batt %",
  },
  {
    accessorKey: "distance",
    header: "Dist KM",
  },
  {
    accessorKey: "testDrives",
    header: "# Test Drives",
  },
  {
    accessorKey: "frontCam",
    header: "Front Cam",
  },
  {
    accessorKey: "rearCam",
    header: "Rear Cam",
  },
  {
    accessorKey: "mic",
    header: "Mic",
  },
  {
    accessorKey: "audio",
    header: "Audio",
  },
  {
    accessorKey: "4g",
    header: "4G Signal",
  },
  {
    accessorKey: "lights",
    header: "Batt %",
  },
];

const data: Robot[] = [
  {
    robotId: "1",
    robotName: "Abby",
    country: "USA",
    lat: "37.7749",
    lng: "-122.4194",
    battery: 80,
    distance: 10,
    testDrives: 5,
    frontCam: "OK",
    rearCam: "OK",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "2",
    robotName: "Cuddles",
    country: "Canada",
    lat: "43.651070",
    lng: "-79.347015",
    battery: 90,
    distance: 15,
    testDrives: 8,
    frontCam: "Service Soon",
    rearCam: "OK",
    mic: "OK",
    audio: "Service Soon",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "3",
    robotName: "Bob",
    country: "Germany",
    lat: "51.1657",
    lng: "10.4515",
    battery: 70,
    distance: 12,
    testDrives: 3,
    frontCam: "Not Working",
    rearCam: "OK",
    mic: "Service Soon",
    audio: "OK",
    "4g": "Service Soon",
    lights: "OK",
  },
  {
    robotId: "4",
    robotName: "Patches",
    country: "Japan",
    lat: "35.6895",
    lng: "139.6917",
    battery: 95,
    distance: 20,
    testDrives: 10,
    frontCam: "OK",
    rearCam: "Not Working",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "Service Soon",
  },
  {
    robotId: "5",
    robotName: "Socks",
    country: "Australia",
    lat: "-33.865143",
    lng: "151.209900",
    battery: 85,
    distance: 18,
    testDrives: 6,
    frontCam: "OK",
    rearCam: "OK",
    mic: "Not Working",
    audio: "Service Soon",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "6",
    robotName: "Felix",
    country: "USA",
    lat: "37.7749",
    lng: "-122.4194",
    battery: 80,
    distance: 10,
    testDrives: 5,
    frontCam: "OK",
    rearCam: "OK",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "7",
    robotName: "Snuggles",
    country: "Canada",
    lat: "43.651070",
    lng: "-79.347015",
    battery: 90,
    distance: 15,
    testDrives: 8,
    frontCam: "Service Soon",
    rearCam: "OK",
    mic: "OK",
    audio: "Service Soon",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "8",
    robotName: "Molly",
    country: "Germany",
    lat: "51.1657",
    lng: "10.4515",
    battery: 70,
    distance: 12,
    testDrives: 3,
    frontCam: "Not Working",
    rearCam: "OK",
    mic: "Service Soon",
    audio: "OK",
    "4g": "Service Soon",
    lights: "OK",
  },
  {
    robotId: "9",
    robotName: "Snickers",
    country: "Japan",
    lat: "35.6895",
    lng: "139.6917",
    battery: 95,
    distance: 20,
    testDrives: 10,
    frontCam: "OK",
    rearCam: "Not Working",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "Service Soon",
  },
  {
    robotId: "10",
    robotName: "Coco",
    country: "Australia",
    lat: "-33.865143",
    lng: "151.209900",
    battery: 85,
    distance: 18,
    testDrives: 6,
    frontCam: "OK",
    rearCam: "OK",
    mic: "Not Working",
    audio: "Service Soon",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "11",
    robotName: "Casper",
    country: "USA",
    lat: "40.7128",
    lng: "-74.0060",
    battery: 75,
    distance: 14,
    testDrives: 4,
    frontCam: "OK",
    rearCam: "OK",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "12",
    robotName: "Mittens",
    country: "Canada",
    lat: "45.4215",
    lng: "-75.6982",
    battery: 85,
    distance: 16,
    testDrives: 7,
    frontCam: "OK",
    rearCam: "OK",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "13",
    robotName: "Miss kitty",
    country: "Germany",
    lat: "52.5200",
    lng: "13.4050",
    battery: 90,
    distance: 22,
    testDrives: 9,
    frontCam: "OK",
    rearCam: "OK",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "14",
    robotName: "Snowball",
    country: "France",
    lat: "48.8566",
    lng: "2.3522",
    battery: 80,
    distance: 19,
    testDrives: 5,
    frontCam: "OK",
    rearCam: "OK",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "OK",
  },
  {
    robotId: "15",
    robotName: "Buster",
    country: "Australia",
    lat: "-37.8136",
    lng: "144.9631",
    battery: 95,
    distance: 21,
    testDrives: 10,
    frontCam: "OK",
    rearCam: "OK",
    mic: "OK",
    audio: "OK",
    "4g": "OK",
    lights: "OK",
  },
];

export default function RobotsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Robots" />
      <RobotsTable columns={columns} data={data} />
    </div>
  );
}
