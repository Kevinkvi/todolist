import React, { useState } from "react";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: +new Date(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }
  return (
    <div>
      <input
        placeholder="Ведите текст"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Добавить текст</button>
    </div>
  );
}
export default AddTodo;
