import Typography from "@/components/atoms/Modal/Typography";
import Button from "@/components/atoms/Modal/Button";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";

export default function Modal({
  type,
  title,
  confirmText = "예",
  cancelText = "아니오",
  onConfirm,
  onCancel,
  onClose,
  children,
}: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>{" "}
        {/* 아이콘 필요 */}
        <Typography>{title}</Typography>
        <div className={styles.buttonGroup}>
          {type === "share" && <div className={styles.content}>{children}</div>}
          <div className={styles.buttonGroup}>
            {type === "alert" && <Button onClick={onClose}>닫기</Button>}

            {type === "confirm" && (
              <>
                <Button onClick={onConfirm} variant="confirm">
                  {confirmText}
                </Button>
                <Button onClick={onCancel} variant="default">
                  {cancelText}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
