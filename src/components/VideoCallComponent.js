
import React, { useState, useEffect, useRef } from 'react';
import Peer from 'simple-peer';

const VideoCallComponent = () => {
  const [stream, setStream] = useState(null);
  const userVideoRef = useRef();
  const partnerVideoRef = useRef();
  const peer = useRef();

  useEffect(() => {
    // Get user's video and audio stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setStream(stream);
        userVideoRef.current.srcObject = stream;

        // Initialize the WebRTC peer connection
        peer.current = new Peer({ initiator: true, stream });
        peer.current.on('stream', partnerStream => {
          partnerVideoRef.current.srcObject = partnerStream;
        });
      })
      .catch(error => {
        console.error('Error accessing user media:', error);
      });

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <video ref={userVideoRef} autoPlay muted />
      <video ref={partnerVideoRef} autoPlay />
    </div>
  );
};

export default VideoCallComponent;
