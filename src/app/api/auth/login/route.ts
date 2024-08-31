import User from "@/Models/User";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import dbConnect from "@/lib/dbConnect";

dbConnect();
export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    try {
        const userwithemail = await User.findOne({ email: email }).select("-password");
        if (!userwithemail) {
            return NextResponse.json({
                message: "user does not exists",
                success: false,
            }, {
                status: 404
            })
        }
        const token = jwt.sign({ _id: userwithemail._id }, process.env.TOKEN_SECRET as string, { expiresIn: "1d" });
        const response = NextResponse.json({
            success: true,
            message: "login successful",
            token: token,
            user: userwithemail
        }, {
            status: 200
        });
        response.cookies.set('token', token, {
            httpOnly: true
        });
        return response;
    } catch (error) {
        console.log('sonething went wrong while login', error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message,

        }, {
            status: 500
        })
    }

}