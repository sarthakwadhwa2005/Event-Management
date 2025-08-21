import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb'; 
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userRoutes from './userRoutes.js';
import registerRoute from './register.js';
import dreamEventRoute from './dreamEvent.js';

dotenv.config();

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const dbName = "event_registration";

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use("/api/users", userRoutes);
app.use("/api/register", registerRoute);
app.use("/api/dream-event", dreamEventRoute);


const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send('Forbidden');
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('users');

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { username, email, password: hashedPassword };
    const result = await collection.insertOne(newUser);

    res.status(201).json({ success: true, message: 'User created successfully!' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('users');

    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ success: true, message: 'Login successful!', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});

app.post('/api/dream_event', async (req, res) => {
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

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
