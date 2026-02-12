import { useState } from "react";
import { Text } from "../../../shared/Components/Text";

import styles from "./Form.module.css";

export const Form = () => {
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    phone: "",
  });

  const validate = () => {
    const newErrors = { phone: "" };
    let valid = true;

    if (!phone.trim()) {
      newErrors.phone = "Введите номер телефона";
      valid = false;
    } else if (!/^\+?\d{10,15}$/.test(phone.replace(/\D/g, ""))) {
      newErrors.phone = "Неверный формат телефона";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setPhone("");
    setErrors({ phone: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <Text style={{ lineHeight: "110%", marginBottom: "20px" }} variant="h2">
          Оставить заявку
        </Text>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (999) 999-99-99"
          className={styles.formInput}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>
      <label style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span className={styles.spanTextFont}>
          Нажимая «Отправить», вы даёте согласие на обработку персональных
          данных и принимаете условия политики конфиденциальности
        </span>
      </label>

      <button type="submit" className={styles.submit}>
        <Text variant="h4">Отправить</Text>
      </button>
    </form>
  );
};
