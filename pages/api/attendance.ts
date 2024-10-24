import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prismaClient'; // Import the singleton instance of PrismaClient

interface User {
  UIN: string;
  [key: string]: any;
}

interface AttendanceRequestBody {
  uin: string;
  event: string;
}

// API handler function to process the POST request
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handling POST request to mark attendance
  if (req.method === 'POST') {
    try {
      const { uin, event } = req.body as AttendanceRequestBody;

      // Validate input
      if (!event || typeof event !== 'string' || !uin || typeof uin !== 'string') {
        res.status(400).json({ message: "Invalid input: 'uin' and 'event' are required and must be strings." });
        return;
      }

      const eventKey = event.toUpperCase();

      const user = await prisma.users.findUnique({
        where: { UIN: uin }
      }) as User | null;  // Type assertion

      if (user && user[eventKey]) {
        // User already marked for this event
        res.status(200).json({ message: "Your attendance has already been marked!" });
        return;
      }

      if (user) {
        await prisma.users.update({
          where: { UIN: uin },
          data: { [eventKey]: 1 }
        });
      } else {
        await prisma.users.create({
          data: { UIN: uin, [eventKey]: 1 }
        });
      }

      res.status(200).json({ message: "Attendance marked!" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error in POST /api/attendance:", error.message);
        res.status(500).json({ message: "Error processing request", details: error.message });
      } else {
        console.error("Unknown error in POST /api/attendance");
        res.status(500).json({ message: "Unknown error occurred", details: 'Unknown error' });
      }
    }
  } else if (req.method === 'GET') { // Handling GET request to fetch attendance
    try {
      const uin = req.query.uin as string;

      if (!uin) {
        res.status(400).json({ message: "Invalid input: 'uin' is required." });
        return;
      }

      const user = await prisma.users.findUnique({
        where: { UIN: uin }
      }) as User | null;  // Type assertion

      if (user) {
        // Filter out the fields with attendance marked as 1
        const attendedEvents = Object.keys(user).filter(key => user[key] === 1);
        res.status(200).json({ attendedEvents });
      } else {
        res.status(404).json({ message: "User not found." });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error in GET /api/attendance:", error.message);
        res.status(500).json({ message: "Error processing request", details: error.message });
      } else {
        console.error("Unknown error in GET /api/attendance");
        res.status(500).json({ message: "Unknown error occurred", details: 'Unknown error' });
      }
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
