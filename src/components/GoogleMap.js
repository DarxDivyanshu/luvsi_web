import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { Container, Button } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
    lat: 28.628454,
    lng: 77.376945,
  };

const origin = { lat: 28.628454, lng: 77.376945 };
const destination = { lat: 37.3382, lng: -121.8863 };

const MapWithDirection = () => {
  const [directions, setDirections] = useState(null);

  const directionsOptions = {
    origin: origin,
    destination: destination,
    travelMode: 'DRIVING',
  };

  const handleDirections = (response) => {
    if (response !== null) {
      setDirections(response);
    }
  };

  return (
    <Container>
      <LoadScript googleMapsApiKey="AIzaSyA7a5DifsvjpDm_bjzx5bcxIG18je4Xtmc">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}
        
        >
          {directions && <DirectionsRenderer directions={directions} />}
          <DirectionsService
            options={directionsOptions}
            callback={handleDirections}
          />
        </GoogleMap>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const map = document.querySelector('.gm-fullscreen-control');
            map.click();
          }}
        >
          Toggle Fullscreen
        </Button>
      </LoadScript>
    </Container>
  );
};

export default MapWithDirection;
