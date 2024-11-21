import React, { useState } from "react";
import {
  Container,
  Card,
  Button,
  Table,
  Modal,
  Form,
  Tab,
  Nav,
} from "react-bootstrap";
import NavigationBar from "./navigationbar"; // Import the navigation bar
import "bootstrap/dist/css/bootstrap.min.css";
import "./DriverAppointments.css";

const upcomingAppointmentsData = [
  {
    id: 1,
    appointmentDate: "2024-11-30",
    appointmentTime: "14:30",
    vehicleType: "Sedan",
    description: "Routine maintenance and oil change",
  },
  {
    id: 2,
    appointmentDate: "2024-12-05",
    appointmentTime: "16:00",
    vehicleType: "SUV",
    description: "Brake inspection and tire rotation",
  },
];

const pastAppointmentsData = [
  {
    id: 3,
    appointmentDate: "2024-11-01",
    appointmentTime: "10:00",
    vehicleType: "Truck",
    description: "Battery replacement and diagnostics",
  },
  {
    id: 4,
    appointmentDate: "2024-10-25",
    appointmentTime: "11:30",
    vehicleType: "Motorcycle",
    description: "Oil change and engine check",
  },
];

const DriverAppointments = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleRowClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowDetailsModal(true);
  };

  const handleCancelAppointment = (id) => {
    console.log(`Appointment ${id} cancelled`);
    // Add logic to update the state and remove the appointment from the list.
  };

  return (
    <div className="main-layout">
      <NavigationBar />
      <div className="main-content">
        <Container className="mt-5">
          <h2 className="text-center mb-4" style={{ color: "#08306b" }}>
            My Appointments
          </h2>

          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Tab.Container
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
              >
                <Nav variant="tabs" className="mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="upcoming">Upcoming Appointments</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="past">Past Appointments</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  {/* Upcoming Appointments */}
                  <Tab.Pane eventKey="upcoming">
                    <div className="d-flex justify-content-between mb-3">
                      
                      <Button
                        variant="primary"
                        onClick={() => setShowFormModal(true)}
                        className="book-appointment-btn"
                      >
                        Book New Appointment
                      </Button>
                    </div>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Vehicle Type</th>
                          <th>Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingAppointmentsData.map((appointment) => (
                          <tr key={appointment.id}>
                            <td>{appointment.appointmentDate}</td>
                            <td>{appointment.appointmentTime}</td>
                            <td>{appointment.vehicleType}</td>
                            <td>{appointment.description}</td>
                            <td>
                              <Button
                                variant="danger"
                                size="sm"
                                onClick={() =>
                                  handleCancelAppointment(appointment.id)
                                }
                              >
                                Cancel
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Tab.Pane>

                  {/* Past Appointments */}
                  <Tab.Pane eventKey="past">
                    
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Vehicle Type</th>
                          <th>Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pastAppointmentsData.map((appointment) => (
                          <tr
                            key={appointment.id}
                            onClick={() => handleRowClick(appointment)}
                            style={{ cursor: "pointer" }}
                          >
                            <td>{appointment.appointmentDate}</td>
                            <td>{appointment.appointmentTime}</td>
                            <td>{appointment.vehicleType}</td>
                            <td>{appointment.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>

          {/* Appointment Details Modal */}
          {selectedAppointment && (
            <Modal
              show={showDetailsModal}
              onHide={() => setShowDetailsModal(false)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Appointment Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  <strong>Date:</strong> {selectedAppointment.appointmentDate}
                </p>
                <p>
                  <strong>Time:</strong> {selectedAppointment.appointmentTime}
                </p>
                <p>
                  <strong>Vehicle Type:</strong>{" "}
                  {selectedAppointment.vehicleType}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {selectedAppointment.description}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setShowDetailsModal(false)}
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )}

          {/* Appointment Form Modal */}
          <Modal
            show={showFormModal}
            onHide={() => setShowFormModal(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Book New Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="appointmentDate">
                  <Form.Label>Appointment Date</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="appointmentTime">
                  <Form.Label>Appointment Time</Form.Label>
                  <Form.Control type="time" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="vehicleType">
                  <Form.Label>Vehicle Type</Form.Label>
                  <Form.Select required>
                    <option value="">Select Vehicle Type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Truck">Truck</option>
                    <option value="Motorcycle">Motorcycle</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} required />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="me-2">
                    Book Appointment
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => setShowFormModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </div>
  );
};

export default DriverAppointments;
