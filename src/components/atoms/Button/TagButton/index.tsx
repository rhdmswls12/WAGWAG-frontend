import React from "react";
import styles from "./TagButton.module.scss";
import { ButtonProps } from "../Button.types";

interface TagButtonProps extends ButtonProps {
  fontSize?: string;
  padding?: string;
}

function TagButton({
  children,
  fontSize = "15px",
  padding = "11.25px 21px",
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
