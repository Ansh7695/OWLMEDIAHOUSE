import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    name: "",
    description: "",
    image: null,
  });

  // ✅ Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/blogs/admin/list");
      if (res.data.success) setBlogs(res.data.blogs);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ Add Blog (directly approved)
  const handleAddBlog = async () => {
    if (!newBlog.name || !newBlog.description || !newBlog.image) {
      alert("Please fill all fields!");
      return;
    }
    const formData = new FormData();
    formData.append("name", newBlog.name);
    formData.append("description", newBlog.description);
    formData.append("image", newBlog.image);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/blogs/admin/add",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (res.data.success) {
        alert("Blog added successfully!");
        setNewBlog({ name: "", description: "", image: null });
        fetchBlogs();
      }
    } catch (err) {
      console.error("Error adding blog:", err);
    }
  };

  // ✅ Approve / Reject / Delete handlers
  const handleApprove = async (id) => {
    await axios.put(`http://localhost:4000/api/blogs/approve/${id}`);
    fetchBlogs();
  };
  const handleReject = async (id) => {
    await axios.put(`http://localhost:4000/api/blogs/reject/${id}`);
    fetchBlogs();
  };
  const handleDelete = async (id) => {
    if (window.confirm("Delete this blog?")) {
      await axios.delete(`http://localhost:4000/api/blogs/delete/${id}`);
      fetchBlogs();
    }
  };

  const pendingBlogs = blogs.filter((b) => b.status === "pending");
  const approvedBlogs = blogs.filter((b) => b.status === "approved");

  return (
    <div className="p-8 bg-gray-50 min-h-screen space-y-10">

      {/* ✅ Add Blog Section */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Blog</h2>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Blog Title"
            className="border p-2 rounded"
            value={newBlog.name}
            onChange={(e) => setNewBlog({ ...newBlog, name: e.target.value })}
          />
          <textarea
            placeholder="Blog Description"
            className="border p-2 rounded"
            rows="4"
            value={newBlog.description}
            onChange={(e) =>
              setNewBlog({ ...newBlog, description: e.target.value })
            }
          />
          <input
            type="file"
            onChange={(e) =>
              setNewBlog({ ...newBlog, image: e.target.files[0] })
            }
          />
          <button
            onClick={handleAddBlog}
            className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400 w-fit"
          >
            Add Blog
          </button>
        </div>
      </section>

      {/* ✅ Pending Blogs Section */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Pending Blogs</h2>
        {pendingBlogs.length === 0 ? (
          <p className="text-gray-500">No pending blogs.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Image</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingBlogs.map((b) => (
                  <tr key={b._id} className="border-t">
                    <td className="p-3">
                      <img
                        src={`http://localhost:4000${b.image}`}
                        alt=""
                        className="w-24 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-3 font-semibold">{b.name}</td>
                    <td className="p-3 text-gray-600 line-clamp-3">
                      {b.description}
                    </td>
                    <td className="p-3 flex gap-2">
                      <button
                        onClick={() => handleApprove(b._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(b._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleDelete(b._id)}
                        className="bg-gray-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* ✅ Approved Blogs Section */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Uploaded Blogs (Approved)
        </h2>
        {approvedBlogs.length === 0 ? (
          <p className="text-gray-500">No approved blogs yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedBlogs.map((b) => (
              <div
                key={b._id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={`http://localhost:4000${b.image}`}
                  alt={b.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{b.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                    {b.description}
                  </p>
                  <button
                    onClick={() => handleDelete(b._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminBlogs;
