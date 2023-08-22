import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { TaskListUser } from ".";
import { loginSuccess } from "../redux/action";
import { readUser } from "../service/localStorage.js";
import TaskList from "./TaskList";
// Mock user credentials
const mockUsers = [
  {
    email: "admin@task.com",
    password: "password",
    role: "admin",
  },
  {
    email: "user@task.com",
    password: "password",
    role: "user",
  },
];

const Login = () => {
  const user = readUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.user !== "");
  const handleLogin = (e) => {
    e.preventDefault();

    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log(user, "user");

      alert("Login successful!");
      localStorage.setItem("users", JSON.stringify(user));
      dispatch(loginSuccess(user));
      return <Navigate to="/alltasks" />;
    } else {
      setError("Invalid username or password");
    }
  };

  if (isLoggedIn) {
    if (user.role === "admin") {
      return (
        <div>
          <TaskList />
        </div>
      );
    }
    if (user.role === "user") {
      return (
        <div>
          <TaskListUser />
        </div>
      );
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
