export type ModalButtonVariant = "red" | "default" | "hover";

export interface ModalButtonProps {
  children: React.ReactNode;
  variant?: ModalButtonVariant;
}
