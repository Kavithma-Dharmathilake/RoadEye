import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';
import { jwtDecode } from 'jwt-decode';


function Register() {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [role, setRole] = useState('Driver'); 
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/api/auth/register', {
        name,
        email,
        password,
        role,
      });
      const { token } = res.data;
      const payload = jwtDecode(token);
      const userData = { id: payload.user.id, role: payload.user.role };

      loginUser(token, userData);

      
      switch (userData.role) {
        case 'Admin':
          navigate('/admin');
          break;
        case 'Police':
          navigate('/police');
          break;
        case 'Company':
          navigate('/company');
          break;
        case 'Driver':
          navigate('/driver');
          break;
        case 'Maintenance':
          navigate('/maintain');
          break;
        case 'Sparepart':
          navigate('/sparepart');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      console.error(err);
      setError('Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
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
        <label>Role:</label>
        <br />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="Police">Police</option>
          <option value="Company">Company</option>
          <option value="Driver">Driver</option>
          <option value="Maintenance">Maintenance Provider</option>
          <option value="Sparepart">Spare Part vendor</option>
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
