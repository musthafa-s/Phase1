import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectDB() {
  await client.connect();
  const db = client.db(process.env.DB_NAME);
  return db.collection(process.env.COLLECTION_NAME);
}
