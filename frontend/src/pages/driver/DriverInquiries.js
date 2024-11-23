import React, { useState } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import NavBar from "./navigationbar"; // Assuming the navbar component from Complaints.js is in the same folder
import "./DriverInquiries.css"; // Import the updated CSS

const DriverInquiries = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState({});
  const [formData, setFormData] = useState({
    id: "",
    complaintTime: "",
    complaintDate: "",
    complaintSubject: "",
    status: "",
  });

  const inquiries = [
    {
      id: 1,
      complaintTime: "08:00 AM",
      complaintDate: "2024-11-15",
      complaintSubject: "Video Upload",
      status: "Pending",
      details: "Cannot Upload Video",
    },
    {
      id: 2,
      complaintTime: "10:30 AM",
      complaintDate: "2024-11-16",
      complaintSubject: "Cannot Place Order",
      status: "Resolved",
      details: "Cannot Place Order",
    },
  ];

  const handleViewDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowDetailModal(true);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted with data:", formData);
    setShowFormModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="driver-inquiries-page">
      {/* NavBar */}
      <NavBar />
      <div className="driver-inquiries">
        <div className="content-container">
          <h1>Your Inquiries</h1>

          <Button variant="primary" className="mb-3" onClick={() => setShowFormModal(true)}>
            Submit Inquiry
          </Button>

          <Table className="notification-table" striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Complaint Time</th>
                <th>Complaint Date</th>
                <th>Complaint Subject</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr
                  key={inquiry.id}
                  onClick={() => handleViewDetails(inquiry)}
                  className="notification-row"
                >
                  <td>{inquiry.id}</td>
                  <td>{inquiry.complaintTime}</td>
                  <td>{inquiry.complaintDate}</td>
                  <td>{inquiry.complaintSubject}</td>
                  <td>{inquiry.status}</td>
                  <td>
                    <Button variant="danger" className="ml-2">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* View Details Modal */}
          <Modal show={showDetailModal} onHide={() => setShowDetailModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Inquiry Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>ID:</strong> {selectedInquiry.id}
              </p>
              <p>
                <strong>Complaint Time:</strong> {selectedInquiry.complaintTime}
              </p>
              <p>
                <strong>Complaint Date:</strong> {selectedInquiry.complaintDate}
              </p>
              <p>
                <strong>Subject:</strong> {selectedInquiry.complaintSubject}
              </p>
              <p>
                <strong>Status:</strong> {selectedInquiry.status}
              </p>
              <p>
                <strong>Details:</strong> {selectedInquiry.details}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDetailModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Submit Inquiry Form Modal */}
          <Modal show={showFormModal} onHide={() => setShowFormModal(false)}>
            <Modal.Header closeButton style={{ backgroundColor: "#08306b" }}>
              <Modal.Title style={{ color: "white" }}>Submit a New Inquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Complaint Time</Form.Label>
                  <Form.Control
                    type="text"
                    name="complaintTime"
                    value={formData.complaintTime}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Complaint Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="complaintDate"
                    value={formData.complaintDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Complaint Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="complaintSubject"
                    value={formData.complaintSubject}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowFormModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleFormSubmit}>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DriverInquiries;
