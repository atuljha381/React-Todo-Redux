import TodoHeader from "./Components/TodoHeader";
import TodoTable from "./Components/TodoTable";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const todo = useSelector(state => state.todo)

  useEffect(() => {fetch('https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata.json',
    {
      method: 'PUT',
      body: JSON.stringify(todo)
    })},[todo])

  return (
    <>
      <TodoHeader />
      <TodoTable />
    </>
  );
}

export default App;
