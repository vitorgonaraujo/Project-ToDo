import React from "react";
import styles from "./styles.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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

  return (
    <div className={styles.todo}>
      {isEditing && currentTodo && currentTodo.id === id ? (
        <div>
          <textarea
            value={editText}
            onChange={handleChange}
            rows="10"
            cols="10"
            maxLength={charLimit}
          />

          <div className={styles.todoFooter}>
            <small>{charLimit - editText.length} caracteres restantes</small>
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
        <small>{createdAt}</small>
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
    </div>
  );
}
