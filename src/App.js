import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">ToDoリスト</h1>
        <Form>
          <InputGroup>
            <Input type="text" value="" />
            <InputGroupAddon addonType="append">
              <Button type="submit" color="primary">
                追加
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;
