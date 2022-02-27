import React from 'react';
import './Dashboard.css';
import '../../globalCss/utility.css';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import App1 from '../SnackBar/ref';
const Dashboard = () => {
  const handleAddStudent = function (e) {
    e.preventDefault();
  };
  return (
    <div className="dashboard">
      <div className="dashboard__content">
        
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
