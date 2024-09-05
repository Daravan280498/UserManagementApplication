import React from 'react';

const UserItem = ({ user, onEditUser, onDeleteUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        {/* Edit button triggers the edit action */}
        <button className="btn btn-primary btn-sm me-2" onClick={() => onEditUser(user)}>
          Edit
        </button>
        {/* Delete button triggers the delete action */}
        <button className="btn btn-danger btn-sm" onClick={() => onDeleteUser(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserItem;

