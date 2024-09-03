import User from "@/Models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
export async function POST(request: NextRequest) {
    const { username, email, password } = await request.json();

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return NextResponse.json({
                message: "User with same email already exists.",
                success: false
            }, {
                status: 403
            })
        }
        const existingUserByUsername = await User.findOne({ username: username });
        if (existingUserByUsername) {
            return NextResponse.json({
                message: "Username already taken.",
                success: false
            }, {
                status: 403
            });
        }
        const hashedpassword = bcrypt.hashSync(password, 10);
        const newuser = new User({
            username: username, email: email, password: hashedpassword
        })
        const saveduser = await newuser.save();


        return NextResponse.json({
            message: "User created successfully",
            success: true,
            user: saveduser
        }, {
            status: 201
        })

    } catch (error) {
        console.log('server error during signup', error);
        return NextResponse.json({
            message: (error as Error).message,
            success: false
        }, {
            status: 500
        })
    }
}