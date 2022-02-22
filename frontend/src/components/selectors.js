import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getSelectionFilter = (state) => state.selectionFilters.texts;

export const getActiveTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.is_active)
);

export const getCompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.is_active)
);
