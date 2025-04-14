import Comment from '../models/comments.model.js';
import Video from '../models/videos.model.js';

// Add comment and link to video
export const addComment = async (req, res) => {
    try {
        const { userId, content, videoId } = req.body;

        if (!userId || !content || !videoId) {
            return res.status(400).json({ error: 'userId, content, and videoId are required.' });
        }

        // 1. Create comment
        const comment = await Comment.create({
            user: userId,
            content
        })

        // 2. Add comment to video's comment list
        await Video.findByIdAndUpdate(videoId, {
            $push: { comments: comment._id }
        });

        const populatedComment = await Comment.findById(comment._id).populate('user', 'username');
        res.status(201).json(populatedComment);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Edit a comment
export const editCommentById = async (req, res) => {
    try {
        const { id } = req.params;
        const { content } = req.body;

        const updated = await Comment.findByIdAndUpdate(
            id,
            { content },
            { new: true }
        ).populate('user', 'username avatar');

        if (!updated) return res.status(404).json({ error: 'Comment not found' });

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a comment (also from video)
export const deleteCommentById = async (req, res) => {
    try {
        const { id } = req.params;

        // 1. Find the comment first
        const comment = await Comment.findById(id);
        if (!comment) return res.status(404).json({ error: 'Comment not found' });

        // 2. Remove it from associated video's comment array
        await Video.updateMany(
            { comments: id },
            { $pull: { comments: id } }
        );

        // 3. Delete the comment itself
        await Comment.findByIdAndDelete(id);

        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all comments (optionally by video)
export const getAllComments = async (req, res) => {
    try {
        const videoId = req.query.videoId;

        let comments;
        if (videoId) {
            const video = await Video.findById(videoId).populate({
                path: 'comments',
                populate: { path: 'user', select: 'username avatar' }
            });
            comments = video?.comments || [];
        } else {
            comments = await Comment.find().populate('user', 'username avatar');
        }

        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
