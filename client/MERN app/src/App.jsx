import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Posts from "./components/posts/events";
import Form from "./components/event forms/form";
import Header from "./components/header/header";
import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";
import EventInfo from "./components/posts/eventInfo";

function App() {
 
  return (
    <Router>
      <div className="bg-slate-50 flex flex-col min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/createEvent" element={<Form isEditing={false}/>} />
          <Route path="/edit/:id" element={<Form isEditing={true}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<EventInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
