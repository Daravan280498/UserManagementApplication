import React, { useState, useEffect } from 'react';

const UserForm = ({ onCreateUser, onUpdateUser, editingUser, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // Update form data when editing a user
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({ name: '', email: '', phone: '' });
    }
  }, [editingUser]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser(formData); // Update user if editing
    } else {
      onCreateUser({ ...formData, id: Date.now() }); // Create a new user
    }
    setFormData({ name: '', email: '', phone: '' }); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="form-control"
          placeholder="Phone"
          required
        />
      </div>
      <button type="submit" className="btn btn-success me-2">
        {editingUser ? 'Update User' : 'Create User'}
      </button>
      {/* Cancel button to hide the form */}
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
