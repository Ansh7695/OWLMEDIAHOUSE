import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newBlog, setNewBlog] = useState({
    name: "",
    description: "",
    image: null,
  });
  const navigate = useNavigate();

  // ✅ Fetch Blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/blogs/list?status=approved");
      if (res.data.success) {
        setBlogs(res.data.blogs);
        setFilteredBlogs(res.data.blogs);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ Handle Search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // ✅ Limit description to 30 words
  const truncateDescription = (text) => {
    const words = text.split(" ");
    return words.length > 30 ? words.slice(0, 30).join(" ") + "..." : text;
  };

  // ✅ Add Blog Handler
  const handleAddBlog = async () => {
    if (!newBlog.name || !newBlog.description || !newBlog.image) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", newBlog.name);
    formData.append("description", newBlog.description);
    formData.append("image", newBlog.image);

    try {
      const res = await axios.post("http://localhost:4000/api/blogs/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data.success) {
        alert("Blog Added Successfully! Waiting for admin approval.");
        setIsAddModalOpen(false);
        setNewBlog({ name: "", description: "", image: null });
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog");
    }
  };

  const handleReadFullArticle = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden mt-10">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 leading-tight">
              Trending <span className="text-black">BLOGS</span>
            </h1>

            <div className="flex flex-col items-center w-full mt-4 gap-5">
              <p className="text-black text-xl">
                Stay updated with our latest insights, tips, and industry news.
              </p>

              <div className="w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search blogs by name..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white focus:border-black focus:outline-none text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="container mx-auto px-6 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="space-y-12">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog._id}
                className={`bg-white shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl transform hover:-translate-y-2 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 hover:scale-110"
                    src={`http://localhost:4000${blog.image}`}
                    alt={blog.name}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="font-medium text-black">Admin</span>
                    <span>•</span>
                    <span>{formatDate(blog.createdAt || new Date())}</span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight hover:text-yellow-600 transition-colors duration-300">
                    {blog.name}
                  </h2>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {truncateDescription(blog.description)}
                  </p>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleReadFullArticle(blog)}
                      className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      Read Full Article
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {searchQuery ? "No blogs found matching your search" : "No blogs found"}
            </h3>
            <p className="text-gray-500 text-lg">
              {searchQuery
                ? "Try searching with different keywords"
                : "We're working on amazing content. Check back soon!"}
            </p>
          </div>
        )}
      </div>

      {/* ADD BLOG BUTTON */}
      <div className="text-center my-6">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          + Add Blog
        </button>
      </div>

      {/* ✅ READ FULL ARTICLE MODAL */}
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-2xl shadow-2xl overflow-hidden relative animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-2xl font-bold hover:text-red-500"
            >
              ×
            </button>
            <img
              src={`http://localhost:4000${selectedBlog.image}`}
              alt={selectedBlog.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-black mb-4">
                {selectedBlog.name}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed whitespace-pre-line">
                {selectedBlog.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ADD BLOG MODAL */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full border p-2 mb-3 rounded"
              value={newBlog.name}
              onChange={(e) => setNewBlog({ ...newBlog, name: e.target.value })}
            />
            <textarea
              placeholder="Description"
              className="w-full border p-2 mb-3 rounded"
              value={newBlog.description}
              onChange={(e) =>
                setNewBlog({ ...newBlog, description: e.target.value })
              }
            />
            <input
              type="file"
              className="mb-3 border p-2 rounded w-70"
              onChange={(e) =>
                setNewBlog({ ...newBlog, image: e.target.files[0] })
              }
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBlog}
                className="px-4 py-2 bg-yellow-500 text-black rounded font-semibold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;