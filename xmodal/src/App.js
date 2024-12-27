import React, { useState } from "react";
import "./Modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { username, email, phone, dob } = formData;

    if (!username) {
      alert("Please fill in the username.");
      return false;
    }
    if (!email || !email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return false;
    }
    if (!phone || phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }
    if (!dob || new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ username: "", email: "", phone: "", dob: "" });
      setIsOpen(false);
    }
  };

  const handleModalClick = (e) => {
    // Close the modal if clicked outside the form content
    if (e.target.className === "modal") {
      setIsOpen(false);
    }
  };

  return (
    <div className="modal-container">
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
              <label>Username:</label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
              />
              <label>Email Address:</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label>Phone Number:</label>
              <input
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
              <label>Date of Birth:</label>
              <input
                id="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
