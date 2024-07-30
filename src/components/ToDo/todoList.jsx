import styles from "./styles.module.css";
import ToDo from "./todo";

export default function ToDoList() {
  return (
    <div className={styles.todoContainer}>
      <ToDo decription="Minha primeira nota" />
      <ToDo decription="Minha segunda nota" />
      <ToDo decription="Minha terceira nota" />
      <ToDo decription="Minha quarta nota" />
      <ToDo decription="Minha quinta nota" />
      <ToDo decription="Minha sexta nota" />
    </div>
  );
}
