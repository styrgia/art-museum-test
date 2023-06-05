import { NextResponse } from 'next/server';

import dbArts from '../../../../public/db-arts.json';

export async function GET() {
    return NextResponse.json(dbArts.slice(0, 100).filter(item => item.isHightlight));
}
