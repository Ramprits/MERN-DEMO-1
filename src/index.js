import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "reactstrap";

import "./styles.css";

function App() {
  return (
    <Container>
      <span className="text-danger h4">Hello CodeSandbox</span>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
