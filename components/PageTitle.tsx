import { cn } from "@/lib/utils";
import React from "react";

type TitleProps = {
  title: string;
  className?: string;
};

export default function PageTitle({ title, className }: TitleProps) {
  return <h1 className={cn("text-2xl font-semibold", className)}>{title}</h1>;
}
