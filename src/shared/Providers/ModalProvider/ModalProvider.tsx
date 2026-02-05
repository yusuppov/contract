import { useState, useEffect } from "react";
import { ModalContext } from "../ModalContext";
import styles from "./ModalProvider.module.css";

import { Form } from "../../../widgets/Form";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // блокируем
    } else {
      document.body.style.overflow = ""; // возвращаем
    }

    // очистка при размонтировании
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
            style={{ background: "white", padding: 30, borderRadius: 12 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Form />
            <button
              className={styles.formButton}
              onClick={close}
              style={{ marginTop: 16 }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

// <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 9999,
//           }}
//           onClick={close}
//         >
//           <div
//             style={{ background: "white", padding: 30, borderRadius: 12 }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2>Форма</h2>
//             <button onClick={close}>Закрыть</button>
//           </div>
//         </div>
