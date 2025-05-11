import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "confirm" | "default";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}
