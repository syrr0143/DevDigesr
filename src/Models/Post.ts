import mongoose, { Document } from "mongoose";

interface IPost extends Document {
    title: string;
    content: string;
    author: string;
    imageUrl: string;
}
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    imageUrl: {
        type: String,
    }

}, {
    timestamps: true
})

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export default Post;