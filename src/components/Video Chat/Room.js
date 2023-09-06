// Room.js
import React, { useState } from 'react';

const Room = ({ roomId, handleJoinRoom }) => {
  const [inputRoomId, setInputRoomId] = useState('');

  const handleRoomIdChange = (event) => {
    setInputRoomId(event.target.value);
  };

  const handleJoinClick = () => {
    if (inputRoomId.trim() !== '') {
      handleJoinRoom(inputRoomId);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputRoomId}
        onChange={handleRoomIdChange}
        placeholder="Enter room ID"
      />
      <button onClick={handleJoinClick}>Join Room</button>
      <p>Current Room: {roomId}</p>
    </div>
  );
};

export default Room;
