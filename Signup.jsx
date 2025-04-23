import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
`;

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 384px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-bottom: 16px;
  text-shadow: 1px 1px 2px black;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: white;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  ::placeholder {
    color: white;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: white;
  color: #2563eb;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #3b82f6;
    color: white;
    transform: scale(1.05);
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 16px;
  color: white;
  font-size: 14px;

  a {
    color: #fde68a;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Component Logic
const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", user);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Create an Account 🚀</Title>
        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <FaUser style={{ marginRight: "10px" }} />
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <FaEnvelope style={{ marginRight: "10px" }} />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <FaLock style={{ marginRight: "10px" }} />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </InputGroup>

          <SubmitButton type="submit">Sign Up ✨</SubmitButton>
        </StyledForm>

        <FooterText>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </FooterText>
      </FormWrapper>
    </Container>
  );
};

export default Signup;
