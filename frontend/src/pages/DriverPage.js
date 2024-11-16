import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../api';

function DriverPage() {
  const { user, logoutUser } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const res = await API.get('/api/protected/driver');
        setMessage(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProtectedData();
  }, []);

  return (
    <div>
      <h2>Welcome, {user.name || 'Driver'}</h2>
      <p>{message}</p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}

export default DriverPage;
