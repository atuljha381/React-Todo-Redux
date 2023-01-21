import { todoActions } from "./Todo-slice";
import { uiActions } from "./Ui-slice";

export const fetchTodoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata.json"
      );

      if (!response.ok) {
        throw new Error("Fetching data failed");
      }

      const data = response.json();
      return data;
    };

    try {
      const todoData = await fetchData();
      dispatch(todoActions.replaceTodo(todoData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendTodoData = (todo) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata.json",
        {
          method: "PUT",
          body: JSON.stringify(todo),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data failed");
      }
    };

    try {
      await sendRequest();
      
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};


export const deleteTodoData = (id) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-todo-app-439d1-default-rtdb.firebaseio.com/todosdata.json/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Sending data failed");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};