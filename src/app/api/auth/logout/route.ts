import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({
            success: true,
            message: "logout success"
        }, {
            status: 200,
        })

        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
        })
        return response;
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: (error as Error).message
        }, {
            status: 500,

        })
    }
}