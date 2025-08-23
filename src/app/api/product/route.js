import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        // You can process the body here, e.g., save to database
        // For demonstration, just echo back the received data
        return NextResponse.json({ message: 'Product received', data: body }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
}