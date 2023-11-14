import { NextApiRequest, NextApiResponse } from 'next';
import { getBCAuth } from '../lib/auth';

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    interface QueryParams {
        [key: string]: string;
    }
    try {
        // First, authorize the application
        // req.query: query param passed from the Control Panel to your app
        await getBCAuth(req.query as QueryParams);
        // Once the app has been authorized, redirect to the homepage (/pages/index.tsx)
        res.redirect(302, '/');
    } catch (error) {
        const { message, response } = error as Error & { response?: Response };
        res.status(response?.status || 500).json({ message });
    }
}
