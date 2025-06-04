import React from "react";

export interface TextViewPropI
  extends Omit<React.HTMLAttributes<HTMLParagraphElement | HTMLLIElement>, "color"> {
  tag?: "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | React.ElementType;
  color?: TextViewColorsI;
  type?: TextViewTypesI;
  weight?: TextViewWeightI;
}

export type TextViewWeightI = 400 | 700;

export type TextViewColorsI = "red" | "white" | "dark" | "gray";
export type TextViewTypesI =
  | "title1"
  | "title2"
  | "title4"
  | "subtitle1"
  | "subtitle2"
  | "subtitle3";
