import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import NavigationBar from "./NavigationBar"; // Import the Navigation Bar
import "bootstrap/dist/css/bootstrap.min.css";
import "./SetOpeningHours.css";

const SetOpeningHours = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [closedDays, setClosedDays] = useState({});

  const toggleClosed = (day) => {
    setClosedDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <>
      {/* Include Navigation Bar */}
      <NavigationBar />

      {/* Content Section */}
      <Container
        className="mt-5"
        style={{
          marginLeft: "250px", // Ensure space for the fixed sidebar
          paddingRight: "0",   // Remove padding-right to avoid extra space
          maxWidth: "calc(100% - 250px)", // Adjust max width for the content
        }}
      >
        {/* Header Section */}
        <div className="text-center mb-4">
          <h2 className="text-primary">Set Maintenance Hours</h2>
          <p className="text-muted">
            Configure your availability for maintenance on each day of the week.
          </p>
        </div>

        {/* Cards Section */}
        <Row className="g-4">
          {days.map((day, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={day}>
              <Card className="day-card shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-primary">{day}</h5>
                    <Form.Check
                      type="switch"
                      id={`${day}-closed`}
                      label="Closed"
                      checked={closedDays[day] || false}
                      onChange={() => toggleClosed(day)}
                      className="closed-toggle"
                    />
                  </div>

                  {!closedDays[day] && (
                    <div className="mt-3">
                      <Form.Group controlId={`${day}-opens`} className="mb-2">
                        <Form.Label className="text-muted">Opens at:</Form.Label>
                        <Form.Select className="form-control">
                          <option value="08:00">08:00 AM</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group controlId={`${day}-closes`} className="mb-2">
                        <Form.Label className="text-muted">Closes at:</Form.Label>
                        <Form.Select className="form-control">
                          <option value="05:00">05:00 PM</option>
                          <option value="06:00">06:00 PM</option>
                          <option value="07:00">07:00 PM</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Action Section */}
        <div className="mt-5 text-center">
          <Button
            variant="primary"
            size="lg"
            className="me-3 px-4"
            style={{ backgroundColor: "#0b3d91", border: "none" }}
          >
            Save Changes
          </Button>
          <Button variant="outline-primary" size="lg" className="px-4">
            Reset
          </Button>
        </div>
      </Container>
    </>
  );
};

export default SetOpeningHours;
