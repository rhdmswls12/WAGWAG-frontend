import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  modalType: "alert" | "confirm" | "share";
  title: string;
  confirmText: string;
  cancelText: string;
  link?: string;
  openModal: (options: {
    type: ModalState["modalType"];
    title: string;
    confirmText?: string;
    cancelText?: string;
    link?: string;
  }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalType: "alert",
  title: "",
  confirmText: "예",
  cancelText: "아니오",
  link: "",
  openModal: ({
    type,
    title,
    confirmText = "예",
    cancelText = "아니오",
    link = "",
  }) =>
    set({
      isOpen: true,
      modalType: type,
      title,
      confirmText,
      cancelText,
      link,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      modalType: "alert",
      title: "",
      confirmText: "예",
      cancelText: "아니오",
      link: "",
    }),
}));
