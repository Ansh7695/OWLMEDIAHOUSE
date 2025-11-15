import express from "express";
import multer from "multer";
import Blog from "../Model/BlogsModel.js";

const router = express.Router();

// Configure image storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

/* ------------------------------------------
   📌 ROUTE 1 — Frontend Blog Add (PENDING)
---------------------------------------------*/
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const blog = new Blog({
      name: req.body.name,
      description: req.body.description,
      image: `/uploads/${req.file.filename}`,
      status: "pending",
    });
    await blog.save();
    res.json({ success: true, message: "Blog submitted for approval" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error adding blog" });
  }
});

/* ------------------------------------------
   📌 ROUTE 2 — Admin Add (APPROVED)
---------------------------------------------*/
router.post("/admin/add", upload.single("image"), async (req, res) => {
  try {
    const blog = new Blog({
      name: req.body.name,
      description: req.body.description,
      image: `/uploads/${req.file.filename}`,
      status: "approved",
    });
    await blog.save();
    res.json({ success: true, message: "Blog added and approved" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error adding blog" });
  }
});

/* ------------------------------------------
   📌 ROUTE 3 — Public List (Approved Only)
---------------------------------------------*/
router.get("/list", async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "approved" }).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching blogs" });
  }
});

/* ------------------------------------------
   📌 ROUTE 4 — Admin List (All Blogs)
---------------------------------------------*/
router.get("/admin/list", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching blogs" });
  }
});

/* ------------------------------------------
   📌 ROUTE 5 — Approve Blog
---------------------------------------------*/
router.put("/approve/:id", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, { status: "approved" });
    res.json({ success: true, message: "Blog approved successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error approving blog" });
  }
});

/* ------------------------------------------
   📌 ROUTE 6 — Reject Blog
---------------------------------------------*/
router.put("/reject/:id", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(req.params.id, { status: "rejected" });
    res.json({ success: true, message: "Blog rejected successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error rejecting blog" });
  }
});

/* ------------------------------------------
   📌 ROUTE 7 — Delete Blog
---------------------------------------------*/
router.delete("/delete/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting blog" });
  }
});

export default router;
