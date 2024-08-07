import React, { useState, useEffect } from "react";
import ToDo from "./ToDo";
import AddTodo from "./AddTodo";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { Row, Col } from "antd";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [editText, setEditText] = useState("");
  const currentDate = dayjs();

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const addTodo = (text) => {
    if (text.length > 200) return;
    const newTodo = {
      id: nanoid(),
      text,
      createdAt: currentDate.format("DD/MM/YYYY HH:mm:ss"),
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Tem certeza que deseja apagar essa tarefa?"
    );
    if (confirmed) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    } else {
      alert("A tarefa não foi apagada!");
    }
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit);
    setEditText(todoToEdit.text);
  };

  const saveEdit = () => {
    if (editText.length >= 200) return;
    const confirmed = window.confirm(
      "Tem certeza que deseja salvar as alterações?"
    );
    if (confirmed) {
      const updatedTodos = todos.map((todo) =>
        todo.id === currentTodo.id
          ? {
              ...todo,
              text: editText,
              createdAt: currentDate.format("DD/MM/YYYY HH:mm:ss"),
            }
          : todo
      );
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setIsEditing(false);
      setCurrentTodo(null);
      setEditText("");
    } else {
      alert("As alterações não foram salvas!");
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo(null);
    setEditText("");
  };

  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} md={12} lg={8}>
        <AddTodo onAdd={addTodo} />
      </Col>
      {todos.map((todo) => (
        <Col xs={24} md={12} lg={8}>
          <ToDo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            createdAt={todo.createdAt}
            onDelete={handleDelete}
            onEdit={handleEdit}
            isEditing={isEditing}
            currentTodo={currentTodo}
            editText={editText}
            setEditText={setEditText}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
          />
        </Col>
      ))}
    </Row>
  );
}
