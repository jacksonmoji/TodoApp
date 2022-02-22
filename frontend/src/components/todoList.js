import React, { useEffect } from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";

import {
  getCompleteTodos,
  getSelectionFilter,
  getActiveTodos,
} from "./selectors";
import {
  loadTodos,
  updateTodoStatusRequest,
  removeTodoRequest,
  displayAlert,
} from "./api";
import TodoListItem from "./todoListItem";

const TodoList = ({
  activeTodos,
  onDeletePressed,
  onUpdateTodoStatus,
  completeTodos,
  startLoadingTodos,
  currentSelectionFilter,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  if (currentSelectionFilter === "active") {
    return (
      <List sx={{ width: "100%", backgroundColor: "white", padding: "0px" }}>
        {activeTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDeletePressed={onDeletePressed}
            onUpdateTodoStatus={onUpdateTodoStatus}
          />
        ))}
      </List>
    );
  } else if (currentSelectionFilter === "complete") {
    return (
      <List sx={{ width: "100%", backgroundColor: "white", padding: "0px" }}>
        {completeTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDeletePressed={onDeletePressed}
            onUpdateTodoStatus={onUpdateTodoStatus}
          />
        ))}
      </List>
    );
  } else
    return (
      <List sx={{ width: "100%", backgroundColor: "white", padding: "0px" }}>
        {completeTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDeletePressed={onDeletePressed}
            onUpdateTodoStatus={onUpdateTodoStatus}
          />
        ))}
        {activeTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDeletePressed={onDeletePressed}
            onUpdateTodoStatus={onUpdateTodoStatus}
          />
        ))}
      </List>
    );
};

const mapStateToProps = (state) => {
  return {
    activeTodos: getActiveTodos(state),
    completeTodos: getCompleteTodos(state),
    currentSelectionFilter: getSelectionFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onDeletePressed: (id) => dispatch(removeTodoRequest(id)),
  onUpdateTodoStatus: (id, status) =>
    dispatch(updateTodoStatusRequest(id, status)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
