import clsx from "clsx";
import { InfoCardInterface } from "../types";
import { FC } from "react";

import { Text } from "../../../shared/Components/Text";
import { Button } from "../../../shared/Components/Button";
import "../../../feature/utils.css";

import styles from "./InfoCard.module.css";

export const InfoCard: FC<InfoCardInterface> = ({
  icon,
  title,
  mainText,
  btnText,
  className,
  children,
  //   circleColor
}) => {
  return (
    <div className={clsx(className, styles.card)}>
      <div className={clsx(styles.cardWrapper)}>
        <div className={clsx(styles.cardHeader)}>
          {icon && <div className={styles.iconStyles}>{icon}</div>}
          <Text as="h3" variant="h3">
            {title}
          </Text>
        </div>
        <div>
          <Text as="p" variant="h4">
            {mainText}
          </Text>
          {children}
        </div>
        {btnText && <Button text={btnText} />}
      </div>
    </div>
  );
};
