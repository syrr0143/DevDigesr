import dbConnect from "@/lib/dbConnect";
import Post from "@/Models/Post";
import { NextRequest, NextResponse } from "next/server";
dbConnect();
export async function GET(request: NextRequest, { params }: { params: { blogid: string } }) {
    const blogid = params.blogid;
    try {
        const blog = await Post.findById(blogid);
        if (!blog) {
            return NextResponse.json({
                success: false,
                message: "Blog does'nt exist"
            }, {
                status: 404
            })
        }
        return NextResponse.json({
            success: true,
            message: "Blog fetched successfully",

        }, {
            status: 200
        })
    } catch (error) {
        console.log('something went wrong while fetching blog', error);
        return NextResponse.json({
            success: false,
            message: (error as Error).message
        }, {
            status: 500
        })
    }
}