import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    await Promise.resolve();
    console.log({ request });
    return NextResponse.json({ data: [] });
}
