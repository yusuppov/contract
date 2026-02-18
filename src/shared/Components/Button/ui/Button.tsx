import clsx from "clsx";
import styles from "./Button.module.css";
import { UseModal } from "../../../Providers/ModalContext/UseModal";
import { TextColor } from "../../Text";
import { TextVariant } from "../../Text";
import { ButtonHTMLAttributes } from "react";
import { Text } from "../../Text";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: TextColor;
  variant?: TextVariant;
}

export const Button = ({ text, className, color,variant }: ButtonInterface) => {
  const { open } = UseModal();
  return (
    <button className={clsx(styles.btn, className)} onClick={open}>
      <Text variant={variant ? variant : "body2"} color={color ? color : "white"}>
        {text}
      </Text>
    </button>
  );
};
