import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "./selectors";
import { addTodoRequest } from "./api";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        onCreatePressed(inputValue);
        setInputValue("");
        e.preventDefault();
      }}
    >
      <FormControl
        fullWidth
        sx={{
          m: 1,
          backgroundColor: "white",
          marginTop: "8px",
          marginRight: "0ox",
          marginBottom: "8px",
          marginLeft: "0px",
        }}
      >
        <OutlinedInput
          placeholder="Create a new todo.."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </FormControl>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
