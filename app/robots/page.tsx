"use client";

import PageTitle from "@/components/PageTitle";
import { RobotsTable } from "@/components/RobotsTable";
import React from "react";
import { columns } from "./columns";
import { data } from "./data";

export default function RobotsPage() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Robots" />
      <RobotsTable columns={columns} data={data} />
    </div>
  );
}
