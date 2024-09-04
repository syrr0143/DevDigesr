import Post from '@/Models/Post';
import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/tokenHandler';
export async function GET(request: NextRequest) {
    const { decoded, error } = verifyToken(request) as any; 
    if (error) {
        return error;
    }
    try {
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