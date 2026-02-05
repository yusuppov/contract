import { useState } from "react";
import { Text } from "../../../shared/Components/Text";
import { Link } from "react-router-dom";

import styles from "./Form.module.css";

export const Form = () => {
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
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
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className={styles.checkBox}
        />
        <span className={styles.spanTextFont}>
          Нажимая кнопку, я подтверждаю, что ознакомлен(а) и согласен(а) с{" "}
          <Link to="/conf" target="_blank">
            политикой конфиденциальности
          </Link>{" "}
          и даю{" "}
          <Link to="/personal" target="_blank">
            согласие на обработку персональных данных и получение информационных
            СМС
          </Link>
          .
        </span>
      </label>
      <button disabled={!agree} type="submit" className={styles.submit}>
        <Text variant="h4">Отправить</Text>
      </button>
    </form>
  );
};
