import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login/', formData);
      if (response.status === 200) {
        const { access } = response.data;
        localStorage.setItem('token', access);
        axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
        navigate('/songs'); // Redirect to SongList after login
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.detail || 'Invalid credentials');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Login</Button>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const InputField = styled.input`
  display: block;
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  font-size: 1.1em;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1em;
  margin-bottom: 10px;
`;

export default Login;
