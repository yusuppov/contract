import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export const UseModal = () => {
  const ctx = useContext(ModalContext);

  if (!ctx) {
    throw new Error("Error");
  }

  return ctx;
};
