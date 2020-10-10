import React, { useState } from "react";
import { Form, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const hundleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <Form onSubmit={hundleSubmit}>
      <InputGroup>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputGroupAddon addonType="append">
          <Button type="submit" color="primary">
            追加
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
}
export default TodoForm;
