import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const dbName = "event_registration";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, age, gender, contact, mailId, event, budget, capacity, location } = req.body;

  if (!name || !age || !gender || !contact || !mailId || !event || !budget || !capacity || !location) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("dream_events");

    const result = await collection.insertOne({
      name,
      age,
      gender,
      contact,
      mailId,
      event,
      budget,
      capacity,
      location,
      createdAt: new Date(),
    });

    res.status(201).json({ success: true, message: "Registration successful!", data: result });
  } catch (error) {
    console.error("Error saving dream event:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  } finally {
    await client.close();
  }
});

router.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("dream_events");

    const events = await collection.find().toArray();
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    console.error("Error fetching dream events:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  } finally {
    await client.close();
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid event ID." });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("dream_events");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, message: "Event not found." });
    }

    res.status(200).json({ success: true, message: "Event deleted successfully." });
  } catch (error) {
    console.error("Error deleting dream event:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  } finally {
    await client.close();
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, contact, mailId, event, budget, capacity, location } = req.body;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid event ID." });
  }

  if (!name || !age || !gender || !contact || !mailId || !event || !budget || !capacity || !location) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("dream_events");

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          name,
          age,
          gender,
          contact,
          mailId,
          event,
          budget,
          capacity,
          location,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ success: false, message: "Event not found." });
    }

    res.status(200).json({ success: true, message: "Event updated successfully." });
  } catch (error) {
    console.error("Error updating dream event:", error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  } finally {
    await client.close();
  }
});

export default router;
