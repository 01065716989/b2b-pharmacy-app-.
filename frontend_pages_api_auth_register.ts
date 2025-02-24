import { NextApiRequest, NextApiResponse } from 'next';
import { registerUser } from '../../../backend/controllers/authController';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await registerUser(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};