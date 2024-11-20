import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavigationBar from "./NavigationBar"; // Import the navigation bar component
import "./NavigationBar.css"; // Custom styles for the navigation bar
import "./EmergencyRequests.css"; // Custom styles for Emergency Requests

const emergencyRequestsData = [
  {
    id: 1,
    customerName: "Emily Davis",
    appointmentDate: "2024-07-27",
    appointmentTime: "09:00",
    vehicleType: "Sedan",
    description: "Flat tire and engine trouble",
  },
  {
    id: 2,
    customerName: "Michael Brown",
    appointmentDate: "2024-07-28",
    appointmentTime: "08:00",
    vehicleType: "SUV",
    description: "Engine overheating",
  },
  {
    id: 3,
    customerName: "Lisa Green",
    appointmentDate: "2024-07-29",
    appointmentTime: "11:00",
    vehicleType: "Truck",
    description: "Transmission failure",
  },
];

const EmergencyRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleCancelRequest = (id) => {
    console.log(`Emergency Request ${id} cancelled`);
    setShowModal(false);
  };

  return (
    <div className="main-layout">
      {/* Include Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="main-content">
        <Container className="mt-5">
          <h2 className="text-center mb-4" style={{ color: "#dc3545" }}>
            Emergency Requests
          </h2>

          {/* Emergency Request Cards */}
          <Row className="g-4">
            {emergencyRequestsData.map((request) => (
              <Col sm={12} md={6} lg={4} key={request.id}>
                <Card
                  className="emergency-card shadow-lg"
                  onClick={() => handleRequestClick(request)}
                >
                  <Card.Body>
                    <Card.Title>{request.customerName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {request.appointmentDate} at {request.appointmentTime}
                    </Card.Subtitle>
                    <Card.Text>{request.vehicleType}</Card.Text>
                    <Card.Text>{request.description}</Card.Text>
                    <Button
                      variant="danger"
                      className="view-details-btn"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent modal from opening
                        handleRequestClick(request);
                      }}
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Modal for Request Details */}
          {selectedRequest && (
            <Modal show={showModal} onHide={() => setShowModal(false)} centered animation>
              <Modal.Header closeButton>
                <Modal.Title>Emergency Request Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p><strong>Customer Name:</strong> {selectedRequest.customerName}</p>
                <p><strong>Appointment Date:</strong> {selectedRequest.appointmentDate}</p>
                <p><strong>Appointment Time:</strong> {selectedRequest.appointmentTime}</p>
                <p><strong>Vehicle Type:</strong> {selectedRequest.vehicleType}</p>
                <p><strong>Description:</strong> {selectedRequest.description}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="danger" onClick={() => handleCancelRequest(selectedRequest.id)}>
                  Cancel Request
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </Container>
      </div>
    </div>
  );
};

export default EmergencyRequests;
