import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  padding: 1rem;
`;

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: white;
`;

const SubText = styled.p`
  text-align: center;
  color: #e5e7eb;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  background: rgba(255, 255, 255, 0.4);
  color: white;
  border-radius: 0.5rem;
  outline: none;
  border: none;

  ::placeholder {
    color: #d1d5db;
  }
`;

const Icon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 0.65rem;
  color: #9ca3af;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SignupText = styled.p`
  text-align: center;
  color: #e5e7eb;
  margin-top: 1rem;

  a {
    color: white;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Dummy login
    localStorage.setItem("userToken", "dummyToken");

    // ✅ Redirect to dashboard
    navigate("/dashboard");
  };

  return (
 
    <Container>
      <FormWrapper>
        
        <Title>Welcome Back! 👋</Title>
        <SubText>Login to continue</SubText>

        <form onSubmit={handleLogin} style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
          <InputWrapper>
            <Icon><FaEnvelope /></Icon>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Icon><FaLock /></Icon>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputWrapper>
          <Button type="submit">Login 🚀</Button>
        </form>

        <SignupText>
          Don’t have an account? <Link to="/signup">Signup Here</Link>
        </SignupText>
      </FormWrapper>
    </Container>
  );
};

export default Login;