import Post from "@/Models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { postid: string } }) {
    const { postid } = params;
    try {
        const token = request.cookies.get("token");
        if (!token) {
            return NextResponse.json({
                message: "Unauthorised access ,no token found",
                success: false
            }, {
                status: 401
            })

        }
        const post = await Post.findById({ _id: postid });
        if (!post) {
            return NextResponse.json({
                success: false,
                message: "No post found for this postid"
            }, {
                status: 404
            })
        }
        return NextResponse.json({
            message: "Post fetched successfully",
            success: true,
        }, {
            status: 200
        })
    } catch (error) {
        console.log('server error during fetching pots by id', error);
        return NextResponse.json({
            message: (error as Error).message,
            success: false,
        }, {
            status: 500
        })
    }
}