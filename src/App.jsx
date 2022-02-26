import { useState, useContext, useEffect } from 'react';
import './globalCss/App.css';
import './globalCss/var.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import SideDrawer from './components/SideDrawer/SideDrawer';
import YourDiaries from './components/YourDiaries/YourDiaries';
import Analysis from './components/Analysis/Analysis';
import Appointments from './components/Appointments/Appointments';
import Post from './components/Post/Post';
import { AuthContext } from './AuthProvider';
import Login from './components/Login/Login';

function App() {
  const user = useContext(AuthContext);

  useEffect(() => {}, []);
  return (
    <div className="App">
      <Router>
        <SideDrawer />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Post />} />
            <Route path="/your-diaries" element={<YourDiaries />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/appointments" element={<Appointments />} />
          </Route>
        </Routes>
        {!user && <Login />}
      </Router>
    </div>
  );
}

export default App;
