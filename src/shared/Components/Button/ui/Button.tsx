import clsx from "clsx";
import styles from "./Button.module.css";

import { Text } from "../../Text";

interface ButtonInterface {
  text: string;
}
export const Button = ({ text }: ButtonInterface) => {
  return (
    <button className={clsx(styles.btn)}>
      <Text variant="body2" color="white">
        {text}
      </Text>
    </button>
  );
};
