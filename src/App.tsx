import React, { FC, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITodo } from "./types/interfaces";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todo") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (title: string) => {
    if (title) {
      const newTodo: ITodo = {
        id: Date.now(),
        title: title,
        completed: false,
      };
      setTodos((prev) => [newTodo, ...prev]);
    }
    // setTodos([newTodo, ...todos]);
  };

  const toggleHandler = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addNewTodo} />
        <TodoList
          onRemove={removeTodo}
          onToggleChange={toggleHandler}
          todos={todos}
        />
      </div>
    </div>
  );
};

export default App;
