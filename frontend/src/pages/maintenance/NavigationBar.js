import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavigationBar.css"; // Custom styles

const NavigationBar = () => {
  return (
    <div className="side-nav-container">
      {/* Profile Section */}
      <div className="profile-section text-white text-center py-4">
        <i className="bi bi-person-circle profile-icon"></i>
        <h5>John Doe</h5>
        <p className="small">Maintenance Provider</p>
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column nav-links">
        <Nav.Link href="/MaintenanceDashboard" className="text-white">
          <i className="bi bi-house-door-fill me-2"></i> Dashboard
        </Nav.Link>
        <Nav.Link href="/MaintenanceAppointments" className="text-white">
          <i className="bi bi-calendar-check-fill me-2"></i> Appointments
        </Nav.Link>
        <Nav.Link href="/SetOpeningHours" className="text-white">
          <i className="bi bi-clock-fill me-2"></i> Open Hours
        </Nav.Link>
        <Nav.Link href="/EmergencyRequests" className="text-white">
          <i className="bi bi-exclamation-triangle-fill me-2"></i> Emergency Requests
        </Nav.Link>
        <Nav.Link href="/settings" className="text-white">
          <i className="bi bi-gear-fill me-2"></i> Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NavigationBar;
