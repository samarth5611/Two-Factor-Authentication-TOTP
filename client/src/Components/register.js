import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { Link, withRouter, useLocation } from "react-router-dom";
import axios from "axios";
import Login from "../Components/login";

function Register({ navigate }) {
  const [Email, setEmail] = useState("sample@gmail.com");
  const [Password, setPassword] = useState("Password");
  const handleSubmit = async () => {
    // e.preventDefault();
    const { status } = await axios.post("http://localhost:4000/register", {
      uemail: Email,
      upassword: Password,
    });

    console.log(status);
    if (status == 200) {
      console.log("User has been successfully Registered!");
      console.log(Email);
      window.location.href = "/tfa";
    }
  };

  return (
    <div>
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

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          Already a User <Link to="/login">Login here</Link>
        </Form.Group>
      </Form>
    </div>
  );
}
export default Register;
