import { NextResponse } from 'next/server';

import categoriesJson from '../../../../public/categories.json';

export async function GET() {
    return NextResponse.json(categoriesJson.departments.filter(item => !item.disabled));
}
