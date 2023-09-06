import React from 'react';

const RemoteVideo = ({ stream }) => {
  return <video ref={(ref) => (ref.srcObject = stream)} autoPlay />;
};

export default RemoteVideo;