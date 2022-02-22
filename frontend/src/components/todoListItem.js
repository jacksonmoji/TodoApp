import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import IconButton from "@mui/material/IconButton";

const TodoListItem = ({ todo, onDeletePressed, onUpdateTodoStatus }) => {
  const [checked, setChecked] = useState([0]);
  const [display, setDisplay] = useState(false);

  const handleToggle = (todo) => () => {
    const currentIndex = checked.indexOf(todo);
    const newChecked = [...checked];

    onUpdateTodoStatus(todo.id, todo.is_active);

    if (currentIndex === -1) {
      newChecked.push(todo);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const labelId = `checkbox-list-label-${todo.id}`;

  return (
    <ListItem
      key={todo.id}
      onMouseEnter={(e) => {
        e.preventDefault();
        setDisplay(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setDisplay(false);
      }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <ClearOutlinedIcon
            onClick={() => onDeletePressed(todo.id)}
            style={{ display: display ? "" : "none" }}
          />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.is_active}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={todo.id}
          style={{ textDecoration: todo.is_active ? "line-through" : "" }}
          primary={todo.task}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
