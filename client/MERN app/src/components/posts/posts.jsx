import { useSelector } from "react-redux";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className="text-white flex flex-row gap-10">
          <h1>{post.title}</h1>
          <p>{post.message}</p>
        </div>
      ))}
    </>
  );
}
