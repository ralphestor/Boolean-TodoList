import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

interface TodoItem {
  id: string;
  todo: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function remove(id: string) {
    setTodos(
      todos.filter(
        (t: TodoItem) => t.id !== id
      )
    );
  }

  function create(newTodo: TodoItem) {
    setTodos([...todos, newTodo]);
  }

  function update(id: string, updatedTask: string) {
    const updatedTodos = todos.map(
      (t: TodoItem) => {
        if (id === t.id) {
          return { ...t, todo: updatedTask };
        }
        return t;
      }
    );
    setTodos(updatedTodos);
  }

  function toggleComplete(id: string) {
    const updatedTodo = todos.map(
      (t: TodoItem) => {
        if (id === t.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      }
    );
    setTodos(updatedTodo);
  }

  const todoList = todos.map(
    (t: TodoItem) => {
      return (
        <Box key={t.id} sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
          <Todo
            key={t.id}
            id={t.id}
            todo={t.todo}
            completed={t.completed}
            removeTodo={remove}
            toggleTodo={toggleComplete}
            updateTodo={update}
          />
        </Box>
      );
    }
  );

  return (
    <>
      <TodoForm createTodo={create} />
      <div>{todoList}</div>
    </>
  );
};

export default TodoApp;
