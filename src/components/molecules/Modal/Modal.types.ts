export type ModalType = "share" | "confirm" | "alert";

export interface ModalProps {
  type?: ModalType;
  title: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode; // 공유 모달용
}
