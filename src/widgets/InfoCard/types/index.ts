import type { HTMLAttributes } from "react";
export interface InfoCardInterface extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title?: string;
  mainText?: string;
  btnText?: string;
  circleColor?: "green" | "turq";
}
