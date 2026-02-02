import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonInterface {
  children: React.ReactNode;
}
export const Button = ({ children }: ButtonInterface) => {
  return <button className={clsx(styles.btn)}>{children}</button>;
};
