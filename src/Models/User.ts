import mongoose, { Document } from 'mongoose'

interface IUser extends Document {
    username: string,
    email: string,
    password: string,
    bio?: string,
    imageUrl?: string,
    isSubscribed: boolean,
    subscriptionId?: mongoose.Schema.Types.ObjectId,
    posts: mongoose.Schema.Types.ObjectId[],
}

const Userschema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    isSubscribed: {
        type: Boolean,
        default: false
    },
    subscriptionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subscription"
    },
    posts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Post"
    }

}, { timestamps: true })

const User = mongoose.models.User || mongoose.model("User", Userschema);
export default User;