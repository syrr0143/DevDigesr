import dbConnect from "@/lib/dbConnect";
import User from "@/Models/User";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
dbConnect();

interface decodetokentype {
    _id: string
}
export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value || "";
        if (!token) {
            return NextResponse.json({
                success: false,
                message: 'Token is required'
            }, {
                status: 401
            })
        }
        const decodetoken = jwt.verify(token, process.env.TOKEN_SECRET as string) as decodetokentype;
        const userid = decodetoken._id;
        const user = await User.findById(userid).select("-password",);
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "Invalid token"
            }, {
                status: 401
            })
        }
        return NextResponse.json({
            success: true,
            message: "Profle fetched successfully",
            user: user
        }, {
            status: 200
        })
    } catch (error) {
        console.log('something went wrong while fetching user profile', error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message
        }, {
            status: 500
        })
    }
}