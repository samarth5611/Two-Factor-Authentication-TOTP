import { React, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Button, FormControl, InputGroup } from "react-bootstrap";
// import { useHistory, Link, withRouter } from "react-router-dom";
import axios from "axios";

function Tfa() {
  const [Image, setImage] = useState("#");
  const [Code, setCode] = useState("");

  useEffect(() => {
    preLoad();
    //     console.log(Image);
  }, []);

  async function preLoad() {
    const res = await axios.post("http://localhost:4000/tfa/setup");
    //     console.log(res.data.dataURL);
    if (res.status == 200) {
      setImage(String(res.data.dataURL));
    }
  }

  async function handleClick() {
    const res = await axios.post("http://localhost:4000/tfa/verify", {
      token: Code,
    });

    console.log(res);
  }

  //   async function handleClick() {}

  return (
    <div>
      <div className="text-center">
        <img src={Image} />
      </div>
      <Form className="text-center">
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          value={Code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        >
          <Form.Label>Enter Code</Form.Label>
          <Form.Control />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Tfa;
