import React from "react";

export interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  placeholder?: string;
  width?: string;
  height?: string;
  color?: string;
  fontSize?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  textLabel?: string;
  bgColor?: string;
  value?: string;
  children?: React.ReactNode;
}
