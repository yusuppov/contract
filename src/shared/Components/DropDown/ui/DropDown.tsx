import styles from "./DropDown.module.css";
import { useState } from "react";
import clsx from "clsx";

export const DropDown = ({
  children,
}: {
  children: (close: () => void) => React.ReactNode;
}) => {
  const [active, setActive] = useState(false);
  const close = () => {
    setActive(!active);
  };
  return (
    <div className={styles.dropDown}>
      <div className={styles.dropLinesWrapper}>
        {" "}
        <ul
          className={styles.dropDownWrapper}
          onClick={() => setActive(!active)}
        >
          <li
            className={clsx(styles.firstLine, active ? styles.activeLine1 : "")}
          ></li>
          <li
            className={clsx(styles.twoLine, active ? styles.activeLine2 : "")}
          ></li>
          <li
            className={clsx(styles.threeLine, active ? styles.activeLine3 : "")}
          ></li>
        </ul>
      </div>

      <div className={clsx(styles.dropDownBlock, active ? styles.active : "")}>
        {children(close)}
      </div>
    </div>
  );
};
