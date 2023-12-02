import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { getBCVerify } from '../../lib/auth';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    interface QueryParams {
        [key: string]: string;
    }
    try {
        const { searchParams } = new URL(req.url as string);
        const signed_payload_jwt = searchParams.get('signed_payload_jwt');
        await getBCVerify({signed_payload_jwt} as unknown as QueryParams);
        return new Response('Uninstall complete', { status: 200 });
    } catch (error) {
        const { message } = error as Error & { response?: Response };
        console.error(message);
        return new Response(message, { status: 500 });
    }
}
