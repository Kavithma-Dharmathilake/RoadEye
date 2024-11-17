import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import API from '../api';

function AdminPage() {
  const { user, logoutUser } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const res = await API.get('/api/protected/admin');
        setMessage(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProtectedData();
  }, []);

  return (
    <div>
      <h2>Welcome, {user.name || 'Admin'}</h2>
      <p>{message}</p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}

export default AdminPage;
