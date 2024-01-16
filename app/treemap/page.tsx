"use client";

import PageTitle from "@/components/PageTitle";
import React, { useEffect, useRef } from "react";
import { select, hierarchy, tree, linkHorizontal } from "d3";
import { transformedData } from "../robots/data";
import useResizeObserver from "@/app/hooks/useResizeObserver";
import { link } from "fs";

interface TreeData {
  name: string;
  children?: TreeData[];
}

export default function TreeMapPage() {
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    var root = hierarchy<TreeData>(transformedData);
    const treeLayout = tree<TreeData>().size([
      dimensions.height,
      dimensions.width,
    ]);
    root = treeLayout(root);

    console.log(root.descendants());
    console.log(root.links());

    const linkGenerator = linkHorizontal()
      .x((node: any) => node.y)
      .y((node: any) => node.x);

    // nodes
    svg
      .selectAll(".node")
      .data(root.descendants())
      .join("circle")
      .attr("class", "node")
      .attr("r", 6)
      .attr("fill", "black")
      .attr("cx", (node: any) => node.y)
      .attr("cy", (node: any) => node.x);

    // links
    svg
      .selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "black")
      .attr("d", linkGenerator as any);

    // labels
    svg
      .selectAll(".label")
      .data(root.descendants())
      .join("text")
      .attr("class", "label")
      .attr("text-anchor", "middle")
      .attr("font-size", 24)
      .attr("x", (node: any) => node.y)
      .attr("y", (node: any) => node.x - 20)
      .text((node: any) => node.data.name);
  }, [transformedData, dimensions]);

  return (
    <div
      ref={wrapperRef}
      id="chart"
      className="flex flex-col gap-10 w-full h-full overflow-visible"
    >
      <PageTitle title="Tree Map" className="text-nowrap" />
      <svg
        ref={svgRef}
        className="ml-16 overflow-visible max-w-xl"
        viewBox="0 0 1024 1000"
      />
    </div>
  );
}
