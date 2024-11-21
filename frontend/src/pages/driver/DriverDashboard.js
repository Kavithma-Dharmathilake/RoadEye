import React from "react";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavigationBar from "./navigationbar";
import "./DriverDashboard.css";

const DriverDashboard = () => {
  const calendarOptions = {
    initialView: "dayGridMonth",
    plugins: [dayGridPlugin, interactionPlugin],
    events: [
      { title: "Appointment 1", date: "2024-07-10" },
      { title: "Appointment 2", date: "2024-07-05" },
    ],
    dateClick: (arg) => alert(`Date clicked: ${arg.dateStr}`),
  };

  return (
    <div className="main-layout">
      {/* Left Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <div className="main-content">
        <Container fluid className="mt-4">
          <Row className="g-3 mb-4">
            <Col xs={12} md={6} lg={3}>
              <Card className="dashboard-card shadow-sm">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <i className="bi bi-calendar-event-fill card-icon"></i>
                  <div>
                    <h3 className="card-number">25</h3>
                    <p color="white">Complaints</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="dashboard-card shadow-sm">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <i className="bi bi-check-circle-fill card-icon"></i>
                  <div>
                    <h3 className="card-number">14</h3>
                    <p color="white">Appointments</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="dashboard-card shadow-sm">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <i className="bi bi-x-circle-fill card-icon"></i>
                  <div>
                    <h3 className="card-number">4</h3>
                    <p color="white">Orders</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="dashboard-card shadow-sm">
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <i className="bi bi-exclamation-circle-fill card-icon"></i>
                  <div>
                    <h3 className="card-number">5</h3>
                    <p color="white">Vehicles</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Table and Calendar */}
          <Row className="g-3">
            <Col xs={12} lg={8}>
              <Card className="shadow-sm">
                <Card.Header className="card-heading text-white">
                  Recent Complaints
                </Card.Header>
                <Card.Body>
                  <Table responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Complaint Time</th>
                        <th>Complaint Date</th>
                        <th>Complaint Subject</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Sample appointment data */}
                      {[
                        { id: 1, time: '10:00 AM', date: '2024-07-10', subject: 'Subject 1', status: 'Completed' },
                        { id: 2, time: '02:00 PM', date: '2024-07-05', subject: 'Subject 2', status: 'Cancelled' },
                        { id: 3, time: '11:00 AM', date: '2024-07-12', subject: 'Subject 3', status: 'Pending' },
                      ].map((complaint) => (
                        <tr key={complaint.id}>
                          <td>{complaint.id}</td>
                          <td>{complaint.time}</td>
                          <td>{complaint.date}</td>
                          <td>{complaint.subject}</td>
                          <td>{complaint.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4}>
              <Card className="shadow-sm">
                <Card.Header className="card-heading text-white">
                  Upcoming Appointments
                </Card.Header>
                <Card.Body>
                  <FullCalendar {...calendarOptions} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default DriverDashboard;
