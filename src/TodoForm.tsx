import React, { useState, ChangeEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";

interface TodoFormProps {
    createTodo: (todo: { todo: string; id: string; completed: boolean }) => void;
  }

const btnStyle = {
    backgroundColor: blue[900],
    margin: "10px 0",
    left: "50%",
    transform: "translateX(-50%)"
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [todo, setTodo] = useState("");

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    setTodo(evt.target.value);
  }
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    props.createTodo({
      todo: todo,
      id: uuidv4(),
      completed: false,
    });
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Paper sx={{ maxWidth: 400, my: 1, mx: "auto", p: 2 }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="New Todo"
            id="fullWidth"
            onChange={handleChange}
            value={todo}
          />
        </Box>
        <Button type="submit" variant="contained" style={btnStyle}>
          Add Todo
        </Button>
      </Paper>
    </form>
  );
};

export default TodoForm;
