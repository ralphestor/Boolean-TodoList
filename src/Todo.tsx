import React, { useState, ChangeEvent, FormEvent } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Todo.css";

interface TodoProps {
  id: string;
  todo: string;
  completed: boolean;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, updatedTodo: string) => void;
}

const Todo: React.FC<TodoProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState(props.todo);

  function handleRemove() {
    props.removeTodo(props.id);
  }
  function handleToggle() {
    props.toggleTodo(props.id);
  }
  function editToggle() {
    setIsEditing(!isEditing);
    setTodo(props.todo);
  }
  function handleEditChange(evt: ChangeEvent<HTMLInputElement>) {
    setTodo(evt.target.value);
  }
  function handleUpdate(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    props.updateTodo(props.id, todo);
    setIsEditing(!isEditing);
  }

  let result;

  if (isEditing) {
    result = (
      <form onSubmit={handleUpdate}>
        <TextField
          fullWidth
          label="Edit Todo"
          id="fullWidth"
          defaultValue={props.todo}
          onChange={handleEditChange}
        />
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
        >
          <Button variant="contained" type="submit" aria-label="edit" sx={{backgroundColor: blue[900]}}>
            Save
          </Button>
          <Button variant="outlined" onClick={editToggle} aria-label="cancel" sx={{color: blue[900], border: `1px solid ${blue[900]}`}}>
            Cancel
          </Button>
        </Stack> 
      </form>
    );
  } else {
    result = (
      <Grid
        container
        wrap="nowrap"
        spacing={2}
        className={props.completed ? "completed" : ""}
      >
        <Grid item xs={1.5}>
          <Checkbox
            sx={{
              color: blue[900],
              "&.Mui-checked": {
                color: blue[900],
              },
            }}
            onClick={handleToggle}
            checked={props.completed ? true : false}
          />
        </Grid>
        <Grid item zeroMinWidth className="textContain" xs={7.5}>
          <Typography noWrap>{props.todo}</Typography>
        </Grid>
        <Grid item zeroMinWidth xs={1.5}>
          <IconButton aria-label="Edit" onClick={editToggle}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item zeroMinWidth xs={1.5}>
          <IconButton aria-label="Delete" onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }

  return (
    <div>
      <Paper sx={{ maxWidth: 400, my: 1, mx: "auto", p: 2 }}>{result}</Paper>
    </div>
  );
};

export default Todo;
