"use client";
import styles from "./Modal.module.scss";
import { useModalStore } from "@/stores";
import CancelSvg from "@/assets/images/Cancel.svg";
import CopySvg from "@/assets/images/Copy.svg";
import { ModalButton, ModalTypography } from "@/components/atoms";

export const Modal = () => {
  const {
    isOpen,
    modalType,
    title,
    confirmText,
    cancelText,
    link,
    closeModal,
  } = useModalStore();

  if (!isOpen) return null;

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      alert("링크가 복사되었습니다!");
    } catch {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={`${styles.modalContent} ${modalType === "share" ? styles.shareModal : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={closeModal}>
          <CancelSvg />
        </button>
        <ModalTypography>{title}</ModalTypography>
        <div className={styles.buttonGroup}>
          {modalType === "share" && (
            <div className={styles.shareBox}>
              <input
                className={styles.shareInput}
                type="text"
                value={link}
                readOnly
              />
              <button className={styles.copyButton} onClick={handleCopy}>
                <CopySvg />
              </button>
            </div>
          )}
          {modalType === "alert" && (
            <ModalButton onClick={closeModal}>닫기</ModalButton>
          )}
          {modalType === "confirm" && (
            <>
              <ModalButton onClick={closeModal} variant="confirm">
                {confirmText}
              </ModalButton>
              <ModalButton onClick={closeModal} variant="default">
                {cancelText}
              </ModalButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
