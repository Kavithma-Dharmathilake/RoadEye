import React from "react";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavigationBar from "./NavigationBar";
import "./MaintenanceDashboard.css";

const MaintenanceDashboard = () => {
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
                    <p color="white">New Appointments</p>
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
                    <p color="white">Completed Appointments</p>
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
                    <p color="white">Cancelled Appointments</p>
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
                    <p color="white">Emergency Requests</p>
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
                  Recent Appointments
                </Card.Header>
                <Card.Body>
                  <Table responsive striped bordered hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Appointment Time</th>
                        <th>Appointment Date</th>
                        <th>Vendor</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Sample appointment data */}
                      {[
                        { id: 1, time: '10:00 AM', date: '2024-07-10', vendor: 'Vendor 1', status: 'Completed' },
                        { id: 2, time: '02:00 PM', date: '2024-07-05', vendor: 'Vendor 2', status: 'Cancelled' },
                        { id: 3, time: '11:00 AM', date: '2024-07-12', vendor: 'Vendor 3', status: 'Pending' },
                      ].map((appointment) => (
                        <tr key={appointment.id}>
                          <td>{appointment.id}</td>
                          <td>{appointment.time}</td>
                          <td>{appointment.date}</td>
                          <td>{appointment.vendor}</td>
                          <td>{appointment.status}</td>
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

export default MaintenanceDashboard;
