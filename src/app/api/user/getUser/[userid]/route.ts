
import User from "@/Models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { userid: string } }) {
    const userid = params.userid;
    try {
        const user = await User.findById(userid).select("-password");
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, {
                status: 404
            })
        }

        return NextResponse.json({
            success: true,
            message: "User found success",
            user: user
        }, {
            status: 200
        })
    } catch (error) {
        console.log('Something went wrong while getting user', error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message,
        }, {
            status: 500
        })
    }
}