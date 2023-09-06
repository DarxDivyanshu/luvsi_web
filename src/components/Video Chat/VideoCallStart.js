import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
const VideoCallStart = ({ stream }) => {
  const [inCall, setInCall] = useState(false);
  return ( 
  <div style={{ height: "80vh", 
   width:'70%',border:'2px solid red' }}>
  {inCall ? (
    <VideoCall setInCall={setInCall}  style={{marginTop:'20px'}}/>
  ) : (
    <Button
      variant="contained"
      color="primary"
      onClick={() => setInCall(true)}
    >
      Join Call
    </Button>
  )}
</div>)
};

export default VideoCallStart;