import express from 'express';
import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const dbName = "event_registration";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, age, gender, contact, mailId, event, amount } = req.body;

  if (!name || !age || !gender || !contact || !mailId || !event || !amount) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("registrations");

    const result = await collection.insertOne({
      name,
      age,
      gender,
      contact,
      mailId,
      event,
      amount,
      createdAt: new Date(),
    });

    res.status(201).json({ success: true, message: "Registration successful!", data: result });
  } catch (error) {
    console.error("Error saving registration:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  } finally {
    await client.close();
  }
});

export default router;
