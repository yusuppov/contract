import clsx from "clsx";
import { FC } from "react";

import { DEFAULT_VARIANT, DEFAULT_ELEMENT } from "../constants";
import { TextProps } from "../types";
import styles from "./Text.module.css";

export const Text: FC<TextProps> = ({
  children,
  variant = DEFAULT_VARIANT,
  weight,
  color,
  as: Component = DEFAULT_ELEMENT,
  className,
  ...props
}) => {
  const classes = clsx(
    className,
    styles[variant],
    color && styles[color],
    weight && styles[`fw${weight}`],
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
