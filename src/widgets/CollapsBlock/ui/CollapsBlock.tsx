import "../../../feature/utils.css";
import { FC, useState } from "react";
import IconSmall from "../../../shared/assets/icons/arrow-small.svg";
import { Text } from "../../../shared/Components/Text";

import styles from "./CollapsBlock.module.css";
import clsx from "clsx";

interface CollapsBlockInterface {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: "body1" | "caption3";
}

export const CollapsBlock: FC<CollapsBlockInterface> = ({
  title,
  children,
  className,
  variant,
}) => {
  const [active, setActive] = useState(false);
  const activeFunc = () => setActive(!active);
  return (
    <div onClick={activeFunc} className={clsx(styles.collapsBlock, className)}>
      <div className={clsx(styles.collapsBlockTitle)}>
        <Text variant={variant ? variant : "body1"}>{title}</Text>{" "}
        <div className={clsx(styles.circle, active ? "rotate" : "")}>
          <span>
            <IconSmall />
          </span>
        </div>
      </div>
      {active ? <Text variant="h4">{children}</Text> : null}
    </div>
  );
};
