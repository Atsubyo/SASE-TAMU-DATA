import { PrismaClient } from '@prisma/client';

// Initializing Prisma Client
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    // Handle GET requests: Fetch all users
    if (req.method === 'GET') {
      const users = await prisma.users.findMany();
      return res.status(200).json(users);
    }

    // Handle POST requests: Create a new user
    if (req.method === 'POST') {
      const {
        UIN,
        name,
        SPRINGINFO,
        BOBASOCIAL,
        CHEVRONGBM,
        COMSOC1,
        COMSOC2,
        COMSOC3,
        COMSOC4,
        COMSOC5,
        DOWGBM,
        ETAMGBM,
        LAUNCHGBM,
        LOCKHEEDGBM,
        SQUADMIXER,
        WILLIAMSGBM,
        PEPSICOGBM,
        GBM1,
      } = req.body;

      // Simple validation
      if (!UIN || !name) {
        return res.status(400).json({ message: 'UIN and name are required.' });
      }

      const newUser = await prisma.users.create({ //Limited to UIN for testing purposes, will add in name later once I figure the prblem with including attendance at line 10
        data: {
          UIN,
          SPRINGINFO: SPRINGINFO || 0,
          BOBASOCIAL: BOBASOCIAL || 0,
          CHEVRONGBM: CHEVRONGBM || 0,
          COMSOC1: COMSOC1 || 0,
          COMSOC2: COMSOC2 || 0,
          COMSOC3: COMSOC3 || 0,
          COMSOC4: COMSOC4 || 0,
          COMSOC5: COMSOC5 || 0,
          DOWGBM: DOWGBM || 0,
          ETAMGBM: ETAMGBM || 0,
          LAUNCHGBM: LAUNCHGBM || 0,
          LOCKHEEDGBM: LOCKHEEDGBM || 0,
          SQUADMIXER: SQUADMIXER || 0,
          WILLIAMSGBM: WILLIAMSGBM || 0,
          PEPSICOGBM: PEPSICOGBM || 0,
          GBM1: GBM1 || 0,
        },
      });
      return res.status(201).json(newUser);
    }

    // Handle PUT requests: Update a user by UIN
    if (req.method === 'PUT') {
      const {
        UIN,
        SPRINGINFO,
        BOBASOCIAL,
        CHEVRONGBM,
        COMSOC1,
        COMSOC2,
        COMSOC3,
        COMSOC4,
        COMSOC5,
        DOWGBM,
        ETAMGBM,
        LAUNCHGBM,
        LOCKHEEDGBM,
        SQUADMIXER,
        WILLIAMSGBM,
        PEPSICOGBM,
        GBM1,
      } = req.body;

      if (!UIN) {
        return res.status(400).json({ message: 'UIN is required to update user.' });
      }

      const updatedUser = await prisma.users.update({
        where: { UIN },
        data: {
          SPRINGINFO,
          BOBASOCIAL,
          CHEVRONGBM,
          COMSOC1,
          COMSOC2,
          COMSOC3,
          COMSOC4,
          COMSOC5,
          DOWGBM,
          ETAMGBM,
          LAUNCHGBM,
          LOCKHEEDGBM,
          SQUADMIXER,
          WILLIAMSGBM,
          PEPSICOGBM,
          GBM1,
        },
      });
      return res.status(200).json(updatedUser);
    }

    // Handle DELETE requests: Delete a user by UIN
    if (req.method === 'DELETE') {
      const { UIN } = req.body;

      if (!UIN) {
        return res.status(400).json({ message: 'UIN is required to delete user.' });
      }

      await prisma.users.delete({
        where: { UIN },
      });
      return res.status(204).end(); // Success with no content
    }

    // Method not allowed case
    return res.status(405).json({ message: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
