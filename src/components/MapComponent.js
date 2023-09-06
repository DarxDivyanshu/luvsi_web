import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [markers, setMarkers] = useState(null);

  const [clickedLatLng, setClickedLatLng] = useState(null);

  const handleMapClick = (event) => {
    const clickedLat = event.latLng.lat();
    const clickedLng = event.latLng.lng();
    setClickedLatLng({ lat: clickedLat, lng: clickedLng });
    setMarkers({ lat: clickedLat, lng: clickedLng });
  };
  const mapStyles = {
    height: '500px',
    width: '100%',
  };

  const center = {
    lat: 28.628454,
    lng: 77.376945,
  };

  const onLoad = (map) => {
    setMap(map);
  };

  const onSearchBoxLoad = (ref) => {
    setSearchBox(ref);
  };
  const libraries = ['places'];
  const onPlacesChanged = () => {
    if (searchBox && searchBox.getPlaces) {
      const places = searchBox.getPlaces();

      // const newMarkers = places.map((event) => ({
      //   lat: event.latLng.lat(),
      //   lng: event.latLng.lng(),
      // }));

      // setMarkers(newMarkers);

      if (places.length > 0) {
        const bounds = new window.google.maps.LatLngBounds();
        places.forEach((place) => {
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      }
    }
  };


  return (
    <LoadScript googleMapsApiKey="AIzaSyA7a5DifsvjpDm_bjzx5bcxIG18je4Xtmc" libraries={libraries}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onClick={handleMapClick}
      >
        <StandaloneSearchBox
          onLoad={onSearchBoxLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for a place..."
            style={{
              boxSizing: `border-box`,
              // border: `2px solid red`,
              width: `240px`,
              height: `32px`,
              padding: `16px 18px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              justifyContent:'center',
              textOverflow: `ellipses`,
              position:'absolute',
              zIndex:'1',
              marginLeft:'400px',
              marginTop:'15px',
            }}
            onChange={(e)=>setSearchBox(e.target.value)}
          />
        </StandaloneSearchBox>

      
          <Marker  position={markers} />
        
      </GoogleMap>
      {clickedLatLng && (
          <p>
            Clicked Latitude: {clickedLatLng.lat}, Clicked Longitude: {clickedLatLng.lng}
          </p>
        )}
    </LoadScript>
    
  );
};

export default GoogleMapComponent;
