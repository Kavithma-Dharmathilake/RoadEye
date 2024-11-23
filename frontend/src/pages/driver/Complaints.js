import React, { useState } from 'react';
import { Modal, Button, Table, Container } from 'react-bootstrap';
import NavigationBar from './navigationbar';
import './Complaints.css';

const ComplaintsPage = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [complaintDetails, setComplaintDetails] = useState({});
  const [formData, setFormData] = useState({
    district: '',
    police_station: '',
    type: '',
    name: '',
    nic: '',
    address: '',
    contact_number: '',
    email: '',
    subject: '',
    complain: '',
    video_proof: ''
  });

  const complaints = [
    {
      id: 1,
      time: '2024-11-15 08:00',
      station: 'Central Police',
      subject: 'Noise Complaint',
      status: 'Pending',
      details: {
        district: 'District 1',
        police_station: 'Central Police',
        type: 'Noise',
        name: 'John Doe',
        nic: '123456789V',
        address: '123 Main St',
        contact_number: '555-1234',
        email: 'john.doe@example.com',
        complain: 'Loud noise in the area',
        video_proof: 'video 1'
      }
    },
    {
      id: 2,
      time: '2024-11-16 10:30',
      station: 'East Police',
      subject: 'Traffic Violation',
      status: 'Resolved',
      details: {
        district: 'District 2',
        police_station: 'East Police',
        type: 'Traffic',
        name: 'Jane Smith',
        nic: '987654321V',
        address: '456 Oak Ave',
        contact_number: '555-5678',
        email: 'jane.smith@example.com',
        complain: 'Running red light',
        video_proof: 'video 2'
      }
    }
  ];

  const handleRowClick = (complaint) => {
    setComplaintDetails(complaint.details);
    setShowDetail(true);
  };

  const handleCloseDetail = () => setShowDetail(false);

  const handleShowForm = () => setShowForm(true);

  const handleCloseForm = () => setShowForm(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    console.log('Form submitted with data:', formData);
    setShowForm(false);
  };

  return (
    <div className="complaints-page">
      <NavigationBar />
      <div className="main-content">
        <Container className="content-container mt-5">
          <h1 className="section-heading">Complaints</h1>

          <Button variant="primary" onClick={handleShowForm} className="mb-4">Submit Complaint</Button>

          <Table striped bordered hover className="appointment-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Complaint Time</th>
                <th>Police Station</th>
                <th>Complaint Subject</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id} onClick={() => handleRowClick(complaint)} className="appointment-row">
                  <td>{complaint.id}</td>
                  <td>{complaint.time}</td>
                  <td>{complaint.station}</td>
                  <td>{complaint.subject}</td>
                  <td>{complaint.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        {/* Complaint Details Modal */}
        <Modal show={showDetail} onHide={handleCloseDetail}>
          <Modal.Header closeButton>
            <Modal.Title>Complaint Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {Object.entries(complaintDetails).map(([key, value]) => (
              <p key={key}><strong>{key.replace(/_/g, ' ')}:</strong> {value}</p>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDetail}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* Complaint Form Modal */}
        <Modal show={showForm} onHide={handleCloseForm}>
          <Modal.Header closeButton>
            <Modal.Title>Submit a Complaint</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>District</label>
                <select className="form-control" name="district" value={formData.district} onChange={handleInputChange} required>
                  <option value="">Select District</option>
                  <option value="District 1">District 1</option>
                  <option value="District 2">District 2</option>
                  <option value="District 3">District 3</option>
                </select>
              </div>
              <div className="form-group">
                <label>Police Station</label>
                <select className="form-control" name="police_station" value={formData.police_station} onChange={handleInputChange} required>
                  <option value="">Select Police Station</option>
                  <option value="Central Police">Central Police</option>
                  <option value="East Police">East Police</option>
                </select>
              </div>
              <div className="form-group">
                <label>Complaint Type</label>
                <input type="text" className="form-control" name="type" value={formData.type} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>NIC</label>
                <input type="text" className="form-control" name="nic" value={formData.nic} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" name="address" value={formData.address} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" className="form-control" name="contact_number" value={formData.contact_number} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>Complaint</label>
                <textarea className="form-control" name="complain" value={formData.complain} onChange={handleInputChange} required></textarea>
              </div>
              <div className="form-group">
                <label>Video Proof</label>
                <select className="form-control" name="video_proof" value={formData.video_proof} onChange={handleInputChange} required>
                  <option value="">Select Video Proof</option>
                  <option value="video 1">Video 1</option>
                  <option value="video 2">Video 2</option>
                  <option value="video 3">Video 3</option>
                </select>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseForm}>Close</Button>
            <Button variant="primary" onClick={handleFormSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ComplaintsPage;
