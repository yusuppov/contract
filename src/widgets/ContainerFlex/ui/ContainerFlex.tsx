import clsx from "clsx";
import type { HTMLAttributes } from "react";

import styles from "./ContainerFlex.module.css";

interface ContainerFlexProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ContainerFlex = ({
  children,
  className,
  ...props
}: ContainerFlexProps) => {
  return (
    <div className={clsx(styles.containerWrapper, className)} {...props}>
      {children}
    </div>
  );
};
