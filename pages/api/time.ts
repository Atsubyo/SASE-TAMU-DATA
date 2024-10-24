// pages/api/time.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment-timezone';

// Define a type for the response data
type ResponseData = {
  time: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
): void {
  const serverTime = moment().tz('America/Chicago').format();
  res.status(200).json({ time: serverTime });
}
