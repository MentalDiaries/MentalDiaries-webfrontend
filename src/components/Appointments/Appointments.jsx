import React, { useEffect, useRef } from 'react';
import './Appointments.css';
const Appointments = () => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude, longitude);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, []);

  return (
    <div>
      <div id="google-maps"></div>
      <h1>
        It should render the current user's location on a map and show all
        nearby counsellor
      </h1>
    </div>
  );
};

export default Appointments;
