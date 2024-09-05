import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView'; // Home page with user list
import UserDetailView from './views/UserDetailView'; // Detailed view of each user

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">User Management Application</h1>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/user/:id" element={<UserDetailView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
