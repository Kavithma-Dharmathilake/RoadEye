import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import PolicePage from './pages/PolicePage';
import CompanyPage from './pages/CompanyPage';
import DriverPage from './pages/DriverPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['Admin']}>
            <AdminPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/police"
        element={
          <ProtectedRoute allowedRoles={['Police']}>
            <PolicePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company"
        element={
          <ProtectedRoute allowedRoles={['Company']}>
            <CompanyPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/driver"
        element={
          <ProtectedRoute allowedRoles={['Driver']}>
            <DriverPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
