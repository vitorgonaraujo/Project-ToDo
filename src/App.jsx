import "./index.css";
import ToDoList from "./components/ToDo/ToDoList";

function App() {
  return (
    <>
      <div className="container">
        <h1>Minha lista de tarefas</h1>

        <ToDoList />
      </div>
    </>
  );
}

export default App;
