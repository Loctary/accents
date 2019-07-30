import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import mapStyles from './style';
import accents from './accents';

const MyMap = props => {
  const { google, onClick, zoom } = props;
  const [center, setCenter] = useState({ lat: 51.507351, lng: -0.127758 });
  return (
    <Map styles={mapStyles} google={google} zoom={zoom} initialCenter={center} center={center}>
      {accents.map(accent => (
        <Marker
          key={accent.city}
          position={accent.location}
          onClick={() => {
            setCenter(accent.location);
            onClick(accent);
          }}
        />
      ))}
    </Map>
  );
};

MyMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
  google: PropTypes.shape({
    maps: PropTypes.shape({}),
  }).isRequired,
};

export default GoogleApiWrapper({
  apiKey: 'API_KEY',
})(MyMap);
