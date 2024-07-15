import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import Header from "./components/header/header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <div className="bg-slate-50 flex gap-10 flex-col">
        <Header />
        <nav className="flex gap-4">
          <Link to="/">Posts</Link>
          <Link to="/form">Add post</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
