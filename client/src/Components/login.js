import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory, Link, withRouter } from "react-router-dom";
import axios from "axios";

function Login() {
  const [Email, setEmail] = useState("sample@gmail.com");
  const [Password, setPassword] = useState("Password");

  async function handlesubmit() {
    const { status } = await axios.post("http://localhost:4000/login", {
      uemail: Email,
      upassword: Password,
    });

    if (status == 200) {
    }
  }

  return (
    <Form className="Login-form text-center">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email address</Form.Label>
        <Form.Control
          type="email"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Submit
      </Button>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        Click here <Link to="/register">Register here</Link>
      </Form.Group>
    </Form>
  );
}

export default Login;
