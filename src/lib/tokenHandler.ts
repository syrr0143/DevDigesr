import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function verifyToken(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.json({
            message: "Unauthorized access, No token provided",
            success: false,
        }, {
            status: 401
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET!);
        return { decoded, error: null };
    } catch (error) {
        return {
            decoded: null,
            error: NextResponse.json({
                message: "Invalid or expired token",
                success: false,
            }, {
                status: 401
            })
        };
    }
}
