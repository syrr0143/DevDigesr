import User from "@/Models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
    try {
        const { userId } = params;
        const user = await User.findById({ _id: userId });
        if (!user) {
            return NextResponse.json({
                message: "No user found",
                success:true
            }, {
                status:200
            })
        }
        return NextResponse.json({
            message: "user found success",
            success: true,
            
        }, {
            status:200
        })
    } catch (error) {
        console.log('server error while fetching user by id', error);
        return NextResponse.json({
            message: (error as Error).message,
            success: false,
        }, {
            status: 500
        })
        
    }
}