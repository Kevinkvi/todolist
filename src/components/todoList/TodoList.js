import React, { useState } from "react";

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(false);

  function deletTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }
  function editeTodo(id) {}
  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => deletTodo(item.id)}>Удалить</button>

          <button onClick={() => statusTodo(item.id)}>закрыть / открыть</button>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
