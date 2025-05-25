import { connectDB } from './db.js';

export async function getAvgTemperature(startDate, endDate) {
  const collection = await connectDB();

  const result = await collection.aggregate([
    {
      $match: {
        timestamp: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      }
    },
    {
      $group: {
        _id: null,
        avgTemp: { $avg: "$temperature" }
      }
    }
  ]).toArray();

  if (result.length > 0) {
    console.log(`📊 Average Temperature from ${startDate} to ${endDate}: ${result[0].avgTemp.toFixed(2)}°C`);
  } else {
    console.log("❌ No data found in this range.");
  }
}
