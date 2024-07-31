import "./index.css"; //Não precisa ter o import para pegar o estilo se utilizar sem {styles.}
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
