import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mogodb.js";
import userRouter from "./Router/UserRouter.js";
import blogsRouter from "./Router/BlogRouter.js";
import emailRouter from "./Router/emailRouter.js";  // ✅ FIXED — no curly braces

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working 🚀");
});

app.use("/api/user", userRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api", emailRouter); // ✅

app.listen(port, () => console.log(`✅ Server started on PORT: ${port}`));
