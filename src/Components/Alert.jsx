import React from 'react';

const Alert = ({ message, onClose }) => {
  if (!message) return null; // Do not render if there's no message

  return (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
      {message}
      <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
    </div>
  );
};

export default Alert;
