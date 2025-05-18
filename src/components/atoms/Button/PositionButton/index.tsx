import React from "react";
import styles from "./PositionButton.module.scss";
import { ButtonProps } from "../Button.types";

interface PositionButtonProps extends Omit<ButtonProps, "children"> {
  count: number | string;
  label: string;
  circleTextColor?: string;
  children?: React.ReactNode;
}

function PositionButton({
  count,
  label,
  circleTextColor = "#57f98e",
  ...rest
}: PositionButtonProps) {
  const displayCount = typeof count === "number" && count > 99 ? "99+" : count;

  return (
    <button className={styles.positionButton} {...rest} type="button">
      <span className={styles.circle} style={{ color: circleTextColor }}>
        {displayCount}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
}

export default PositionButton;
