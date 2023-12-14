import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddTodo.module.css";

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
    <Row>
      <Col className={s.AddTodoForms}>
        <FormControl
          placeholder="Ведите текст"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          onClick={saveTodo}
          className={s.btn}
        >
          Добавить текст
        </Button>
      </Col>
    </Row>
  );
}
export default AddTodo;
