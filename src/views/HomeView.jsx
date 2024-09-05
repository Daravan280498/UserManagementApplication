import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import Alert from '../components/Alert';

const HomeView = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch(() => showAlert('Error fetching users. Please try again.'));
  }, []);

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(''), 3000);
  };

  const handleCreateUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    axios
      .post('https://jsonplaceholder.typicode.com/users', newUser)
      .then((response) => {
        setUsers([response.data, ...users]);
        setShowForm(false);
        showAlert('User created successfully!');
      })
      .catch(() => {
        setUsers([newUser, ...users]);
        showAlert('User created successfully, but not saved to server.');
      });
  };

  const handleUpdateUser = (updatedUser) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
      .then(() => {
        setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
        setEditingUser(null);
        setShowForm(false);
        showAlert('User updated successfully!');
      })
      .catch(() => showAlert('Failed to update user. Please try again.'));
  };

  const handleDeleteUser = (userId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
        showAlert('User deleted successfully!');
      })
      .catch(() => showAlert('Error deleting user. Please try again.'));
  };

  const handleShowCreateForm = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setEditingUser(null);
    setShowForm(false);
  };

  return (
    <div>
      <Alert message={alertMessage} onClose={() => setAlertMessage('')} />
      <button className="btn btn-primary mb-3" onClick={handleShowCreateForm}>
        Create New User
      </button>
      {showForm && (
        <UserForm
          onCreateUser={handleCreateUser}
          onUpdateUser={handleUpdateUser}
          editingUser={editingUser}
          onCancel={handleCancelForm}
        />
      )}
      <UserList
        users={users}
        onEditUser={(user) => {
          setEditingUser(user);
          setShowForm(true);
        }}
        onDeleteUser={handleDeleteUser}
        onViewUser={(user) => navigate(`/user/${user.id}`)} // Navigate to user detail
      />
    </div>
  );
};

export default HomeView;
