import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const initialValues = { username: '', email: '', password: '' };
const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setIsSubmit(false);
    }
  }, [formErrors]); //eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    navigate('/login');
  };

  const validate = (values) => {
    const errors = {};

    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexForPassword =
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

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
    <div className="container mt-5 register">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 pt-5 pb-1 px-5 border rounded shadow-sm bg-light">
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="alert alert-success" role="alert">
              Signed in successfully!
            </div>
          ) : (
            ''
            //   <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicUsername">
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
            <Form.Group className="mb-2" controlId="formBasicEmail">
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
            <Form.Group className="mb-2" controlId="formBasicPassword">
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
            <Form.Group className="text-center mt-3">
              <Button variant="primary px-5" type="submit">
                REGISTER
              </Button>
            </Form.Group>
          </Form>
          <p className="text-center mt-4">
            Have an account? &nbsp;
            <strong>
              <Link to="/login">Login</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
