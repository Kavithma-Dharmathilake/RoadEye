import React, { useState } from "react";
import { Container, Card, Button, Table, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavigationBar from "./NavigationBar"; // Import the navigation bar component
import "./NavigationBar.css"; // Custom styles for the navigation bar
import "./MaintenanceAppointments.css"; // Custom styles for appointments

const appointmentsData = [
  {
    id: 1,
    customerName: "John Doe",
    appointmentDate: "2024-07-27",
    appointmentTime: "14:30",
    vehicleType: "Sedan",
    description: "Routine maintenance and oil change",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    appointmentDate: "2024-07-28",
    appointmentTime: "16:00",
    vehicleType: "SUV",
    description: "Brake inspection and tire rotation",
  },
  {
    id: 3,
    customerName: "Mark Wilson",
    appointmentDate: "2024-07-29",
    appointmentTime: "10:00",
    vehicleType: "Truck",
    description: "Battery replacement and diagnostics",
  },
];

const MaintenanceAppointments = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRowClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const handleCancelAppointment = (id) => {
    console.log(`Appointment ${id} cancelled`);
    setShowModal(false);
  };

  return (
    <div className="main-layout">
      {/* Include Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="main-content">
        <Container className="mt-5">
        <h2 className="text-center mb-4" style={{ color: "#08306b" }}>Upcoming Appointments </h2>




          <Card className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Table
                striped
                bordered
                hover
                className="appointment-table"
                responsive
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Vehicle Type</th>
                  </tr>
                </thead>
                <tbody>
                  {appointmentsData.map((appointment) => (
                    <tr
                      key={appointment.id}
                      onClick={() => handleRowClick(appointment)}
                      className="appointment-row"
                    >
                      <td>{appointment.id}</td>
                      <td>{appointment.customerName}</td>
                      <td>{appointment.appointmentDate}</td>
                      <td>{appointment.appointmentTime}</td>
                      <td>{appointment.vehicleType}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {selectedAppointment && (
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              centered
              animation
            >
              <Modal.Header closeButton>
                <Modal.Title>Appointment Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  <strong>Customer Name:</strong>{" "}
                  {selectedAppointment.customerName}
                </p>
                <p>
                  <strong>Appointment Date:</strong>{" "}
                  {selectedAppointment.appointmentDate}
                </p>
                <p>
                  <strong>Appointment Time:</strong>{" "}
                  {selectedAppointment.appointmentTime}
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
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleCancelAppointment(selectedAppointment.id)}
                >
                  Cancel Appointment
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </Container>
      </div>
    </div>
  );
};

export default MaintenanceAppointments;
