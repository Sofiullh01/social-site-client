import { useState } from "react";
import Select from "react-select";

const AddPost = () => {
    const [formData, setFormData] = useState({
        postTitle: '',
        postDescription: '',
        tag: null,
      });
    
      const tagOptions = [
        { value: 'uxui', label: 'UI/UX'},
        { value: 'react', label: 'React' },
        { value: 'Nodejs', label: 'Node.js'},
        { value: 'javaScript', label: 'JavaScript' },
        { value: 'tailwind', label: 'Tailwind CSS' },
        { value: 'webdevelopment', label: 'Web Development' },
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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const flattenedFormData = {
          postTitle: formData.postTitle,
          postDescription: formData.postDescription,
          tag: formData.tag?.value || null,
        };
        console.log(flattenedFormData);
      };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-[#2B3440] rounded-md shadow-xl text-white">
      <h2 className="text-2xl font-semibold mb-6">Create a New Post</h2>

      <form className="text-gray-700 font-medium"  id="postForm" onSubmit={handleSubmit}>
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
