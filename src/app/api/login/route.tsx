import User from "@/Models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { UserPlusIcon } from "@heroicons/react/24/outline";
import dbConnect from "@/lib/dbConnect";
dbConnect();
export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'User does not exist'
            }, {
                status: 404
            })
        };
        const passwordmatched = await bcrypt.compare(password, user.password);
        if (!passwordmatched) {
            return NextResponse.json({
                message: "Unauthorised access",
                success: false
            }, {
                status: 401
            })
        }
        const token = await jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET!, {
            expiresIn: '7d'
        });
        const response = NextResponse.json({
            success: true,
            message: 'User authenticated successfully',
            user: user,
            token: token
        }, {
            status: 200
        })
        response.cookies.set("token", token, {
            httpOnly: true
        });
        return response;

    } catch (error) {
        console.log('server error during signin', error);
        return NextResponse.json({
            message: (error as Error).message,
            success: false
        }, {
            status: 500
        })
    }
}