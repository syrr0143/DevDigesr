import Post from '@/Models/Post';
import { NextRequest, NextResponse } from 'next/server'
export async function GET(request: NextRequest) {
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
        const posts = await Post.find();
        if (!posts) {
            return NextResponse.json({
                message: "No post available",
                success: true
            }, {
                status: 200
            })
        }
        return NextResponse.json({
            message: "Post fetched successfully",
            success: true,
            posts: posts
        }, {
            status: 200
        })


    } catch (error) {
        console.log('server error while fetching posts');
        return NextResponse.json({
            message: (error as Error).message,
            success: false
        }, {
            status: 500
        })
    }
}