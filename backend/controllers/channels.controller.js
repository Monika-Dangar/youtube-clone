import Channel from '../models/channels.model.js';
import User from '../models/users.model.js'

// Controller to create a new channel and optionally associate videos
export const createChannel = async (req, res) => {
    try {
        const { channelName, ownerId, description, channelBanner } = req.body;

        // Check if the user exists (since owner is a reference to the User model)
        const user = await User.findById(ownerId);
        if (!user) {
            return res.status(404).json({ message: 'Owner not found' });
        }

        // Create the new channel
        const newChannel = await Channel.create({
            channelName,
            ownerId,
            description,
            channelBanner: channelBanner || 'data:image/jpeg;base64,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',
            subscribers: 0,
            // videos: videoIds
        })

        res.status(201).json({ message: 'Channel created successfully', newChannel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Controller to fetch channel information
export const getChannelInfo = async (req, res) => {
    try {
        const { channelId } = req.params;
        console.log(channelId);


        // Find the channel by channelId and populate the videos and owner information
        const channel = await Channel.findById(channelId)
            .populate('user', 'username avatar') // Populate the owner's info (username and avatar)
            .populate('videos'); // Populate the videos associated with the channel

        if (!channel) {
            return res.status(404).json({ message: 'Channel not found' });
        }

        res.status(200).json(channel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
