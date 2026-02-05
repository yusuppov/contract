import clsx from "clsx";
import styles from "./Button.module.css";
import { UseModal } from "../../../Providers/ModalContext/UseModal";

import { ButtonHTMLAttributes } from "react";
import { Text } from "../../Text";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, className }: ButtonInterface) => {
  const { open } = UseModal();
  return (
    <button className={clsx(styles.btn, className)} onClick={open}>
      <Text variant="body2" color="white">
        {text}
      </Text>
    </button>
  );
};
