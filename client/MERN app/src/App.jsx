import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Posts from "./components/posts/events";
import Form from "./components/event forms/form";
import Header from "./components/header/header";
import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";
import EventInfo from "./components/posts/eventInfo";
import EditProfile from "./components/edit profile/editProfile";
import ChangePassword from "./components/change password/changePassword";
import Background from "./components/utils/background";
import Landing from "./components/landing/landing";

function App() {
  const location = useLocation();

  return (
    <div className="-z-20 flex flex-col min-h-[100vh]">
      {location.pathname !== "/" && (
        <>
          <Header />
          <Background />
        </>
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<Posts />} />
        <Route path="/createEvent" element={<Form isEditing={false} />} />
        <Route path="/edit/:id" element={<Form isEditing={true} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<EventInfo />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
