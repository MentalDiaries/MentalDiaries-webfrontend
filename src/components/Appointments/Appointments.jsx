import React from 'react';

const Appointments = () => {
  useEffect(() => {
    if(navigator.geolocation)
    {
      
    }
  }, []);
  return (
    <div>
      <h1>
        It should render the current user's location on a map and show all
        nearby counsellor
      </h1>
    </div>
  );
};

export default Appointments;
