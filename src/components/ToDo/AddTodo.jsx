import React, { useState } from "react";
import styles from "./styles.module.css";
import { FaCheck } from "react-icons/fa";
import { Input, Flex, Typography } from "antd";

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

  const { TextArea } = Input;
  const { Text } = Typography;
  return (
    <Flex
      vertical
      justify="space-between"
      className={`${styles.addTodo} ${styles.todo}`}
    >
      <TextArea
        className={styles.textarea}
        placeholder="Escreva aqui o seu lembrete..."
        maxLength={charLimit}
        value={text}
        onChange={handleChange}
        autoSize
      ></TextArea>
      <div className={styles.todoFooter}>
        <Text>{charLimit - text.length} caracteres restantes</Text>
        <FaCheck
          className={`${styles.icons} ${styles.confirmIcon}`}
          onClick={handleAdd}
        />
      </div>
    </Flex>
  );
}
