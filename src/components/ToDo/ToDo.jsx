import React from "react";
import styles from "./styles.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Input, Flex, Typography } from "antd";

export default function ToDo({
  id,
  text,
  createdAt,
  onDelete,
  onEdit,
  isEditing,
  currentTodo,
  editText,
  setEditText,
  saveEdit,
  cancelEdit,
}) {
  const charLimit = 200;

  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  const { TextArea } = Input;
  const { Text } = Typography;
  return (
    <Flex vertical justify="space-between" className={styles.todo}>
      {isEditing && currentTodo && currentTodo.id === id ? (
        <div>
          <TextArea
            className={styles.textarea}
            value={editText}
            onChange={handleChange}
            maxLength={charLimit}
            autoSize={{
              minRows: 8,
              maxRows: 8,
            }}
          />

          <div className={styles.todoFooter}>
            <text>{charLimit - editText.length} caracteres restantes</text>
            <FaCheck
              className={`${styles.icons} ${styles.confirmIcon}`}
              onClick={saveEdit}
            />
            <IoClose
              onClick={cancelEdit}
              className={`${styles.icons} ${styles.cancelIcon}`}
            />
          </div>
        </div>
      ) : (
        <span>{text}</span>
      )}
      <div className={styles.todoFooter}>
        <Text>{createdAt}</Text>
        <div className={styles.icons}>
          {!isEditing && (
            <HiMiniPencilSquare
              className={`${styles.icons} ${styles.editIcon}`}
              onClick={() => onEdit(id)}
            />
          )}
          <FaRegTrashAlt
            className={`${styles.icons} ${styles.trashIcon}`}
            onClick={() => onDelete(id)}
          />
        </div>
      </div>
    </Flex>
  );
}
