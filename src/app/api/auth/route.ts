import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { getBCAuth } from '../../lib/auth';

export  async function GET(req: NextApiRequest, res: NextApiResponse) {

    const { searchParams } = new URL(req.url as string);

    interface QueryParams {
        [key: string]: string;
    }
    try {
         await getBCAuth(searchParams as unknown as QueryParams);
        return NextResponse.redirect(`${process.env.APP_URL}/`, 302)
    } catch (error) {
        console.log('error', error);
        return new Response('An error occured', { status: 500 });
    }
}
