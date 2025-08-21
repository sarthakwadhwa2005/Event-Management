import express from "express";
import connectDB from "./db.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const db = await connectDB();
  const user = await db.collection("users").findOne({ name: req.body.username, password: req.body.password });
  if (user) res.json({ success: true });
  else res.json({ success: false });
});

router.post("/signup", async (req, res) => {
  const db = await connectDB();
  const result = await db.collection("users").insertOne(req.body);
  res.json({ success: !!result.insertedId });
});

router.post("/register", async (req, res) => {
  const db = await connectDB();
  const result = await db.collection("registrations").insertOne(req.body);
  res.json({ success: !!result.insertedId });
});

router.post("/", async (req, res) => {
  const db = await connectDB();
  try {
    const result = await db.collection("users").insertOne(req.body);
    res.status(201).json({ success: true, userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


export default router;