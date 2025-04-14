import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
  channelName: { type: String, required: true },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }, // User reference
  description: { type: String, required: true },
  channelBanner: { type: String, default: 'https://example.com/default-banner.png' },
  subscribers: { type: Number, default: 0 },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }] // Reference to the Video model
}, { timestamps: true });

const Channel = mongoose.model('Channel', channelSchema);
export default Channel;
