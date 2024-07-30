import ToDoList from "./components/ToDo/todoList";
import styles from "./styles.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <h1>Minha lista de tarefas</h1>

        <ToDoList />
      </div>
    </>
  );
}

export default App;
