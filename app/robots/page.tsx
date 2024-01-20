"use client";

import PageTitle from "@/components/PageTitle";
import { RobotsTable } from "@/components/RobotsTable";
import React, { Suspense } from "react";
import { columns } from "./columns";
// import { data } from "./data";
import { useFetchData } from "../hooks/useFetchData";
import { Robot } from "@/types";

interface FetchDataResult {
  loading: boolean;
  error: boolean;
  robots: Robot[] | [];
}

export default function RobotsPage() {
  const { robots, loading, error }: FetchDataResult = useFetchData();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Robots" />
      <Suspense fallback={<div>LOADING!</div>}>
        <RobotsTable columns={columns} data={robots} />
      </Suspense>
    </div>
  );
}
