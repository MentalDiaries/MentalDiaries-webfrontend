import React from 'react';
import './Dashboard.css';
import '../../globalCss/utility.css';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
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
