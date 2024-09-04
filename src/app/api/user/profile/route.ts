import User from "@/Models/User";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/tokenHandler";

export async function GET(request: NextRequest) {
    try {
        const { decoded, error } = verifyToken(request) as any;
        if (error) {
            return error;
        }
        const _id = decoded._id;

        const userdetails = await User.findById({ _id: _id });
        if (!userdetails) {
            return NextResponse.json({
                message: "Unauthorized access, Invalid token ",
                success: false
            }, {
                status: 401
            })
        }
        return NextResponse.json({
            message: "Profile details fetched successfully",
            success: true
        }, {
            status: 200
        })
    } catch (error) {
        console.log("server error while fetching profile", error);
        return NextResponse.json({
            message: (error as Error).message,
            succcess: false,
        }, {
            status: 500
        })
    }
}