import Video from '../models/videos.model.js';

export const getAllVideos = async (req, res) => {
    try {
        // const videos = await Video.find();
        const videos = await Video.find()
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: 'username avatar' // Only get these fields
                }
            });

        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getVideoById = async (req, res) => {
    try {
        // const video = await Video.findById(req.params.id);
        const video = await Video.findById(req.params.id)
            .populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    select: 'username avatar' // Only get these fields
                }
            });

        if (!video) return res.status(404).json({ error: 'Video not found' });
        res.json(video);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const searchVideos = async (req, res) => {
    try {
        const { title, category } = req.query;
        const query = {};

        if (title) {
            query.title = { $regex: title, $options: 'i' };
        }

        if (category) {
            query.description = { $regex: category, $options: 'i' };
        }

        const videos = await Video.find(query);
        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
