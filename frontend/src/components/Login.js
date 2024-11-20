import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import { jwtDecode } from 'jwt-decode';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


function Login() {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", {
        email,
        password,
      });
      const { token } = res.data;
      const payload = jwtDecode(token);
      const userData = { id: payload.user.id, role: payload.user.role };

      loginUser(token, userData);

      // Redirect based on role
      switch (userData.role) {
        case "Admin":
          navigate("/admin");
          break;
        case "Police":
          navigate("/police");
          break;
        case "Company":
          navigate("/company");
          break;
        case "Driver":
          navigate("/driver");
          break;
        default:
          navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
  };

  return (
    <div>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <h2>Login</h2>



      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>


      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
