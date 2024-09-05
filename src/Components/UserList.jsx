import React from 'react';

const UserList = ({ users, onEditUser, onDeleteUser, onViewUser }) => {
  return (
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button className="btn btn-info me-2" onClick={() => onViewUser(user)}>
                View
              </button>
              <button className="btn btn-warning me-2" onClick={() => onEditUser(user)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => onDeleteUser(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
