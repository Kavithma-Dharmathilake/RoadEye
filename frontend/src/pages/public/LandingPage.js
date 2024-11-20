import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import API from '../../api';
import './public.css';

function LandingPage() {
  const { user, logoutUser } = useContext(AuthContext);
  const [message, setMessage] = useState('');



  return (
    <div>


    </div>
  );
}

export default LandingPage;
