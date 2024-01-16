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

    // animation
    var duration = 750;
    var i = 0;
    function update(source: any) {
      var treeData = treeLayout(root);

      // nodes
      var nodes = treeData.descendants();
      nodes.forEach(function (d: any) {
        d.y = d.depth * 180;
      });
      var node = svg.selectAll("g.node").data(nodes, function (d: any) {
        return d.id || (d.id = ++i);
      });

      var nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d: any) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .on("click", click);

      nodeEnter
        .append("circle")
        .attr("class", "node")
        .attr("r", 0)
        .style("fill", function (d: any) {
          return d._children ? "red" : "#fff";
        });

      nodeEnter
        .append("text")
        .attr("x", function (d: any) {
          return d.children || d._children ? -13 : 13;
        })
        .attr("dy", ".35em")
        .attr("text-anchor", function (d: any) {
          return d.children || d._children ? "end" : "start";
        })
        .text(function (d: any) {
          return d.data.name;
        });

      var nodeUpdate = nodeEnter.merge(node as any);

      nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", function (d: any) {
          return "translate(" + d.y + "," + d.x + ")";
        });

      nodeUpdate
        .select("circle.node")
        .attr("r", 10)
        .style("fill", function (d: any) {
          return d._children ? "red" : "black";
        })
        .attr("cursor", "pointer");

      var nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", function (d: any) {
          return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

      nodeExit.select("circle").attr("r", 0);
      nodeExit.select("text").style("fill-opacity", 0);

      // links
      function diagonal(s: any, d: any) {
        return `M ${s.y} ${s.x}
                  C ${(s.y + d.y) / 2} ${s.x},
                    ${(s.y + d.y) / 2} ${d.x},
                    ${d.y} ${d.x}`;
      }

      var links = treeData.descendants().slice(1);
      var link = svg.selectAll("path.link").data(links, function (d: any) {
        return d.id;
      });

      var linkEnter = link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d: any) {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        });

      var linkUpdate = linkEnter.merge(link as any);
      linkUpdate
        .transition()
        .attr("fill", "none")
        .attr("stroke", "black")
        .duration(duration)
        .attr("d", function (d: any) {
          return diagonal(d, d.parent);
        });

      var linkExit = link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", function (d: any) {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        })
        .remove();

      // for transitions, need to store old positions

      nodes.forEach(function (d: any) {
        d.oldX = d.x;
        d.oldY = d.y;
      });

      function click(event: any, d: any) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }
    }
    update(root);
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
