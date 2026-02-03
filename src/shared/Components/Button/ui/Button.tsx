import clsx from "clsx";
import styles from "./Button.module.css";
import { ButtonHTMLAttributes } from "react";
import { Text } from "../../Text";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  
}
export const Button = ({ text, className }: ButtonInterface) => {
  return (
    <button className={clsx(styles.btn, className)}>
      <Text variant="body2" color="white">
        {text}
      </Text>
    </button>
  );
};
