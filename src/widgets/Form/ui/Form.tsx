import { useState } from "react";

import styles from "./Form.module.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    phone: "",
  });

  const validate = () => {
    const newErrors = { name: "", surname: "", phone: "" };
    let valid = true;

    if (!name.trim()) {
      newErrors.name = "Введите имя";
      valid = false;
    }
    if (!surname.trim()) {
      newErrors.surname = "Введите фамилию";
      valid = false;
    }
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

    console.log({ name, surname, phone });
    alert(`Форма отправлена!\n${name} ${surname}\n${phone}`);

    setName("");
    setSurname("");
    setPhone("");
    setErrors({ name: "", surname: "", phone: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label>Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label>Фамилия</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Введите фамилию"
        />
        {errors.surname && (
          <span className={styles.error}>{errors.surname}</span>
        )}
      </div>

      <div className={styles.field}>
        <label>Номер телефона</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (999) 999-99-99"
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <button type="submit" className={styles.submit}>
        Отправить
      </button>
    </form>
  );
};
