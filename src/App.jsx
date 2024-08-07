import ToDoList from "./components/ToDo/ToDoList";
import { Typography } from "antd";
function App() {
  const { Title } = Typography;
  return (
    <>
      <div className="container">
        <Title level={1}>
          Minha lista de tarefas
        </Title>
        <ToDoList />
      </div>
    </>
  );
}

export default App;
