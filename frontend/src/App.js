import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import PolicePage from './pages/PolicePage';
import CompanyPage from './pages/CompanyPage';
import DriverPage from './pages/DriverPage';
import MaintenancePage from './pages/MaintenancePage';
import Page from './components/Page';
import MaintenanceAppointments from './pages/maintenance/MaintenanceAppointments';
import MaintenanceDashboard from './pages/maintenance/MaintenanceDashboard';
import SetOpeningHours from './pages/maintenance/SetOpeningHours';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './pages/public/LandingPage';

function App() {
  return (
    <Routes>
      {/* public componenets */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/page" element={<Page />} />
      <Route path="/MaintenanceAppointments" element={<MaintenanceAppointments/>} />
      <Route path="/MaintenanceDashboard" element={<MaintenanceDashboard/>} />
      <Route path="/SetOpeningHours" element={<SetOpeningHours/>} />
      

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

      <Route
        path="/maintain"
        element={
          <ProtectedRoute allowedRoles={['Maintenance']}>
            <MaintenancePage />
          </ProtectedRoute>
        }
      />


      <Route
        path="/sparepart"
        element={
          <ProtectedRoute allowedRoles={['Sparepart']}>
            <DriverPage />
          </ProtectedRoute>
        }
      />
    </Routes>

  );
}

export default App;
