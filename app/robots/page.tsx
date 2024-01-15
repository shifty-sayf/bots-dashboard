"use client";

import PageTitle from "@/components/PageTitle";
import { RobotsTable } from "@/components/RobotsTable";
import { Button } from "@/components/ui/button";
import { Robot } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
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
