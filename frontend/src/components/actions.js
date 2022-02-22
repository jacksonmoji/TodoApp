export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
});

export const UPDATE_TODO_STATUS = "UPDATE_TODO_STATUS";
export const updateTodoStatus = (todo) => ({
  type: UPDATE_TODO_STATUS,
  payload: { todo },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});

export const CURRENT_FILTER_SELECTION = "CURRENT_FILTER_SELECTION";
export const currentFilterSelection = (selectionFilter) => ({
  type: CURRENT_FILTER_SELECTION,
  payload: { selectionFilter },
});

export const REMOVE_COMPLETED_TODOS = "REMOVE_COMPLETED_TODOS";
export const removeCompletedTodos = () => ({
  type: REMOVE_COMPLETED_TODOS,
});
