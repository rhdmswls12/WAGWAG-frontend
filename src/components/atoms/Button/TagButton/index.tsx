import React from "react";
import styles from "./TagButton.module.scss";
import { ButtonProps } from "../Button.types";

interface TagButtonProps extends ButtonProps {
  fontSize?: string;
  padding?: string;
}

function TagButton({
  children,
  fontSize = "1.5rem",
  padding = "1.125rem 2.1rem",
  ...rest
}: TagButtonProps) {
  return (
    <button
      className={styles.tagButton}
      style={{ fontSize, padding }}
      {...rest}
      type="button"
    >
      {children}
    </button>
  );
}

export default TagButton;
