import React from "react";
import styles from "./ContainerFlex.module.css";

export const ContainerFlex = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.containerWrapper}>{children}</div>;
};
