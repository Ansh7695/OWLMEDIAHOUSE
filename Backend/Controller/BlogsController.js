import Blog from "../Model/BlogsModel.js";
import path from "path";
import fs from "fs";

export const addBlog = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    const blog = new Blog({
      name,
      description,
      image: imagePath,
    });

    await blog.save();
    return res.status(201).json({
      success: true,
      message: "Blog added successfully. Awaiting admin approval.",
      blog,
    });
  } catch (error) {
    console.error("Error adding blog:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    // If a status query param is provided, filter by it.
    // Otherwise return all blogs (useful for admin panel).
    const status = req.query.status;
    const query = {};
    if (status) query.status = status;
    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const approveBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, { status: "approved" });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, message: "Blog approved" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const rejectBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, { status: "rejected" });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, message: "Blog rejected" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    const imagePath = path.join(process.cwd(), "uploads", path.basename(blog.image));
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export default {
  addBlog,
  getAllBlogs,
  approveBlog,
  rejectBlog,
  deleteBlog,
};
