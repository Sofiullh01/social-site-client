import { useEffect, useState } from "react";
import Select from "react-select";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const AddPost = () => {
  const asiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [formData, setFormData] = useState({
    postTitle: "",
    postDescription: "",
    tag: null,
  });

  const tagOptions = [
    { value: "uxui", label: "UI/UX" },
    { value: "react", label: "React" },
    { value: "nodejs", label: "Node.js" },
    { value: "javaScript", label: "JavaScript" },
    { value: "tailwind", label: "Tailwind CSS" },
    { value: "webdevelopment", label: "Web Development" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagChange = (selectedOption) => {
    setFormData({
      ...formData,
      tag: selectedOption,
    });
  };

  useEffect(() => {
    // Update the currentDateTime every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

   // Format time as "hh:mm AM/PM"
   const formattedTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

   // Format date as "MM-DD-YYYY"
   const formattedDate = currentDateTime.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

  const handleSubmit = (e) => {
    e.preventDefault();
    let addPost = {
      postTitle: formData.postTitle,
      postDescription: formData.postDescription,
      tag: formData.tag?.value || null,
      authorName: user.displayName,
      authorImage: user.photoURL,
      authorEmail: user.email,
      upVote: 0,
      downVote: 0,
      time: formattedTime,
      date:formattedDate,
    };
    asiosSecure
      .post("/post", addPost)

      .then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
          toast.success('Your post has been dane')
        }
      })
      .catch((error) => console.log(error));
    console.log();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-[#2B3440] rounded-md shadow-xl text-white">
      <h2 className="text-2xl font-semibold mb-6">Create a New Post</h2>
      <form
        className="text-gray-700 font-medium"
        id="postForm"
        onSubmit={handleSubmit}
      >
        {/* Post Title */}
        <div className="mb-4">
          <label
            htmlFor="postTitle"
            className="block text-sm font-medium text-gray-200"
          >
            Post Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            className="mt-1 p-2 border rounded w-full"
            value={formData.postTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="postDescription"
            className="block text-sm font-medium text-gray-200"
          >
            Post Description:
          </label>
          <textarea
            id="postDescription"
            name="postDescription"
            rows="4"
            className="mt-1 p-2 border rounded w-full"
            value={formData.postDescription}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="tag"
            className="block text-sm font-medium text-gray-200"
          >
            Tag:
          </label>
          <Select
            id="tag"
            name="tag"
            options={tagOptions}
            value={formData.tag}
            onChange={handleTagChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
