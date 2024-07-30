import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaCheck } from "react-icons/fa";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const charLimit = 200;

  const handleChange = (e) => {
    setText(e.target.value);
    // console.log(ev.target.value)
  };

  const handleAdd = () => {
    if (text.trim() === "") {
      alert("O lembrete não pode estar vazio.");
      return;
    }

    onAdd(text);

    setText("");
  };

  return (
    <div className={`${styles.addTodo} ${styles.todo}`}>
      <textarea
        className={styles.textarea}
        placeholder="Escreva aqui o seu lembrete..."
        rows="10"
        cols="10"
        maxLength={charLimit}
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className={styles.todoFooter}>
        <small>{charLimit - text.length} caracteres restantes</small>
        <FaCheck
          className={`${styles.icons} ${styles.confirmIcon}`}
          onClick={handleAdd}
        />
      </div>
    </div>
  );
}
