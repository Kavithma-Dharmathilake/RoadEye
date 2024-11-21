import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Navbar from "./navigationbar"; // Assuming Navbar is a separate component
import "bootstrap/dist/css/bootstrap.min.css";
import "./DriverVehicles.css";

const DriverVehicles = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      vehicle_number: "KS 2354",
      type: "Car",
      brand: "Toyota",
      model: "Aqua",
      yom: "2018",
      color: "Blue",
      millage: "25,000 km",
      owner: "Self",
      image: "https://cdn.pixabay.com/photo/2016/01/19/15/05/car-1149997_1280.jpg",
    },
  ]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    vehicle_number: "",
    type: "",
    brand: "",
    model: "",
    yom: "",
    millage: "",
    color: "",
    owner: "",
    absolute_owner: "",
    lease: false,
  });

  const handleCardClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowDetails(true);
  };

  const handleAddVehicle = () => {
    setShowAddModal(true);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    setVehicles([...vehicles, { ...formData, id: vehicles.length + 1 }]);
    setShowAddModal(false);
    setFormData({
      vehicle_number: "",
      type: "",
      brand: "",
      model: "",
      yom: "",
      millage: "",
      color: "",
      owner: "",
      absolute_owner: "",
      lease: false,
    });
  };

  return (
    <div className="page-container">
      <Navbar />
      <div className="content">
        <h1 className="text-center">My Vehicles</h1>
        <hr />
        <Button className="btn btn-primary mb-4 add-vehicle-btn" onClick={handleAddVehicle}>
          Add New Vehicle
        </Button>

        <div className="vehicle-grid">
          {vehicles.map((vehicle) => (
            <div
              className="card vehicle-card shadow-sm"
              key={vehicle.id}
              onClick={() => handleCardClick(vehicle)}
            >
              <img src={vehicle.image} alt="Vehicle" className="vehicle-image" />
              <div className="card-body">
                <h5 className="card-title">{vehicle.vehicle_number}</h5>
                <p className="vehicle-type">{vehicle.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Details Modal */}
      <Modal show={showDetails} onHide={() => setShowDetails(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Vehicle Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedVehicle && (
            <div>
              <p><strong>Vehicle Number:</strong> {selectedVehicle.vehicle_number}</p>
              <p><strong>Type:</strong> {selectedVehicle.type}</p>
              <p><strong>Brand:</strong> {selectedVehicle.brand}</p>
              <p><strong>Model:</strong> {selectedVehicle.model}</p>
              <p><strong>Year of Manufacture:</strong> {selectedVehicle.yom}</p>
              <p><strong>Color:</strong> {selectedVehicle.color}</p>
              <p><strong>Millage:</strong> {selectedVehicle.millage}</p>
              <p><strong>Owner:</strong> {selectedVehicle.owner}</p>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Add Vehicle Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddSubmit} className="add-vehicle-form">
            <Form.Group>
              <Form.Label>Vehicle Number</Form.Label>
              <Form.Control
                type="text"
                name="vehicle_number"
                value={formData.vehicle_number}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={formData.type}
                onChange={handleFormChange}
                required
              >
                <option value="">Select Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="bus">Bus</option>
                <option value="lorry">Lorry</option>
                <option value="van">Van</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                name="model"
                value={formData.model}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Year of Manufacture</Form.Label>
              <Form.Control
                type="text"
                name="yom"
                value={formData.yom}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mileage</Form.Label>
              <Form.Control
                type="text"
                name="millage"
                value={formData.millage}
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Owned By</Form.Label>
              <Form.Control
                as="select"
                name="owner"
                value={formData.owner}
                onChange={handleFormChange}
                required
              >
                <option value="">Select Owner</option>
                <option value="Myself">Myself</option>
                <option value="Someone Else">Someone Else</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit" className="btn btn-success mt-3">
              Add Vehicle
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DriverVehicles;
