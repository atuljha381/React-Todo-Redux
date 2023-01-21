import TodoHeader from "./Components/TodoHeader";
import TodoTable from "./Components/TodoTable";
import Notification from "./Components/UI/Notification";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { sendTodoData, fetchTodoData } from "./Store/Todo-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendTodoData(todo));
  }, [todo, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <TodoHeader />
      <TodoTable />
    </Fragment>
  );
}

export default App;
