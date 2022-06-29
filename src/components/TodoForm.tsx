import React, { FC, useEffect, useRef, useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setTitle(inputRef.current!.value);
      onAdd(title);
      console.log(title);
      setTitle("");
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="input-field">
      <input
        value={title}
        onChange={handlerChange}
        onKeyPress={onKeyPress}
        type="text"
        id="title"
        ref={inputRef}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};

export default TodoForm;
