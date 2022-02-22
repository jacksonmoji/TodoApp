import axios from "axios";
import {
  createTodo,
  removeTodo,
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  updateTodoStatus,
  removeCompletedTodos,
  currentFilterSelection,
} from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await axios.get("http://localhost:8000/api/v1/tasks/");

    const todos = await response;

    dispatch(loadTodosSuccess(todos.data));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const data = {
      task: text,
      is_active: false,
    };
    const response = await axios.post(
      "http://localhost:8000/api/v1/tasks/new",
      data
    );
    const todo = await response.data;
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/v1/tasks/${id}/`
    );
    const removedTodo = await response.data;
    dispatch(removeTodo(removedTodo));
    dispatch(
      displayAlert(
        "successfully removed, please refresh page to see change, unfortunately i couldnt implement trigger to refresh in time  :("
      )
    );
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const updateTodoStatusRequest = (id, status) => async (dispatch) => {
  try {
    const data = {
      id: id,
      is_active: !status,
    };
    const response = await axios.patch(
      `http://localhost:8000/api/v1/tasks/${id}/`,
      data
    );
    const updatedTodo = await response.data;
    dispatch(updateTodoStatus(updatedTodo));
    displayAlert(
      "successfully updated todo, please refresh page to see change, unfortunately i couldnt implement trigger to refresh in time  :("
    );
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const removeCompletedTodosRequest = () => async (dispatch) => {
  console.log("we goy here");
  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/articles/get_user_translations/`
    );
    const removedTodos = await response.data;
    dispatch(removeCompletedTodos(removedTodos));
    displayAlert(
      "successfully removed all completedtasks, please refresh page to see change, unfortunately i couldnt implement trigger to refresh in time  :("
    );
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};

export const updateListSelectionFilter = (text) => async (dispatch) => {
  dispatch(currentFilterSelection(text));
};
