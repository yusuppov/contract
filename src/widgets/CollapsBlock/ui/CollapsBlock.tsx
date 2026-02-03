import "../../../feature/utils.css";
import { FC, useState } from "react";

import { Text } from "../../../shared/Components/Text";

import styles from "./CollapsBlock.module.css";
import clsx from "clsx";

interface CollapsBlockInterface {
  title: string;
  children: string;
}

export const CollapsBlock: FC<CollapsBlockInterface> = ({
  title,
  children,
}) => {
  const [active, setActive] = useState(false);
  const activeFunc = () => setActive(!active);
  return (
    <div onClick={activeFunc} className={clsx(styles.collapsBlock)}>
      <div className={clsx(styles.collapsBlockTitle)}>
        <Text variant="body1">{title}</Text>{" "}
        <span className={active ? "rotate" : ""}>{">"}</span>
      </div>
      {active ? <Text variant="h4">{children}</Text> : null}
    </div>
  );
};
