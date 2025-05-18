import React from "react";
import styles from "./PositionButton.module.scss";

interface PositionButtonProps {
  count: number | string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  circleTextColor?: string;
}

const PositionButton: React.FC<PositionButtonProps> = ({
  count,
  label,
  onClick,
  disabled,
  circleTextColor = "#57f98e",
}) => {
  const displayCount = typeof count === "number" && count > 99 ? "99+" : count;

  return (
    <button
      className={styles.positionButton}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <span className={styles.circle} style={{ color: circleTextColor }}>
        {displayCount}
      </span>
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default PositionButton;
