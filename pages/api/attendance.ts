import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from './prismaClient'; // Import the Prisma client
import type { AttendanceHistory, AttendanceApiResponse } from "~/types/AttendanceTypes";
import { Users } from '@prisma/client';

const EVENT_COLUMNS: string[] = [
    "INFORMATIONAL",
    "WILLIAMSGBM",
    "BOBASOCIAL",
    "CDMSMITH",
    "SQUADREVEALSOCIAL",
    "RESUMEROAST",
    "GEVERNOVA",
    "KIMCHISCAVENGERHUNT",
    "KDASOCIAL",
    "SWRIGBM",
    "SQUIDSQUADGAMES",
];

interface UserRecord {
    UIN: string;
    name: string;
    [key: string]: string | number | null;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        const { uin } = req.query;

        console.log("Received request with UIN:", uin);

        if (!uin || typeof uin !== "string") {
            console.log("Invalid UIN provided.");
            return res
                .status(400)
                .json({ message: "'uin' is required and must be a string." });
        }

        try {
            console.log("Fetching user from the database...");
            // Fetching the user based on UIN
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
            const user = (await prisma.users.findUnique({
                where: { UIN: uin },
            })) as Users | null;

            console.log("User fetched:", user);

            if (!user) {
                console.log("User not found.");
                return res.status(404).json({ message: "User not found" });
            }

            // Collecting attendance history
            console.log("Collecting attendance history...");
            const AHC: AttendanceHistory[] = EVENT_COLUMNS.map(
                (event): AttendanceHistory => ({
                    event_name: event,
                    attended: !!user[event as keyof Users]
                    //attended: !!user[event], // Safely checks for a truth value
                    //timestamp: user[event] === 1 ? (user["Timestamp"] as string | null) : null,
                })
            );

            console.log("Attendance history collected:", AHC);

            const response: AttendanceApiResponse = {
                full_name: user.name,
                AHC,
            };

            console.log("Responding with user data:", response);
            res.status(200).json(response);
        } catch (error) {
            console.error("Error in GET /api/attendance:", error);
            return res.status(500).json({
                message: "Internal Server Error",
                details: error instanceof Error ? error.message : "An unknown error occurred.",
            });
        }
    } else {
        console.log("Invalid method received:", req.method);
        res.setHeader("Allow", ["GET"]);
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
