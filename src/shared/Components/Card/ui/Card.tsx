import clsx from "clsx";
import VioletIcon from "../../../assets/icons/icon-1.svg";
import TurqIcon from "../../../assets/icons/icon-2.svg";
import YellowIcon from "../../../assets/icons/icon-3.svg";
import GreenIcon from "../../../assets/icons/icon-4.svg";

import styles from "./Card.module.css";
import { FC } from "react";
import { Text } from "../../Text";

interface CardInterface {
  color: "yellow" | "green" | "violet" | "turq";
  text: string;
}

export const Card: FC<CardInterface> = ({ color, text }) => {
  const CardIcon =
    color === "violet"
      ? VioletIcon
      : color === "green"
        ? GreenIcon
        : color === "turq"
          ? TurqIcon
          : color === "yellow"
            ? YellowIcon
            : "";
  return (
    <div
      className={clsx(
        styles.card,
        color === "green" ? styles.greenCard : null,
        color === "yellow" ? styles.yellowCard : null,
        color === "violet" ? styles.violetCard : null,
        color === "turq" ? styles.turqCard : null,
      )}
    >
      <div className={clsx(styles.cardIconWrapper)}>
        <CardIcon />
      </div>
      <Text as="h3" variant="h5">
        {text}
      </Text>
    </div>
  );
};
