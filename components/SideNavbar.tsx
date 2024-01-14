"use client";
import { useState } from "react";
import { Nav } from "./ui/nav";
import { LayoutDashboard, TreePine, Bot, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";
import { only } from "node:test";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant={"secondary"}
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Robots",
            href: "/robots",
            icon: Bot,
            variant: "ghost",
          },
          {
            title: "TreeMap",
            href: "/treemap",
            icon: TreePine,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}