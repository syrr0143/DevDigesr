import Post from "@/Models/Post";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/tokenHandler";
export async function GET(request: NextRequest) {
    try {
       
        const { decoded, error } = verifyToken(request) as any;
        if( error){
            return error;
        }
        const _id = decoded._id;
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