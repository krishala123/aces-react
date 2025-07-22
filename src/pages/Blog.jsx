import NavBar from "./NavBar";

function Blog() {
  return (
    <>
      <NavBar />
      <div className="mx-auto flex flex-col items-center  min-h-screen  w-[600px] mt-5">
        <img
          src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-center mt-10">
            Welcome to the Blog Page
          </h1>
          <h4 className="text-center mt-4 text-gray-600">
            Here you can find the latest articles and updates.
          </h4>
        </div>
        <p className="mt-10">
          This is a placeholder for blog content. You can add your articles,
          news, and updates here. Feel free to customize this page with your own
          content and style.
        </p>
        <div className="flex gap-3 items-center mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Edit
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
export default Blog;
