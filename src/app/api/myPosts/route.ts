import Post from "@/Models/Post";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const token = await request.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({
                message: "Unauthorised access ,no token found",
                success: false
            }, {
                status: 401
            })

        }
        const _id = jwt.verify(token, process.env.TOKEN_SECRET!);
        if (!_id) {
            return NextResponse.json({
                message: "Invalid token",
                success: false
            }, {
                status: 403
            })
        }
        const posts = await Post.find({ userid: _id });
        if (!posts || posts.length === 0) {
            return NextResponse.json({
                message: "No posts yet",
                success: true,
                posts: []
            }, {
                status: 200
            })
        }
        return NextResponse.json({
            message: "Posts fetched successfuly",
            success: true,
            posts: []
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: (error as Error).message,
            success: false
        }, {
            status: 500
        })
    }
}