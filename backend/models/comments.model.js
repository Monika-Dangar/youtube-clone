import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
