import { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar"; 
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function sentDataToBackend(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://687af394abb83744b7ee4905.mockapi.io/Blogs",
        { title, subtitle, description, image }
      );

      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to send data. Please check your inputs or connection.");
    }
  }

  return (
    <>
      <NavBar />
      <div className="mx-14 mt-10 rounded-lg border-2 border-blue-400 shadow-lg">
        <div className="mt-10 text-center text-lg font-bold text-blue-700">
          Blog Creation
        </div>
        <div className="mt-3 text-center text-4xl font-bold text-blue-900">
          Create a Blog
        </div>
        <form onSubmit={sentDataToBackend} className="p-8">
          <div className="flex gap-4">
            <input
              type="text"
              name="title"
              placeholder="Enter a title"
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder:font-semibold placeholder:text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
            <input
              type="text"
              name="subtitle"
              placeholder="Enter a subtitle"
              onChange={(e) => setSubtitle(e.target.value)}
              className="mt-1 w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder:font-semibold placeholder:text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            />
          </div>
          <input
            type="text"
            name="image"
            placeholder="Enter an image URL"
            onChange={(e) => setImage(e.target.value)}
            className="mt-4 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder:font-semibold placeholder:text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          />
          <textarea
            name="description"
            id="text"
            rows={6}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="mt-4 w-full resize-none rounded-md border border-slate-300 p-4 font-semibold text-gray-700 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-8 py-4 text-sm font-bold text-white transition duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              🚀 Create Blog
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;