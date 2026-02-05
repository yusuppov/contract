import { useState, useEffect } from "react";
import { ModalContext } from "../ModalContext";

import { Form } from "../../../widgets/Form";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}

      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={close}
        >
          <div
            style={{ background: "white", padding: 50, borderRadius: 12 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Form />
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
