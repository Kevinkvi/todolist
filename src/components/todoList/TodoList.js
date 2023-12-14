import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./TodoList.module.css";

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
        <div
          key={item.id}
          className={s.listItems}
        >
          <div className={!item.status ? s.close : ""}>{item.title}</div>
          <div>
            <Button
              onClick={() => deletTodo(item.id)}
              className={s.btn}
            >
              удалить
            </Button>

            <Button
              onClick={() => statusTodo(item.id)}
              className={s.btn}
            >
              {item.status ? "открыто" : "закрыто"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
