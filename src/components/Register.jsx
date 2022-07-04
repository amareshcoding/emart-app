import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  return (
    <div className="container mt-5 ">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 py-5 px-5 border rounded shadow-sm bg-light">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className='text-center'>
              <Button variant="primary " type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
