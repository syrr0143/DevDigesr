import dbConnect from "@/lib/dbConnect";
import User from "@/Models/User"; // Adjust the path if necessary
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

dbConnect();

export async function POST(request: NextRequest) {
    const { username, email, password, imageUrl, bio } = await request.json();

    try {
        // Check if a user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                success: false,
                message: "User with this email already exists"
            }, {
                status: 403
            });
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            bio: bio || "", // Default to empty string if not provided
            imageUrl: imageUrl || "" // Default to empty string if not provided
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Prepare the response by removing sensitive data like password
        const userResponse = {
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            bio: savedUser.bio,
            imageUrl: savedUser.imageUrl,
            isSubscribed: savedUser.isSubscribed,
            subscriptionId: savedUser.subscriptionId,
            posts: savedUser.posts,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        };

        return NextResponse.json({
            success: true,
            message: "User created successfully",
            user: userResponse
        }, {
            status: 201
        });

    } catch (error) {
        console.error('Something went wrong while signing up:', error);
        return NextResponse.json({
            success: false,
            message: "Server error",
            error: (error as Error).message
        }, {
            status: 500
        });
    }
}
