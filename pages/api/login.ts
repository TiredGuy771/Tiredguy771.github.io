import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { users, User } from '../../users';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

      if (isPasswordValid) {
        let redirectUrl = 'https://tiredguy771.github.io/dashboard/index.html'; // Default redirect for users

        if (user.role === 'admin') {
          redirectUrl = 'https://tiredguy771.github.io/admin-dashboard/index.html';
        }

        // Don't send the password hash back to the client
        const { passwordHash: _, ...safeUser } = user;

        res.status(200).json({ success: true, message: 'Login successful', redirectUrl, user: safeUser });
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
