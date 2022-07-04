import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
  const initialValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('Submited', formValues);
      setIsSubmit(false);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
    //     console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    //     const regex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexForPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regexForEmail.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters!';
    } else if (values.password.length > 10) {
      errors.password = 'Password must be less than 10 characters!';
    } else if (!regexForPassword.test(values.password)) {
      errors.password =
        'Password must contain eight characters having at least one uppercase letter, one lowercase letter, one number and one special character!';
    }
    return errors;
  };
  return (
    <div className="container mt-5 ">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 py-5 px-5 border rounded shadow-sm bg-light">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="alert alert-success" role="alert">
              Signed in successfully!
            </div>
          ) : (
            ''
            //   <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </Form.Group>
            <p className="text-danger">{formErrors.username}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Form.Group>
            <p className="text-danger">{formErrors.email}</p>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </Form.Group>
            <p className="text-danger">{formErrors.password}</p>
            <Form.Group className="text-center">
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
