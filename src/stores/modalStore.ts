import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  modalType: "alert" | "confirm" | "share";
  title: string;
  confirmText: string;
  cancelText: string;
  openModal: (
    type: ModalState["modalType"],
    title: string,
    confirmText?: string,
    cancelText?: string
  ) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: "alert",
  title: "",
  confirmText: "예",
  cancelText: "아니오",
  openModal: (type, title, confirmText = "예", cancelText = "아니오") =>
    set({ isOpen: true, modalType: type, title, confirmText, cancelText }),
  closeModal: () =>
    set({
      isOpen: false,
      modalType: "alert",
      title: "",
      confirmText: "예",
      cancelText: "아니오",
    }),
}));
