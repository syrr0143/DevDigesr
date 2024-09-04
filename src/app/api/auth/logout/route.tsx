import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
dbConnect();
export async function GET(request:NextRequest) {
    try {
        const response = NextResponse.json({
            message: " logout successful ",
            success: true
        }, {
            status: 200
        })
        response.cookies.set("token", "", { expires: new Date(), httpOnly: true });
        return response;
    } catch (error) {
        return NextResponse.json(
          {
            message: (error as Error).message,
            success: false,
          },
          {
            status: 500,
          }
        );
    }
}