export default function Post({ post, index }) {
  return (
    <>
      <div
        key={index}
        className=" cursor-pointer flex  h-[20vh] flex-row gap-5 p-5 w-full bg-white rounded-2xl drop-shadow shadow-lg "
      >
       
          <img
            src={post?.selectedFile}
            alt={post.title}
            className="w-[19vh] overflow-hidden object-cover mt-2"
          />
     
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold hover:underline">{post.title}</h1>
          <p className="text-lg font-regular">
            {post.message == "" ? "No description provided" : post.message}
          </p>
        </div>
      </div>
    </>
  );
}
