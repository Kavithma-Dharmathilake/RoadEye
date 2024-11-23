import React, { useState } from 'react';
import { Container, Table, Modal, Button } from 'react-bootstrap';
import NavigationBar from './navigationbar';
import './DriverNotifications.css';

const DriverNotifications = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const notifications = [
    {
      id: 1,
      date: '2024-11-20',
      time: '09:30 AM',
      title: 'Server Maintenance',
      details: 'Scheduled maintenance on server from 10:00 PM to 02:00 AM.',
    },
    {
      id: 2,
      date: '2024-11-21',
      time: '02:00 PM',
      title: 'New Feature Release',
      details: 'The new dashboard feature is now live. Check it out in your account!',
    },
    {
      id: 3,
      date: '2024-11-22',
      time: '08:00 AM',
      title: 'Policy Update',
      details: 'We’ve updated our Terms of Service and Privacy Policy.',
    },
  ];

  const handleRowClick = (notification) => {
    setSelectedNotification(notification);
    setShowDetails(true);
  };

  const handleClose = () => {
    setShowDetails(false);
    setSelectedNotification(null);
  };

  return (
    <div className="notifications-page">
      <NavigationBar />
      <div className="main-content">
        <Container className="content-container">
          <h1 className="section-heading">Notifications</h1>

          <Table striped bordered hover className="notification-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Time</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr
                  key={notification.id}
                  onClick={() => handleRowClick(notification)}
                  className="notification-row"
                >
                  <td>{notification.id}</td>
                  <td>{notification.date}</td>
                  <td>{notification.time}</td>
                  <td>{notification.title}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        {selectedNotification && (
          <Modal show={showDetails} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Notification Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>Date:</strong> {selectedNotification.date}
              </p>
              <p>
                <strong>Time:</strong> {selectedNotification.time}
              </p>
              <p>
                <strong>Title:</strong> {selectedNotification.title}
              </p>
              <p>
                <strong>Details:</strong> {selectedNotification.details}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default DriverNotifications;
