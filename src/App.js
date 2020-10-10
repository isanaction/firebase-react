import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Table,
} from "reactstrap";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const hundleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };
  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    setValue("");
    console.log(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">ToDoリスト</h1>
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
      </Container>
      <Container>
        <Table>
          <tbody>
            {todos &&
              todos.map((todo, index) => (
                <tr key={index}>
                  <th className="text-left">{todo}</th>
                  <td className="text-right">
                    <Button color="danger" onClick={() => removeTodo(index)}>
                      削除
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
