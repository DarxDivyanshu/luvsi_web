
import React, { useState, useEffect } from 'react';
import SimplePeer from 'simple-peer';
import io from 'socket.io-client';
import LocalVideo from './LocalVideo';
import RemoteVideo from './RemoteVideo';
import Room from './Room';

const VideoChat = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [roomId, setRoomId] = useState('');
  const socket = io('http://localhost:5000'); // Replace with your socket server URL

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setLocalStream(stream);
        socket.emit('join-room', roomId);
      })
      .catch((error) => {
        console.error('Error accessing user media:', error);
      });
  }, [roomId]);

  useEffect(() => {
    if (!localStream) return;

    const peer = new SimplePeer({ initiator: true, stream: localStream });

    peer.on('stream', (stream) => {
      setRemoteStream(stream);
    });

    peer.on('signal', (signalData) => {
      socket.emit('send-signal', roomId, signalData);
    });

    setPeer(peer);

    return () => {
      peer.destroy();
    };
  }, [localStream]);

  useEffect(() => {
    socket.on('receive-signal', (signalData) => {
      if (peer) {
        peer.signal(signalData);
      }
    });
  }, [peer]);

  const handleJoinRoom = (newRoomId) => {
    if (newRoomId !== roomId) {
      setRoomId(newRoomId);
    }
  };

  return (
    <div>
      <h1>Video Chat App</h1>
      {localStream && <LocalVideo stream={localStream} />}
      {remoteStream && <RemoteVideo stream={remoteStream} />}
      <Room roomId={roomId} handleJoinRoom={handleJoinRoom} />
    </div>
  );
};

export default VideoChat;
