import React, { FC } from "react";
import { ITodo } from "../types/interfaces";

type TodoListProps = {
  todos: ITodo[];
  onRemove(id: number): void;
  onToggleChange: (id: number) => void;
};

const TodoList: FC<TodoListProps> = ({ todos, onRemove, onToggleChange }) => {
  if (!todos.length) {
    return <h1>Список задач пуст</h1>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li key={todo.id} className={classes.join(" ")}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleChange(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                onClick={() => onRemove(todo.id)}
                className="material-icons red-text"
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
