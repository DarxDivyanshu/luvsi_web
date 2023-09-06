import Footer from "./components/Footer";
import Header from "./components/Header";
import OTPInput from "./components/OTPInput";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import MobileNo from "./components/MobileNo";
import Home from "./components/Home";
import ForgetPassword from "./components/ForgetPassword";
import RegistrationForm from "./components/RegistrationForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import LuvsiCards from "./components/LuvsiCards";
import SignIn from "./components/SignIn";
import LandingPage from "./components/LandingPage";
import ProfileForm from "./components/ProfileForm";
import Dashboard from "./components/Dashboard";
import ChatContainer from "./components/ChatContainer";
import ProfileSection from "./components/ProfileSection";
import MapComponent from "./components/MapComponent";
import SwipeButton from "./components/SwipeButton";
import VideoCallStart from "./components/Video Chat/VideoCallStart";
function App() {
  return (
    <div className="App grid-container">
      <Router>
        <Header className="header" />
        <Routes>
        <Route path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/otpinput" element={<OTPInput />} />
          <Route exact path="/mobileno" element={<MobileNo />} />
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
          <Route exact path="/sign-up" element={<RegistrationForm/>} />
          <Route exact path="/resetpassword" element={<ResetPasswordForm/>} />
          <Route exact path="/sign-in" element={<SignIn/>} />
          <Route exact path="/profileform" element={<ProfileForm/>} />
          <Route exact path="/profilesection" element={<ProfileSection/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/chat" element={<ChatContainer/>} />
          <Route exact path="/video-call" element={<VideoCallStart/>} />
          <Route exact path="/map" element={<MapComponent/>} />
          <Route exact path="/luvsiCard" element={<><LuvsiCards/> 
          <SwipeButton/></>} />
        </Routes>
        {/* <Footer className="header" /> */}
      </Router>
    </div>
  );
}

export default App;
