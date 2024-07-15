import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getPosts } from "./actions/posts";
import Posts from "./components/posts/posts";
import Form from "./components/form/form";

function App() {
const dispatch = useDispatch();

useEffect(()=>{
dispatch(getPosts());
},[dispatch])


  return (
    <div className="bg-slate-600">
     <Posts/>
     <Form/>
    </div>
  )
}

export default App
