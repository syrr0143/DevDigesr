import Post from "@/Models/Post";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/tokenHandler";
export async function GET(request: NextRequest, { params }: { params: { postid: string } }) {
    const { decoded, error } = verifyToken(request) as any;
     if (error) {
        return error;
    }
    const { postid } = params;
    try {
       
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