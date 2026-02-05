import clsx from "clsx";
import VioletIcon from "../../../assets/icons/icon-1.svg";
import TurqIcon from "../../../assets/icons/icon-2.svg";
import YellowIcon from "../../../assets/icons/icon-3.svg";
import GreenIcon from "../../../assets/icons/icon-4.svg";
import ManIcon from "../../../assets/icons/man.svg";
import CheckIcon from "../../../assets/icons/check.svg";

import styles from "./Card.module.css";
import { FC } from "react";
import { Text } from "../../Text";

interface CardInterface {
  color: "yellow" | "green" | "violet" | "turq" | "red" | "blue";
  text: string;
  onClick?: () => void;
}

export const Card: FC<CardInterface> = ({ color, text, onClick }) => {
  const CardIcon =
    color === "violet"
      ? VioletIcon
      : color === "green"
        ? GreenIcon
        : color === "turq"
          ? TurqIcon
          : color === "yellow"
            ? YellowIcon
            : color === "red"
              ? ManIcon
              : color === "blue"
                ? CheckIcon
                : "";
  return (
    <div
      onClick={onClick}
      className={clsx(
        styles.card,
        color === "green" ? styles.greenCard : null,
        color === "yellow" ? styles.yellowCard : null,
        color === "violet" ? styles.violetCard : null,
        color === "turq" ? styles.turqCard : null,
        color === "red" ? styles.redCard : null,
        color === "blue" ? styles.blueCard : null,
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
