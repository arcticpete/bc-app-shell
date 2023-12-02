import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { getBCVerify } from '../../lib/auth';


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { searchParams } = new URL(req.url as string);
    const signed_payload_jwt = searchParams.get('signed_payload_jwt');
    interface QueryParams {
        [key: string]: string;
    }

    try {
        await getBCVerify({signed_payload_jwt} as unknown as QueryParams);
        return NextResponse.redirect(`${process.env.APP_URL}/`, 302)
    } catch (error) {
        const { message } = error as Error & { response?: Response };
        console.error(message);
        return new Response(message, { status: 500 });
    }
}
