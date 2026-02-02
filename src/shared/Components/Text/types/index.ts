import { ComponentProps, HTMLAttributes } from "react";

export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "body3"
  | "caption1"
  | "caption2"
  | "caption3"
  | "button1"
  | "button2"
  | "badge1";

export type TextWeight = 400 | 500 | 600 | 700;

export type TextColor =
  | "black"
  | "blue"
  | "white"
  | "success"
  | "error"
  | "mute";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TextElement = HeadingElement | "p" | "span";

interface BaseTextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
}

interface HeadingProps extends ComponentProps<"h1"> {
  as: HeadingElement;
}

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: "p";
}

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  as: "span";
}

export type TextElementProps = HeadingProps | ParagraphProps | SpanProps;

export type TextProps = BaseTextProps & TextElementProps;
