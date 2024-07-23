import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEvents } from "./actions/events";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Posts from "./components/posts/events";
import Form from "./components/form/form";
import Header from "./components/header/header";
import SignUp from "./components/auth/signup";
import Login from "./components/auth/login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <Router>
      <div className="bg-slate-50 flex gap-10 flex-col min-h-[100vh]">
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/form" element={<Form />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
