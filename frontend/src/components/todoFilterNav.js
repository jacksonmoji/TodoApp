import React from "react";
import { connect } from "react-redux";
import { getSelectionFilter, getActiveTodos } from "./selectors";
import {
  updateListSelectionFilter,
  loadTodos,
  removeCompletedTodosRequest,
} from "./api";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const TodoFilterNav = ({
  onFilterSelection,
  activeTodos,
  onRemoveCompletedTodosPressed,
}) => {
  return (
    <Grid container>
      <Grid item sm>
        <Button
          style={{ textTransform: "lowercase", hover: "" }}
          variant="string"
        >
          {activeTodos.length} items left
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          style={{ textTransform: "lowercase" }}
          onClick={(e) => {
            onFilterSelection(e.target.value);
          }}
          value="all"
          variant="string"
        >
          all
        </Button>
        <Button
          style={{ textTransform: "lowercase" }}
          onClick={(e) => {
            onFilterSelection(e.target.value);
          }}
          value="active"
          variant="string"
        >
          Active
        </Button>
        <Button
          style={{ textTransform: "lowercase" }}
          onClick={(e) => {
            onFilterSelection(e.target.value);
          }}
          value="complete"
          variant="string"
        >
          Complete
        </Button>
      </Grid>
      <Grid item xs>
        <Button
          style={{ textTransform: "lowercase" }}
          onClick={(e) => {
            onRemoveCompletedTodosPressed(e.target.value);
          }}
          value="clear_completed"
          variant="string"
        >
          Clear Completed
        </Button>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state) => ({
  currentSelectionFilter: getSelectionFilter(state),
  activeTodos: getActiveTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilterSelection: (text) => dispatch(updateListSelectionFilter(text)),
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemoveCompletedTodosPressed: () => dispatch(removeCompletedTodosRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterNav);
