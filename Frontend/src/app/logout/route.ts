import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const response = NextResponse.redirect(request.nextUrl.origin + "/login", {
        headers: {
            cookie: ""
        },
        status: 303,
    });
    response.cookies.delete("Auth");
    return response;
}