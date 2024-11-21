import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./navigationbar.css";

const NavigationBar = () => {
  return (
    <div className="side-nav-container">
      {/* Profile Section */}
      <div className="profile-section text-white text-center py-4">
        <i className="bi bi-person-circle profile-icon"></i>
        <h5>John Doe</h5>
        <p className="small">Driver</p>
      </div>

      {/* Navigation Links */}
      <Nav className="flex-column nav-links">
        <Nav.Link href="/DriverDashboard" className="text-white">
          <i className="bi bi-speedometer2 me-2"></i> Dashboard
        </Nav.Link>
        <Nav.Link href="/DriverVehicles" className="text-white">
          <i className="bi bi-truck me-2"></i> Vehicles
        </Nav.Link>
        <Nav.Link href="/Complaints" className="text-white">
          <i className="bi bi-chat-dots me-2"></i> Complaints
        </Nav.Link>
        <Nav.Link href="/DriverAppointments" className="text-white">
          <i className="bi bi-calendar2-check-fill me-2"></i> Appointments
        </Nav.Link>
        <Nav.Link href="/VideoCaptures" className="text-white">
          <i className="bi bi-camera-video me-2"></i> Video Captures
        </Nav.Link>
        <Nav.Link href="/Posts" className="text-white">
          <i className="bi bi-megaphone me-2"></i> Posts
        </Nav.Link>
        <Nav.Link href="/Orders" className="text-white">
          <i className="bi bi-basket-fill me-2"></i> Orders
        </Nav.Link>
        <Nav.Link href="/DriverInquiries" className="text-white">
          <i className="bi bi-question-circle-fill me-2"></i> Inquiries
        </Nav.Link>
        <Nav.Link href="/DriverNotifications" className="text-white">
          <i className="bi bi-bell-fill me-2"></i> Notifications
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default NavigationBar;
