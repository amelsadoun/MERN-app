import { useSelector } from "react-redux";
import Post from "./post";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className="flex flex-col mx-10 gap-5">
      {posts.map((post, index) => <Post index={index} post={post} />)}
    </div>
  );
}
