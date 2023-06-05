import { NextResponse } from 'next/server';

import dbArts from '../../../../public/db-arts.json';
import dbPhotos from '../../../../public/db-photo.json';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (id === '11') {
        return NextResponse.json(dbArts.slice(0, 100));
    }
    return NextResponse.json(dbPhotos.slice(0, 100));
}
