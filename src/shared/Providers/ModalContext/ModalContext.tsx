import { createContext } from "react";

export interface ModalContextType {
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);
